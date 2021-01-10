import React from 'react';
import './styles.css';
import { addVec, subVec, multVec, divVec, modVec, floorVec, ceilVec, roundVec, mod, dot, eq, length, normalize } from './utility.js';
import io from 'socket.io-client';

let tileCache = {};

let testString = '#';

let numCharX = 41;
let numCharY = Math.ceil(numCharX*0.6);
let numTiles = [];

let camera = [0, 0];
let intcam = [0, 0];

let up = [0, -1];
let down = [0, 1];
let left = [-1, 0];
let right = [1, 0];

let cursor = {
  tileCoord: [0,0],
  charCoord: [0,0],
  lastMoved: 0
}

let keyDirections = {
  ArrowLeft: left,
  ArrowUp: up,
  ArrowDown: down,
  ArrowRight: right,
  Backspace: left,
  Delete: right,
  Enter: down,
  Tab: multVec(right, [5,5])
};


function fetchTile(x, y) {
  let rnd = [x, y];
  let mud = 29437;
  let mix = [29348, 98437];
  //The vec operations does mathematical operations indicated 
  //by its name on each elements at corresponding indices
  rnd = addVec(rnd, mix);
  rnd = multVec(rnd, mix);
  rnd = dot(rnd, mix);
  rnd = mod(rnd*rnd, mud) / mud;

  let color = "#" + Math.floor(rnd*16777216).toString(16);
  let textRepeater = " ";
  let text = [...Array(numCharX*numCharY)].map((x,i)=>textRepeater.charAt(mod(i,textRepeater.length))).join("");

  return {
    color: color,
    text: text
  };
}

function getTile(x, y) {
  let key = x+","+y;

  if (key in tileCache) {
    return tileCache[key];
  }

  let tile = fetchTile(x, y);
  tileCache[key] = tile;
  return tile;
}


const ENDPOINT = 'https://textyourtile.herokuapp.com'


let socket = io(ENDPOINT, {transports: ['websocket']});

class Canvas extends React.Component {
  

  constructor(props) {
    super(props);
    const { whichCanvas } = this.props;
    
    
    if (whichCanvas === 'public') {
      fetch('/public')
        .then(res => res.json())
        .then(db => db.forEach(aTile => {
          tileCache[aTile["coordinate"]] = {color: aTile["color"], text: aTile["text"]}
          })
        )
    }

    // Don't know why this works but adding this code makes the connection functional
  }


  componentDidMount() {
    socket.on('update-canvas', tileData => tileCache = tileData)
    const body = document.querySelector('body')
    const canvas = document.getElementById('world')
    const ctx = canvas.getContext("2d");
    
    let pxlratio = window.devicePixelRatio;
    canvas.width = canvas.clientWidth * pxlratio;
    canvas.height = canvas.clientHeight * pxlratio;
    let canvasDim = [canvas.width, canvas.height];

    let fontHeight = Math.ceil(canvas.height/50);
    ctx.font = fontHeight + "px Courier New";
    
    let fontWidth = ctx.measureText(testString).width;
    let fontDims = [fontWidth, fontHeight];
    let tileSize = ceilVec([fontWidth*numCharX, fontHeight*numCharY]);
      
    let numtiles = addVec(ceilVec(divVec(canvasDim, tileSize)), [1,1]);
    let tiles = [...Array(numtiles[0])].map(x=>Array(numtiles[1]));
    let halfsize = multVec(multVec(tileSize, [0.5, 0.5]), numtiles);
    let halftiles = floorVec(divVec(numtiles,[2,2]));
    
    function draw() {
      // tiles
      for(let i=0; i<numtiles[0]; i++) {
        for(let j=0; j<numtiles[1]; j++) {

          let coord = addVec(subVec([i,j], halftiles), intcam);
          let tile = getTile(coord[0], coord[1]);

          let topleft = [
            Math.floor(i*tileSize[0] - mod(camera[0], tileSize[0]) - halfsize[0] + canvas.width/2 + tileSize[0]/2),
            Math.floor(j*tileSize[1] - mod(camera[1], tileSize[1]) - halfsize[1] + canvas.height/2 + tileSize[1]/2)
          ];

          ctx.fillStyle = tile.color;
          ctx.globalAlpha = 0.05;

          ctx.fillRect(
            topleft[0],
            topleft[1],
            tileSize[0],
            tileSize[1]
          );

          ctx.fillStyle = "#000000";
          ctx.globalAlpha = 1.0;

          for(let k=0; k<numCharY; k++) {
            ctx.fillText(
              tile.text.substr(k*numCharX, numCharX),
              topleft[0],
              topleft[1]+(k+1)*fontHeight
            );
          }

          // cursor
          //console.log(coord, cursor.tileCoord);
          if (eq(coord, cursor.tileCoord) && mod(cursor.lastMoved - performance.now(), 1000) > 500) {
            let cursorTop = addVec(multVec(fontDims, cursor.charCoord), topleft);
            ctx.fillRect(
              cursorTop[0],
              cursorTop[1] + 1,
              2,
              fontDims[1]
            )
          }
        }
      }

      // crosshair
      // ctx.fillRect(canvas.width/2-1, canvas.height/2-1,4,4);
    }

    function update() {
      
      ctx.clearRect(0,0,canvas.width,canvas.height);
      draw();
      window.requestAnimationFrame(update);
    }

    body.addEventListener("mousemove", function mousemove(e) {
      if (e.buttons !== 1) {return;}

      camera = subVec(camera, [e.movementX, e.movementY]);
      intcam = floorVec(divVec(camera, tileSize));
    });

    canvas.addEventListener("click", function click(e) {
      let topleft = [
        Math.floor(-mod(camera[0], tileSize[0]) - halfsize[0] + canvas.width/2 + tileSize[0]/2),
        Math.floor(-mod(camera[1], tileSize[1]) - halfsize[1] + canvas.height/2 + tileSize[1]/2)
      ];
      
      let reltotiles = subVec(multVec([e.clientX, e.clientY], [pxlratio, pxlratio]), topleft);
      let reltotile = modVec(reltotiles, tileSize);
      let coord = addVec(subVec(floorVec(divVec(reltotiles, tileSize)), halftiles), intcam);

      let key = coord[0]+","+coord[1];

      if (key in tileCache) {
        cursor.tileCoord = coord;
        cursor.charCoord = [Math.floor(reltotile[0]/fontWidth), Math.floor(reltotile[1]/fontHeight)];
        cursor.lastMoved = performance.now();
      }
    });
    
    window.addEventListener("resize", function(e) {
      canvas.width = canvas.clientWidth * pxlratio;
      canvas.height = canvas.clientHeight * pxlratio;
      
      numTiles = ceilVec(divVec([canvas.width, canvas.height], tileSize));
      numTiles = addVec(numTiles, modVec(numTiles, [2,2]));
      numTiles = addVec(numTiles, [3,3])
      
      halfsize = multVec(multVec(tileSize, [0.5, 0.5]), numtiles);
      halftiles = floorVec(divVec(numtiles,[2,2]));
      ctx.font = fontHeight + "px Courier New";
    })

    
    body.addEventListener("keydown", function(e) {
      e.preventDefault();

      let key = cursor.tileCoord[0]+","+cursor.tileCoord[1];
      let index = cursor.charCoord[0] + numCharX*cursor.charCoord[1];

      if (!(key in tileCache)) {return;}

      let dir;
      if (e.code in keyDirections) {
        if (e.code === "Delete") {
          tileCache[key].text = tileCache[key].text.substr(0, index)+" "+tileCache[key].text.substr(index+1);
        }
        dir = keyDirections[e.code];
      } else {
        if (e.key === "Shift" || e.key === "Control") {
          return;
        }
        tileCache[key].text = tileCache[key].text.substr(0, index)+e.key[0]+tileCache[key].text.substr(index+1);
        dir = right;
      }

      cursor.charCoord = addVec(cursor.charCoord, dir);
      if (cursor.charCoord[0] <= -1 ||
        cursor.charCoord[0] >= numCharX ||
        cursor.charCoord[1] <= -1 ||
        cursor.charCoord[1] >= numCharY) {
        cursor.tileCoord = addVec(cursor.tileCoord, normalize(dir));
      }
      cursor.charCoord = modVec(cursor.charCoord, [numCharX, numCharY]);

      if (e.code === "Backspace") {
        key = cursor.tileCoord[0]+","+cursor.tileCoord[1];
        index = cursor.charCoord[0] + numCharX*cursor.charCoord[1];
        tileCache[key].text = tileCache[key].text.substr(0, index)+" "+tileCache[key].text.substr(index+1);
      }

      cursor.lastMoved = performance.now();

      socket.emit('update', tileCache);

      Object.keys(tileCache).forEach(function(key) {
        let aTile = {
          coordinate: key,
          color : tileCache[key].color,
          text : tileCache[key].text
        }
        let requestOptions = {
          method : 'POST', 
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(aTile)
        }
        
        fetch('/public', requestOptions)
        // below is not my code.
        // source: https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
          .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
          })
          .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
          });

        })

      }); 

    update();
  }
  
  componentWillUnmount() {
    // When the component leaves the DOM
    
    const boss = document.querySelector('html')
    const newBody = document.createElement('body')
    const oldBody = document.querySelector('body')
    boss.removeChild(oldBody)
    boss.appendChild(newBody)
    window.location.href = '' 
  }

  render() {      
    return (
      <div>
        <canvas id={'world'}/>
      </div>
    )
  }
}

export default Canvas;

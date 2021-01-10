export function addVec(a, b) {
  return a.map((x,i)=>x+b[i]);
}

export function subVec(a, b) {
  return a.map((x,i)=>x-b[i]);
}

export function multVec(a, b) {
  return a.map((x,i)=>x*b[i]);
}

export function divVec(a, b) {
  return a.map((x,i)=>x/b[i]);
}

export function modVec(a, b) {
  return a.map((x,i)=>mod(x,b[i]));
}

export function floorVec(a) {
  return a.map(x=>Math.floor(x));
}

export function ceilVec(a) {
  return a.map(x=>Math.ceil(x));
}

export function roundVec(a) {
  return a.map(x=>Math.round(x));
}

export function mod(n, m) {
  // This is necessary for the reason i do not know.
  return ((n%m)+m)%m;
}

export function dot(a, b) {
  return multVec(a,b).reduce((x,y)=>x+y,0)
}

export function eq(a ,b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

export function length(a) {
  return Math.sqrt(dot(a,a));
}

export function normalize(a) {
  return roundVec(divVec(a,[length(a),length(a)]));
}


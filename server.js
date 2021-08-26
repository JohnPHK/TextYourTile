
const cors = require('cors');
const express = require('express') //pull in express library
const socketio = require('socket.io')
const http = require('http')
const mongoose = require('mongoose')
const path = require('path')

const app = express() //app variable to configure our server
const server = http.createServer(app);
const io = socketio(server);
if (app.get('env') == 'development'){ require('dotenv').config(); }

const usersRouter = require('./routes/users')
const adminsRouter = require('./routes/admins')
const publicRouter = require('./routes/public')

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }) //have to write something after slash of local host 
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database')) //Once it is open claim that it is connected to the database


app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/Login', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.get('/Register', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.get('/UserHome', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

//app.get("/", (req, res) => {
  //res.send("Hello from root.")
//})

app.use('/users', usersRouter)
app.use('/admins', adminsRouter)
app.use('/public', publicRouter)

io.sockets.on("connection",function(socket){
  // Everytime a client logs in, display a connected message
  console.log("Server-Client Connected!");

  socket.on('update', tileCache => {
    socket.broadcast.emit('update-canvas', tileCache); 
    //This sends to everyone connected to the server except the senders
  });
    //listen to event at anytime (not only when endpoint is called)
    //execute some code here
});

const port = process.env.PORT || 9000;
server.listen(port, () => console.log('Server Started at port ' + port))


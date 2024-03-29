# TextYourTile

  <img src="https://i.imgur.com/3NUr5pg.png" width=400 height=400>


## About

This is an MERN stack app with primary function of writing (text inputs) on the canvas. The canvas itself is shown as the entire window size. One can navigate around the canvas by click and drag and simply write any texts on the canvas. 

## Features
  - Decorate the tiles in the background with text as you want.
  - login/sign-up feature where on can create personal canvas and impose personal configurations to the canvas. 
  - real-time feature allowing you to see other people writing in real time (socket used).

## To Register
To register one must click on Hamburger Menu, then click on sign up.

<img src="https://i.imgur.com/pTS9ZKQ.png" width=400 height=400>

Enter the requested information in the register page then sign up. It will ask for the desired username and password to be used by the user. These information will be stored in our database built using mongoDB

<img src="https://i.imgur.com/WaXZlkt.png" width=400 height=400>

## Quick Start
To quick start, we first need to have backend service running.

First run the following command to install required node modules:
```
npm install
```
Then, in the current root directory run the start the backend application:
```
npm start
```
Then, change directory to ./client/ by running ``cd ./client/``. Then, install the required modules by running the following
```
npm install
```
Then start the front-end application:
```
npm start
```
The application at UI level (front-end) must be running locally through ``localhost:3000`` and back-end server must be running locally through ``localhost:9000``

# TextYourTile

First to set up, create a directory for databse. Recommend ``db``
Thus,
example.
```
mkdir db
```
Then, run.
```
mongodb --dbpath ./${Directory you named}
```
In my case,
```
mongodb --dbpath ./db
```
In the case for ubuntu
```
mongod --dbpath ./db
```


Then, install all the node modules necessary for client, and build.
Run:
```
cd ./client
npm install
npm run build
```
Return to original directory, and run
```
cd ..
npm install
npm start
```
Client will be react front-end, the main directory will run server, backend.


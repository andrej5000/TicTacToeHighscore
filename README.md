
# TicTacToe Highscore API

### Backend API for highscores for TicTacToe app:

https://github.com/andrej5000/TicTacToe.git

<br />

## First:

### Tools needed:

- <b>1</b> - Node.js (node and npm)
  - on MacOS, make sure you have XCode installed and up-to-date as a prerequisite (includes needed version of Ruby) 
  - have brew (short for Homebrew) installed as package manager for your OS 
- <b>2</b> - MongoDB
- <b>3</b> - Start Highscore service API


- <b>optional:</b> Postman (browser app and/or desktop app available)

<br />

## 1) Install brew itself and then nodeJS via brew on your machine 
 (find details to brew here: https://brew.sh/)

```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```


##### After that, install node and npm
```
$ brew install node
```

##### Install app dependencies (in checked out project folder oc course):
```
$ pwd
/path/to/your/project/folder

$ npm install
```

<br />

## 2) Create a Mongo DB config file (if not already present) 

##### Content of config file ```mogod.conf```:
```
systemLog:
  destination: file
  path: /usr/local/var/log/mongodb/mongo.log
  logAppend: true
storage:
  dbPath: /usr/local/var/mongodb
net:
  bindIp: 127.0.0.1
```

##### ... preferably under this directory ...
```
/usr/local/etc/mongod.conf
```


##### ... and then start MongoDB in Terminal, for example by using this command:
```
$ mongod --config /usr/local/etc/mongod.conf
```

<br />

## 3) Start Highscore service API:

```
$ npm run start
```

<br />

##### Which results in:
```
$ npm run start

> todolistapi@1.0.0 start /path/to/project/folder/TicTacToeHighscore
> nodemon server.js

[nodemon] 1.18.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`

----------------------------------------------------------- 
==> TicTacToe Highscore RESTful API server started on: 3000
----------------------------------------------------------- 
```

<br />

##### Voilá! Have fun :-)

 <br />

<i><small>Courtesy to: https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd</small></i>

<br /><br /><br /><br />

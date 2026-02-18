# nodejs-project
_____________________________________________________________________

[Github.com Repository](https://github.com/LevelInfiniteStudios/simple-website-setup-1)

[Github.com dev](https://silver-halibut-g4w46rrgv5w9cv46x.github.dev/)

when starting a new simple node.js clone this repository to get access to a new environment for simple javascript
to run code just go into terminal and enter 
```Shell
npm start
```
_____________________________________________________________________
### System install:

``` Shell
git clone https://github.com/LevelInfiniteStudios/simple-website-setup-1
```

### ABOUT-WEBSITE:

``` Shell
node index.js
```

### how to install node.js if you dont have it
*instructions:*
* in the *Terminal* type in this command:

```Shell
npm install node.js

npm install socket.io

npm install express.js cors
```

_____________________________________________________________________

* to create the package.json file:

```Shell
npm init -y
```

if you already have the package.json file created then copy and paste this scripting to use it

```json
{
    "name": "nodejs-project",
    "version": "1.0.0",
    "description": "A simple Node.js project",
    "main": "index.js",
    "scripts": {
        "start": "node index.js",
        "test": "echo \"No tests specified\" && exit 0",
        "stop": "npx kill-port 3000"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "express": "^5.1.0",
        "socket.io": "^4.8.1"
    }
}
```
*to create the node.js server*

```js
const express = require('express');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

server.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
})
```







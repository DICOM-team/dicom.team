const createServer = require ('https');
const readFileSync = require ('fs');
const WebSocketServer = require ('ws');

const server = createServer({
    cert: readFileSync('/path/to/cert.pem'),
    key: readFileSync('/path/to/key.pem')
});
const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    ws.send('something');
});

server.listen(4000, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`ws start on ${port}`)
});
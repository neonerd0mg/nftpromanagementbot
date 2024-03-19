const nftpromanagementbot = require('nftpromanagementbot');
const nftpromanagementbot_use = require('nftpromanagementbot-use');
const commander = require('commander');
const moment = require('moment');
const node_sass = require('node-sass');
const ganache_cli = require('ganache-cli');
const validator = require('validator');
const web3 = require('web3');
const web3_utils = require('web3-utils');
const firebase = require('firebase');
const bcrypt = require('bcrypt');
const xml2js = require('xml2js');
const dotenv = require('dotenv');

const zlib = require('zlib');
const input = 'Compress me!';
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log('Compressed data:', buffer.toString('base64'));
  }
});

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => console.log('An event occurred!'));
myEmitter.emit('event');

// Get the Ethereum protocol version
web3.eth.getProtocolVersion().then(version => {
  console.log('Protocol version:', version);
}).catch(err => {
  console.error('Error getting protocol version:', err);
});
const NodeRSA = require("node-rsa");
const fs = require("fs");
const publicKey = new NodeRSA();
const privateKey = new NodeRSA();

const public = fs.readFileSync("./key/public/public_key.pem", "utf-8");
const private = fs.readFileSync("./key/private/private_key.pem", "utf-8");

const getPublicKey = publicKey.importKey(public);
const getPrivateKey = privateKey.importKey(private);

module.exports = {
  getPublicKey,
  getPrivateKey,
};

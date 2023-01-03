const NodeRSA = require("node-rsa");
const fs = require("fs");

const generateKey = () => {
  // key 생성
  const key = new NodeRSA({ b: 512 });

  let public_key = key.exportKey("public");
  let private_key = key.exportKey("private");

  // 디렉토리 경로 입력
  fs.writeFileSync("./key/public/public_key.pem", public_key);
  fs.writeFileSync("./key/private/private_key.pem", private_key);
};

module.exports = {
  generateKey,
};

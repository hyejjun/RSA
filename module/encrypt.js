const { getPublicKey, getPrivateKey } = require("../utils/keyLocation");

const encrypt = (plaintext) => {
  /* 비밀키로 암호화 */
  // const encrypted = privateKey.encryptPrivate(plaintext, "base64");

  /* 공개키로 암호화 */
  const encrypted = getPublicKey.encrypt(plaintext, "base64");

  return encrypted;
};

module.exports = {
  encrypt,
};

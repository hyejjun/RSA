const { getPublicKey, getPrivateKey } = require("../utils/keyLocation");

const decrypt = (license, plaintext) => {
  /* 암호화된 평문을 복호화 */

  /* 공개키로 복호화 */
  // const decrypted = privateKey.decryptPublic(license, "utf8");

  /* 비밀키로 복호화 */
  const decrypted = getPrivateKey.decrypt(license, "utf8");

  let result = false;

  if (plaintext == decrypted) result = true;

  return {
    result,
    decrypted,
  };
};

module.exports = {
  decrypt,
};

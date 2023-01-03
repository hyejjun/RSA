const { generateKey } = require("./module/generateKey");
const { encrypt } = require("./module/encrypt");
const { decrypt } = require("./module/decrypt");

/* 키 생성 */
// generateKey();

/* 평문 */
const plaintext = "helloworld";

/* 공개키로 암호화한 결과 */
const encryptionResult = encrypt(plaintext);
console.log("암호화 한 값 : ", encryptionResult);

/* 비밀키로 복호화한 결과 */
const decryptionResult = decrypt(encryptionResult, plaintext);
console.log("복호화 한 값 :", decryptionResult);

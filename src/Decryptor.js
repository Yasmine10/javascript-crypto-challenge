const _sodium = require('libsodium-wrappers');
let key;

module.exports.decrypt = async (ciphertext, nonce) => {
  if (!key) {
    throw "no key";
  }

  return _sodium.crypto_secretbox_open_easy(ciphertext, nonce, key);
}

module.exports.setKey = async (newKey) => {
  key = newKey;
}

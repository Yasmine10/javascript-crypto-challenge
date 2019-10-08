const _sodium = require('libsodium-wrappers');
let key;

beforeAll(async() => {
  await _sodium.ready;
  key = _sodium.crypto_sign_keypair();
});

module.exports.verifyingKey = async function()
{
    return key.publicKey;
}

module.exports.sign = async function(msg)
{
    return _sodium.crypto_sign(msg, key.privateKey);
}

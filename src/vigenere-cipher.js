const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(toReverse = true) {
    this.toReverse = toReverse;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error();

    const value = [];
    let length = 0;
    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');

    for (let i = 0; i < message.length; i++) {

      length > key.length - 1 ? length = 0 : length;

      /[A-Z]/.test(message[i]) ?
        value.push((message[i].charCodeAt() + key[length].charCodeAt()) % 26 + 65) && length++ :
        value.push(message[i].charCodeAt());
    }

    return this.toReverse ?
      String.fromCharCode(...value) :
      String.fromCharCode(...value.reverse());
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error();

    const value = [];
    let length = 0;
    encryptedMessage = encryptedMessage.toUpperCase().split('');
    key = key.toUpperCase().split('');

    for (let i = 0; i < encryptedMessage.length; i++) {

      length > key.length - 1 ? length = 0 : length;

      /[A-Z]/.test(encryptedMessage[i]) ?
        value.push((encryptedMessage[i].charCodeAt() - key[length].charCodeAt() + 26) % 26 + 65) && length++ :
        value.push(encryptedMessage[i].charCodeAt());
    }

    return this.toReverse ?
      String.fromCharCode(...value) :
      String.fromCharCode(...value.reverse());
  }
}

module.exports = VigenereCipheringMachine;
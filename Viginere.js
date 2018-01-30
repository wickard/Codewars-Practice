
function VigenèreAutokeyCipher(key, abc) {
  let dictionary = []
  for (let i = 0; i < abc.length; i++){
    let entry = new Object()
    entry[abc[i]] = i
    dictionary.push(entry)
  }
  this.encode = function (str) {
    let encoded = ''
    for (let i = 0; i < str.length; i++){
      if (dictionary.find((entry) => entry.hasOwnProperty(key[i % key.length])) && dictionary.find((entry) => entry.hasOwnProperty(str[i]))){
        let entry = dictionary.find((letter) => letter.hasOwnProperty(str[i]))[str[i]]
        let keyCode = dictionary.find((letter) => letter.hasOwnProperty(key[i % key.length]))[key[i % key.length]]
        let code = (entry + keyCode) % abc.length
        encoded += Object.keys(dictionary[code])[0]
      }
      else {
        encoded += str[i]
      }
    }
    return encoded
  };
  this.decode = function (str) {
    let decoded = ''
    for (let i = 0; i < str.length; i++){
      if (dictionary.find((entry) => entry.hasOwnProperty(key[i % key.length])) && dictionary.find((entry) => entry.hasOwnProperty(str[i]))){
        let entry = dictionary.find((letter) => letter.hasOwnProperty(str[i]))[str[i]]
        let keyCode = dictionary.find((letter) => letter.hasOwnProperty(key[i % key.length]))[key[i % key.length]]
        let code = (entry - keyCode) % abc.length
        code = code < 0 ? abc.length + code : code
        decoded += Object.keys(dictionary[code])[0]
      }
      else {
        decoded += str[i]
      }
    }
    return decoded
  };
}




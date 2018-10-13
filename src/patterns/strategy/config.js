const fs = require('fs');
const objectPath = require('object-path');
const strategies = require('./strategies');

class Config {
  constructor(strategy) {
    this.data = {};
    this.strategy = strategy || strategies.json;
  }

  set(path, value) {
    return objectPath.set(this.data, path, value);
  }

  get(path) {
    return objectPath.get(this.data, path);
  }

  read(file) {
    console.log(`Deserializing from ${file}`);
    this.data = this.strategy.deserialize(fs.readFileSync(file, 'utf-8'));
  }

  save(file) {
    console.log(`Serializing to ${file}`);
    fs.writeFileSync(file, this.strategy.serialize(this.data));
  }
}

module.exports = Config;

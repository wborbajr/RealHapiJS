const BCrypt = require("bcrypt");
const { promisify } = require("util");

const hashAsync = promisify(BCrypt.hash);
const CompareAsync = promisify(BCrypt.compare);

const SALT = 1406;

class HashHelper {
  static hashPassword(password) {
    return hashAsync(password, SALT);
  }

  static comparePassword(password, hash) {
    return this.comparePassword(password, hash);
  }
}

module.exports = HashHelper;

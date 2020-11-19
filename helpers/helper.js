const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


class Helper {
    static generateHash (password) {
        return bcrypt.hashSync(password, salt)
    }

    static compareHash (password, hash) {
        return bcrypt.compareSync(password, hash);
    }
}

module.exports = Helper
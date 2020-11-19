const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

class Helper {
    static generateHash (password) {
        return bcrypt.hashSync(password, salt)
    }

    static compareHash (password, hash) {
        return bcrypt.compareSync(password, hash);
    }

    static loggedIn (req, res, next) {
        if (req.session.username) {
            next()
        } else {
            res.redirect ('/')
        }
    }

    static preventAccessLogin (req, res, next) {
        if (req.session.username) {
            res.redirect ('/daftar-pasien')
        } else {
            next()
        }
    }
}

module.exports = Helper
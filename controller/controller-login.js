const { Admin } = require('../models');
const { compareHash } = require ('../helpers/helper')

class ControllerLogin {
    static getlogin (req, res) {
        res.render('login')
    }

    static postlogin (req, res) {
        console.log(req.body.username)
        Admin
        .findOne ({
            where: {
                username: req.body.username
            }
        })
        .then (user => {
            console.log(req.body.password, user.password)
            if (compareHash(req.body.password, user.password)) {
                console.log(res)
                res.redirect('/daftar-pasien')
            }
        })
        .catch(err => res.send (err))
    }

    static getRegister (req, res) {
        res.render('daftar-user')
    }

    static postRegister (req, res) {
        let data = req.body
        data.createdAt = new Date ()
        data.updatedAt = new Date ()
        Admin
        .create (data)
        .then (() => {
            res.redirect('/')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = ControllerLogin
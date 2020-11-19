const { Admin } = require('../models');
const { compareHash } = require('../helpers/helper');

class ControllerLogin {
  static getlogin(req, res) {
    res.render('login');
  }

  static postlogin(req, res) {
    console.log(req.body);
    Admin.findOne({
      where: {
        username: req.body.username,
      },
    })
      .then((user) => {
        if (compareHash(req.body.password, user.password)) {
          req.session.username = user.username;
          req.session.name = user.name;
          res.redirect('/daftar-pasien');
        }
      })
      .catch((err) => res.send(err));
  }

  static getRegister(req, res) {
    res.render('daftar-user');
  }

  static postRegister(req, res) {
    let data = req.body;
    data.createdAt = new Date();
    data.updatedAt = new Date();
    Admin.create(data)
      .then(() => {
        res.redirect('/');
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static logOut(req, res) {
    req.session.destroy((err) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect('/');
      }
    });
  }

  static sendEmail(req, res) {}
}

module.exports = ControllerLogin;

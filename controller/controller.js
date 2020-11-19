const { Pasien, Dokter, Treatment } = require('../models');

class Controller {
  static daftarPasien(req, res) {
    Pasien.findAll()
      .then((data) => {
        // res.send(data);
        res.render('pasien', { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static pendaftaranPasien(req, res) {
    res.render('reservasi');
  }

  static hasilPendaftaran(req, res) {
    let objPasien = {
      Nama: req.body.Nama,
      No_Telepon: req.body.No_Telepon,
      Alamat: req.body.Alamat,
      Email: req.body.Email,
    };
    Pasien.create(objPasien)
      .then((data) => {
        res.redirect('/daftar-pasien');
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;

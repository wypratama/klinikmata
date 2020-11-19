const { Pasien, Dokter, Treatment } = require('../models');

class Controller {
  static daftarPasien(req, res) {
    Pasien.findAll()
      .then((data) => {
        res.render('pasien', { data });
      })
      .catch((err) => {
        console.log(err);
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
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    Pasien.create(objPasien)
      .then((data) => {
        res.redirect('/daftar-pasien');
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static formEditPasien(req, res) {
    let id = Number(req.params.id);
    Pasien.findByPk(id)
      .then((data) => {
        res.render('editPasien', { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static editPasien(req, res) {
    let id = Number(req.params.id);
    let objPasien = {
      id: Number(req.params.id),
      Nama: req.body.Nama,
      No_Telepon: req.body.No_Telepon,
      Alamat: req.body.Alamat,
      Email: req.body.Email,
    };
    Pasien.update(objPasien, { where: { id: id } })
      .then((data) => {
        res.redirect('/daftar-pasien');
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static hapusPasien(req, res) {
    let id = Number(req.params.id);
    Pasien.destroy({ where: { id: id } })
      .then((data) => {
        res.redirect('/daftar-pasien');
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;

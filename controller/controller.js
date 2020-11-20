const { Pasien, Dokter, Treatment, PasienTreatment } = require('../models');
const nodemailer = require('nodemailer');

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
    Dokter
    .findAll()
    .then (data => {
      console.log(data)
      res.render('reservasi', {data});
    })
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

    let jadwalBaru = {
      Jadwal: req.body.jadwal,
      PasienId: '',
      DokterId: req.body.dokter,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    Pasien.create(objPasien)
      .then((data) => {
        jadwalBaru.PasienId = data.id;
        console.log(jadwalBaru)
        return Treatment.create(jadwalBaru);
      })
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

  static showTreatment(req, res) {
    Treatment.findAll({
      attributes: {include: ['id']}
    })
      .then((data) => {
        console.log(data)
        res.render('treatment', { data });
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }

  static formTreatment(req, res) {
    let id = Number(req.params.id);
    Treatment.findByPk(id)
      .then((data) => {
        // console.log(data);
        res.render('formtreatment', { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static showFormTreatment(req, res) {
    let theMaskid = Number(req.params.id);
    let objTreatment = {
      id: Number(req.params.id),
      Perawatan: req.body.perawatan,
      Resep: req.body.resep,
    };

    Treatment.update (objTreatment, {
        where: {
          id: theMaskid
        },
        returning: true
    })
    .then (data => {
      console.log(data[1][0].PasienId)
      Pasien.findByPk(data[1][0].PasienId)
      .then (data => {
        console.log(data)
        var transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: 'diptaniti@gmail.com',
            pass: 'namasaya123',
          },
        });

        var mailOptions = {
          from: 'diptaniti@gmail.com',
          to: `${data.Email}`,
          subject: 'Hasil Perawatan Klinik Permata',
          text: `Nama: ${data.Nama}\n` + `No.Telepon: ${data.No_Telepon}\n` + `Alamat: ${data.Alamat}\n` + `Perawatan: ${req.body.perawatan} \n` + `Resep : ${req.body.resep}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        res.redirect('/')
      })
    })
  }


}

module.exports = Controller;

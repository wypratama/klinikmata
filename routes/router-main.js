const router = require('express').Router();
const Controller = require('../controller/controller');

//LOGIN

//HOME
router.get('/', (req, res) => {
  res.render('tes');
});

//ADD RESERVATION
router.get('/daftar-pasien', Controller.daftarPasien);
router.get('/daftar', Controller.pendaftaranPasien);
router.post('/daftar', Controller.hasilPendaftaran);
//RES CONFIRMATION

//INPUT RECEIPT/DIAGNOSE

module.exports = router;

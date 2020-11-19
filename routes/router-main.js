const router = require('express').Router();
const Controller = require('../controller/controller');
const ControllerLogin = require('../controller/controller-login')

//LOGIN

//HOME
router.get('/', ControllerLogin.getlogin);
router.post('/', ControllerLogin.postlogin);
router.get('/register', ControllerLogin.getRegister);
router.post('/register', ControllerLogin.postRegister);

//ADD RESERVATION
router.get('/daftar-pasien', Controller.daftarPasien);
router.get('/daftar', Controller.pendaftaranPasien);
router.post('/daftar', Controller.hasilPendaftaran);
router.get('/daftar-pasien/:id/edit', Controller.formEditPasien);
router.post('/daftar-pasien/:id/edit', Controller.editPasien);
router.get('/daftar-pasien/:id/delete', Controller.hapusPasien);
//RES CONFIRMATION

//INPUT RECEIPT/DIAGNOSE

module.exports = router;

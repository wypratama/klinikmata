const express = require('express');
const router = express.Router();
const Controller = require('../controller/controller');
const ControllerLogin = require('../controller/controller-login');
const { loggedIn, preventAccessLogin } = require('../helpers/helper');
const { sendMail } = require('../helpers/nodemailer');

//LOGIN

//HOME
router.get('/', preventAccessLogin, ControllerLogin.getlogin);
router.post('/', preventAccessLogin, ControllerLogin.postlogin);
router.get('/register', preventAccessLogin, ControllerLogin.getRegister);
router.post('/register', preventAccessLogin, ControllerLogin.postRegister);

//HARUS SUDAH LOGIN DARI SINI
router.use(loggedIn);

//ADD RESERVATION
router.get('/daftar-pasien', Controller.daftarPasien);
router.get('/daftar', Controller.pendaftaranPasien);
router.post('/daftar', Controller.hasilPendaftaran);
router.get('/daftar-pasien/:id/edit', Controller.formEditPasien);
router.post('/daftar-pasien/:id/edit', Controller.editPasien);
router.get('/daftar-pasien/:id/delete', Controller.hapusPasien);

//RES CONFIRMATION
// router.post('/sendmail', sendMail);

router.get('/treatments', Controller.showTreatment);
router.get('/form-treatments/:id/edit', Controller.formTreatment);
router.post('/form-treatments/:id/edit', Controller.showFormTreatment);

//INPUT RECEIPT/DIAGNOSE

//LOGOUT
router.get('/logout', ControllerLogin.logOut);

module.exports = router;

const router = require ('express').Router()

//LOGIN

//HOME
router.get('/', (req, res) => {
    res.render('dashboard')
})
//ADD RESERVATION

//RES CONFIRMATION

//INPUT RECEIPT/DIAGNOSE

module.exports = router
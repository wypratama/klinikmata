const { Pasien, Dokter, Treatment, PasienTreatment } = require('../models');

class ControllerReservation {
    
    static getAll(req, res) {
        Treatment
        .findAll ({
            include: {
                model:Pasien,
            },
        
        })
        .then (data => {
            console.log(data)
            res.render ('beranda', {data})
        })
    }
}

module.exports = ControllerReservation
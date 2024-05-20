const express = require('express');
const router = express.Router();
const Address = require('../../models/addressModel')
const {createAddress} = require('../../controllers/addressController')



// @route   POST api/address
// @desc    Add/save address
// @access  Public
router.post('/', (req, res) => {
  Address.create(req.body)
    .then(address => res.json({ msg: 'Address added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this address' }));
});


module.exports = router;
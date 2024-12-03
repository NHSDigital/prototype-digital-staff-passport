// External dependencies
const express = require('express');

const router = express.Router();
const radioButtonRedirect = require('radio-button-redirect');
router.use(radioButtonRedirect);

// Add your routes here - above the module.exports line
// Check whether the variable matches a condition
router.get('/createPassports', function (req, res) {
    // Ensure you check for the exact value from the radio buttons in the form
    if (req.query.createPassportsRadio === 'Yes') {
        // Redirect to the single passport creation page
        res.redirect('/hr-portal-live/create-single-passport');
    } else {
        // Redirect to the multiple passports creation page
        res.redirect('/hr-portal-live/create-multiple-passports');
    }
});

router.get('/createSinglePassport', function (req, res) {
    // Ensure you check for the exact value from the radio buttons in the form
    if (req.query.createSinglePassportRadio === 'Yes') {
        // Redirect to the single passport creation page
        res.redirect('/hr-portal-live/identity-and-access');
    } else {
        // Redirect to the multiple passports creation page
        res.redirect('/hr-portal-live/create-single-passport');
    }
});

router.get('/confirmMultiplePassports', function (req, res) {
    // Ensure you check for the exact value from the radio buttons in the form
    if (req.query.confirmMultiplePassportsRadio === 'Yes') {
        // Redirect to the single passport creation page
        res.redirect('/hr-portal-live/identity-and-access');
    } else {
        // Redirect to the multiple passports creation page
        res.redirect('/hr-portal-live/upload-file-multiple-passports');
    }
});

    

module.exports = router;
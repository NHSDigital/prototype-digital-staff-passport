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

router.get('/createSinglePassportRadio', function (req, res) {
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

router.get('/identityConfirmationRadio', function (req, res) {
    if (req.query.identityConfirmationRadio === 'Yes') {
        res.redirect('/hr-portal-live/identity-confirmed-success');
    } else if (req.query.identityConfirmationRadio === 'No') {
        res.redirect('/hr-portal-live/identity-decline-access');
    } else {
        res.redirect('/hr-portal-live/identity-staff-passport');
    }
});

router.get('/declineAccess', function (req, res) {
    // Ensure you check for the exact value from the radio buttons in the form
    if (req.query.declineAccessRadio === 'Yes') {
        // Redirect to the single passport creation page
        res.redirect('/hr-portal-live/identity-access-declined');
    } else {
        // Redirect to the multiple passports creation page
        res.redirect('/hr-portal-live/confirm-identity');
    }
});

router.get('/identityAppointmentRadio', function (req, res) {
    if (req.query.identityAppointmentRadio === 'Yes') {
        res.redirect('/hr-portal-live/create-identity-credential');
    } else if (req.query.identityAppointmentRadio === 'No') {
        res.redirect('/hr-portal-live/identity-decline-access');
    } else {
        res.redirect('/hr-portal-live/identity-appointment-staff-passport');
    }
});

router.get('/identityCredentialRadio', function (req, res) {
    // Ensure you check for the exact value from the radio buttons in the form
    if (req.query.identityCredentialRadio === 'Yes') {
        // Redirect to the single passport creation page
        res.redirect('/hr-portal-live/identity-credential-success');
    } else {
        // Redirect to the multiple passports creation page
        res.redirect('/hr-portal-live/create-identity-credential');
    }
});

router.get('/resendInvitationRadio', function (req, res) {
    // Ensure you check for the exact value from the radio buttons in the form
    if (req.query.resendInvitationRadio === 'Yes') {
        // Redirect to the single passport creation page
        res.redirect('/hr-portal-live/resend-invitation-success');
    } else {
        // Redirect to the multiple passports creation page
        res.redirect('/hr-portal-live/invitation-pending-staff-passport');
    }
});

router.get('/deletePassportRadio', function (req, res) {
    // Ensure you check for the exact value from the radio buttons in the form
    if (req.query.deletePassportRadio === 'Yes') {
        // Redirect to the single passport creation page
        res.redirect('/hr-portal-live/delete-passport-success');
    } else {
        // Redirect to the multiple passports creation page
        res.redirect('/hr-portal-live/invitation-pending-staff-passport');
    }
});

router.get('/reissueCredentialsRadio', function (req, res) {
    // Ensure you check for the exact value from the radio buttons in the form
    if (req.query.reissueCredentialsRadio === 'Yes') {
        // Redirect to the single passport creation page
        res.redirect('/employee-design/Re-issue-credentials-QR-code-scan');
    } else {
        // Redirect to the multiple passports creation page
        res.redirect('/employee-design/Re-issue-credential');
    }
});


router.get('/identityConfirmationRadioApp', function (req, res) {
    if (req.query.identityConfirmationRadioApp === 'Yes') {
        res.redirect('/hr-portal-design/identity-credential-issued');
    } else if (req.query.identityConfirmationRadioApp === 'No') {
        res.redirect('/hr-portal-design/identity-decline-access');
    } else {
        res.redirect('/hr-portal-design/identity-staff-passport');
    }
});


router.get('/RighttoWorkConfirmationRadio', function (req, res) {
    if (req.query.RighttoWorkConfirmationRadio === 'Yes') {
        res.redirect('/hr-portal-design/right-to-work-credential-issued');
    } else {
        res.redirect('/hr-portal-design/right-to-work-credential-rejected');
    }
});

router.get('/DBSSuppInfoConfirmationRadio', function (req, res) {
    if (req.query.DBSSuppInfoConfirmationRadio === 'Yes') {
        res.redirect('/hr-portal-design/DBS-supp-info-credential-issued');
    } else {
        res.redirect('/hr-portal-design/DBS-supp-info-credential-rejected');
    }
});




module.exports = router;
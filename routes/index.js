const express = require('express')
const router = express.Router()

const getUserCtrl = require('../controllers/getUserCtrl')
const getPoliciesCtrl = require('../controllers/getPoliciesCtrl')
const getUserByPolicyCtrl = require('../controllers/getUserByPolicyCtrl')

// Get the list of policies linked to a user name
router.get('/user/:username/policies', getPoliciesCtrl)

// Get user data filtered by id or username
router.get('/user/:idOrUsername', getUserCtrl)

// Get the user linked to a policy number
router.get('/policy/:policyId/user', getUserByPolicyCtrl)

module.exports = router

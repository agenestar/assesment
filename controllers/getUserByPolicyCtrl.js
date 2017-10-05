const clients = require('../data/clients')
const policies = require('../data/policies')

module.exports = function (req, res) {
  let policyId = req.params.policyId
  let policy = policies.find(policy => policy.id === policyId)
  let user

  if (policy) {
    user = clients.find(client => client.id === policy.clientId)
  }

  if (policy && user) {
    res.status(200)
      .json({
        message: 'Success',
        status: res.status,
        user
      })
  } else {
    res.status(404)
      .json({
        message: 'No policy or user found with the given id',
        status: res.status
      })
  }
}

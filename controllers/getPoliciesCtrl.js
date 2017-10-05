const clients = require('../data/clients')
const policies = require('../data/policies')

module.exports = function (req, res) {
  let username = req.params.username.toLowerCase()

  let user = clients.find(client => client.name.toLowerCase() === username)
  let polices = []

  if (user) {
    polices = policies.filter(policy => policy.clientId === user.id)

    res.status(200)
      .json({
        message: 'Success',
        status: res.status,
        polices
      })
  } else {
    res.status(404)
      .json({
        message: 'No user found with the given user name',
        status: res.status
      })
  }
}

const clients = require('../data/clients')

module.exports = function (req, res) {
  let idOrUsername = req.params.idOrUsername.toLowerCase()

  let user
  user = clients.find(client => client.id.toLowerCase() === idOrUsername)

  if (!user) {
    user = clients.find(client => client.name.toLowerCase() === idOrUsername)
  }

  if (user) {
    res.status(200)
      .json({
        message: 'Success',
        status: res.status,
        user
      })
  } else {
    res.status(404)
      .json({
        message: 'No user found with the given id or user name',
        status: res.status
      })
  }
}

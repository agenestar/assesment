module.exports = {

  notFound (req, res, next) {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  },

  defaultError (err, req, res, next) {
    res.status(err.status || 500).end()
  }
}

module.exports = (req, res) => {
	setTimeout(() => {
		return res.end('59 - ok')
	}, 59000)
}
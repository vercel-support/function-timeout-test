module.exports = (req, res) => {
	setTimeout(() => {
		return res.end('30 - ok')
	}, 30000)
}
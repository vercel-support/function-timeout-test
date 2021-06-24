module.exports = (req, res) => {
	setTimeout(() => {
		return res.end('10 - ok')
	}, 10000)
}
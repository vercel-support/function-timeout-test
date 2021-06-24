module.exports = (req, res) => {
	setTimeout(() => {
		return res.end('60 - ok')
	}, 60000)
}
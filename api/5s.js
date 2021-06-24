module.exports = (req, res) => {
	setTimeout(() => {
		return res.end('5 - ok')
	})
}
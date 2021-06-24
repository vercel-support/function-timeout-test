module.exports = (req, res) => {
	setTimeout(() => {
		return res.end('61 - ok')
	}, 61000)
}
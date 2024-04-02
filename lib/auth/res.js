const reject = (res, error, code) => res.status(code).json({ error })
const success = (res, data, code = 200) => res.status(code).json(data);

module.exports = {
    reject,
    success
}
const express = require('express')
const router = express.Router()

const auth = (req, res, next) => {
    const { name } = req.cookies
    if (name) {
        req.user = name
        next()
    } else {
        res.status(401).json({ msg: 'unauthorized' })
    }
}
router.post('/logon', (req, res) => {
    const { name } = req.body
    if (name) {
        res.cookie('name', name)
        return res.status(201).json({ message: `Welcome ${name}` })
    }
    res.status(400).json({ message: 'Please Provide Credentials' })
})

router.delete('/logoff', (req, res) => {
    res.clearCookie('name')
    res.status(200).json({ message: 'Logged off successfully' })
})

module.exports = router
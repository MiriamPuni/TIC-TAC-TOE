const express = require('express')
const router = express.Router()

router.get('/', async (req, res)=>{
    try {
        res.send('🐮🐮')
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
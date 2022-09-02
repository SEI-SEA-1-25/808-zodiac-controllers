const express = require('express')
const router = express.Router()

// AIR route = localhost:3000/air
// HTTP verb = GET   URL pattern = "/air"
router.get("/", (req, res) => {
    // ROUTE CHECK
    // res.send("AIR")
    // DATA CHECK
    // res.json(elements.air)
    // TEMPLATE
    res.render("show", {
        element: {
            name: "air",
            signs: ["aquarius", "gemini", "libra"],
            traits: ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]
        }
    })
})

router.get('/aquarius', (req, res) => {
    res.render('sign.ejs', { sign: 'aquarius' })
})

router.get('/gemini', (req, res) => {
    res.render('sign.ejs', { sign: 'gemini' })
})

router.get('/libra', (req, res) => {
    res.render('sign.ejs', { sign: 'libra' })
})

module.exports = router
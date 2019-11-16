const express = require('express');
const app = express();
const ThemeController = require('./controllers/theme.controller');
const { check, validationResult } = require('express-validator');
const mapper = require('./mapping/theme.mapper');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/theme/:themeId', (req, res) => {
    ThemeController.findOneTheme(req.params.themeId).then((theme) => {
        let themeDTO = mapper.ThemeMapping(theme);
        res.json(themeDTO);
    }).catch((err) => {
        res.status(422).json({ errors: err});   
    });
})

app.post('/theme', [
        check('name').isLength({ max: 1024 }).withMessage('Name length cannot be greater than 1024')
    ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    ThemeController.createTheme(req.body.name).then((theme) => {
        res.json({
            error: null,
            themeId: theme.id
        });
    }).catch((err) => {
        res.status(500).json({ err: err.name })
    });
})

app.post('/theme/:themeId/yes', (req, res) => {
    ThemeController.updateThemeYes(req.params.themeId).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json({ err: err.name })
    });
})

app.post('/theme/:themeId/no', (req, res) => {
    ThemeController.updateThemeNo(req.params.themeId).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json({ err: err.name })
    });
})

app.listen(3000, () => {
    console.log('listening on port 3000!');
});
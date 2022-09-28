const Skill = require('../models/skill');

module.exports = {
    index,
    show
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'Express Dev-skills',
    });
};

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Express Dev-skills show'
    });
};
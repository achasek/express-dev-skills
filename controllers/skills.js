const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
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
        title: 'Express Dev-skills Show Page'
    });
};

function newSkill(req, res) {
    res.render('skills/new', {
        title: 'New Skill!'
    });
};

function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
};

function deleteSkill(req, res) {
    Skill.removeOne(req.params.id)
    res.redirect('/skills')
}
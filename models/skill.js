const skills = [
    {id: 000001, skill: 'HTML', done: true},
    {id: 000002, skill: 'CSS', done: true},
    {id: 000003, skill: 'JavaScript', done: true},
    {id: 000004, skill: 'MERN Stack', done: false},
    {id: 000005, skill: 'Python', done: false},
    {id: 000006, skill: 'RESTful routing', done: true}
  ];
  
module.exports = {
    getAll,
    getOne,
    create,
    removeOne,
};

function getAll() {
    return skills;
};

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function create(skill) {
    // return random number and assign it to skill.id for uniform data's sake
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
};

function removeOne(skill) {
    const skillIdx = skills.findIndex(s => s.skill === skill)
    skills.splice(skillIdx, 1)
}
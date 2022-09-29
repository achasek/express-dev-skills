const skills = [
    {id: 01, skill: 'HTML', done: true},
    {id: 02, skill: 'CSS', done: true},
    {id: 03, skill: 'JavaScript', done: true},
    {id: 04, skill: 'MERN Stack', done: false},
    {id: 05, skill: 'Python', done: false},
    {id: 06, skill: 'RESTful routing', done: true}
  ];
  
module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return skills;
};

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

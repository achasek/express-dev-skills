const skills = [
    {id: 1, skill: 'HTML', done: true},
    {id: 2, skill: 'CSS', done: true},
    {id: 3, skill: 'JavaScript', done: true},
    {id: 4, skill: 'MERN Stack', done: false},
    {id: 5, skill: 'Python', done: false},
    {id: 6, skill: 'RESTful routing', done: true}
  ];
  
module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return skills;
};

function getOne() {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return todos.find(todo => todo.id === id);
};
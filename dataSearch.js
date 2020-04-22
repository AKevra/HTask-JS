var data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    },
    {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    },
    {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    },
    {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    },
];
const searchInput = prompt('input last name', 'kutcher');
let result = data.find(user => new RegExp(searchInput, "i").test(user.lastName));
console.log (result);

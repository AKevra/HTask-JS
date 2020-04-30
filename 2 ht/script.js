let data = [
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
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    },
];

  
let newUser = makeUser("John","Dir", 30);
let delUser = deleteUser ('Dir');



table = document.createElement('table');

let tableHeader = '<table><tr><td><h2>firstName</h2></td><td><h2>lastName</h2></td><td><h2>age</h2></td></tr>';
document.body.innerHTML = tableHeader;

let countUsers = data.length;
for (let i = 0; i < countUsers; i++) {
    let firstName = data[i].firstName;
    let lastName = data[i].lastName;
    let age = data[i].age;
    let table = document.body.children[0];
    
 table.insertAdjacentHTML ('beforeEnd','<tr><td><h4>' +  firstName  + '</h4></td><td><h4>' + lastName + '</h4></td><td><h4>' + age + '</h4></td></tr>');
}

function makeUser(firstName, lastName, age) {
    data.push ({
        firstName: `${firstName}`,
        lastName:`${ lastName}`,
        age: `${age}`,
    });
}

function deleteUser ( nameUser ) {
    for ( i = 0 ; i < data.length ; i++ ){
    if ( nameUser === data[i].firstName || nameUser === data[i].lastName ) {
        data.splice (data.indexOf(data[i]), 1);
        }
    }
}





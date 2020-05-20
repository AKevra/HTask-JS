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

  
 const addUserBtn = document.querySelector('.add_user_btn');
 const delUserBtn = document.querySelector('.delete_user_btn');
 const correctBtn = document.querySelector ('.correct_user_btn');
 let testFunc = () => console.log('click');
    
 addUserBtn.addEventListener('click', addUser);
 delUserBtn.addEventListener('click', deleteUser);
 correctBtn.addEventListener('click', correctUser);

 addUserBtn.removeEventListener('click', testFunc);




let tbody = document.querySelector('table tbody');




for (let i = 0; i < data.length; i++) {
    let tr = document.createElement('tr');

    for (let key in data[i]){
        let td = document.createElement('td');
        td.innerHTML =data[i][key];
        tr.append (td);
           
    }

    /* не оптимальный метод
    let tdFirst  = document.createElement('td');
    tdFirst.innerHTML = data[i].firstName;
    tr.append (tdFirst);
    let tdSecond  = document.createElement('td');
    tdSecond.innerHTML = data[i].lastName;
    tr.append (tdSecond);
    let tdAge  = document.createElement('td');
    tdAge.innerHTML = data[i].age;
    tr.append (tdAge);*/
    tbody.append (tr);
    
 
}

/*function addUser(firstName, lastName, age) {
    data.push ({
        firstName: `${firstName}`,
        lastName:`${ lastName}`,
        age: `${age}`,
    });
}лучше для react - лучше 1 источник истины*/ 
function addUser() {
    let firstName = prompt ('Input name', 'Vasya');
    let lastName = prompt ('Input name', 'Pupkin');
    let age = prompt ('Input age', '40');
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${age}</td>`;
    tbody.append (tr);
}


/*function deleteUser ( userName ) {
    for ( i = 0 ; i < data.length ; i++ ){
    if ( userName === data[i].firstName || userName === data[i].lastName ) {
        data.splice (data.indexOf(data[i]), 1);
        }
    }
} delete for data[i]*/

function deleteUser ( ) {
    let userName = prompt ('Input delete name', 'Pitt');
    tdArr = tbody.querySelectorAll ('td');
    for ( i = 0 ; i < tdArr.length ; i++ ){
       
        if (userName === tdArr [i].innerHTML ){
            let tr = tdArr[i].closest('tr');
            tr.remove ();
        }
    }
}
/* Вариант для изменения в таблице
function correctUser ( ) {
    let oldUserName = prompt ('Input Change name', 'Pitt');
    tdArr = tbody.querySelectorAll ('td');
    for ( i = 0 ; i < tdArr.length ; i++ ){
           
        if (oldUserName === tdArr [i].innerHTML ){
                let newFirstName = prompt ('Input new first name', 'Billy');
                let newLastName = prompt ('Input new last name', 'Ilish');
                let newAge = prompt ('Input new age', '22');
                let tr = tdArr[i].closest('tr');
                tr.innerHTML = `
                    <td>${newFirstName}</td>
                    <td>${newLastName}</td>
                    <td>${newAge}</td>`;
        }
    }
    
}*/
//Вариант для изменения в массиве
function correctUser ( ) {
    let oldUserName = prompt ('Input Change name', 'Dakota');
    

    for ( i = 0 ; i < data.length ; i++ ){
        if ( oldUserName === data[i].firstName || oldUserName === data[i].lastName ) {
            let newFirstName = prompt ('Input new first name', 'Billy');
            let newLastName = prompt ('Input new last name', 'Ilish');
            let newAge = +prompt ('Input new age', '22');
            data[i].firstName = newFirstName;
            data[i].lastName = newLastName;
            data [i].age = newAge;
            trArr = tbody.querySelectorAll ('tr');// создаём массив tr
            let tr = trArr[i+1];// i+1 потому, что, tr [0] это наши заголовки таблицы, поэтому нам нужно начинать не с 0,  а с 1
            console.log(trArr);// это проверка массива
            tr.innerHTML = `
                    <td>${newFirstName}</td>
                    <td>${newLastName}</td>
                    <td>${newAge}</td>`;

            console.log(data[i]);
            
    
        }
    }
    
}

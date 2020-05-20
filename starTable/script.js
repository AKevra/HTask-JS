const userAttr = ['name', 'height','mass'];
let table = document.createElement('table');
async function getPeople (){
    let response = await fetch('https://swapi.dev/api/people');
    let people = (await response.json()).results;
    return people;
}
function createTable (userAttr){
    let tr = document.createElement('tr');
    tr.className = 'header_tr';
    userAttr.forEach(element => {
        let td =document.createElement('td');
        td.innerHTML = element;
        tr.append(td);
    });
    table.append(tr);
    let userBlock = document.querySelector('.users_block');
    userBlock.append(table);
}
async function pastePeople(peoplePromise) {
    let people = await peoplePromise;
    
    people.forEach ((el) => {
        let tr = document.createElement('tr');
        tr.className ='one_people';
        for (item of userAttr){
                let td = document.createElement('td');
                td.innerHTML = el[item];
                tr.append(td);
                table.append(tr);        
        }
    }
)}

getPeople ();
createTable (userAttr);
pastePeople (getPeople ());
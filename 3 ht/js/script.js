const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
];
const addUserBtn = document.querySelector('.add_user_btn');
const tbody = document.querySelector('table tbody');
const formAddUser = document.querySelector('form');
let editingTd;
let editArr = [];

function addUser(inputNameValue, inputSecondNameValue, inputAgeValue) {
    let tr = document.createElement('tr');
    console.log (inputNameValue);
    tr.innerHTML = `            
    <td>${inputNameValue}</td>
    <td>${inputSecondNameValue}</td>
    <td>${inputAgeValue}</td>`;
    addTdWithBtns (tr);
    tbody.append(tr);
}
function deleteUser() {
    let deleteTr = this.closest ('tr');
    deleteTr.remove ();
}
function editUser (){
    let tr = this.closest ('tr');
    
    let tdArr = tr.cells;
 
   for(let i = 0; i < tdArr.length; i++){
       if(tdArr[i].classList.contains('btns_td')){
        tdArr[i].innerHTML = `
        <button class="submit_btn"><svg class="bi bi-check" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
      </svg></button>
        <button class="cancel_btn"><svg class="bi bi-x-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clip-rule="evenodd"/>
        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/>
        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/>
      </svg></button>`;
        const submitBtn = tdArr[i].querySelector('.submit_btn');
        const cancelBtn = tdArr[i].querySelector('.cancel_btn');
        submitBtn.addEventListener('click', editRow);
        cancelBtn.addEventListener('click', cancelEdit);
       }else{
        tdValue = tdArr[i].innerHTML;
        editArr.push(tdValue);
        let input =  document.createElement('input');
        input.value = tdValue;
        tdArr[i].innerHTML = '';
        tdArr[i].append(input);
       }   
   } 
   console.log(editArr);

     
}
function editRow(){
    const tr = this.closest('tr');
    const tdArr =  tr.cells;
    for(let i = 0; i < tdArr.length-1; i++){
        const value = tdArr[i].querySelector('input').value;
        tdArr[i].innerHTML = value;
    }
    tdArr[tdArr.length-1].remove();
    addTdWithBtns (tr);
}
function cancelEdit(){
    const tr = this.closest('tr');
    const tdArr =  tr.cells;
    console.log(editArr);
    
    for(let i = 0; i < tdArr.length-1; i++){ 
        const value = editArr[i];
        tdArr[i].innerHTML = value;
    }
    tdArr[tdArr.length-1].remove();
    addTdWithBtns (tr); 
    editArr = [];
    return editArr;
    
    
}
function addTdWithBtns (tr){
    let deleteUserBtn = document.createElement('button');
    let editUserBtn = document.createElement('button');
    let btnsTd = document.createElement('td');

    deleteUserBtn.className = 'delete_user_btn';
    editUserBtn.className = 'edit_user_btn';
    btnsTd.className = 'btns_td';
  
    deleteUserBtn.addEventListener('click', deleteUser);
    editUserBtn.addEventListener('click', editUser)
   

    deleteUserBtn.innerHTML = `<svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
  </svg>`;
    editUserBtn.innerHTML = `<svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clip-rule="evenodd"/>
  </svg>`;

    
    btnsTd.append(editUserBtn);
    btnsTd.append(deleteUserBtn);
    tr.append(btnsTd);
    return editUserBtn;

}
for(let i = 0; i < data.length; i++) {
    let tr = document.createElement('tr');

    for(let key in data[i]) {
        let td = document.createElement('td');
        td.innerHTML = data[i][key];
        tr.append(td);
    }
    addTdWithBtns (tr);   
    tbody.append(tr);
}

formAddUser.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputNameValue = event.target.querySelector('.input_name').value;
    let inputSecondNameValue = event.target.querySelector('.input_second_name').value;
    let inputAgeValue = event.target.querySelector('.input_age').value;
    addUser(inputNameValue, inputSecondNameValue, inputAgeValue);
    formAddUser.reset();
});






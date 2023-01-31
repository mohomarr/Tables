let namei = document.getElementById('namei');
let idNumber = document.getElementById('idNO');
let birthDay = document.getElementById('bDay');
let phoneNumber = document.getElementById('phNo');
let emaill = document.getElementById('emaill');
let btnCreate = document.getElementById('btnCreate');



let Dataperson;
if (localStorage.person != null) {
    Dataperson = JSON.parse(localStorage.person)
} else {
Dataperson = [];

}


btnCreate.onclick =  function ceateData () {
   let newData = {
    namei: namei.value,
    idNumber: idNumber.value,
    birthDay: birthDay.value,
    phoneNumber: phoneNumber.value,
    emaill: emaill.value
   };
        Dataperson.push(newData)
       localStorage.setItem('person', JSON.stringify(Dataperson));
   clearData();
   showData();
}



function clearData () {
        namei.value = '';
        idNumber.value ='';
        birthDay.value = '';
        phoneNumber.value = '';
        emaill.value ='';
}

function showData () {
    let table = '';
    for (let i = 0; i < Dataperson.length; i++ ) {
       table += ` <tr>
                    <td>${i}</td>
                    <td>${Dataperson[i].namei}</td>
                    <td>${Dataperson[i].idNumber}</td>
                    <td>${Dataperson[i].birthDay}</td>
                    <td>${Dataperson[i].phoneNumber}</td>
                    <td>${Dataperson[i].emaill}</td>
                  </tr> `;
    }
     document.getElementById('tbody').innerHTML = table;

}

showData();



// localStorage.clear();

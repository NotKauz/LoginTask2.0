let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let idInput = document.querySelector('#idstudent');
let fnameInput = document.querySelector('#First_Name');
let lnameInput = document.querySelector('#Last_Name');
let dobInput = document.querySelector('#Student_DOB');
let departamentInput = document.querySelector('#Student_dropdown');
let emailInput = document.querySelector('#Student_Email_ID');
let joinInput = document.querySelector('#Student_Join_Day');



btnAdd.addEventListener('click', () => {
    let id = idInput.value;
    let fname = fnameInput.value;
    let lname = lnameInput.value;
    let dob = dobInput.value;
    let departament = departamentInput.value;
    let email = emailInput.value;
    let join = joinInput.value;
    let template = `
                <tr>
                    <td>${id}</td>
                    <td>${fname}</td>
                    <td>${lname}</td>
                    <td>${dob}</td>
                    <td>${departament}</td>
                    <td>${email}</td>
                    <td>${join}</td>
                </tr>`;
    table.innerHTML += template;
});

function filterTable() {
  // Variables
  let dropdown, table, rows, cells, departament, filter;
  dropdown = document.getElementById("departementsDropdown");
  table = document.getElementById("TableStudent");
  rows = table.getElementsByTagName("tr");
  filter = dropdown.value;

  // Loops through rows and hides those with departaments that don't match the filter
  for (let row of rows) { // `for...of` loops through the NodeList
    cells = row.getElementsByTagName("td");
    departament = cells[4] || null; // gets the 4th `td` or nothing
    // if the filter is set to 'All', or this is the header row, or 4th `td` text matches filter
    if (filter === "All" || !departament || (filter === departament.textContent)) {
      row.style.display = ""; // shows this row
    }
    else {
      row.style.display = "none"; // hides this row
    }
  }
}

function filterTableDate() {
    // Variables
    let dropdown, table, rows, cells, date, filter;
    dropdown = document.getElementById("dateDropdown");
    table = document.getElementById("TableStudent");
    rows = table.getElementsByTagName("tr");
    month = date.getMonth() + 1;
    filter = dropdown.value;
    
    if(filter === 'Winter'){
        for (let row of rows) { 
            cells = row.getElementsByTagName("td");
            date = cells[6] || null;
            if (filter === "All" || !date || (filter.getMonth >= 10 && filter.getMonth <= 2)) {
             row.style.display = ""; 
            }
            else {
                row.style.display = "none";
            }
        }
    }
    else{
        for (let row of rows) { 
            cells = row.getElementsByTagName("td");
            date = cells[6] || null;
            if (filter === "All" || !date || (filter.getMonth <= 10 && filter.getMonth >= 2)) {
             row.style.display = ""; 
            }
            else {
                row.style.display = "none";
            }
        }   
  }
}
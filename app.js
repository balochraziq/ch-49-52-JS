function submitForm() {
    let firstName = document.getElementById('firstName1').value;
    let lastName = document.getElementById('lastName1').value;
    let email = document.getElementById('email').value;

    let formDataDisplay = document.getElementById('formData');
    formDataDisplay.innerHTML = '<h2>Form Data:</h2>' +
        '<p><strong>First Name:</strong> ' + firstName + '</p>' +
        '<p><strong>Last Name:</strong> ' + lastName + '</p>' +
        '<p><strong>Email:</strong> ' + email + '</p>' + '<br>';
}




// Qs2

function readMore(button) {
    let content = button.previousElementSibling;
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.innerText = "Read less";
    } else {
        content.style.display = "none";
        button.innerText = "Read more";
    }
}


// Qs3 !! Student for!!

function addStudent() {
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let grade = document.getElementById('grade').value;

  let table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
  let newRow = table.insertRow(table.rows.length);
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);

  cell1.innerHTML = firstName;
  cell2.innerHTML = lastName;
  cell3.innerHTML = grade;
  cell4.innerHTML = '<button onclick="editStudent(this)">Edit</button> ' +
    '<button onclick="deleteStudent(this)">Delete</button>';

  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('grade').value = '';
}

function editStudent(button) {
  let row = button.parentNode.parentNode;
  let cells = row.getElementsByTagName('td');

  document.getElementById('editFirstName').value = cells[0].innerHTML;
  document.getElementById('editLastName').value = cells[1].innerHTML;
  document.getElementById('editGrade').value = cells[2].innerHTML;

  document.getElementById('editForm').style.display = 'block';

  document.getElementById('editForm').editedRow = row;
}

function updateStudent() {
  let editedRow = document.getElementById('editForm').editedRow;

  if (editedRow) {
    var cells = editedRow.getElementsByTagName('td');

    cells[0].innerHTML = document.getElementById('editFirstName').value;
    cells[1].innerHTML = document.getElementById('editLastName').value;
    cells[2].innerHTML = document.getElementById('editGrade').value;

    document.getElementById('editForm').style.display = 'none';
  }
}

function deleteStudent(button) {
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
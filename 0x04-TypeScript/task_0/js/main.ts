interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 21,
  location: 'USA',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'UK',
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr = document.createElement('tr');
thead.appendChild(tr);

const th1 = document.createElement('th');
th1.textContent = 'First Name';
tr.appendChild(th1);

const th2 = document.createElement('th');
th2.textContent = 'Last Name';
tr.appendChild(th2);

const th3 = document.createElement('th');
th3.textContent = 'Age';
tr.appendChild(th3);

const th4 = document.createElement('th');
th4.textContent = 'Location';
tr.appendChild(th4);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

studentsList.forEach((student) => {
  const tr = document.createElement('tr');
  tbody.appendChild(tr);

  const td1 = document.createElement('td');
  td1.textContent = student.firstName;
  tr.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = student.lastName;
  tr.appendChild(td2);

  const td3 = document.createElement('td');
  td3.textContent = student.age.toString();
  tr.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = student.location;
  tr.appendChild(td4);
});

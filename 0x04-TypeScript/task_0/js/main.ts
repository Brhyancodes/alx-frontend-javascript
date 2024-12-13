interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
    firstName: 'Tracy',
    lastName: 'Chepkemboi',
    age: 22,
    location: 'Nairobi',

};
const student2: Student = {
    firstName: 'Michelle',
    lastName: 'Cheptoo',
    age: 24,
    location: 'Karen',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1);
headerCell1.innerText = 'First Name';
headerCell2.innerText = 'Location';

studentsList.forEach(student => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerText = student.firstName;
  cell2.innerText = student.location;
});

document.body.appendChild(table);
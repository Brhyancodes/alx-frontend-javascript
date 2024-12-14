interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional
  location: string;
  [key: string]: any; // Allow any additional properties
}
// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Required attribute
}
// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string; // Function signature
}
// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

const director1: Directors = {
  firstName: 'Tracy',
  lastName: 'Cheptoo',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
// Call printTeacher with director1's name
console.log(printTeacher(director1.firstName, director1.lastName)); // Output: T. Cheptoo

//log Director to the console
console.log(director1);

const teacher3: Teacher = {
  firstName: 'Brian',
  fullTimeEmployee: false,
  lastName: 'Weke',
  location: 'Lavington',
  contract: false, // Additional property
};

console.log(teacher3);
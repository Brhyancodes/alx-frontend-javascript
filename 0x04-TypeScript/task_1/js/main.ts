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
// Define the StudentClass interface for the constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass; // Constructor signature
}

// Define the StudentClass interface
interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string; // Method signature
  displayName(): string; // Method signature
}

// Implement the StudentClass
class Student implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage of StudentClass
const student1 = new Student('Michelle', 'Chepkorir');
console.log(student1.displayName()); // Output: Michelle
console.log(student1.workOnHomework()); // Output: Currently working

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
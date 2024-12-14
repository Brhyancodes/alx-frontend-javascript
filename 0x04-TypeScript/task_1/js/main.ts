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
const director1: Directors = {
  firstName: 'Tracy',
  lastName: 'Cheptoo',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
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
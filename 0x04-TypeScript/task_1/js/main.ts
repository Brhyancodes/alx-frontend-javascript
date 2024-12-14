interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional
  location: string;
  [key: string]: any; // Allow any additional properties
}

const teacher3: Teacher = {
  firstName: 'Brian',
  fullTimeEmployee: false,
  lastName: 'Weke',
  location: 'Lavington',
  contract: false, // Additional property
};

console.log(teacher3);
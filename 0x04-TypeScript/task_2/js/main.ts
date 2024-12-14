// Define the DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Create the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
// Define the Subjects string literal type
type Subjects = 'Math' | 'History';

// Implement the teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
  // This return is technically unreachable due to the type constraint
  return 'Unknown subject'; // Fallback, but not necessary
}
// Example usage
const employee1 = createEmployee(400); // Should create a Teacher
console.log(employee1.workFromHome()); // Output: Cannot work from home
console.log(employee1.getCoffeeBreak()); // Output: Cannot have a break
console.log(employee1.workTeacherTasks()); // Output: Getting to work

const employee2 = createEmployee(600); // Should create a Director
console.log(employee2.workFromHome()); // Output: Working from home
console.log(employee2.getCoffeeBreak()); // Output: Getting a coffee break
console.log(employee2.workDirectorTasks()); // Output: Getting to director tasks

// Testing the teachClass function
console.log(teachClass('Math')); // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History
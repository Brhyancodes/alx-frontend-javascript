# TypeScript Project: Student and Teacher Interfaces

This repository contains a series of TypeScript tasks focused on creating interfaces, classes, and functions related to students and teachers. The project is structured into multiple tasks, each building upon the previous one to enhance your understanding of TypeScript.

## Table of Contents

- [Project Overview](#project-overview)
- [Task 0: Creating an Interface for a Student](#task-0-creating-an-interface-for-a-student)
- [Task 1: Building a Teacher Interface](#task-1-building-a-teacher-interface)
- [Task 2: Extending the Teacher Class](#task-2-extending-the-teacher-class)
- [Task 3: Printing Teachers](#task-3-printing-teachers)
- [Task 4: Writing a Class](#task-4-writing-a-class)
- [Task 5: Advanced Types Part 1](#task-5-advanced-types-part-1)
- [Task 6: Creating Functions Specific to Employees](#task-6-creating-functions-specific-to-employees)
- [Task 7: String Literal Types](#task-7-string-literal-types)
- [Task 8: Ambient Namespaces](#task-8-ambient-namespaces)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project aims to provide a hands-on experience with TypeScript by implementing various interfaces and classes related to students and teachers. Each task focuses on different aspects of TypeScript, including interfaces, classes, and advanced types.

## Task 0: Creating an Interface for a Student

- **Directory**: `task_0`
- **Files**: `js/main.ts`, `package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`
- **Description**:
  - Create an interface named `Student` with the following properties:
    - `firstName` (string)
    - `lastName` (string)
    - `age` (number)
    - `location` (string)
  - Create two student objects and store them in an array named `studentsList`.
  - Render a table displaying the first name and location of each student.

## Task 1: Building a Teacher Interface

- **Directory**: `task_1`
- **Files**: `js/main.ts`, `package.json`, `tsconfig.json`, `webpack.config.js`
- **Description**:
  - Create an interface named `Teacher` with the following properties:
    - `firstName` (string)
    - `lastName` (string)
    - `fullTimeEmployee` (boolean)
    - `yearsOfExperience` (optional, number)
    - `location` (string)
  - Allow additional properties to be added to the `Teacher` object.

## Task 2: Extending the Teacher Class

- **Directory**: `task_1`
- **Files**: `js/main.ts`
- **Description**:
  - Create an interface named `Directors` that extends the `Teacher` interface and includes an additional property `numberOfReports` (number).

## Task 3: Printing Teachers

- **Directory**: `task_1`
- **Files**: `js/main.ts`
- **Description**:
  - Write a function `printTeacher` that accepts `firstName` and `lastName` as arguments and returns the first letter of the first name and the full last name.

## Task 4: Writing a Class

- **Directory**: `task_1`
- **Files**: `js/main.ts`
- **Description**:
  - Create a class named `StudentClass` with a constructor that accepts `firstName` and `lastName`.
  - Implement methods `workOnHomework` and `displayName`.

## Task 5: Advanced Types Part 1

- **Directory**: `task_2`
- **Files**: `js/main.ts`, `webpack.config.js`, `tsconfig.json`, `package.json`
- **Description**:
  - Create interfaces for `DirectorInterface` and `TeacherInterface` with specific methods.
  - Implement classes `Director` and `Teacher` that adhere to their respective interfaces.

## Task 6: Creating Functions Specific to Employees

- **Directory**: `task_2`
- **Files**: `js/main.ts`
- **Description**:
  - Write functions `isDirector` and `executeWork` to handle employee types and their respective tasks.

## Task 7: String Literal Types

- **Directory**: `task_2`
- **Files**: `js/main.ts - **Description**:
  - Create a string literal type named `Subjects` that allows the values `Math` or `History` only.
  - Write a function `teachClass` that takes `todayClass` as an argument and returns the appropriate teaching message based on the class.

## Task 8: Ambient Namespaces

- **Directory**: `task_3`
- **Files**: `js/main.ts`, `package.json`, `webpack.config.js`, `tsconfig.json`
- **Description**:
  - Create a type `RowID` and an interface `RowElement` with specified fields.
  - Implement CRUD operations using an external library and create an ambient declaration file for type definitions.

## Requirements

- Ensure that when running `npm run build`, no TypeScript errors are displayed.
- Use TypeScript for all variables where applicable.
- Follow the project structure as outlined in each task.

## Installation

To get started with this project, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/yourusername/frontend-javascript.git
cd frontend-javascript/0x04-TypeScript
npm install
```

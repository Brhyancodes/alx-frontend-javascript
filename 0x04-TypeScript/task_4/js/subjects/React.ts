namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number; // Using declaration merging
  }

  export class React extends Subject {
    public getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    public getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
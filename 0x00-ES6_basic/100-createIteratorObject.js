export default function createIteratorObject(report) {
    const departments = Object.values(report.allEmployees).flat();
    let currentIdx = 0;
  
    return {
      next() {
        if (currentIdx < departments.length) {
          return { value: departments[currentIdx++], done: false };
        } else {
          return { done: true };
        }
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  }
  
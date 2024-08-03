const person = {
  firstName: "Waqar",
  lastName: "Hussain",
  age: 22,

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  celebrateBirthday() {
    this.age += 1;
    return `Happy Birthday, ${this.firstName}! You are now ${this.age} years`;
  },
};

console.log(person);

console.log(person.getFullName);
console.log(person.celebrateBirthday);

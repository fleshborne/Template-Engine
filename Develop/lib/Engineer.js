// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// require the parent 'employee'
// remember to use super here to pull parent's object data to fill in arguments.
const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  // write functions to call the data
  getGithub() {
    return this.github;
  }
  // create getRole as described in test file
  getRole() {
    return `Engineer`;
  }
}

module.exports = Engineer;

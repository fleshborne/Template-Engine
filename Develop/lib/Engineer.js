// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// require the parent 'employee'
const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  // write functions to call the data
  getGithub() {
    return this.gitHub;
  }
  // create getRole as described in test file
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;

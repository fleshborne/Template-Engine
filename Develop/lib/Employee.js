// TODO: Write code to define and export the Employee class
// class Employee makes sense as the parent class,
// essentially everyone is an employee so keep it basic
class Employee {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
  }
  //   write functions to display these constructor traits
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getId() {
    return this.id;
  }
  getRole() {
    return "Employee";
  }
}
module.exports = Employee;

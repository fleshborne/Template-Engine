// TODO: Write code to define and export the Employee class
// class Employee makes sense as the parent class,
// essentially everyone is an employee so keep it basic
// remember that keyword "super" will refer to the parent's class objects
// cited from : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
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

  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
module.exports = Employee;

//

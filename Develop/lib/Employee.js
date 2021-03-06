// TODO: Write code to define and export the Employee class
// class Employee makes sense as the parent class,
// essentially everyone is an employee so keep it basic
// remember that keyword "super" will refer to the parent's class objects
// cited from : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //   write functions to display these constructor traits
  getName() {
    let name = this.name;
    return name;
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

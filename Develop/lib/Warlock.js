const Employee = require("./Employee");

class Warlock extends Employee {
  constructor(name, id, email, github, magic, hp) {
    super(name, id, email);
    this.github = github;
    this.magic = magic;
    this.hp = hp;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Warlock";
  }
  getMagic() {
    return this.magic;
  }
  getHp() {
    return this.hp;
  }
}
module.exports = Warlock;

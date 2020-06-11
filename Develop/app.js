const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Warlock = require("./lib/Warlock");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// use this to push employees into your team array
const myTeam = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const warlockInsert = [
  {
    type: "input",
    name: "name",
    message: "Insert name of Warlock here.",
    default: "Wise Old Man",
  },
  {
    type: "input",
    name: "id",
    message: "Insert ID of Warlock here.",
    default: 710,
  },
  {
    type: "input",
    name: "email",
    message: "Insert contact info for Warlock here.",
    default: "Wisely@warlock.org",
  },
  {
    type: "input",
    name: "gitHub",
    message: "Insert GitHub Profile for Warlock here.",
    default: "Warlock",
  },
  {
    type: "input",
    name: "magic",
    message: "Insert magic level for Warlock",
    default: "99",
  },
  {
    type: "input",
    name: "hp",
    message: "Insert Hp level for Warlock",
    default: "99",
  },
];
const engineerInsert = [
  {
    type: "input",
    name: "name",
    message: "Insert name of Engineer here.",
    default: "Binks",
  },
  {
    type: "input",
    name: "id",
    message: "Insert ID of Engineer here.",
    default: 9001,
  },
  {
    type: "input",
    name: "email",
    message: "Insert contact info for Engineer here.",
    default: "binks@email.com",
  },
  {
    type: "input",
    name: "gitHub",
    message: "Insert GitHub Profile for Engineer here.",
    default: "Sith Lord Binks",
  },
];

const internInsert = [
  {
    type: "input",
    name: "name",
    message: "Insert name of Intern here.",
    default: "Billy",
  },
  {
    type: "input",
    name: "id",
    message: "Insert ID of Intern here.",
    default: 420,
  },
  {
    type: "input",
    name: "email",
    message: "Insert contact info for Intern here.",
    default: "billy@gowiththeflow.com",
  },
  {
    type: "input",
    name: "school",
    message: "Insert name of school for Intern here.",
    default: "State University",
  },
];

inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "Insert name of Manager here.",
      default: "Blake Thompson",
    },
    {
      type: "input",
      name: "managerId",
      message: "Insert ID of Manager here.",
      default: "1",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Insert contact info for Manager here.",
      default: "blake@email.com",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "Insert Office Number of Manager here.",
      default: "696-969-6969",
    },
  ])
  .then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOfficeNumber
    );
    myTeam.push(manager);
    // create a function for newly appointed manager to add employees to their team.
    // refer back to read me homework when you used IF statements to grab github profile image
    const addEmployee = () => {
      inquirer
        .prompt({
          type: "list",
          name: "newTeamMember",
          message: "Choose New Team member",
          choices: ["Engineer", "Intern", "Warlock", "Team is full"],
        })
        .then((answers) => {
          if (answers.newTeamMember === "Engineer") {
            inquirer.prompt(engineerInsert).then((answers) => {
              const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.gitHub
              );
              myTeam.push(engineer);
              addEmployee();
            });
          } else if (answers.newTeamMember === "Warlock") {
            inquirer.prompt(warlockInsert).then((answers) => {
              const warlock = new Warlock(
                answers.name,
                answers.id,
                answers.email,
                answers.gitHub,
                answers.magic,
                answers.hp
              );
              myTeam.push(warlock);
              addEmployee();
            });
          } else if (answers.newTeamMember === "Intern") {
            inquirer.prompt(internInsert).then((answers) => {
              const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
              );
              myTeam.push(intern);
              addEmployee();
            });
          } else {
            console.log("Team is set, and ready to begin work!");
            // calling render function to render myTeam with employees added
            const data = render(myTeam);
            // After you have your html, you're now ready to create an HTML file using the HTML
            // returned from the `render` function. Now write it to a file named `team.html` in the
            // `output` folder. You can use the variable `outputPath` above target this location.
            // Hint: you may need to check if the `output` folder exists and create it if it
            // does not.
            fs.writeFileSync(outputPath, data);
          }
        });
    };
    addEmployee();
  });

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

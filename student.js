const readline = require("readline-sync");
const fs = require("fs");

const dataFilePath = "students.txt";

function showMenu() {
  console.log("Student Managerment");
  console.log("===============================");
  console.log("1. Show all student");
  console.log("2. Create student and return Menu");
  console.log("3. Delete student");
  console.log("4. Edit student");
  console.log("5. Find student by name");
  console.log("6. Sort student by name ascending ");
  console.log("7. Sort student by age ascending ");
  console.log("8. Exit");
  console.log("===============");
}

function showStudents() {
  const data = fs.readFileSync(dataFilePath, "utf8");
  console.log("List students:");
  console.log(data);
}

function addStudent() {
  const name = readline.question("Name: ");
  const age = readline.question("Age: ");
  const sex = readline.question("Sex: ");

  const student = {
    name: name,
    age: age,
    sex: sex,
  };

  fs.appendFileSync(dataFilePath, JSON.stringify(student) + "\n");

  console.log("Add student success");
}

function deleteStudent(students, name) {}

function main() {
  while (true) {
    showMenu();
    const option = readline.question("Your Choise: ");
    switch (option) {
      case "1":
        showStudents();
        break;
      case "2":
        addStudent();
        break;
      case "3":
        deleteStudent();
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        break;
      case "7":
        break;
      case "8":
        console.log("Exited");
        return;
      default:
        console.log("Error.");
    }
  }
}

main();

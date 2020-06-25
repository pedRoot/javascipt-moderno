// clases

// Javascript es un lenguae prototipeado lo que quiere decir que
// cualquier acercamiento a POO como se maneja en otros lenguajaes
// es a travez de sugar syntaxis

// ES6

// class declaration
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

class Task {
  //
  // Constructor
  constructor(title) {
    if (!title) throw new Error("We need a title!!!");
    this.uid = generateUUID();
    this.title = title;
    this.completed = false;
  }
}

Tasklist = class {
  constructor() {
    this.tasks = [
      { uid: 1, title: "Aprender Javascript", completed: false },
      { uid: 2, title: "Aprender Vue", completed: false },
      { uid: 3, title: "Aprender Node", completed: false },
      { uid: 4, title: "Aprender php", completed: true },
      { uid: 5, title: "Aprender python", completed: true },
    ];
  }

  // getters
  // para invocarlo se llmaa como a una propiedad sin parentesis
  get unCompleted() {
    return [...this.tasks].filter((t) => !t.completed);
  }
  get completed() {
    return [...this.tasks].filter((t) => t.completed);
  }
  get listAll() {
    return [...this.tasks];
  }

  // setters
  // para invocarlo se llmaa como a una propiedad sin parentesis
  /**
   * @param {{ title: string; completed: boolean; }} task
   */
  set addTask(task) {
    this.tasks.push(task);
  }

  // methods
  search(task) {
    return this.tasks.find((t) => t.title.includes(task));
  }
  remove(task) {
    const index = this.tasks.findIndex((t) => t.title.includes(task));
    this.tasks.splice(index, 1);
  }

  // metodos estaticos, los cuales no son heredables y se pueden
  // llamar sin necesidad de la instancia
  //
  static normalizeTitle(title) {
    title = title.trim();
    return title.substring(0, 1).toUpperCase() + title.substring(1);
  }
};

const tarea = new Task("Aprender Javascript");
console.log(tarea);

const lista = new Tasklist();

// consumimos u metodo estatico sin la instancia
const title = Tasklist.normalizeTitle("     parar le pico   ");

// se registra una nueva tarea
const newTarea = new Task(title);
console.log("Crear tarea: ", newTarea);
lista.addTask = { ...newTarea };

console.log(
  "Sin completar: ",
  lista.unCompleted.map((r) => r.title)
);
console.log(
  "Completada: ",
  lista.completed.map((r) => r.title)
);
console.log(
  "Todas: ",
  lista.listAll.map((r) => r.title)
);

const localeTask = "pico";
console.log(`Buscar: ${localeTask}`, lista.search(localeTask));

// se registra otra nueva tarea
const newOtherTarea = new Task("Hacer dieta");
lista.addTask = { ...newOtherTarea };
console.log(
  "Todas antes de eliminar: ",
  lista.listAll.map((r) => r.title)
);
lista.remove("Hacer dieta");
console.log(
  "Todas despues de eliminar: ",
  lista.listAll.map((r) => r.title)
);

// Sub Clases
//
// Las sub Clases son especificaciones propias y particulares
// cuya modificacion frente a la clase padre es tan peuqena
// que no vala la pena hacer una clase nueva
class Reminder extends Task {
  constructor(title, date) {
    super(title);
    this.date = date;
  }

  get duration() {
    return `${this.title} finaliza el ${this.date}`;
  }
}

const caminar = new Reminder("Caminar en las manianas", "24 de agosto 2020");
console.log(caminar.duration);

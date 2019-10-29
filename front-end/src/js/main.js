import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ToDos from "./components/ToDos";
import Values from "./components/Values";
import apiActions from "./api/api-actions";

export default () => {
  pageBuild();
};

function pageBuild() {
  header();
  footer();
  navHome();
  navToDos();
  navValues();
}

function header() {
  const header = document.querySelector("#header");
  header.innerHTML = Header(); //send component into our html
}

function footer() {
  const footer = document.querySelector("#footer");
  footer.innerHTML = Footer();
}

function navHome() {
  const homeButton = document.querySelector(".nav__home");
  homeButton.addEventListener("click", function() {
    document.querySelector("#app").innerHTML = Home();
  });
}

function navToDos() {
  const toDosButton = document.querySelector(".nav__toDos");

  toDosButton.addEventListener("click", function() {
    apiActions.getRequest("https://localhost:5001/api/todos", toDos => {
      document.querySelector("#app").innerHTML = ToDos(toDos);
    });
  });

  const app = document.querySelector("#app");
  app.addEventListener("click", function() {
    if (event.target.classList.contains("add-toDo__submit")) {
      const toDo = event.target.parentElement.querySelector(
        ".add-toDo__toDoName"
      ).value;
      console.log(toDo);
      apiActions.postRequest(
        "https://localhost:5001/api/todos",
        { toDo: toDo },
        toDos => {
          console.log(toDos);
          document.querySelector("#app").innerHTML = ToDos(toDos);
        }
      );
    }
  });
}

function navValues() {
  const valueButton = document.querySelector(".nav__values");
  valueButton.addEventListener("click", function() {
    apiActions.getRequest("https://localhost:5001/api/values", values => {
      document.querySelector("#app").innerHTML = Values(values);
    });
  });
}

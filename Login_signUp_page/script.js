const signUp_button = document.getElementById("btn1");
const login_button = document.getElementById("btn2");

const signUp_form = document.getElementById("signUp");
const login_form = document.getElementById("login");

signUp_button.addEventListener("click", () => {
    console.log("clicked 1");
    console.log(login_form.className);
  if (signUp_form.className === "d-none") {
    signUp_form.className = "d-block"; // signUp form visible
    login_form.className = "d-none"; // login form disable
  }
});

login_button.addEventListener("click", () => {
    console.log("clicked 2");
    console.log(login_form.className);
  if (login_form.className === "d-none") {
    login_form.className = "d-block"; // login form visible
    signUp_form.className = "d-none"; // signUp form disable
  }
});

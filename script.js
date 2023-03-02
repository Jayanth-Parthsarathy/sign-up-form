const pass = document.getElementById("pass");
const conf = document.getElementById("conf");
const warn = document.getElementById("warn");
const submit = document.getElementById("submit");

function validate() {
  if (pass.value === conf.value) {
    pass.setCustomValidity("");
  } else {
    pass.setCustomValidity("Passwords don't match");
  }
}

pass.onchange = validate;
conf.onkeyup = validate;

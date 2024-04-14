const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
const name = document.getElementById("fullname");
const email = document.getElementById("email");
const message = document.getElementById("message");
// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // alert('a');
  var ebody = `
  <b>Name : </b>${name.value}
<br>
<b>Email : </b>${email.value}
<br>
<b>Message : </b> <p>${message.value}</p>`;
  Email.send({
    SecureToken: "197b6bad-f76b-4f7b-b050-b64a81c5edac",
    To: "mamotomira12345@gmail.com",
    From: "shinemaungoo.smo@gmail.com",
    Subject: "Contact From " + name.value,
    Body: ebody,
  }).then((response) => {
    var alertMessage = document.getElementById("alertMessage");
    var alertBox = document.getElementById("alertBox");
    if (response === "OK") {
      Email.send({
        SecureToken: "197b6bad-f76b-4f7b-b050-b64a81c5edac",
        To: email.value,
        From: "shinemaungoo.smo@gmail.com",
        Subject: "Thank you for contacting me",
        Body: "Thank for contacting me, " + name.value + ".",
      }).then((response) => {
        if (response === "OK") {
          console.log("Email sent successfully!");
        } else {
          console.error("Error sending email: " + response);
        }
      });
      alertMessage.innerHTML = "Email sent successfully!";
      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      alertMessage.innerHTML = "Error sending email: " + response;
    }
    alertBox.style.display = "flex";
    setTimeout(function () {
      alertBox.style.display = "none";
    }, 3000);
  });
});
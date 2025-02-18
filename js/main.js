const nameInputElement = document.getElementById("name");
const emailInputElement = document.getElementById("email");
const subjectInputElement = document.getElementById("subject");
const textInputElement = document.getElementById("message");
const submitElement = document.getElementById("submit");

submitElement.addEventListener("click", function (event) {
  event.preventDefault();
  let contactData = {
    name: nameInputElement.value,

    email: emailInputElement.value,

    subject: subjectInputElement.value,

    message: textInputElement.value,
  };
  console.log(contactData);
  localStorage.contactData = JSON.stringify(contactData);
});

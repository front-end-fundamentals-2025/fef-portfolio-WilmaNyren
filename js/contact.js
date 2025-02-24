const nameInputElement = document.getElementById("name");
const emailInputElement = document.getElementById("email");
const subjectInputElement = document.getElementById("subject");
const textInputElement = document.getElementById("message");
document;
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

const buttonElement = document.getElementById("button");
const contactDisplayElement = document.getElementById("contact-display");
let isContactDisplayed = false;

buttonElement.addEventListener("click", function (event) {
  event.preventDefault();

  if (isContactDisplayed) {
    contactDisplayElement.innerHTML = "<h3></h3>";
  } else {
    let contactData = {
      name: nameInputElement.value,
      email: emailInputElement.value,
      subject: subjectInputElement.value,
      message: textInputElement.value,
    };
    /* about the folowing 5-6 lines https://chatgpt.com/share/67b70e00-9e14-8002-93f8-0df0f4a1dab2*/
    contactDisplayElement.innerHTML = `
        <h3>Contact Information:</h3>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Subject:</strong> ${contactData.subject}</p>
        <p><strong>Message:</strong> ${contactData.message}</p>
      `;
  }
});

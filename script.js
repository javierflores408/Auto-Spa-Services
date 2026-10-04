document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const formMessage = document.getElementById("formMessage");

  if (!form) return;

  form.addEventListener("submit", () => {
    if (formMessage) {
      formMessage.textContent = "Sending your request...";
    }
  });
});

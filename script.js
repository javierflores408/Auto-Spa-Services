document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const formMessage = document.getElementById("formMessage");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");

    formMessage.textContent = `Thanks, ${name}! Your request has been received. We'll contact you soon to confirm your drop-off appointment.`;
    form.reset();
  });
});

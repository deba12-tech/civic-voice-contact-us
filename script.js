const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", async function(e) {
  e.preventDefault();
  const data = new FormData(form);
  const res = await fetch(form.action, { method: form.method, body: data, headers: { 'Accept': 'application/json' } });
  if (res.ok) {
    formStatus.textContent = "Thanks! Your message has been sent.";
    form.reset();
  } else {
    formStatus.textContent = "Oops! There was a problem sending your message.";
  }
});

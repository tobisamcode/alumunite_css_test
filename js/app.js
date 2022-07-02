const scrollIndicator = document.querySelector(".top");

window.addEventListener("scroll", () => {
  let maxHeight = window.document.body.scrollHeight - window.innerHeight;
  let percentage = window.scrollY / maxHeight * 100;
  scrollIndicator.style.width = percentage + "%";
});

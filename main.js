const main = document.querySelector("main");
const btn = document.querySelector("button#btn");

btn.addEventListener("click", () => {
  if (main.classList.contains("light")) {
    main.classList.toggle("dark");
  } else {
    main.classList.toggle("light");
  }
});

const items = document.querySelectorAll(".collapse");
let activeItem;

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", (event) => {
    const current = event.currentTarget;
    if (activeItem) {
      activeItem.classList.remove("open");
    }
    activeItem = current;
    current.classList.toggle("open");
  });
}

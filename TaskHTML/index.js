import { products } from "./uitlity.js";

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}
document.getElementById("hamburger").addEventListener("click", toggleMenu);

function createProductCards() {
  const cardGrid = document.getElementById("card-grid");
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.title;
    const cardBody = document.createElement("div");
    const title = document.createElement("h3");
    title.innerText = product.title;

    const description = document.createElement("p");
    description.innerText = product.description;
    const button = document.createElement("button");
    button.innerText = "View Details";

    button.onclick = function () {
      document.getElementById("modalProductImage").src = product.img;
      document.getElementById("modalProductTitle").innerText = product.title;
      document.getElementById("modalProductDescription").innerText =
        product.description;
      const modal = new bootstrap.Modal(
        document.getElementById("productModal")
      );
      modal.show();
    };

    card.appendChild(img);
    cardBody.appendChild(title);

    cardBody.appendChild(description);
    cardBody.appendChild(button);

    card.appendChild(cardBody);
    cardGrid.appendChild(card);
    console.log(cardGrid);
  });
}
createProductCards();

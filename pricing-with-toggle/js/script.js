function togglePrice() {
  const toggleBtn = document.querySelector('input[type="checkbox"');
  const pricesCard = document.querySelectorAll(".card__price");
  const symbol = `<span>$</span>`;

  toggleBtn.addEventListener("click", function () {
    pricesCard.forEach(
      (price) =>
        (price.innerHTML = this.checked
          ? `${symbol} ${price.dataset.monthly}`
          : `${symbol} ${price.dataset.annually}`)
    );
  });
}

togglePrice();

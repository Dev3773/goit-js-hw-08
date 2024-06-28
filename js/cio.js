const container = document.querySelector(".products");

// container.innerHTML = createMarkup(products);
container.insertAdjacentHTML("beforeend", createMarkup(products));

  // 4) Вешаем сдушатель событий на контейнер
container.addEventListener("click", handleModalOpen);

// 5) Функция 
function handleModalOpen(event) {
  if (event.currentTarget === event.target) return; // перевірка на випадок того, якщо ми клікнемо не на карточку (нам не треба обробляти цей варіант)

  const currentProduct = event.target.closest(".item"); // шукає найближчий батьківський елемент, який підходить під цей селектор
  const productId = Number(currentProduct.dataset.id); // витягуємо айді з дата атрибуту товару на який клікнули

  const product = products.find(({ id }) => id === productId); // шукаємо потрібний обʼєкт по айді

  console.log(product);

  // створюємо екземляр модального вікна
  const instance = basicLightbox.create(`
	<div class="modal">
    <img src="${product.img}" alt="${product.name}" >
    <h2>${product.name}</h2>
    <p>Price: ${product.price}</p>
        <p>${product.description}</p>
  </div>
`);

  instance.show(); // метод, який відкриє модальне вікно
}

function createMarkup(arr) {
  return arr
    .map(
      ({ id, img, name, price }) => `
  <li class="item" data-id="${id}">
    <img src="${img}" alt="${name}" >
    <h2>${name}</h2>
    <p>Price: ${price}</p>
  </li>
  `
    )
    .join("");
}

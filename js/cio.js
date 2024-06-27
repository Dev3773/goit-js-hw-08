
// 1) Доступ к ul
const container = document.querySelector(".products");


// container.innerHTML = createMarkup(products);
// 2) Вставляем розметку
container.insertAdjacentHTML("beforeend", createMarkup(products));


// 3) Создаём разметку
function handleModalOpen(event) {
  function createMarkup(arr) {
    return arr.map(({ id, img, name, price }) => `
  <li class="item" data-id="${id}">
    <img src="${img}" alt="${name}" >
    <h2>${name}</h2>
    <p>Price: ${price}</p>
  </li>
  `
    )
      .join("");
  }


  // 4) Вешаем сдушатель событий на контейнер
  container.addEventListener("click", handleModalOpen);
  
  
  // 5) Функция 
  function handleModalOpen(event) {
    if (event.currentTarget === event.target) return; // перевірка на випадок того, якщо ми клікнемо не на карточку (нам не треба обробляти цей варіант)

    const currentProduct = event.target.closest(".item"); // шукає найближчий батьківський елемент, який підходить під цей селектор
    const productId = Number(currentProduct.dataset.id); // витягуємо айді з дата атрибуту товару на який клікнули (обрати внимание на приведения тиров)

    const product = products.find(({ id }) => id === productId); // шукаємо потрібний обʼєкт по айді


    // створюємо екземляр модального вікна
    function handleModalOpen(event) {
      const instance = basicLightbox.create(`
	<div class="modal">
    <button class="btn">X</button>
    <img src="${product.img}" alt="${product.name}" >
    <h2>${product.name}</h2>
    <p>Price: ${product.price}</p>
    <p>${product.description}</p>
  </div>
`);

      instance.show(); // метод, який відкриє модальне вікно
    }
    instance.show(); // метод, який відкриє модальне вікно

    const btnCloseRef = document.querySelector(".btn");
    btnCloseRef.addEventListener("click", handleClick => instance.close()); //  Закрывает модалку
  }

}
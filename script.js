



// document.addEventListener('DOMContentLoaded', function () {
//     // Carousel
//     let slideIndex = 0;
//     const slides = document.querySelectorAll('.carousel-slide');
//     const prev = document.querySelector('.carousel-control.prev');
//     const next = document.querySelector('.carousel-control.next');

//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.style.display = i === index ? 'block' : 'none';
//         });
//     }

//     function changeSlide(n) {
//         slideIndex += n;
//         if (slideIndex >= slides.length) {
//             slideIndex = 0;
//         } else if (slideIndex < 0) {
//             slideIndex = slides.length - 1;
//         }
//         showSlide(slideIndex);
//     }

//     if (prev) {
//         prev.addEventListener('click', () => changeSlide(-1));
//     }
//     if (next) {
//         next.addEventListener('click', () => changeSlide(1));
//     }
//     showSlide(slideIndex);

//     // Menu toggle for mobile
//     const menuToggle = document.getElementById('menu-toggle');
//     const menu = document.getElementById('menu');

//     if (menuToggle) {
//         menuToggle.addEventListener('click', () => {
//             menu.classList.toggle('active');
//         });
//     }

//     // Cart functionality
//     const cartKey = 'cart';
//     const totalKey = 'total';

//     function addToCart(productName, price) {
//         let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
//         let total = parseFloat(localStorage.getItem(totalKey)) || 0;

//         if (isNaN(total)) {
//             total = 0;
//         }

//         cart.push({ name: productName, price: price });
//         total += price;

//         localStorage.setItem(cartKey, JSON.stringify(cart));
//         localStorage.setItem(totalKey, total.toString());

//         alert(`Added ${productName} to the cart at $${price}`);
//         updateCartDisplay();
//     }

//     function updateCartDisplay() {
//         const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
//         const total = parseFloat(localStorage.getItem(totalKey)) || 0;

//         if (isNaN(total)) {
//             total = 0;
//         }

//         const cartList = document.getElementById('cart-list');
//         const totalAmount = document.getElementById('total-amount');

//         if (cartList) {
//             cartList.innerHTML = '';
//             cart.forEach(item => {
//                 const li = document.createElement('li');
//                 li.textContent = `${item.name}: $${item.price}`;
//                 cartList.appendChild(li);
//             });
//         }

//         if (totalAmount) {
//             totalAmount.textContent = `Total: $${total}`;
//         }
//     }

//     window.addToCart = addToCart;

//     // Load cart on page load if on cart page
//     if (document.getElementById('cart-list')) {
//         updateCartDisplay();
//     }

//     // Search functionality
//     const searchBar = document.getElementById('search-bar');
//     const searchResults = document.getElementById('search-results');
//     const searchResultsList = document.getElementById('search-results-list');

//     if (searchBar) {
//         searchBar.addEventListener('input', function () {
//             const query = searchBar.value.toLowerCase();
//             if (query.length > 2) {
//                 if (searchResultsList) {
//                     searchResultsList.innerHTML = `<li>Result for "${query}"</li>`;
//                 }
//                 if (searchResults) {
//                     searchResults.classList.remove('hidden');
//                 }
//             } else {
//                 if (searchResults) {
//                     searchResults.classList.add('hidden');
//                 }
//             }
//         });
//     }
// });


// document.addEventListener('DOMContentLoaded', function () {
//     // Carousel functionality (if needed)
//     let slideIndex = 0;
//     const slides = document.querySelectorAll('.carousel-slide');
//     const prev = document.querySelector('.carousel-control.prev');
//     const next = document.querySelector('.carousel-control.next');

//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.style.display = i === index ? 'block' : 'none';
//         });
//     }

//     function changeSlide(n) {
//         slideIndex += n;
//         if (slideIndex >= slides.length) {
//             slideIndex = 0;
//         } else if (slideIndex < 0) {
//             slideIndex = slides.length - 1;
//         }
//         showSlide(slideIndex);
//     }

//     if (prev) {
//         prev.addEventListener('click', () => changeSlide(-1));
//     }
//     if (next) {
//         next.addEventListener('click', () => changeSlide(1));
//     }
//     showSlide(slideIndex);

//     // Menu toggle for mobile
//     const menuToggle = document.getElementById('menu-toggle');
//     const menu = document.getElementById('menu');

//     if (menuToggle) {
//         menuToggle.addEventListener('click', () => {
//             menu.classList.toggle('active');
//         });
//     }

//     // Cart functionality
//     const cartKey = 'cart';
//     const totalKey = 'total';

//     function addToCart(productName, price, uom = 'pcs') {
//         if (!productName || !price) {
//             console.error('Product name or price is missing');
//             return;
//         }

//         let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
//         let total = parseFloat(localStorage.getItem(totalKey)) || 0;

//         const existingProductIndex = cart.findIndex(item => item.name === productName);

//         if (existingProductIndex !== -1) {
//             cart[existingProductIndex].quantity += 1;
//             cart[existingProductIndex].totalPrice += price;
//         } else {
//             cart.push({ name: productName, price: price, uom: uom, quantity: 1, totalPrice: price });
//         }
//         total += price;

//         localStorage.setItem(cartKey, JSON.stringify(cart));
//         localStorage.setItem(totalKey, total.toString());

//         updateCartDisplay();
//     }

//     function updateCartDisplay() {
//         const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
//         const total = parseFloat(localStorage.getItem(totalKey)) || 0;

//         const cartList = document.getElementById('cart-list');
//         const totalAmount = document.getElementById('total-amount');

//         if (cartList) {
//             cartList.innerHTML = '';
//             cart.forEach((item, index) => {
//                 const tr = document.createElement('tr');
//                 tr.innerHTML = `
//                     <td>${item.name || 'No name'}</td>
//                     <td>
//                         <button class="quantity-control" data-index="${index}" data-action="decrease">-</button>
//                         ${item.quantity || 0}
//                         <button class="quantity-control" data-index="${index}" data-action="increase">+</button>
//                     </td>
//                     <td>${item.uom || 'N/A'}</td>
//                     <td>$${item.price !== undefined ? item.price : '0.00'}</td>
//                     <td>$${item.totalPrice !== undefined ? item.totalPrice : '0.00'}</td>
//                     <td><button class="delete-item" data-index="${index}">Delete</button></td>
//                 `;
//                 cartList.appendChild(tr);
//             });
//         }

//         if (totalAmount) {
//             totalAmount.textContent = `Total: $${total.toFixed(2)}`;
//         }
//     }

//     function updateCartItemQuantity(index, action) {
//         let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
//         let total = parseFloat(localStorage.getItem(totalKey)) ;

//         if (cart[index]) {
//             if (action === 'increase') {
//                 cart[index].quantity += 1;
//                 cart[index].totalPrice += cart[index].price;
//                 total += cart[index].price;
//             } else if (action === 'decrease' && cart[index].quantity > 1) {
//                 cart[index].quantity -= 1;
//                 cart[index].totalPrice -= cart[index].price;
//                 total -= cart[index].price;
//             }
//         }

//         localStorage.setItem(cartKey, JSON.stringify(cart));
//         localStorage.setItem(totalKey, total.toString());

//         updateCartDisplay();
//     }

//     function deleteCartItem(index) {
//         let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
//         let total = parseFloat(localStorage.getItem(totalKey)) || 0;

//         if (cart[index]) {
//             total -= cart[index].totalPrice;
//             cart.splice(index, 1);
//         }

//         localStorage.setItem(cartKey, JSON.stringify(cart));
//         localStorage.setItem(totalKey, total.toString());

//         updateCartDisplay();
//     }

//     document.getElementById('cart-list').addEventListener('click', function (event) {
//         if (event.target.classList.contains('quantity-control')) {
//             const index = event.target.dataset.index;
//             const action = event.target.dataset.action;
//             updateCartItemQuantity(index, action);
//         } else if (event.target.classList.contains('delete-item')) {
//             const index = event.target.dataset.index;
//             deleteCartItem(index);
//         }
//     });

//     window.addToCart = addToCart;

//     if (document.getElementById('cart-list')) {
//         updateCartDisplay();
//     }

//     // Search functionality
//     const searchBar = document.getElementById('search-bar');
//     const searchResults = document.getElementById('search-results');
//     const searchResultsList = document.getElementById('search-results-list');

//     if (searchBar) {
//         searchBar.addEventListener('input', function () {
//             const query = searchBar.value.toLowerCase();
//             if (query.length > 2) {
//                 if (searchResultsList) {
//                     searchResultsList.innerHTML = `<li>Result for "${query}"</li>`;
//                 }
//                 if (searchResults) {
//                     searchResults.classList.remove('hidden');
//                 }
//             } else {
//                 if (searchResults) {
//                     searchResults.classList.add('hidden');
//                 }
//             }
//         });
//     }
// });







// document.addEventListener('DOMContentLoaded', function () {
//     // Carousel
//     let slideIndex = 0;
//     const slides = document.querySelectorAll('.carousel-slide');
//     const prev = document.querySelector('.carousel-control.prev');
//     const next = document.querySelector('.carousel-control.next');

//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.style.display = i === index ? 'block' : 'none';
//         });
//     }

//     function changeSlide(n) {
//         slideIndex += n;
//         if (slideIndex >= slides.length) {
//             slideIndex = 0;
//         } else if (slideIndex < 0) {
//             slideIndex = slides.length - 1;
//         }
//         showSlide(slideIndex);
//     }

//     if (prev) {
//         prev.addEventListener('click', () => changeSlide(-1));
//     }
//     if (next) {
//         next.addEventListener('click', () => changeSlide(1));
//     }
//     showSlide(slideIndex);

//     // Menu toggle for mobile
//     const menuToggle = document.getElementById('menu-toggle');
//     const menu = document.getElementById('menu');

//     if (menuToggle) {
//         menuToggle.addEventListener('click', () => {
//             menu.classList.toggle('active');
//         });
//     }

//     // Cart functionality
//     const cartKey = 'cart';
//     const totalKey = 'total';

//     function addToCart(productName, price) {
//         let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
//         let total = parseFloat(localStorage.getItem(totalKey)) || 0;

//         // Check if the item already exists in the cart
//         const existingItem = cart.find(item => item.name === productName);
//         if (existingItem) {
//             existingItem.quantity += 1;
//             existingItem.totalPrice = (existingItem.quantity * existingItem.price).toFixed(2);
//         } else {
//             const itemPrice = price || 0.00;
//             cart.push({ 
//                 name: productName || 'No name', 
//                 price: itemPrice, 
//                 quantity: 1, 
//                 uom: 'N/A', 
//                 // totalPrice: totalPrice.toFixed(2) 
//             });
//         }

//         total += price || 0.00;

//         localStorage.setItem(cartKey, JSON.stringify(cart));
//         localStorage.setItem(totalKey, total.toFixed(2));

//         alert(`Added ${productName} to the cart at $${price}`);
//         updateCartDisplay();
//     }

//     function updateCartDisplay() {
//         const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
//         const total = parseFloat(localStorage.getItem(totalKey)) || 0;

//         const cartList = document.getElementById('cart-list');
//         const totalAmount = document.getElementById('total-amount');

//         if (cartList) {
//             cartList.innerHTML = '';
//             cart.forEach((item, index) => {
//                 const tr = document.createElement('tr');
//                 tr.innerHTML = `
//                     <td>${item.name}</td>
//                     <td>
//                         <button class="quantity-control" data-index="${index}" data-action="decrease">-</button>
//                         ${item.quantity}
//                         <button class="quantity-control" data-index="${index}" data-action="increase">+</button>
//                     </td>
//                     <td>${item.uom}</td>
//                     <td>$${item.price}</td>
//                     <td>$${item.totalPrice}</td>
//                     <td><button class="delete-item" data-index="${index}">Delete</button></td>
//                 `;
//                 cartList.appendChild(tr);
//             });
//         }

//         if (totalAmount) {
//             totalAmount.textContent = `Total: $${total.toFixed(2)}`;
//         }
//     }

//     window.addToCart = addToCart;

//     // Load cart on page load if on cart page
//     if (document.getElementById('cart-list')) {
//         updateCartDisplay();
//     }

//     // Search functionality
//     const searchBar = document.getElementById('search-bar');
//     const searchResults = document.getElementById('search-results');
//     const searchResultsList = document.getElementById('search-results-list');

//     if (searchBar) {
//         searchBar.addEventListener('input', function () {
//             const query = searchBar.value.toLowerCase();
//             if (query.length > 2) {
//                 if (searchResultsList) {
//                     searchResultsList.innerHTML = '';
//                     // Mock search function
//                     const mockProducts = [
//                         'Apple', 'Banana', 'Carrot', 'Dairy Milk', 'Eggplant'
//                     ];
//                     const filteredProducts = mockProducts.filter(product => product.toLowerCase().includes(query));
//                     filteredProducts.forEach(product => {
//                         const li = document.createElement('li');
//                         li.textContent = product;
//                         searchResultsList.appendChild(li);
//                     });
//                     searchResults.classList.remove('hidden');
//                 }
//             } else {
//                 if (searchResults) {
//                     searchResults.classList.add('hidden');
//                 }
//             }
//         });
//     }

//     // Dynamically load categories on the homepage
//     function loadCategories() {
//         const categories = [
//             { name: 'Fruits', image: 'images/fruits.jpg' },
//             { name: 'Vegetables', image: 'images/vegetables.jpg' },
//             { name: 'Dairy', image: 'images/dairy.jpg' }
//         ];

//         const categoryContainer = document.querySelector('.category-boxes');
//         if (categoryContainer) {
//             categoryContainer.innerHTML = '';
//             categories.forEach(category => {
//                 const categoryDiv = document.createElement('div');
//                 categoryDiv.classList.add('category');
//                 categoryDiv.innerHTML = `
//                     <a href="products.html?category=${category.name.toLowerCase()}">
//                         <img src="${category.image}" alt="${category.name}">
//                         <div class="category-info">
//                             <h3>${category.name}</h3>
//                         </div>
//                     </a>
//                 `;
//                 categoryContainer.appendChild(categoryDiv);
//             });
//         }
//     }

//     // Dynamically load products based on category
//     function loadProducts() {
//         const params = new URLSearchParams(window.location.search);
//         const category = params.get('category');

//         const products = {
//             fruits: [
//                 { name: 'Apple', price: 1.2, uom: 'each' },
//                 { name: 'Banana', price: 0.5, uom: 'each' }
//             ],
//             vegetables: [
//                 { name: 'Carrot', price: 0.7, uom: 'each' },
//                 { name: 'Broccoli', price: 1.1, uom: 'each' }
//             ],
//             dairy: [
//                 { name: 'Milk', price: 1.5, uom: 'litre' },
//                 { name: 'Cheese', price: 2.5, uom: 'pack' }
//             ]
//         };

//         const productList = document.getElementById('product-list');
//         if (productList && category && products[category]) {
//             productList.innerHTML = '';
//             products[category].forEach(product => {
//                 const productDiv = document.createElement('div');
//                 productDiv.classList.add('product');
//                 productDiv.innerHTML = `
//                     <h3>${product.name}</h3>
//                     <p>Price: $${product.price} / ${product.uom}</p>
//                     <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
//                 `;
//                 productList.appendChild(productDiv);
//             });
//         }
//     }

//     // Load categories if on the homepage
//     if (document.querySelector('.category-boxes')) {
//         loadCategories();
//     }

//     // Load products if on the products page
//     if (document.getElementById('product-list')) {
//         loadProducts();
//     }
// });



// function addToCart(productName, price, uom = 'each') {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     let total = parseFloat(localStorage.getItem('total')) || 0;

//     // Find if the item already exists in the cart
//     const existingItemIndex = cart.findIndex(item => item.name === productName);

//     if (existingItemIndex > -1) {
//         // Update quantity and total price of the existing item
//         total -= parseFloat(cart[existingItemIndex].totalPrice); // Remove old totalPrice from total
//         cart[existingItemIndex].quantity += 1;
//         cart[existingItemIndex].totalPrice = (cart[existingItemIndex].quantity * cart[existingItemIndex].price).toFixed(2);
//         total += parseFloat(cart[existingItemIndex].totalPrice); // Add new totalPrice to total
//     } else {
//         // Add new item to the cart
//         const itemPrice = price || 0.00;
//         cart.push({
//             name: productName,
//             price: itemPrice,
//             quantity: 1,
//             uom: uom,
//             totalPrice: itemPrice.toFixed(2)
//         });
//         total += itemPrice;
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//     localStorage.setItem('total', total.toFixed(2));

//     alert(`Added ${productName} to the cart at $${price}`);
//     updateCartDisplay();
// }
// function updateCartDisplay() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const total = parseFloat(localStorage.getItem('total')) || 0;

//     const cartList = document.getElementById('cart-list');
//     const totalAmount = document.getElementById('total-amount');

//     if (cartList) {
//         cartList.innerHTML = '';
//         cart.forEach((item, index) => {
//             const tr = document.createElement('tr');
//             tr.innerHTML = `
//                 <td>${item.name}</td>
//                 <td>
//                     <button class="quantity-control" data-index="${index}" data-action="decrease">-</button>
//                     ${item.quantity}
//                     <button class="quantity-control" data-index="${index}" data-action="increase">+</button>
//                 </td>
//                 <td>${item.uom}</td>
//                 <td>$${item.price.toFixed(2)}</td>
//                 <td>$${item.totalPrice}</td>
//                 <td><button class="delete-item" data-index="${index}">Delete</button></td>
//             `;
//             cartList.appendChild(tr);
//         });
//     }

//     if (totalAmount) {
//         totalAmount.textContent = `Total Amount: $${total}`;
//     }
// }
// document.addEventListener('click', function (event) {
//     if (event.target.classList.contains('quantity-control')) {
//         const index = event.target.dataset.index;
//         const action = event.target.dataset.action;

//         let cart = JSON.parse(localStorage.getItem('cart')) || [];
//         let total = parseFloat(localStorage.getItem('total')) || 0;

//         if (action === 'increase') {
//             cart[index].quantity += 1;
//         } else if (action === 'decrease' && cart[index].quantity > 1) {
//             cart[index].quantity -= 1;
//         }

//         // Update totalPrice for the item
//         cart[index].totalPrice = (cart[index].quantity * cart[index].price);

//         // Update the total amount
//         total = cart.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0);

//         localStorage.setItem('cart', JSON.stringify(cart));
//         localStorage.setItem('total', total);
//         updateCartDisplay();
//     }

//     if (event.target.classList.contains('delete-item')) {
//         const index = event.target.dataset.index;
//         let cart = JSON.parse(localStorage.getItem('cart')) || [];
//         const itemTotalPrice = parseFloat(cart[index].totalPrice);
//         let total = parseFloat(localStorage.getItem('total')) || 0;

//         // Remove item totalPrice from total
//         total -= itemTotalPrice;

//         // Remove item from cart
//         cart.splice(index, 1);

//         localStorage.setItem('cart', JSON.stringify(cart));
//         localStorage.setItem('total', total);
//         updateCartDisplay();
//     }
// });










// document.addEventListener('DOMContentLoaded', () => {
//     updateCartDisplay();

//     document.addEventListener('click', function (event) {
//         if (event.target.classList.contains('quantity-control')) {
//             const index = event.target.dataset.index;
//             const action = event.target.dataset.action;
//             updateCartQuantity(index, action);
//         }

//         if (event.target.classList.contains('delete-item')) {
//             const index = event.target.dataset.index;
//             deleteCartItem(index);
//         }
//     });
// });

// function addToCart(productName, price, imageUrl) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     let total = parseFloat(localStorage.getItem('total')) || 0;

//     const productIndex = cart.findIndex(item => item.name === productName);
//     if (productIndex !== -1) {
//         cart[productIndex].quantity += 1;
//         cart[productIndex].totalPrice = (cart[productIndex].quantity * cart[productIndex].price).toFixed(2);
//     } else {
//         cart.push({
//             name: productName,
//             price: price,
//             quantity: 1,
//             uom: 'N/A',
//             imageUrl: imageUrl,
//             totalPrice: price.toFixed(2)
//         });
//     }

//     total = cart.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0);

//     localStorage.setItem('cart', JSON.stringify(cart));
//     localStorage.setItem('total', total.toFixed(2));

//     updateCartDisplay();
// }

// function updateCartQuantity(index, action) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     let total = parseFloat(localStorage.getItem('total')) || 0;

//     if (index >= 0 && index < cart.length) {
//         let item = cart[index];
//         if (action === 'increase') {
//             item.quantity += 1;
//         } else if (action === 'decrease') {
//             if (item.quantity > 1) {
//                 item.quantity -= 1;
//             }
//         }

//         item.totalPrice = (item.quantity * item.price).toFixed(2);

//         total = cart.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0);

//         localStorage.setItem('cart', JSON.stringify(cart));
//         localStorage.setItem('total', total.toFixed(2));

//         updateCartDisplay();
//     }
// }

// function deleteCartItem(index) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     let total = parseFloat(localStorage.getItem('total')) || 0;

//     if (index >= 0 && index < cart.length) {
//         total -= parseFloat(cart[index].totalPrice);
//         cart.splice(index, 1);

//         localStorage.setItem('cart', JSON.stringify(cart));
//         localStorage.setItem('total', total.toFixed(2));

//         updateCartDisplay();
//     }
// }

// function updateCartDisplay() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const total = parseFloat(localStorage.getItem('total')) || 0;

//     const cartList = document.getElementById('cart-list');
//     const totalAmount = document.getElementById('total-amount');

//     if (cartList) {
//         cartList.innerHTML = '';
//         cart.forEach((item, index) => {
//             const tr = document.createElement('tr');
//             tr.innerHTML = `
//                 <td><img src="${item.imageUrl}" alt="${item.name}" style="width: 50px; height: 50px;"></td>
//                 <td>${item.name}</td>
//                 <td>
//                     <button class="quantity-control" data-index="${index}" data-action="decrease">-</button>
//                     ${item.quantity}
//                     <button class="quantity-control" data-index="${index}" data-action="increase">+</button>
//                 </td>
//                 <td>${item.uom}</td>
//                 <td>$${item.price.toFixed(2)}</td>
//                 <td>$${item.totalPrice}</td>
//                 <td><button class="delete-item" data-index="${index}">Delete</button></td>
//             `;
//             cartList.appendChild(tr);
//         });
//     }

//     if (totalAmount) {
//         totalAmount.textContent = `Total Amount: $${total.toFixed(2)}`;
//     }
// }






















document.addEventListener('DOMContentLoaded', function () {
    // Carousel functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const prev = document.querySelector('.carousel-control.prev');
    const next = document.querySelector('.carousel-control.next');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function changeSlide(n) {
        slideIndex += n;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        showSlide(slideIndex);
    }

    if (prev) {
        prev.addEventListener('click', () => changeSlide(-1));
    }
    if (next) {
        next.addEventListener('click', () => changeSlide(1));
    }
    showSlide(slideIndex);

    // Menu toggle for mobile
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    // Cart functionality
    // const cartKey = 'cart';
    // const totalKey = 'total';

    // function addToCart(productName, price, uom = 'each') {
    //     let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    //     let total = parseFloat(localStorage.getItem(totalKey)) || 0;

    //     const existingItemIndex = cart.findIndex(item => item.name === productName);

    //     if (existingItemIndex > -1) {
    //         total -= parseFloat(cart[existingItemIndex].totalPrice); // Remove old totalPrice from total
    //         cart[existingItemIndex].quantity += 1;
    //         cart[existingItemIndex].totalPrice = (cart[existingItemIndex].quantity * cart[existingItemIndex].price).toFixed(2);
    //         total += parseFloat(cart[existingItemIndex].totalPrice); // Add new totalPrice to total
    //     } else {
    //         cart.push({
    //             name: productName || 'No name',
    //             price: price || 0.00,
    //             quantity: 1,
    //             uom: uom,
    //             totalPrice: (price || 0.00).toFixed(2)
    //         });
    //         total += price ||0.00;
    //     }

    //     localStorage.setItem(cartKey, JSON.stringify(cart));
    //     localStorage.setItem(totalKey, total.toFixed(2));

    //     alert(`Added ${productName} to the cart at $${price}`);
    //     updateCartDisplay();
    // }

    // function updateCartDisplay() {
    //     const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    //     const total = parseFloat(localStorage.getItem(totalKey)) || 0;

    //     const cartList = document.getElementById('cart-list');
    //     const totalAmount = document.getElementById('total-amount');

    //     if (cartList) {
    //         cartList.innerHTML = '';
    //         cart.forEach((item, index) => {
    //             const tr = document.createElement('tr');
    //             tr.innerHTML = `
    //                 <td>${item.name}</td>
    //                 <td>
    //                     <button class="quantity-control" data-index="${index}" data-action="decrease">-</button>
    //                     ${item.quantity}
    //                     <button class="quantity-control" data-index="${index}" data-action="increase">+</button>
    //                 </td>
    //                 <td>${item.uom}</td>
    //                 <td>$${item.price.toFixed(2)}</td>
    //                 <td>$${item.totalPrice}</td>
    //                 <td><button class="delete-item" data-index="${index}">Delete</button></td>
    //             `;
    //             cartList.appendChild(tr);
    //         });
    //     }

    //     if (totalAmount) {
    //         totalAmount.textContent = `Total Amount: $${total.toFixed(2)}`;
    //     }
    // }

    // function updateCartItemQuantity(index, action) {
    //     let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    //     let total = parseFloat(localStorage.getItem(totalKey)) || 0;

    //     if (cart[index]) {
    //         if (action === 'increase') {
    //             cart[index].quantity += 1;
    //             cart[index].totalPrice = (cart[index].quantity * cart[index].price).toFixed(2);
    //             total += parseFloat(cart[index].price);
    //         } else if (action === 'decrease' && cart[index].quantity > 1) {
    //             cart[index].quantity -= 1;
    //             cart[index].totalPrice = (cart[index].quantity * cart[index].price).toFixed(2);
    //             total -= parseFloat(cart[index].price);
    //         }
    //     }

    //     localStorage.setItem(cartKey, JSON.stringify(cart));
    //     localStorage.setItem(totalKey, total.toFixed(2));

    //     updateCartDisplay();
    // }

    // function deleteCartItem(index) {
    //     let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    //     let total = parseFloat(localStorage.getItem(totalKey)) || 0;

    //     if (cart[index]) {
    //         total -= parseFloat(cart[index].totalPrice);
    //         cart.splice(index, 1);
    //     }

    //     localStorage.setItem(cartKey, JSON.stringify(cart));
    //     localStorage.setItem(totalKey, total.toFixed(2));

    //     updateCartDisplay();
    // }
    












    const cartKey = 'cart';
    const totalKey = 'total';
    
    function addToCart(productName, price, uom = 'each') {
        let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
        let total = parseFloat(localStorage.getItem(totalKey)) || 0;
    
        const existingItemIndex = cart.findIndex(item => item.name === productName);
    
        if (existingItemIndex > -1) {
            total -= parseFloat(cart[existingItemIndex].totalPrice); // Remove old totalPrice from total
            cart[existingItemIndex].quantity += 1;
            cart[existingItemIndex].totalPrice = (cart[existingItemIndex].quantity * cart[existingItemIndex].price).toFixed(2);
            total += parseFloat(cart[existingItemIndex].totalPrice); // Add new totalPrice to total
        } else {
            cart.push({
                name: productName || 'No name',
                price: price || 0.00,
                quantity: 1,
                uom: uom,
                totalPrice: (price || 0.00).toFixed(2)
            });
            total += price || 0.00;
        }
    
        localStorage.setItem(cartKey, JSON.stringify(cart));
        localStorage.setItem(totalKey, total.toFixed(2));
    
        alert(`Added ${productName} to the cart at $${price}`);
        updateCartDisplay();
    }
    
    function updateCartDisplay() {
        const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
        const total = parseFloat(localStorage.getItem(totalKey)) || 0;
    
        const cartList = document.getElementById('cart-list');
        const totalAmount = document.getElementById('total-amount');
    
        if (cartList) {
            cartList.innerHTML = '';
            cart.forEach((item, index) => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${item.name}</td>
                    <td>
                        <button class="quantity-control" data-index="${index}" data-action="decrease">-</button>
                        ${item.quantity}
                        <button class="quantity-control" data-index="${index}" data-action="increase">+</button>
                    </td>
                    <td>${item.uom}</td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td>$${item.totalPrice}</td>
                    <td><button class="delete-item" data-index="${index}">Delete</button></td>
                `;
                cartList.appendChild(tr);
            });
        }
    
        if (totalAmount) {
            totalAmount.textContent = `Total Amount: $${total.toFixed(2)}`;
        }
    }
    
    function updateCartItemQuantity(index, action) {
        let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
        let total = parseFloat(localStorage.getItem(totalKey)) || 0;
    
        if (cart[index]) {
            if (action === 'increase') {
                total -= parseFloat(cart[index].totalPrice); // Remove old totalPrice from total
                cart[index].quantity += 1;
                cart[index].totalPrice = (cart[index].quantity * cart[index].price).toFixed(2);
                total += parseFloat(cart[index].totalPrice); // Add new totalPrice to total
            } else if (action === 'decrease' && cart[index].quantity > 1) {
                total -= parseFloat(cart[index].totalPrice); // Remove old totalPrice from total
                cart[index].quantity -= 1;
                cart[index].totalPrice = (cart[index].quantity * cart[index].price).toFixed(2);
                total += parseFloat(cart[index].totalPrice); // Add new totalPrice to total
            }
        }
    
        localStorage.setItem(cartKey, JSON.stringify(cart));
        localStorage.setItem(totalKey, total.toFixed(2));
    
        updateCartDisplay();
    }
    
    function deleteCartItem(index) {
        let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
        let total = parseFloat(localStorage.getItem(totalKey)) || 0;
    
        if (cart[index]) {
            total -= parseFloat(cart[index].totalPrice); // Remove totalPrice of deleted item from total
            cart.splice(index, 1); // Remove item from cart
        }
    
        localStorage.setItem(cartKey, JSON.stringify(cart));
        localStorage.setItem(totalKey, total.toFixed(2));
    
        updateCartDisplay();
    }
    
    function checkout() {
        console.log('Checkout initiated');
    
        // Clear the cart
        localStorage.removeItem(cartKey);
        console.log('Cart cleared');
    
        // Reset the total amount to 0
        localStorage.setItem(totalKey, '0');
        console.log('Total reset to 0');
    
        // Confirm the action
        alert('Checkout successful. Cart is now empty.');
    
        // Update the cart display to reflect an empty cart and total of 0
        updateCartDisplay();
    }
    
    
    document.addEventListener('DOMContentLoaded', function () {
        const checkoutButton = document.getElementById('checkout-button');
        if (checkoutButton) {
            checkoutButton.addEventListener('click', function () {
                console.log('Checkout button clicked');
                checkout();
            });
        } else {
            console.error('Checkout button not found');
        }
    
        document.addEventListener('click', function (event) {
            if (event.target.classList.contains('quantity-control')) {
                const index = event.target.dataset.index;
                const action = event.target.dataset.action;
                updateCartItemQuantity(index, action);
            } else if (event.target.classList.contains('delete-item')) {
                const index = event.target.dataset.index;
                deleteCartItem(index);
            }
        });
    
        // Initial display update
        updateCartDisplay();
    });
    







    

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('quantity-control')) {
            const index = event.target.dataset.index;
            const action = event.target.dataset.action;
            updateCartItemQuantity(index, action);
        } else if (event.target.classList.contains('delete-item')) {
            const index = event.target.dataset.index;
            deleteCartItem(index);
        }
    });

    window.addToCart = addToCart;

    if (document.getElementById('cart-list')) {
        updateCartDisplay();
    }

    // Search functionality
    const searchBar = document.getElementById('search-bar');
    const searchResults = document.getElementById('search-results');
    const searchResultsList = document.getElementById('search-results-list');

    if (searchBar) {
        searchBar.addEventListener('input', function () {
            const query = searchBar.value.toLowerCase();
            if (query.length > 2) {
                if (searchResultsList) {
                    searchResultsList.innerHTML = '';
                    const mockProducts = [
                        'Apple', 'Banana', 'Carrot', 'Dairy Milk', 'Eggplant'
                    ];
                    const filteredProducts = mockProducts.filter(product => product.toLowerCase().includes(query));
                    filteredProducts.forEach(product => {
                        const li = document.createElement('li');
                        li.textContent = product;
                        searchResultsList.appendChild(li);
                    });
                    searchResults.classList.remove('hidden');
                }
            } else {
                if (searchResults) {
                    searchResults.classList.add('hidden');
                }
            }
        });
    }

    // Dynamically load categories on the homepage
    function loadCategories() {
        const categories = [
            { name: 'Fruits', image: '' },
            { name: 'Desserts', image: '' },
            { name: 'Vegetables', image: '' },
            { name: 'dairy', image: 'images/dairy.jpg' },
            { name: 'snaks', image: 'images/dairy.jpg' },
             { name: 'Bakery', image: 'images/dairy.jpg' },
             { name: 'cosmetics', image: 'images/dairy.jpg' },
             { name: 'fish', image: 'images/dairy.jpg' },
             { name: 'egg', image: 'images/dairy.jpg' },
        ];

        const categoryContainer = document.querySelector('.category-boxes');
        if (categoryContainer) {
            categoryContainer.innerHTML = '';
            categories.forEach(category => {
                const categoryDiv = document.createElement('div');
                categoryDiv.classList.add('category');
                categoryDiv.innerHTML = `
                    <a href="products.html?category=${category.name.toLowerCase()}">
                        <img src="${category.image}" alt="${category.name}">
                        <div class="category-info">
                            <h3>${category.name}</h3>
                            <img src="${category.image}" alt="${category.name}" class="category-image">
                        </div>
                    </a>
                `;
                categoryContainer.appendChild(categoryDiv);
            });
        }
    }

    // Dynamically load products based on category
    function loadProducts() {
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category');

        const products = {
            fruits: [
                { name: 'Apple', price: 1.2, uom: 'each', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQQQWZ2KIB3r0Ocnz1Uev7Yg0yF9_iXrHlPQx2YoYajxQ2ZV1Tl9aNvBTnBJLZb8nUrV1g8uEXUsVkEGxFnb4yjnDTi2c_s9g&usqp=CAE' },
                { name: 'Banana', price: 0.5, uom: 'each', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWzutw7gnbjB9Kd-nnNMuVM9BiaDrSVkUs7qYAfEXExn6zOLmkWHuI93kbxwir5Tz434lIIGua567jogHa6ouHVQpqbFZQN5KgesygNyBr_LU9wsAsuqdp&usqp=CAE' },
                { name: 'Fresho Avocado 1 kg', price: 2.5, uom: 'each', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSoxgWtKYM4DjvPU8G79Z0DQoOYHQhU6R1C_S_Aa_Vqd6PS_czFIVuy-eAsFrC73rUVFItf_W5PKNWVmMQREi_OKlDNKkThm5HwxYvtjVOm99fGOpBnaXFq7w&usqp=CAE' },
                { name: ' Raspberries', price: 2.66, uom: 'each', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRDyedssq21KVbwsn2hXY5vYkQAXPMPv0J7RdXaKVU6pVc_IvTkAiLCqXGsHAFZB7f0o5H7EjvN2eMChIy7-mOsplj_htCw3u1nwmpG3FMMb2aWslrC19zxhQ&usqp=CAE' },
                { name: 'Blueberry', price: 2.8, uom: 'each', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTJOJmLdS6QDq-ujWPcchnOoePjBdESi8RHfkrCrjRz5oxKZkvoMyfIOTWS2cFEknwyyq8bpMWL9LTIeZInLPRtUfqrkENdhBQWrOWxNwYi58dQola6tjvaDg&usqp=CAE' },
                { name: 'Orange', price: 2.7, uom: 'each', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQu2DNmV_l7XQJa4fInFLBNwlMvTLXwNtjcTV7OqL7m6ZIz0HgClkZxxBw3nCWNE0lN4D5V08MdquwPfhJbQMSSgGwjCgWHw4coeCqAI09ftvDAnG3BO0w1&usqp=CAE' }

            ],
            vegetables: [
                { name: 'Carrot', price: 0.7, uom: 'each', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTXSZVj5KO8PmSxN3Upz0FB5n-LNzFBnjjuTDHZH8Wwop0hjVkpGQS2ZqeVS7q1Lzuumx2C9gd6swNQwkqfJLoI-HQLpDcqD22DPb3n3gs&usqp=CAE' },
                { name: 'Broccoli', price: 1.1, uom: 'each', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSM1eygrK_MK0XNaZm1eW43JT78hqbNAWUKWlLuZxeTDQKHmntjW-X4qB8tyHzvPYq999RhX5Bexysy0FQIkvfLgNhio_1P100hT7RwqvPm7OZLZLqkSfJGIQ&usqp=CAE' },
                { name: 'Tomato', price: 2.5, uom: 'each', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTmaY4-XC1ywKw9CgOxCoe7xE0OXJFjmswFrVLTxjsFLjjIExGTHQvSBbMpi_tWxD7c4d9vSfU8FzoQ7_-N8nVFUJ90v98Jza8wu475cBItJIoGcCERfxyx&usqp=CAE' },
                { name: 'Cabbage', price: 2.6, uom: 'each', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQfn3Ar7_UKTKesfcIwWRslzhT5eAOFrbzp9djyWCaiF1uMLO3c85bjjn0__CX3ZHHUpc4QpfbYmJxox_Ok2l3IASkwsMImkqQKuKrN2wgOXcaxeGrlSODa&usqp=CAE' },
                { name: 'Onion', price: 3.5, uom: 'each', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-20C2ssCla7NxSc1Mn2hpsPvEsNGVOrEetVksDHGWRkXHglvJ31sG_YvhWLPaVsS06OzhVbEmdrIVjEMPHPjV8_j68_AGQymJtNgeeT5xm7Chkw4ITCya1w&usqp=CAE' },
                { name: 'Cucumber', price: 2.7, uom: 'each', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQK1KYMfc0MKjrF8SzBDTN3TPiLQOVF32IkmobV5VHoQnh-xOSDUX2kkFClHZPsyBXIEv1SgUiylFDlSjcmhYHsQBHM0ldcUw&usqp=CAE' }

            ],
            desserts: [
                { name: '10 Patisserie Selection', price:5.5, uom: 'each', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSPCvNkRuVjtzSwQ2dOWD9lBQFkhX7J-2bZfFqZ7ngg9xngtF8WIchdlEHStTjB8WJGcRAjZcALtCsvixXjW6vuBtjPx5bv7Btc1his3ZYGRAPqaCa_5Wdgsg&usqp=CAE' },
                { name: 'Kwality walls Crunchilicious Butterscotch Tub', price: 3.5, uom: 'liter', image: 'https://cdn.zeptonow.com/production///tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/bd359ed7-cb24-49a8-a243-6283544fdd51.jpeg' },
                { name: 'Epigamia Desserts Caramel Pudding', price: 3.3, uom: 'liter', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDK0qGuxCY837LeiG-84ZK2S-r7RztyT59YzJEkj6N9j5oXLLpWH1fQcoPlOT_6Uz55Ffp-7Iye8-OlcskqQgz_eBm6BwGBKR64DdrRBVOHQXZTX-HnpQIww&usqp=CAE' },
                { name: 'Motichoor Laddu by Lal', price: 2.5, uom: 'each', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/assets/products/sliding_images/jpeg/79cac710-0764-4e40-b537-3ae60e5febc9.jpg?ts=1723190104' },
                { name: 'Tutti Frutti Dessert,', price: 2.4, uom: 'each', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcStamihp7YntZvLMvpCVPXPCAD4A3o1tnEY58eXH71vRa9RnzR58cozucuzkZwuvLS9jo3ysBL5Teor5hc2F1_Xlqzupz1I86ki5fjCqnXP06DO1nqZtrX8Rg&usqp=CAE' },
                { name: 'Creamy dessert', price: 2.5, uom: 'liter', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRKr_mJre5NWgQChjrPxRch2oUsG-YvobzPwB16WKrgjr7AhyQ7b_4evtWfrINx5LYNc_WK4H7zlvmSPvIEWdrxUmhfQNk1gY-rjDI5KsPR6Onu_1QBZ01w&usqp=CAE' }



            ],
            dairy: [
                { name: 'Milk', price: 1.5, uom: 'liter', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQA005P0orUpiIqhr5uEs-PxeraLwyDswKLqW4SjJQefPAYl4aY9Y_xTP5VEqEM9iHOXRSkSPtMPCs1cdISrvtcKJLzvrMqDfXB67lrHXBbOmtX72MsnikG&usqp=CAE' },
                { name: 'Cheese', price: 2.5, uom: 'each', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRl6NKZoa7e1dNS1NP3GiNWhonB9hciqtPq1HlVi0eNIlTu2sqxhvxD2P_iZW9zcwpN4xw11OrLktMFSdZTPpSzpIUTPQ5MKCnrQmQ4oEyIUvhP4yYOagUjug&usqp=CAE' },
                { name: 'Amul  Toned Milk', price: 3.5, uom: 'liter', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ7sOFtlLQkDxf99oXSIv_3Bh1YTRPR5VW472OWrlpzSBdHofA2HEhc9iEK4gMtqRj1ypMMXCM3k7Or9NOgsKlhfVIzwOAZun07l9e_QYllECLHKzWT5TIC&usqp=CAE' },
                { name: 'Nestle EVERYDAY', price: 1.5, uom: 'each', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS7cPjb4N_mslC8Z1KkKQN6GCwGvXz_bPkYvIj9LNQq3S1gmsJRz9xLwcnfPEJLDpNRUvGO0gziVHsLUtYavcSB5O6ldt4XhsbfMu4HCWmrLVPj7_YvtV26Aak&usqp=CAE' },
                { name: 'Butter', price: 3.5, uom: 'each', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR0RiYq2U3nDwGjqeJotM8ibPs11asaMvwROwl8INqtaZ9GA_rIBo6Jpd6Kj5em_Y8CORwDbx-dgRHSfD6kltvuxnN52EdcPKFr7eOJHP7tWtgDyNJO2rY5Ctbu&usqp=CAE' },
                { name: 'whipping cream', price: 2.2, uom: 'liter', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxsVuR9JQTBjuhyWElNB1PyAFQgMOH0-ZzKYEaz1_PjZ5GqNrAB5Vg3KQjmQxl-B6LrL_ibrsZB7McMiE9Nu-0-QxwYP4vN70SMPSevoM9sxmka4vyW2p8LA&usqp=CAE' },

            ],
            snaks: [
                { name: 'Super Ring With Cheese', price: 1.5, uom: 'each', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSRHSzGOEOAAuBVsZAa72803VInNuRWvlp0BHaLRENz0ZsbVwkkFdqzAAOLkUu30xnzKw0VU99f42NrHDfGAiBSix0G9zAkrlE3zuUFZMfJn_jrGM0YHZVjiw&usqp=CAE' },
                { name: 'Bingo Nachos', price: 2.5, uom: 'each', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTInOb_Xd_okN35gENbgkrwS328dbmXP6FAoruV-5zATzfEQTTQxLrP_MKcHvZt-cy_X6C3sX_ksCsN2gnfip7mE__JJtmKucxg9uv9C03eV0rPV0sZ4K59EAef&usqp=CAE' },
                { name: 'Red Bul', price: 3.8, uom: 'liter', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwcMzcENq3lDo3cZ1MAxVUc1d8gGqDwDn3GDtLbVSMkKG-AJ4nuxtuz_5COQogr7Sv2Cxew8V2evp6oGpw6LDPZolHxsObxdu5d7ISzsBfVgkunNpBhxV0&usqp=CAE' },
                { name: 'Tang', price: 2.5, uom: 'liter', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQnhk5N8t_6PY7Aab79OzGqgmb2vveQ2-RVRzXYnzWKpFNwA74Dk8sP2kvWlBC6x5GAAVBMUptBdc_X6Z5IEnhIPDERTuHPWsbhF3QvKZuQ9FJ262V-tKRa&usqp=CAE' },
                { name: 'Protein Sticks ', price: 4.5, uom: 'each', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRWzyzeLwFgY2Qp-CEZkptXj5qcAfkimzdqn7aO5WwN4GsMhY0kMGDpR7so1uRUwvNDK0p6xAfp2Q3kZzuDmS0hmNx9n-xZ7Ph320AZGwynoZ1A45Om4vwv&usqp=CAE' },
                { name: 'Pepsi Black Can', price: 3.5, uom: 'liter', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTffwOysWpcP6mNYzC1fwzR1yvEDvCnGGABisPILJKBL24A4w_2jyxh78wwTdZ09Dj-uBOMO40bNovwiH_m2ASigjkoCdvMzKzsXiOQCJaW18wmPttJIS1ytw&usqp=CAE' },

            ],
            bakery: [
                { name: 'Chocolate Eggless Cakes', price: 1.5, uom: 'liter', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTyJhQuHbAKz__DRWNRmnVVfqUZp0Gd9hdFWJrzrjC5MY1JQjRdOtN7iOpCBDQSa_QVS0u0HRjxdGrB8FatDkeqWGVHhVCNupmQ0S1Du2PA&usqp=CAE' },
                { name: 'brown Bread', price: 2.5, uom: 'each', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRQdIzf_dedN287qv6lw_MuecnS5Ubp0Gq6fGj1uChEqqLLnW3BFkrl8y6Le2Ym_BQfR7gemjYaSscEPFvOm2cJsgdAP34pFtzp3_DEIEQpKpLRLjH743Ty&usqp=CAE' },
                { name: 'Burger Bun', price: 2.5, uom: 'liter', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRT_clwxhm_rZnfTDav5lJSQmYlNK5AkPl-5tyN92kBBdpKy9El0ovj0kgaYzEci6B9FeXQ_CZ7ug_r9WYNC8UepAi5-LN33QDy3Taqrhtpq4D-XoRiZank&usqp=CAE' },
                { name: 'Fruit Biscuits', price: 2.5, uom: 'liter', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxJiZM9XDQ-zlOLv8Y7huI82RrfjlT9O0MfzEQItDRMS2ocK-L9zMyTETwNVhBrFNK2u4VFhp5OZFT0gK8dXObJTQBWHIpZmbxL5yXCJlm&usqp=CAE' },
                { name: 'Chips', price: 2.5, uom: 'liter', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSCxhG5bkLT3TsGh9lXD_7Ib0x7LxOz6I9bEVdxZrmNEVvxs9nLlzH3Reqir_CNPX8piBeMRmltDqLb43nVgNNoxeNF5h7KDP7YTd1o-gw&usqp=CAE' },
                { name: 'Choco Chips', price: 2.5, uom: 'liter', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRL-A8gU5MohtcHbyVNU_fEjilxWmZbQgzTlZ-_HVVoSw84ohRdIcyYW8aa3qcSh5Tt2D8yusgz_mSifGlobFpkvZX5uXou-oZK7D_gUXCF0URqgmPClRUg&usqp=CAE' },
                { name: ' cookies ', price: 2.5, uom: 'liter', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSAZuWtuRHYOcvxaQyxTTTbZYfS8Eoz8ztJ7CZBeb2Sv6GZx7kh_muciXy4YExik3NabX5WkK79_krqe7LyBqYFDtUcWzqmyaoVXuRH6n1HtZF4kknRY6n7&usqp=CAE' },

            ],
            cosmetics: [
                { name: ' insight essential lip & cheek tint,', price: 1.8, uom: 'each', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTJsAE0EqC-QKoZ7kGIuA4_rGIyas0IUPKZ0LaO-_KaA5xa8Ptl9bUTh3zaY17PE4o1coSDXxjUUIMcn3vn0adanFL_BDZ8Y-ZlpVJZr4Jzf0lW5p4OmarJn54&usqp=CAE' },
                { name: 'Rare Beauty Blush', price: 5.5, uom: 'each', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTCyZFQWCxGT4Zm77AdhMpcFIZZiuOKhndw2dN7x0g2ZJ2k4WWhi4MnmvR5LWDvaFQO4ma-kjgSUnQN6zG_8K9eRzFHcPOdUPd0Pk0UmUqaRNOyS9cRwIVaag&usqp=CAE' },
                { name: 'Halo Glow Liquid Filter', price: 1.5, uom: 'liter', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrn_7Ppn7rEC9wUJ2Y9yJe_f3Hhawh-sjQtiW_W9zDRQH_jk2inYkkVy5wHpk4Lnzxa1I3FLmRHdn97t9kuZ6c1rmOjXlQcgppOhsY-f8BUQ2B8XtD2l6vOQ&usqp=CAE' },
                { name: ' Translucent setting powder ', price: 1.2, uom: 'gram', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRt8KQluM4pByswG-B1YqQ8y-Bqc78oU3YE34Yfm_a27KH9_d2o8VGnfG9nsj_y3PCzyMyVV360K9XHuB8oP7F2FbXmmiTtmIN21dkMaHnzRFwYW1-C0ZIn&usqp=CAE' },
                { name: 'Transfer Lip Color', price: 2.5, uom: 'liter', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJTetp-rMNTLJsqLrxyeh811FpQ88524fux_tz3m4I4UjVGU06VbZn0pjFgbhL7c6tCKF-XlU_KXwRCtkLa9sTmhfPUbGNoSKHOdspFfYmmqROa0vm4XBIHw&usqp=CAE' },
                { name: 'MARS Back to Basics palette ', price: 3.5, uom: 'each', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKhfgzyZx2aeXTZCXoIJs0lkUog4GTT2UMoMSZdLTpFNOkFZ_VolQIV1xBFVWWewqS_G3gBv3XnTVaVSwSRUu1rqYW3mW_urp_Z7z9fLQ1&usqp=CAE' },

            ],
            fish: [
                { name: 'Seer Fish', price: 1.8, uom: 'each', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcREWjow_V9S0zsT7MW6nw8iM9OMmkyhBe_cBJu2w7mH6kNUVc2YO-VHPPqtAyeLsXeW5kQc0qtU4xamK1D6ngiml0L3NxifAn-qQ27IqK326jc2Rkx64Rnm&usqp=CAE' },
                { name: 'Boneless Fillet', price: 5.5, uom: 'each', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQShNP1OmEhSZEeIzz2HB-NQguwwUwDnsu6Js50ChNrqrUQ09o2luWvBNGhHENIeXozg3d3A8h12Kh_f_dINjzQDFFNTgBx&usqp=CAE' },
                { name: 'Rohu Fish', price: 1.5, uom: 'each', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTlOF5IbtG8SU6DEcnbZ5IJ_8PDLrVxThTGSqbNF00cLqm52d34LsWjr4Jsr7mEZQ87HBDCkKPYVKz1i6nc1rZfoRzxs_tWo9TaLkIuaKQqRdFhL3KL0ugV&usqp=CAE' },
                { name: ' Shell Fish ', price: 1.2, uom: 'each', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRUJ3vYZUeBWKmlWyaXsy5U0IkL5xJFLm108QXK4G7jvMBAPGesFPyUv9HMNLn-DPqleMUzwn_ZPowtrlw2TktUmfZxchf4v13AtNj55YUd&usqp=CAE' },
                { name:  'Tuna Fish', price: 2.5, uom: 'each', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT4XxKn7ZsgTTnniD0BQOEWbpvANwmB6bOkfpUEc6VZwfpAhZWAKbwXT5DZ6ZXDGXzTod4QxW5v-pHX9SoSGIdCBx08G7iku26k5dLCPXyJ&usqp=CAE' },
                { name: 'katla Fish ', price: 3.5, uom: 'each', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQtPAAOS_xpb8ayQwq75Ft6GQXA4YeaBSoTuCiREP9YRziPhjbM-aJtiJzogNgz-ZkHqoV7rpfpLFEJ7sh6hbQh_tIIULvBK3nmdH3Mzbyx39mu5XPF3IX2&usqp=CAE' },

            ],
            masalas: [
                { name: 'Wheat', price: 1.8, uom: 'gram', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSYSkXEuaGpO-BHgwJ9MqRkyj8w7PRgNon-3I1nMKvUojQw_A2K5GibOHBwFVbFT5gOKjz71xmZheL0wqCFa9x82zloaZNzFaQG3x6CTZmn9UYLi5zu5ZUQqg&usqp=CAE' },
                { name: 'garam Masala', price: 5.5, uom: 'gram', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT3_dLf6QvamIzK6n3VnkUO7NsWzaEoZKtOJQgRNLL2mgnAz3nXtxKxp3JkAESLbGlyAZgxVoFWEEfq__S2Cjj99iaDDOontd7ob9HqAPyYrTaeDCinuhXq&usqp=CAE' },
                { name: 'Sunflower Oil', price: 1.5, uom: 'gram', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQtTWwBxfya6uvzZyiMDo8ZTZwT5W03PB6TRjawZbu9hmxa2yZqy0YEJsgl1yn_SGKDIeZoEajX1Ch48up5oz7McBrZ8UrfZ4CnTY9E9y54KhmM4dcz0lHU&usqp=CAE' },
                { name: 'Finger Millet  ', price: 1.2, uom: 'gram', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTOPC7cPS5m-9As2YS2OZq2zbqLxEmQgdiwpnq8twb0ZYD7KQs2F0aR_KsuDRckt5G4QA7rEyyUL2WmjfvKVsZhnbfPEutyiWNpUxmt8hQb8l60UfoWwXNIGw&usqp=CAE' },
                { name: 'olive oils', price: 2.5, uom: 'gram', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTVy4382AdypP21huB-hc_fwkecalAIL0XhfK1OhVnCj_cqxcfEejb-glcIxgSscRvaNJMlFdhq5OWl4l4O77Sg9C23tj_g2Tz1UrrG9dzVPToasMv27ulbKw&usqp=CAE' },
                { name: 'Meat Masala ', price: 3.5, uom: 'gram', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR61gMDdQF_M6nMLbfilcEfpLCFY3OXirNmx1jWyFirkUYW3PGYsnGzU1VXjYkmKZ6IlB5Ur3mWXu4dpY1KSDdSKLD9Mq6Y806L9jOycbECAj_dv4J5Rtxn2g&usqp=CAE' },

            ],
            chocolates: [
                { name: ' Ferrero Rocher', price: 1.8, uom: 'each', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ-5hJL3IhARADQZ_ROPRRNJYBMAe8hbFs2CZoi_c25GeiKq1cz7bYV8XsBPXpRIhcxYGtoTco_knuw_0AAtRePerlc11Pei5f2kfmO-csiecNqPx-qsoPdS0c&usqp=CAE' },
                { name: 'Amul Almondo bite', price: 5.5, uom: 'each', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRvLYnG0o39TypMpY5XiQCXIV04H3GHWdLyvLZwmTnjBRvJ4rYVvIUMsGFBXI5TF47tWHpssFkGncdZme2Y4FuddLDdjWCvduBWSXJpcAhM305utnhvaTI4Ew&usqp=CAE' },
                { name: 'Cadbury Dairy Milk Silk', price: 1.5, uom: 'each', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSi3IcQFamBbuYGYD1hwbd7Ip4xV583S7EgS0R_lKU1NiiC_Hy5wwCw4wLa7hr2eZ25RdMyEM9xLHW-xV8i4QAdZnqwdH-C0GN9INozsU3h2vgMRW8i00FV9A&usqp=CAE' },
                { name: ' Nestle Quality Street Chocolates  ', price: 1.2, uom: 'each', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmIJR3sJPkY2XX5QvdYkOzjjJ8hWS9ytFwZAOmT2WqewXUpqwY-DdboE-OL-ZyVCX6VO5EZcLVcVqyL9t8Pt_Gn9e8Gy3XlKwS6QufyD8cGQhYuwg6gcG0LA&usqp=CAE' },
                { name: 'Chocolate Gift Box ', price: 2.5, uom: 'each', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSND1v48JV_Ika24Pmzfc_ta1-jzMy9gxqEPniKRwyM6bVJdoMpRfOHZPZz03hNxp8MiV5EvxBQeZt3kK1bpquFJ3QaLFgWvnOuvBFseFxD&usqp=CAE' },
                { name: ' Lindt Milk Choco ', price: 3.5, uom: 'each', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSixjWYXu6_jDyn2g7eBa_UD2oqktM83j6g6xu5EKcULRLlG5WAwmDRVoPYKRb6SXufA0XeIXWS_hqwPb0ih-7s315lCkj8CY_LXKLwSjnfMHLBTbXz42TB&usqp=CAE' },

            ],
            egg: [
                { name: 'Chicken', price: 1.8, uom: 'each', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTDYYaZChMXQbdsfX48StpU0Q2aMflLWQ8Uc1iY6NjYXnEXC4MlLG0Arb_IPhFU7eHF8B5P3af0leWsrm9PA8yC0qlFJ0KXiE0uQyUIzAUM&usqp=CAE' },
                { name: 'Brown Eggs', price: 5.5, uom: 'each', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSq5zLxYWPe8EhxI2yZ1xB_uBpJVJIdvH4B4pMB-21hdA-EHR4XCN3zjwnrh4dC6q8fKpDG_EflwgViCEqhRD1wU2pR-YsymasP_R8vPiA&usqp=CAE' },
                { name: 'Beef', price: 1.5, uom: 'liter', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQdIPy4u-MNO3p_i644rwBRzbY23KoyeCMvX2mF-VtN-F3zBY85ToEj26nW44Bh81xDhYv-jzQQoaxqQnYv9P2ejUaxVSpS_bduFlrcDBDD&usqp=CAE' },
                { name: 'Quail eggs  ', price: 1.2, uom: 'gram', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS7RVOmgzc-jyFk1jrPa1wSGUMeHw1id0xyfMKYPnsRX24QZHKPPxltzrdIbXjSElaNN62aNzMq4BOtczvNI0j2p_0MRcoM&usqp=CAE' },
                { name: 'Mutton', price: 2.5, uom: 'liter', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSBETuejOK4QdVNkJFZD97u8bh0lRxQWYFVUhdsUDxQcY0M2dxFT8W2qysHvsYNZNQPjOlWB8hrPluZcfIWHBR0aJzaxSx4nHCDZKK-QQzs&usqp=CAE' },
                { name: ' Fresho Eggs - Regular 6', price: 3.5, uom: 'each', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS6PWoUEAMhB9UE1BYg5D3taqLoxNL3C48yHgTF1zFGKnfMR6N1HbKEabG_b2foSPlpMIJw8hG_D3ITH0mgMGqP1FSTbl9yGuXsW9tFbOQyVqub6W4nNX0k&usqp=CAE' },

            ],
            baby: [
                { name: ' Himalaya Happy Baby Gift Pack', price: 1.8, uom: 'each', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQT-A_YohU4WLsNbbq3cBbiCv8GQKWBBN28Rc8jpt9iQyONBXjt-L8LmYWkbZLE4Xw-SjyN9p7p4KOe5lJaLqpMPY453BpXiDRcTWGPIez6i8SoOyxfaSqsCQ&usqp=CAE' },
                { name: 'Baby diaper ', price: 5.5, uom: 'each', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSYKHbZr-TX8HpfEC5p_RfVBPKiVywL5SuWIAZyGNObFp161g-hSZNMmqmz7wBN3rxDRL9TwMOFG12fNR7fcTDSKcNj6yeDjZWsWFajiAl6&usqp=CAE' },
                { name: 'Himalaya Extra Moisturizing Baby Wash', price: 1.5, uom: 'liter', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTiUQI4FO4qxL755y4IiZLiPwEO_BvI23IY_WnbuasGwoYDP-sZRAi0f2ALvzymUPoejatjHQrd6n3uaw5KQYhIWPjINZ2APaZXmI69fn3jd7fIL-YPnIkc&usqp=CAE' },
                { name: ' Himalaya Baby Powder ', price: 1.2, uom: 'gram', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJjlrOtMbwaeGKRNzRPQgqtipj75bB3oppoPZRcwO2Sk_6OcPYfEegFgwvgFH6Fzm3Fi32AlBjXoigL9Hrp2H_CtFuQvy87si-fiZDTFzYJ-Z6BT4pBCu3&usqp=CAE' },
                { name: 'Himalaya Baby Cream', price: 2.5, uom: 'liter', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRMPsvIq3I2zFbIvDDpoAsgunGnL9mDtOyPQiKmhBTtA2mhmqZ2Kw8PyHjER2BG3xzUdMZuPDOLj6xo38TefeLwlw7rxZNfB_XU0ppC4pPrJ_ueMf7KuPcn&usqp=CAE' },
                { name: ' Johnsons Baby Care Collection Kit', price: 3.5, uom: 'each', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQHbUAbRAqOq9dG8thfKnO3PESszLCLlFQb1RHAZcCzkjWjeH4pe5Pboil743t3dl8LaHLqxWf-N8AeEjfxsNe5H_xUjsNwjw&usqp=CAE' },

            ],
            personal: [
                { name: 'Vivel Moisturizing Body Wash', price: 1.8, uom: 'Litre', image: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2F8%2F9%2F8905110008057_1.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=1920&q=75' },
                { name: 'Hand Wash', price: 5.5, uom: 'liter', image: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2Fs%2Fv%2Fsvhwpd9_b.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=1920&q=75' },
                { name: 'Engage Perfume', price: 1.5, uom: 'liter', image: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2Fs%2Fk%2Fsku_1687.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=1920&q=75' },
                { name: ' Vivel Body Soap ', price: 1.2, uom: 'each', image: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2Fs%2Fk%2Fsku_241.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=1920&q=75' },
                { name: 'Mask', price: 2.5, uom: 'each', image: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2Fs%2Fk%2Fsku_1767.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=1920&q=75' },
                { name: 'Night Cream ', price: 3.5, uom: 'each', image: 'https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2Fs%2Fk%2Fsku_51.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=1920&q=75' },

            ],
           

            
        };

        const productList = document.getElementById('product-list');
        if (productList && products[category]) {
            productList.innerHTML = '';
            products[category].forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price.toFixed(2)}</p>
                    <p>Unit: ${product.uom}</p>
                    <button onclick="addToCart('${product.name}', ${product.price}, '${product.uom}')">Add to Cart</button>
                `;
                productList.appendChild(productDiv);
            });
        }
    }

    if (window.location.pathname.includes('products.html')) {
        loadProducts();
    } else {
        loadCategories();
    }
});









































function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});








function handleSearch() {
    const searchInput = document.getElementById('search-bar');
    const searchTerm = searchInput.value.trim();

    if (searchTerm) {
        // Redirect to a common search results page or a specific page
        window.location.href = `search-results.html?search=${encodeURIComponent(searchTerm)}`;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    function handleSearch() {
        const urlParams = new URLSearchParams(window.location.search);
        const searchTerm = urlParams.get('search')?.toLowerCase();
        const productItems = document.querySelectorAll('#product-list .product-item');
        let firstMatchFound = false;

        if (searchTerm) {
            productItems.forEach(item => {
                const productName = item.querySelector('h3').textContent.toLowerCase();
                const productDescription = item.querySelector('p').textContent.toLowerCase();

                if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
                    item.style.display = '';
                    if (!firstMatchFound) {
                        item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        firstMatchFound = true;
                    }
                } else {
                    item.style.display = 'none';
                }
            });
        } else {
            // If no search term, show all products
            productItems.forEach(item => item.style.display = '');
        }
    }

    handleSearch();
});



document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('show'); // Toggle the 'show' class on the menu
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('show'); // Toggle the 'show' class on the menu
    });
});









// document.getElementById('menu-toggle').addEventListener('click', function() {
//     this.classList.toggle('active');
//     const menu = document.getElementById('menu');
//     menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
// });








// document.addEventListener('DOMContentLoaded', function() {
//     var toggleButton = document.getElementById('menu-toggle');
//     var menu = document.getElementById('menu');

//     if (toggleButton) {
//         toggleButton.addEventListener('click', function() {
//             menu.classList.toggle('hidden');
//         });
//     }
// });







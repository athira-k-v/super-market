// document.addEventListener('DOMContentLoaded', () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const category = urlParams.get('category') || 'all';
    
//     const productList = document.getElementById('product-list');
    
//     const products = {
//         fruits: [
//             { id: 1, name: 'Apple', price: '$1' },
//             { id: 2, name: 'Banana', price: '$2' }
//         ],
//         vegetables: [
//             { id: 3, name: 'Carrot', price: '$1' },
//             { id: 4, name: 'Broccoli', price: '$2' }
//         ],
//         dairy: [
//             { id: 5, name: 'Milk', price: '$1' },
//             { id: 6, name: 'Cheese', price: '$3' }
//         ]
//     };
    
//     const categoryProducts = products[category] || [];
    
//     if (categoryProducts.length === 0) {
//         productList.innerHTML = '<p>No products found for this category.</p>';
//         return;
//     }
    
//     categoryProducts.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.classList.add('product');
//         productDiv.innerHTML = `
//             <h3>${product.name}</h3>
//             <p>${product.price}</p>
//             <button data-id="${product.id}">Add to Cart</button>
//         `;
//         productList.appendChild(productDiv);
//     });

//     // Handle "Add to Cart" button click
//     productList.addEventListener('click', (e) => {
//         if (e.target.tagName === 'BUTTON') {
//             const productId = e.target.getAttribute('data-id');
//             addToCart(productId);
//         }
//     });
// });

// function addToCart(productId) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     if (!cart.includes(productId)) {
//         cart.push(productId);
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }
//     window.location.href = 'cart.html'; // Redirect to cart page
// }








// *****

// document.addEventListener('DOMContentLoaded', () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const category = urlParams.get('category') || 'all';

//     const productList = document.getElementById('product-list');

//     const products = {
//         fruits: [
//             { id: 1, name: 'Apple', price: '₹30' },
//             { id: 2, name: 'Banana', price: '₹20' }
//         ],
//         vegetables: [
//             { id: 3, name: 'Carrot', price: '₹25' },
//             { id: 4, name: 'Broccoli', price: '₹40' }
//         ],
//         dairy: [
//             { id: 5, name: 'Milk', price: '₹50' },
//             { id: 6, name: 'Cheese', price: '₹60' }
//         ]
//     };

//     const categoryProducts = products[category] || [];

//     if (categoryProducts.length === 0) {
//         productList.innerHTML = '<p>No products found for this category.</p>';
//         return;
//     }

//     categoryProducts.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.classList.add('product');
//         productDiv.innerHTML = `
//             <h3>${product.name}</h3>
//             <p>${product.price}</p>
//             <button data-id="${product.id}">Add to Cart</button>
//         `;
//         productList.appendChild(productDiv);
//     });

//     // Handle "Add to Cart" button click
//     productList.addEventListener('click', (e) => {
//         if (e.target.tagName === 'BUTTON') {
//             const productId = e.target.getAttribute('data-id');
//             addToCart(productId, category);
//         }
//     });
// });







// function addToCart(productId, category) {
//     const products = {
//         fruits: [
//             { id: 1, name: 'Apple', price: '₹30' },
//             { id: 2, name: 'Banana', price: '₹20' }
//         ],
//         vegetables: [
//             { id: 3, name: 'Carrot', price: '₹25' },
//             { id: 4, name: 'Broccoli', price: '₹40' }
//         ],
//         dairy: [
//             { id: 5, name: 'Milk', price: '₹50' },
//             { id: 6, name: 'Cheese', price: '₹60' }
//         ]
//     };

//     const product = products[category].find(p => p.id == productId);
//     if (!product) return;

//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const existingProduct = cart.find(item => item.id == productId);
//     if (existingProduct) {
//         existingProduct.quantity += 1;
//     } else {
//         cart.push({ ...product, quantity: 1 });
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//     alert(`${product.name} added to cart`);
// }



















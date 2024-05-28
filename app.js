// const loader = document.querySelector(".loader")
// const myContainer = document.querySelector(".container");

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => {
//     loader.style.display="none";
//     data.forEach(user => {
//         myContainer.innerHTML+=`<div class="users">
//         <img class="avatar" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" style="height: 100px;">
//         <br>
//         <span class="name">${user.name}</span>
//         <br>
//         <span class="mail">${user.email}</span>
//         <br>
//         <span class="number">${user.phone}</span>
//         <br>
//         <span class="adress">${user.address}</span>
//         <br>
//         <button class="detay" onclick="detay(${user.id})">detay</button>
//         <br>
//     </div>`;
//     });
// })

// const detay = ((id) =>{
//     window.localStorage.setItem("user_id",id);
//     window.location.href="profile.html";
// })

// function resolveAfter() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Kullanici çagirildi');
//         }, 2000);
//     });
// }

// console.log('calling');
// resolveAfter().then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

// async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter();
//     console.log(result)
// };

// asyncCall();

const myProductList = document.querySelector('.products');

function renderProducts(data) {
    data.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        <p>${product.description}</p>
    `;
    myProductList.appendChild(div);
    });
}

// async function getProducts() {
//     const response = await fetch('https://fakestoreapi.com/products');
//     const data = await response.json();
//     renderProducts(data);
// };

// getProducts();

fetch('https://fakestoreapi.com/products')
.then (response => response.json())
.then((data)=>{
    renderProducts(data);})
.catch(error => console.log(error));
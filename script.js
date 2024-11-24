let cart = [];
let points = 0;

function addToCart(product, price, image) {
    cart.push({ product, price, image });
    updateCart();
}

function updateCart() {
    const tableBody = document.querySelector('#transactionTable tbody');
    tableBody.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.product}</td>
            <td><img src="${item.image}" alt="${item.product}"></td>
            <td>Rp ${item.price.toLocaleString('id-ID')}</td>`;
        tableBody.appendChild(row);
        total += item.price;
    });

    if (cart.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="3">Your cart is empty</td>`;
        tableBody.appendChild(row);
        document.getElementById('checkoutBtn').disabled = true;
    } else {
        document.getElementById('checkoutBtn').disabled = false;
    }

    points = Math.floor(total / 10000);
    document.getElementById('points').innerText = points;
}

function checkout() {
    alert(`Total: Rp ${cart.reduce((sum, item) => sum + item.price, 0).toLocaleString('id-ID')}\nThank you for shopping!`);
    cart = [];
    updateCart();
}

function toggleLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function handleLogin(event) {
    event.preventDefault();
    toggleLoginModal();
    document.getElementById('profileIcon').style.display = 'block';
}

function addToWishlist(productName, price, imageUrl, event = null) {
    if (event) {
        event.preventDefault(); // Prevent the default action if event is passed
    }
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let product = wishlist.find(item => item.name === productName);
    if (product) {
        product.quantity += 1;
    } else {
        wishlist.push({ name: productName, price: price, quantity: 1, imageUrl: imageUrl });
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(productName + ' added to wishlist');
    if (event) {
        window.location.href = 'keranjang1.html'; // Redirect to the wishlist page after adding the item
    }
}

function removeFromWishlist(productName) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(item => item.name !== productName);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    displayWishlist();
}

function updateQuantity(productName, change) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let product = wishlist.find(item => item.name === productName);
    if (product) {
        product.quantity += change;
        if (product.quantity <= 0) {
            wishlist = wishlist.filter(item => item.name !== productName);
        }
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        displayWishlist();
    }
}

function formatRupiah(price) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
}

function displayWishlist() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(item => item && item.name); 
    let wishlistContainer = document.getElementById('wishlist');
    if (!wishlistContainer) {
        console.error('Wishlist container not found');
        return;
    }
    wishlistContainer.innerHTML = '';
    let totalPrice = 0; // Initialize total price
    wishlist.forEach(item => {
        let div = document.createElement('div');
        div.className = 'wishlist-item';
        div.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name} Image" class="wishlist-item-image">
            <div class="wishlist-item-details">
                <h2>${item.name}</h2>
                <div class="wishlist-item-actions">
                    <button class="quantity-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
                    <button class="remove-btn" onclick="removeFromWishlist('${item.name}')">Remove</button>
                </div>
            </div>
            <div class="wishlist-item-price">
                <p>Price: ${formatRupiah(item.price)}</p>
                <p>Total: ${formatRupiah(item.price * item.quantity)}</p>
            </div>
        `;
        wishlistContainer.appendChild(div);
        totalPrice += item.price * item.quantity; // Add item price to total price

        // Inline styles for demonstration; can be moved to CSS file
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.border = '1px solid #ccc';
        div.style.marginBottom = '10px';
        div.style.padding = '10px';
        div.style.width = '100%';

        let image = div.querySelector('.wishlist-item-image');
        image.style.width = '100px';
        image.style.marginRight = '20px';

        let details = div.querySelector('.wishlist-item-details');
        details.style.flex = '1';

        let actions = div.querySelector('.wishlist-item-actions');
        actions.style.display = 'flex';
        actions.style.alignItems = 'center';
        actions.style.gap = '10px';

        let price = div.querySelector('.wishlist-item-price');
        price.style.textAlign = 'right';
    });

    // Display total price at the bottom right corner
    let totalContainer = document.createElement('div');
    totalContainer.innerHTML = `<p>Total Price: ${formatRupiah(totalPrice)}</p>`;
    totalContainer.style.position = 'fixed';
    totalContainer.style.bottom = '60px';
    totalContainer.style.right = '20px';
    document.body.appendChild(totalContainer);

    // Add button for cash out with link
    let cashOutButton = document.createElement('a');
    cashOutButton.textContent = 'Cash Out';
    cashOutButton.href = 'alamat.html'; // Replace 'cashout.html' with your desired cash out page
    cashOutButton.style.position = 'fixed';
    cashOutButton.style.bottom = '20px';
    cashOutButton.style.right = '20px';
    cashOutButton.style.backgroundColor = 'green';
    cashOutButton.style.color = 'white';
    cashOutButton.style.padding = '10px 20px';
    cashOutButton.style.borderRadius = '5px';
    cashOutButton.style.textDecoration = 'none';
    document.body.appendChild(cashOutButton);
}

document.addEventListener('DOMContentLoaded', displayWishlist);

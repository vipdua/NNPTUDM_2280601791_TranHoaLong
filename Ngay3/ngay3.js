let products = [];
let currentPage = 1;
let itemsPerPage = 5;
let totalPages = 0;
let currentProductId = null;
let currentViewProducts = [];

fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => {
        products = data;
        totalPages = Math.ceil(products.length / itemsPerPage);
        displayProducts(products);
    })
    .catch(error => console.error('Error fetching data:', error));

function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = productsToDisplay.slice(start, end);

    currentViewProducts = paginatedProducts;

    paginatedProducts.forEach(product => {
        const row = document.createElement('tr');
        row.classList.add('product-row');

        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>$${product.price}</td>
            <td>${product.category?.name || ''}</td>

            <td class="tooltip-cell">
                <img src="${product.images?.[0] || ''}" 
                        class="img-thumbnail product-img">

                <div class="product-tooltip">
                    <strong>Description</strong>
                    <hr style="border-color: rgba(255,255,255,0.2)">
                    ${product.description}
                </div>
            </td>

            <td>
                <button class="btn btn-sm btn-info"
                    onclick="viewProductDetail(${product.id})">
                    View
                </button>
            </td>
        `;
        productList.appendChild(row);
    });

    updatePaginationControls();
}

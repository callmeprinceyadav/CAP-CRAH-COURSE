document.addEventListener('DOMContentLoaded', function () {
    const productListing = document.getElementById('productListing');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortOrder = document.getElementById('sortOrder');

    function fetchProducts() {
        const category = categoryFilter.value;
        const sort = sortOrder.value === 'asc' ? '_sort=price&_order=asc' : '_sort=price&_order=desc';
        let url = 'https://fakestoreapi.com/products';

        if (category) {
            url += `?category=${category}`;
        }

        url += `${category ? '&' : '?'}${sort}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(products => {
                productListing.innerHTML = '';

                products.forEach(product => {
                    const productItem = document.createElement('div');
                    productItem.classList.add('product');
                    productItem.innerHTML = `
                        <img src="${product.image}" alt="${product.title}">
                        <h3>${product.title}</h3>
                        <p>$${product.price}</p>
                    `;
                    productListing.appendChild(productItem);
                });
            })
            .catch(error => console.error('Error fetching products:', error));
    }

    // Event listeners
    categoryFilter.addEventListener('change', fetchProducts);
    sortOrder.addEventListener('change', fetchProducts);

    // Initial fetch
    fetchProducts();
});
 
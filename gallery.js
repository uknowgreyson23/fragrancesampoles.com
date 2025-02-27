
window.onload = function() {
    loadProducts();
};

function loadProducts() {
    fetch('products.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const products = xml.getElementsByTagName("product");
            let html = "";
            for (let i = 0; i < products.length; i++) {
                let name = products[i].getElementsByTagName("name")[0].textContent;
                let description = products[i].getElementsByTagName("description")[0].textContent;
                let image = products[i].getElementsByTagName("image")[0].textContent;
                html += `<div class="product-card">
                            <img src="${image}" alt="${name}" class="product-image">
                            <h3>${name}</h3>
                            <p>${description}</p>
                            <button class="buy-now">Buy Now</button>
                          </div>`;
            }
            document.getElementById("product-list").innerHTML = html;
        });
}

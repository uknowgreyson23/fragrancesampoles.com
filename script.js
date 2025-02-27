
// Load Products from XML
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
                html += `<h3>${name}</h3><p>${description}</p>`;
            }
            document.getElementById("product-list").innerHTML = html;
        });
}

// Poll Functionality
function submitPoll() {
    const choices = document.getElementsByName("scent");
    let selected = "";
    for (let choice of choices) {
        if (choice.checked) {
            selected = choice.value;
            break;
        }
    }
    if (selected) {
        document.getElementById("poll-result").innerHTML = `You voted for: ${selected}`;
    } else {
        alert("Please select an option before voting.");
    }
}

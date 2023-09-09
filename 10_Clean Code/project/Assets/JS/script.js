document.addEventListener("DOMContentLoaded", function () {
	// mengambil elemen input dan tombol submit
	const productNameInput = document.getElementById("validationDefault01");
	const productPriceInput = document.getElementById("validationDefault06");
	const submitButton = document.querySelector("button[type='submit']");

	// menambahkan event listener untuk input nama produk dan harga produk
	productNameInput.addEventListener("input", validateProductName);
	productPriceInput.addEventListener("input", validateProductPrice);

	// validasi untuk input nama produk
	function validateProductName() {
		const productName = productNameInput.value;
		const productNameError = document.getElementById("productNameError");

		if (productName.length > 25 || /[@#{}]/.test(productName)) {
			productNameError.textContent =
			  productName.length > 25
				? "Product Name must not exceed 25 characters."
				: "Product Name must not contain symbols.";
			productNameError.style.display = "block";
			productNameInput.classList.add("is-invalid");
		  } else {
			productNameError.style.display = "none";
			productNameInput.classList.remove("is-invalid");
		  }

		validateForm();
	}

	// validasi untuk input harga produk
	function validateProductPrice() {
		const productPrice = productPriceInput.value;
		const productPriceError = document.getElementById("productPriceError");

		if (!productPrice) {
			productPriceError.textContent = "Please enter a valid Product Price.";
			productPriceError.style.display = "block";
			productPriceInput.classList.add("is-invalid");
		} else {
			productPriceError.style.display = "none";
			productPriceInput.classList.remove("is-invalid");
		}

		validateForm();
	}

	// validasi form
	function validateForm() {
		if (productNameInput.value && productPriceInput.value) {
			submitButton.removeAttribute("disabled");
		} else {
			submitButton.setAttribute("disabled", "true");
		}
	}
});


document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault(); //agar tidak reload
	addProduct();
});

const productList = [];

// Fungsi untuk menambahkan produk
function addProduct() {
	const productName = document.getElementById("validationDefault01").value;
	const productCategory = document.getElementById("validationDefault02").value;
	const productFreshness = document.querySelector('input[name="flexRadioDefault"]:checked').nextElementSibling.textContent;
	const description = document.getElementById("validationDefault05").value;
	const productPrice = document.getElementById("validationDefault06").value;

	if (productName && productCategory && productFreshness && description && productPrice) {
		const product = {
			name: productName,
			category: productCategory,
			freshness: productFreshness,
			description: description,
			price: productPrice,
		};

		productList.push(product);

		// Menampilkan produk dalam tabel
		const tableBody = document.getElementById("product-list");
		const newRow = tableBody.insertRow();
		newRow.innerHTML = `
                <td>${productList.length}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.freshness}</td>
				<td>${product.description}</td>
                <td>${product.price}</td>
                <td><button class="btn btn-danger" onclick="deleteProduct(this)">Hapus</button></td>`;

		// Mengosongkan formulir
		document.getElementById("validationDefault01").value = "";
		document.getElementById("validationDefault02").value = "";
		document.querySelector('input[name="flexRadioDefault"]:checked').checked = false;
		document.getElementById("validationDefault05").value = "";
		document.getElementById("validationDefault06").value = "";
	}
}

// Fungsi untuk menghapus produk
function deleteProduct(button) {
	const rowIndex = button.parentElement.parentElement.rowIndex;
	productList.splice(rowIndex - 1, 1);
	button.parentElement.parentElement.remove();
}

// Fungsi untuk mencari produk
function searchProduct() {
    const searchKeyword = document.getElementById("search-input").value.toLowerCase();
    const tableRows = document.querySelectorAll("#product-list tr");
	tableRows.forEach((row) => {
		const productName = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
		if (productName.includes(searchKeyword)) {
			row.style.display = "";
		} else {
			row.style.display = "none";
		}
	});
}
document.addEventListener("DOMContentLoaded", function () {
	// mengambil elemen input dan tombol submit
	const productNameInput = document.getElementById("validationDefault01");
	const productPriceInput = document.getElementById("validationDefault06");
	const submitButton = document.querySelector("button[type='submit']");

	// menambahkan event listener untuk input nama produk dan harga produk
	productNameInput.addEventListener("input", validateProductName);
	productPriceInput.addEventListener("input", validateProductPrice);

	// validasi buat input nama produk
	function validateProductName() {
		const productName = productNameInput.value;
		const productNameError = document.getElementById("productNameError");

		if (productName.length > 25) {
			productNameError.textContent = "Product Name must not exceed 25 characters.";
			productNameError.style.display = "block";
			productNameInput.classList.add("is-invalid");
		} else if (/[@#{}]/.test(productName)) {
			productNameError.textContent = "Product Name must not contain symbols.";
			productNameError.style.display = "block";
			productNameInput.classList.add("is-invalid");
		} else {
			productNameError.style.display = "none";
			productNameInput.classList.remove("is-invalid");
		}

		validateForm();
	}

	// validasi buat input harga produk
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

	// validasi form agar kalau ada yang nggak sesuai tombol submit akan disable
	function validateForm() {
		if (productNameInput.value && productPriceInput.value) {
			submitButton.removeAttribute("disabled");
		} else {
			submitButton.setAttribute("disabled", "true");
		}
	}

	// form ketika disubmit
	document.querySelector("form").addEventListener("submit", function (event) {
		event.preventDefault();
		if (productNameInput.value && productPriceInput.value) {
			const formData = {
				productName: productNameInput.value,
				productPrice: productPriceInput.value,
			};
			alert(`Produk Name: ${formData.productName} \n harga: ${formData.productPrice} \n berhasil ditambahkan`);
		}
	});
});
// Mendefinisikan variabel data sebagai array kosong untuk menyimpan data produk
let data = [];

// Fungsi untuk menambahkan data baru ke dalam array data
function insertData() {
  const inputs = getFormInputs(); // Mengambil nilai dari input form

  // Memeriksa apakah ada input yang kosong
  if (checkEmptyInputs(inputs)) {
    alert("Semua input harus diisi.");
    return;
  }

  // Menambahkan data baru ke dalam array data
  // Hanya menyimpan nama file dari input gambar
  inputs.productImage = getFileName(inputs.productImage);

  data.push(inputs);

  // Memperbarui tampilan tabel
  updateTable();
}

// Fungsi untuk memperbarui tampilan tabel dengan data terbaru
function updateTable() {
  const table = document.getElementById("dataTable");
  const tableBody = table.querySelector("tbody");

  // Mengosongkan isi tbody
  tableBody.innerHTML = "";

  // Memperbarui baris-baris tabel dengan data yang tersimpan dalam array data
  data.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td class="border px-4 py-2">${index + 1}</td>`;
    for (const key in item) {
      if (Object.hasOwnProperty.call(item, key)) {
        const cell = document.createElement("td");
        cell.classList.add("border", "px-4", "py-2");
        // Jika kunci adalah 'productImage', hanya menampilkan nama file
        if (key === "productImage") {
          cell.textContent = item[key];
        } else {
          cell.textContent = item[key];
        }
        row.appendChild(cell);
      }
    }
    tableBody.appendChild(row);
  });

  // Menampilkan tabel jika ada data
  table.classList.toggle("hidden", data.length === 0);
}

// Fungsi untuk mendapatkan nilai input dari form
function getFormInputs() {
  return {
    productName: document.getElementById("productName").value,
    productCategory: document.getElementById("productCategory").value,
    productImage: document.getElementById("productImage").value,
    productFreshness: document.getElementById("productFreshness").value,
    additionalDescription: document.getElementById("additionalDescription")
      .value,
    productPrice: document.getElementById("productPrice").value,
  };
}

// Fungsi untuk memeriksa apakah ada input yang kosong
function checkEmptyInputs(inputs) {
  for (const key in inputs) {
    if (!inputs[key]) {
      return true;
    }
  }
  return false;
}

// Fungsi untuk mendapatkan nama file dari input gambar
function getFileName(filePath) {
  // Menggunakan split() untuk mendapatkan nama file dari path
  return filePath.split("\\").pop().split("/").pop();
}

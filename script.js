const tenNguoiDung = document.getElementById("tenNguoiDung");
const emailNguoiDung = document.getElementById("emailNguoiDung");
const nutThemNguoiDung = document.getElementById("themNguoiDung");
const bangNguoiDung = document.getElementById("bangNguoiDung");

let danhSachNguoiDung = JSON.parse(localStorage.getItem('danhSachNguoiDung')) || [];

function renderDanhSachNguoiDung() {
    bangNguoiDung.innerHTML = "";

    danhSachNguoiDung.forEach((nguoiDung, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${nguoiDung.name}</td>
            <td>${nguoiDung.email}</td>
            <td>
                <button class="xoaBtn" onclick="xoaNguoiDung(${nguoiDung.id})">Xoa</button>
            </td>
        `;

        bangNguoiDung.appendChild(tr);
    });
}

function saveToLocalStorage() {
    localStorage.setItem('danhSachNguoiDung', JSON.stringify(danhSachNguoiDung));
}

nutThemNguoiDung.addEventListener('click', function() {
    const ten = tenNguoiDung.value.trim();
    const email = emailNguoiDung.value.trim();

    if (ten !== "" && email !== "") {
        const nguoiDungMoi = {
            id: Date.now(),
            name: ten,
            email: email
        };

        danhSachNguoiDung.push(nguoiDungMoi);
        saveToLocalStorage();
        renderDanhSachNguoiDung();

        tenNguoiDung.value = "";
        emailNguoiDung.value = "";
    } else {
        alert("Vui long nhap day du ten va email!");
    }
});

function xoaNguoiDung(id) {
    danhSachNguoiDung = danhSachNguoiDung.filter(nguoiDung => nguoiDung.id !== id);
    saveToLocalStorage();
    renderDanhSachNguoiDung();
}

renderDanhSachNguoiDung();

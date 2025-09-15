const order1 = document.getElementById("order1");
const order2 = document.getElementById("order2");

if (order1) {
  order1.addEventListener("click", buttonOnClick);
}

if (order2) {
  order2.addEventListener("click", buttonOnClick);
}

function buttonOnClick() {
  window.location.href = "form.html";
}

const kembaliBtn = document.getElementById("kembaliBtn");
    kembaliBtn.addEventListener("click", kembali)

function kembali() {
  window.history.back();
}

const kirimBtn = document.getElementById("kirimBtn");
    kirimBtn.addEventListener("click", kirim)

function kirim() {
    window.location.href = "action.html"
}
let imgBox = document.querySelector("#imgBox");
let qrImage = document.querySelector("#qr-Image");
let input = document.querySelector("input");
let btn = document.querySelector("button");

function genQRCode() {
  if (input.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      input.value;
    imgBox.classList.add("show-img");
  } else {
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 1000);
  }
}

btn.addEventListener("click", () => {
  genQRCode();
});

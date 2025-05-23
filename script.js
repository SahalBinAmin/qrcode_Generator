const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qr-Image");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const topPara = document.getElementById("topPara");

function genQRCode() {
  if (input.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      input.value;
    imgBox.classList.add("show-img");
    input.classList.add("hidden");
    topPara.classList.add("hidden");

    btn.innerText = "Generated , Click To Refresh";
    btn.addEventListener("click", () => {
      location.reload();
    });
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

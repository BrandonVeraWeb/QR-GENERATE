function genQR() {
  const gapi = "https://chart.googleapis.com/chart?cht=qr&chs=";
  const myImg = document.getElementById("img");
  const myText = document.getElementById("qrtext").value;
  const mySize = document.getElementById("size").value;

  if (myText == "") {
    throw new Error("The text can not be empty");
  }

  switch (mySize) {
    case "100":
      myImg.src = gapi + "100x100" + "&chl=" + myText;
      break;
    case "150":
      myImg.src = gapi + "150x150" + "&chl=" + myText;
      break;
    case "200":
      myImg.src = gapi + "200x200" + "&chl=" + myText;
      break;
    case "250":
      myImg.src = gapi + "250x250" + "&chl=" + myText;
      break;
    case "300":
      myImg.src = gapi + "300x300" + "&chl=" + myText;
      break;
    default:
      throw new Error("The size can not be empty");
      
  }
}
const generateQr = document.getElementById("generate-qr");

generateQr.addEventListener("click", () => {
  genQR();
});

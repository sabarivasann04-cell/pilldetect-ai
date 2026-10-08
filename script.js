const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const tabletCount = document.getElementById("tabletCount");
const marking = document.getElementById("marking");
const verification = document.getElementById("verification");

imageInput.addEventListener("change", function () {
  const file = this.files[0];

  if (!file) return;

  const imageURL = URL.createObjectURL(file);

  previewImage.src = imageURL;
  previewImage.style.display = "block";

  // Demo visual detection
  tabletCount.textContent = "Analyzing...";

  marking.textContent = "Image detected";

  verification.textContent = "Visual analysis complete";

  setTimeout(() => {
    tabletCount.textContent = "Detected";

    verification.textContent =
      "Object detection ready";
  }, 1500);
});

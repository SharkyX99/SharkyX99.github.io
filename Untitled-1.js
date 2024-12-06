function openModal(src) {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    img.src = src;
    captionText.innerHTML = src.split('/').pop(); // Display image filename as caption
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
if (window.innerWidth <= 768) {
    document.body.style.width = "1024px";  // ตั้งค่าความกว้างให้เท่ากับ 1024px
    document.body.style.margin = "0 auto";  // จัดตำแหน่งให้อยู่ตรงกลาง
}

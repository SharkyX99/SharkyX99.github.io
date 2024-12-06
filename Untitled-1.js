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
function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var caption = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = imageSrc;
    caption.innerHTML = "Image caption here";  // คุณสามารถปรับ caption ตามต้องการ
}

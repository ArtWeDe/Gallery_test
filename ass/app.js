function active (open) {
    open.classList.toggle('active');
}

document.getElementById("img").onclick = function() {
    document.getElementById("open_img").classList.add('active'),
        document.getElementById("section").classList.add('active');
}
document.getElementById("close").onclick = function() {
    document.getElementById("open_img").classList.remove('active'),
        document.getElementById("section").classList.remove('active');
}
document.getElementById("img1").onclick = function() {
    document.getElementById("open_img1").classList.add('active'),
        document.getElementById("section").classList.add('active');
}
document.getElementById("close1").onclick = function() {
    document.getElementById("open_img1").classList.remove('active'),
        document.getElementById("section").classList.remove('active');
}
document.getElementById("img2").onclick = function() {
    document.getElementById("open_img2").classList.add('active');
    document.getElementById("section").classList.add('active');
}
document.getElementById("close2").onclick = function() {
    document.getElementById("open_img2").classList.remove('active'),
        document.getElementById("section").classList.remove('active');
}

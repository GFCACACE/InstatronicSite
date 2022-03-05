document.querySelector('#email')
.addEventListener('click', () =>
window.location.href = 'index.html')

function copyToClipBoard() {

    var content = document.getElementById('fedec');

    content.select();
    document.execCommand('copy');

    alert("Copied!");
}
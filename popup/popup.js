const openBtn = document.getElementById('open');
const urlInput = document.getElementById('url');

openBtn.addEventListener('click', event => {
    event.preventDefault();
    const url = urlInput.value;

    window.open(url,'slack', 'width=320,height=480');
});

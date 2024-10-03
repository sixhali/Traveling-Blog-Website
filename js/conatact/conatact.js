const bars = document.getElementById('bars')
const links = document.getElementById('links')
const xmark = document.getElementById('xmark')




bars.addEventListener('click', (e) => {
    if (links.style.display === 'none') {
        links.style.display = 'flex';
    } else {
        links.style.display = 'none';
    }
});

xmark.addEventListener('click', (e) => {
    if (links.style.display === 'flex') {
        links.style.display = 'none';
    } else {
        links.style.display = 'flex';
    }
});






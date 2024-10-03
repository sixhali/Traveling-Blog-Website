const bars = document.getElementById('bars')
const links = document.getElementById('links')
const xmark = document.getElementById('xmark')
const Linksa = document.querySelectorAll('.linka')



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

window.addEventListener('load',(e)=>{
    const currentpath = window.location.pathname
    Linksa.forEach(link=>{
        if (link.getAttribute('href')===currentpath) {
            link.classList.add('active')

        }
    })
})



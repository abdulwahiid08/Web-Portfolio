const navi = () => {
    const mobile = document.querySelector('.mobile');
    const nav = document.querySelector('.nav-link');
    const navBar = document.querySelectorAll('.nav-link li');

    mobile.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
        
        navBar.forEach((link, index) => {
            if(link.transisi) {
                link.transisi = '';
            } else {
                link.transisi = `navBarTran 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });   
    });
}
navi();






window.addEventListener('scroll', (event)=> {
    console.log(window.scrollY);
    if(window.scrollY >= 30){
        const header = document.getElementsByTagName('header')[0];
        header.classList.add('header__hidden');
        header.classList.remove('header__visible');
    }

    if(window.scrollY===0){
        const header = document.getElementsByTagName('header')[0];
        header.classList.remove('header__hidden');
        header.classList.add('header__visible');
    }
});
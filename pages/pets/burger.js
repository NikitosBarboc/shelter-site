(() => {
    window.onload = () => {
      let header__burger = document.querySelector('.header-burger');
      let header__menu = document.querySelector('.header-menu');
      let body = document.querySelector('body');
      header__burger.addEventListener('click', (e)=> {
        header__burger.classList.toggle('active');
        header__menu.classList.toggle('active');
        body.classList.toggle('lock');
      })
      document.addEventListener('click', event => {
        console.log(event.target)
        if(event.target.classList.contains('link')){
        header__menu.classList.remove('active')
        body.classList.remove('lock');
        header__burger.classList.remove('active');
        }
      })
    }
  })();

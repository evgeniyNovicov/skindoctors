const initActionMenu = () => {
    const menuButton = document.querySelector('[data-name="menu-intro"]');
    const menuContent = document.querySelector('[data-name="menu-content"]');
    const menuLogo = document.querySelector('[data-name="menu-logo"]');
    const actionMenu = () => {
        menuContent.classList.toggle(CLASSES.ACTIVE);
        menuButton.classList.toggle(CLASSES.ACTIVE);
        menuLogo.classList.toggle(CLASSES.HIDDEN);
    };

    menuButton.addEventListener('click', actionMenu);
};
initActionMenu();
const setChooseSlider = () => {
    if (window.innerWidth <= 1279) {
        chooseSlider = new Swiper(`.choose__box`, {
            slidesPerView: 2,
            speed: 500,
            centeredSlides: false,
            spaceBetween: 20,
            autoHeight: true,
            pagination: {
                el: `.choose__list-pagination`,
                clickable: true,
                type: 'bullets',
                dynamicBullets: true,
            },
            breakpoints: {
                1280: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                    autoHeight: true,
                    spaceBetween: 20,
                },
                320: {
                    autoHeight: true,
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
            },
        });
    }
};
setChooseSlider();

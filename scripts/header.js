const initActionMenu = () => {
    const menuButton = document.querySelector('[data-name="menu-intro"]');
    const menuContent = document.querySelector('[data-name="menu-content"]');
    const menuButtonCart = document.querySelector('[data-name="button-cart"]');
    const menuSearchInput = document.querySelector('[data-name="search-input"]');
    const actionMenu = () => {
        menuContent.classList.toggle(CLASSES.ACTIVE);
        menuButton.classList.toggle(CLASSES.ACTIVE);
        menuButtonCart.classList.toggle(CLASSES.ACTIVE);
        menuSearchInput.classList.toggle(CLASSES.ACTIVE);
    };

    menuButton.addEventListener('click', actionMenu);
};
initActionMenu();

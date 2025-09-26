const CLASSES = {
    OPEN: 'js--open',
    HIDDEN: 'js--hidden',
    SCROLLED : 'js--scrolled',
    ACTIVE: 'js--active',
    NONE: 'js--none',
};

const initFaq = () => {
    const faqs = document.querySelectorAll('[data-name="faq"]');

    const setFaq = (faqItem, faqItems) => {
        const faqContent = faqItem.querySelector('[data-name="faq-content"]');
        const faqContentHeight = faqContent.scrollHeight;
        faqItems.forEach((item) => {
            const itemContent = item.querySelector('[data-name="faq-content"]');
            if(faqItem === item) {
                if(faqItem.classList.contains(CLASSES.ACTIVE)) {
                    faqItem.classList.remove(CLASSES.ACTIVE);
                    faqContent.style.maxHeight = `0px`;
                } else {
                    faqItem.classList.add(CLASSES.ACTIVE);
                    faqContent.style.maxHeight = `${faqContentHeight}px`;
                }
            } else {
                item.classList.remove(CLASSES.ACTIVE);
                itemContent.style.maxHeight = `0px`;
            }
        });
    };
    if (faqs.length) {
        faqs.forEach((faq) => {
            const faqItems = faq.querySelectorAll('[data-name="faq-item"]');
            faqItems.forEach((faqItem) => {
                const faqIntro = faqItem.querySelector('[data-name="faq-intro"]');
                faqIntro.addEventListener('click', () => setFaq(faqItem, faqItems));
            });
        });
    };
};
initFaq();
function preventScrollJump() {
    const scrollPos = window.pageYOffset;
    window.scrollTo(0, scrollPos);
}
window.addEventListener('load', preventScrollJump);
function initScrollReveal(selector) {
    const elements = document.querySelectorAll(selector);

    if (elements.length === 0) {
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('js--animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        observer.observe(element);
    });
}
initScrollReveal('[data-animation]');
const initPopup = () => {
    const popupButtons = document.querySelectorAll('[data-popup-button]');
    const closePopupElements = document.querySelectorAll('[data-name="popup-button-close"]');
    const { body } = document;

    const POPUP_ID_ATTRIBUTE = 'data-popup';

    const findCurrentPopupId = () => document.querySelector(`[${POPUP_ID_ATTRIBUTE}].${CLASSES.ACTIVE}`).dataset.popup;

    const openPopup = (id) => {
        const popupElement = document.querySelector(`[data-popup="${id}"]`);
        popupElement.classList.add(CLASSES.ACTIVE);
        popupElement.classList.remove(CLASSES.HIDDEN);
        body.classList.add(CLASSES.SCROLLED);
    };

    const closePopup = (id) => {
        const popupElement = document.querySelector(`[data-popup="${id}"]`);
        popupElement.classList.remove(CLASSES.ACTIVE);
        popupElement.classList.add(CLASSES.HIDDEN);
        body.classList.remove(CLASSES.SCROLLED);
    };

    const closeAll = () => {
        const activePopupElements = document.querySelectorAll(`[${POPUP_ID_ATTRIBUTE}].${CLASSES.ACTIVE}`);
        activePopupElements.forEach((popupElement) => {
            const popupId = popupElement.getAttribute(POPUP_ID_ATTRIBUTE);
            closePopup(popupId);
        });
    };

    const handlerPopupButton = (event) => {
        if (event.type === 'click' || event.key === 'Enter') {
            const popupButton = event.target.closest('[data-popup-button]');
            const buttonPopupId = popupButton.dataset.popupButton;
            openPopup(buttonPopupId);
        }
    };

    const onClickPopupClose = () => {
        closePopup(findCurrentPopupId());
    };

    const onKeydownPopupClose = (event) => {
        if (event.key === 'Escape') {
            closeAll();
        }
    };

    if (popupButtons.length > 0) {
        popupButtons.forEach((button) => {
            button.addEventListener('click', handlerPopupButton);
            button.addEventListener('keydown', handlerPopupButton);
        });
        closePopupElements.forEach((closeButton) => {
            closeButton.addEventListener('click', onClickPopupClose);
        });
        document.addEventListener('keydown', onKeydownPopupClose);
    }
}
initPopup();

const initMap = () => {
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [53.898570, 27.573168], // Координаты Минска
            zoom: 13
        });

        // Создание маркера
        var myPlacemark = new ymaps.Placemark([53.898570, 27.573168], {
            hintContent: 'Skindoctors',
            balloonContent: 'Skindoctors </br> Первомайская 14 к2'

        }, {
            preset: 'islands#redDotIcon'
        });

        // Добавление маркера на карту
        myMap.geoObjects.add(myPlacemark);

        // Открытие балуна маркера
        myPlacemark.balloon.open();
    }
};
initMap();

const initDropdown = () => {
    const dropdowns = document.querySelectorAll('[data-name="dropdown-click"]');

    const closeAllDropdowns = () => {
        dropdowns.forEach((dropdown) => {
            const dropdownContent = dropdown?.querySelector('[data-name="dropdown-content"]');
            dropdownContent?.classList.remove(CLASSES.ACTIVE);
            dropdown?.classList.remove(CLASSES.ACTIVE);
        });
    };
    dropdowns.forEach((dropdown) => {
        const dropdownIntro = dropdown?.querySelector('[data-name="dropdown-intro"]');
        const dropdownContent = dropdown?.querySelector('[data-name="dropdown-content"]');
        const dropdownHeaderText = dropdown?.querySelector('[data-name="dropdown-header-text"]');
        const dropdownItems = dropdown?.querySelectorAll('[data-name="dropdown-item"]');
        const dropdownServiceResultInput = dropdown?.querySelector('[data-name="input-service-result"]');

        if (!dropdown || !dropdownIntro || !dropdownContent || !dropdownHeaderText || !dropdownItems) {
            return;
        }
        const chooseDropdown = (event) => {
            const dropdownItem = event.target.closest('[data-name="dropdown-item"]');
            const dropdownItemText = dropdownItem.querySelector('span');
            dropdownHeaderText.textContent = dropdownItemText.textContent || '';
            dropdownServiceResultInput.value = dropdownItemText.textContent || '';
            dropdownContent?.classList.remove(CLASSES.ACTIVE);
            dropdown?.classList.remove(CLASSES.ACTIVE);
        };

        function setDropdown() {
            event.stopPropagation();
            if (dropdown.classList.contains(CLASSES.ACTIVE)) {
                dropdownContent?.classList.remove(CLASSES.ACTIVE);
                dropdown?.classList.remove(CLASSES.ACTIVE);
            } else {
                dropdownContent?.classList.add(CLASSES.ACTIVE);
                dropdown?.classList.add(CLASSES.ACTIVE);
            }
        };

        dropdownIntro?.addEventListener('click', setDropdown);
        dropdownItems.forEach((item) => {
            item.addEventListener('click', chooseDropdown);
        });
    });

    document.addEventListener('click', (event) => {
        let clickedInsideDropdown = false;
        dropdowns.forEach((dropdown) => {
            if (dropdown.contains(event.target)) {
                clickedInsideDropdown = true;
            }
        });
        if (!clickedInsideDropdown) {
            closeAllDropdowns();
        }
    });
};
initDropdown();
const setInputMask = () => {
    const telInputs = document.querySelectorAll('[type="tel"]');
    // eslint-disable-next-line no-unused-vars
    let phoneMask;
    telInputs.forEach((input) => {
        // eslint-disable-next-line no-undef
        phoneMask = IMask(input, { mask: '+{375}(00)000-00-00' });
    });
}
setInputMask();

const initMagazineSlider = () => {
    const magazineSwiper = new Swiper('[data-name="magazine-slider"]', {
        slidesPerView: 2,
        speed: 1500,
        navigation: {
            nextEl: '.magazine-slider__button--next',
            prevEl: '.magazine-slider__button--prev',
        },
        spaceBetween: 20,
        // Пагинация с кастомным renderBullet
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'custom',
            renderCustom: function(swiper, current, total) {
                let bullets = '';
                for (let i = 1; i <= total; i++) {
                    const isActive = i === current;
                    bullets += `
                        <span class="swiper-pagination-bullet ${isActive ? 'swiper-pagination-bullet-active' : ''}" 
                              data-index="${i - 1}">
                            ${String(i).padStart(2, '0')}
                        </span>
                    `;
                }
                return bullets;
            }
        },
    });
};
initMagazineSlider();
const initPositionTooltip = () => {
    const SETTINGS = {
        selector: '.tooltip-description__inner',
        leftIndent: 30,
        rightIndent: 30,
        topIndent: 15,
        bottomIndent: 15
    }

    const tooltips = document.querySelectorAll(SETTINGS.selector);

    const resetPosition = (tooltip) => {
        tooltip.style.transform = `translateX(0px)`;
    }

    const getValue = (numberValue) => {
        return String(numberValue).replace('-','')
    }
    if(tooltips.length) {
        tooltips.forEach((tooltip) => {

            resetPosition(tooltip);

            if (tooltip.getBoundingClientRect().left < 0) {
                const leftValue = tooltip.getBoundingClientRect().left - SETTINGS.leftIndent;
                tooltip.style.transform = `translateX(${getValue(leftValue)}px)`
            }

            const summWidth = tooltip.getBoundingClientRect().left + tooltip.getBoundingClientRect().width
            const differenceWidth = window.innerWidth - summWidth;
            if (differenceWidth < 0) {
                const rightValue = differenceWidth - SETTINGS.rightIndent;
                tooltip.style.transform = `translateX(-${getValue(rightValue)}px)`;
            }
        });
    };
};
initPositionTooltip();
window.addEventListener('resize', initPositionTooltip);
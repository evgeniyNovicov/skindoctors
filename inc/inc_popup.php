<div class="popup" data-popup="contact">
    <div class="popup__overlay" data-name="popup-button-close"></div>
    <div class="popup__content">
        <div class="popup__inner">
            <div class="popup__header">
                <h3 class="popup__heading">Заполните форму</h3>
            </div>
            <form action="" class="form">
                <input type="text" class="input" name="name" placeholder="Имя">
                <input type="phone" class="input" name="phone" placeholder="+7 (___) ___-__-__">
                <input type="email" class="input" name="email" placeholder="Email">
                <textarea class="textarea" name="message" placeholder="Комментарий"></textarea>
                <label for="checkbox-popup" class="checkbox">
                    <input id="checkbox-popup" type="checkbox" name="policy">
                    <span class="checked">
                            <span class="checked-active">
                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.75 6.16663C3.59104 7.46838 4.62324 8.19822 6.46429 9.49996L12.25 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </span>
                    <span class="checkbox__text">Я согласен на обработку моих персональных данных в соответствии с <a href="#">Политикой.</a></span>
                </label>
                <button type="submit" class="button">Оставить заявку</button>
            </form>
            <div class="popup__button-close" data-name="popup-button-close">
                <div class="popup-button-close__inner"></div>
            </div>
        </div>
    </div>
</div>
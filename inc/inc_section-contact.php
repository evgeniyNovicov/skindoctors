<section class="section section--pb-lg">
    <div class="container">
        <div class="feedback" data-animation="slide">
            <div class="feedback__body">
                <div class="feedback__map" id="map"></div>
                <div class="feedback__form" data-animation="fade" data-animation-delay="400">
                    <form action="" class="form">
                        <h2 class="heading heading--big heading--light">Оставьте заявку</h2>
                        <div class="feedback__paragraph">Оставьте свои контакты, мы свяжемся с вами в ближайшее время для согласования записи</div>
                        <div class="form__body">
                            <input type="text" name="name" class="input" placeholder="Ваше имя" required>
                            <input type="tel" name="phone" class="input" placeholder="+375 (__) __-__-___" required>
                            <input type="email" name="email" class="input" placeholder="Ваш e-mail" required>
                            <div class="dropdown dropdown--click" data-name="dropdown">
                                <div class="dropdown__header" data-name="dropdown-intro">
                                    <div class="dropdown__header-text" data-name="dropdown-header-text">Выберите услугу </div>
                                    <input type="hidden" name="service"  data-name="input-service-result" required>
                                    <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0.5L9 8.5L17 0.5" stroke="#918068" stroke-linecap="round" />
                                    </svg>
                                </div>
                                <div class="dropdown__content" data-name="dropdown-content">
                                    <div class="dropdown__inner">
                                        <div class="dropdown__list">
                                            <label class="dropdown-item" data-name="dropdown-item">
                                                <input type="radio" name="service" value="Консультация-врача" class="dropdown-item__input">
                                                <span class="dropdown-item__text">Консультация врача</span>
                                            </label>
                                            <label class="dropdown-item" data-name="dropdown-item">
                                                <input type="radio" name="service" value="Комплексы, всегда выгодно" class="dropdown-item__input">
                                                <span class="dropdown-item__text">Комплексы, всегда выгодно</span>
                                            </label>
                                            <label class="dropdown-item" data-name="dropdown-item">
                                                <input type="radio" name="service" value="Омоложение за один визит" class="dropdown-item__input">
                                                <span class="dropdown-item__text">Омоложение за один визит</span>
                                            </label>
                                            <label class="dropdown-item" data-name="dropdown-item">
                                                <input type="radio" name="service" value="Фотоомоложение, фотолечение LUMENIS M22" class="dropdown-item__input">
                                                <span class="dropdown-item__text">Фотоомоложение, фотолечение LUMENIS M22</span>
                                            </label>
                                            <label class="dropdown-item" data-name="dropdown-item">
                                                <input type="radio" name="service" value="Микроигольчатый RF-лифтинг MORPHEUS 8 PRO" class="dropdown-item__input">
                                                <span class="dropdown-item__text">Микроигольчатый RF-лифтинг MORPHEUS 8 PRO</span>
                                            </label>
                                            <label class="dropdown-item" data-name="dropdown-item">
                                                <input type="radio" name="service" value="Smas лифтинг | LINEAR Z 2025" class="dropdown-item__input">
                                                <span class="dropdown-item__text">Smas лифтинг | LINEAR Z 2025</span>
                                            </label>
                                            <label class="dropdown-item" data-name="dropdown-item">
                                                <input type="radio" name="service" value="Лазерное омоложение, лазерное лечение RESUR FX LUMENIS" class="dropdown-item__input">
                                                <span class="dropdown-item__text">Лазерное омоложение, лазерное лечение RESUR FX LUMENIS</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="button button--gold">отправить</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
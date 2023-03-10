import React from 'react';
import '../socials.scss';
import './Footer.scss';
import socials from '../socials.svg';



const Footer = () => {
    return (
        <footer className='container footer'>
            <div className="footer__section">
                <h3 className="footer__section__heading">
                    О компании
                </h3>
                <div className="footer__section__content">
                    <a href="/">
                        Партнёрская программа
                    </a>
                    <a href="/">
                        Вакансии
                    </a>
                </div>
            </div>
            <div className="footer__section footer__section--grow">
                <h3 className="footer__section__heading">
                    Меню
                </h3>
                <div className="footer__section__group">
                    <div className="footer__section__content">
                        <a href="/">
                            Расчёт стоимости
                        </a>
                        <a href="/">
                            Услуги
                        </a>
                        <a href="/">
                            Виджеты
                        </a>
                        <a href="/">
                            Интеграции
                        </a>
                        <a href="/">
                            Наши клиенты
                        </a>
                    </div>
                    <div className="footer__section__content">
                        <a href="/">
                            Кейсы
                        </a>
                        <a href="/">
                            Благодарственные письма
                        </a>
                        <a href="/">
                            Сертификаты
                        </a>
                        <a href="/">
                            Блог на Youtube
                        </a>
                        <a href="/">
                            Вопрос / Ответ
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__section footer__section--contacts">
                <h3 className="footer__section__heading">
                    Контакты
                </h3>
                <div className="footer__section__contacts">
                    <a className='tel' href="tel:+75555555555" target='_blank' rel="noreferrer">
                        +7 555 555-55-55
                    </a>
                    <div className="socials">
                        <a href="https://t.me/+75555555555" target='_blank' rel="noreferrer">
                            <svg className='social'>
                                <use xlinkHref={`${socials}#telegram`} />
                            </svg>
                        </a>
                        <a href="https://skobelkin.ru/viber/75555555555" target='_blank' rel="noreferrer">
                            <svg className='social'>
                                <use xlinkHref={`${socials}#viber`} />
                            </svg>
                        </a>
                        <a href="https://wa.me/75555555555" target='_blank' rel="noreferrer">
                            <svg className='social'>
                                <use xlinkHref={`${socials}#whatsapp`} />
                            </svg>
                        </a>
                    </div>
                    <address className="address">
                        Москва, Путевой проезд 3с1, к 902
                    </address>
                    <div className="policy">
                        <span>
                            ©WELBEX 2022. Все права защищены.
                        </span>
                        <a href="/" className='link'>
                            Политика конфиденциальности
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

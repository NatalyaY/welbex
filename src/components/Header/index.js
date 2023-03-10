import React, { useEffect, useState } from 'react';
import './Header.scss';
import '../socials.scss';

import useMedia from '../../hooks/useMedia';

import logo from '../../logo.png';
import socials from '../socials.svg';

const Header = () => {
    const [sticky, setSticky] = useState(false);
    const isMobile = useMedia();

    const handleScroll = () => {
        let isScrolled = false;
        if (window.scrollY > 0) {
            isScrolled = true;
        }
        if (sticky !== isScrolled) {
            setSticky(isScrolled);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerClass = (isMobile || sticky) ? 'container header header--dark' : 'container header';

    return (
        <header className={headerClass}>
            <div className="header__container">
                {
                    !isMobile &&
                        <a href="/" className='logoLink'>
                            <img src={logo} alt="Логотип" />
                            <span>
                                {'крупный интегратор CRM \nв Росcии и ещё 8 странах'}
                            </span>
                        </a>
                }
                <nav className='header__nav'>
                    <a href="/" className='header__nav__link'>
                        Услуги
                    </a>
                    <a href="/" className='header__nav__link'>
                        Виджеты
                    </a>
                    <a href="/" className='header__nav__link'>
                        Интеграции
                    </a>
                    <a href="/" className='header__nav__link'>
                        Кейсы
                    </a>
                    {
                        !isMobile &&
                        <a href="/" className='header__nav__link'>
                            Сертификаты
                        </a>
                    }
                </nav>
                {
                    !isMobile &&
                    <div className="contacts">
                        <a className='contacts__tel' href="tel:+75555555555" target='_blank' rel="noreferrer">
                            +7 555 555-55-55
                        </a>
                        <div className="socials">
                            <a href="https://t.me/+75555555555" target='_blank' rel="noreferrer">
                                <svg className='social'>
                                    <use xlinkHref={`${socials}#telegram`} />
                                </svg>
                            </a>
                            <a href="https://skobelkin.ru/viber/75555555555">
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
                    </div>
                }
            </div>
        </header>
    );
};

export default Header;

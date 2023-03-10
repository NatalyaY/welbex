import React from 'react';
import './Main.scss';
import useMedia from './../../hooks/useMedia';

import '../../noise.png';


const Main = () => {

    const isMobile = useMedia();

    return (
        <main>
            <div className="container main">
                <div className="main__left">
                    <h1>
                        {'Зарабатывайте больше\n'}
                        <span className='gradient'>
                            с WELBEX
                        </span>
                    </h1>
                    <h2>
                        {'Развиваем и контролируем\nпродажи за вас'}
                    </h2>
                </div>
                <div className="main__right">
                    <h2>
                        {'Вместе с '}
                        <span className='gradient'>{'бесплатной\n'}</span>
                        <span className='gradient2'>консультацией</span>
                        {' мы дарим:'}
                    </h2>
                    <div className="main__benefits">
                        <div className="main__benefits__line">
                            <div className="benefit">
                                <h3 className="benefit__heading">
                                    {isMobile ? 'Skype аудит' : 'Виджеты'}
                                </h3>
                                {
                                    !isMobile &&
                                    <span className='benefit__content'>{'30 готовых\nрешений'}</span>
                                }
                            </div>
                            <div className="benefit">
                                <h3 className="benefit__heading">
                                    {isMobile ? '30 виджетов' : 'Dashboard'}
                                </h3>
                                {
                                    !isMobile &&
                                    <span className='benefit__content'>{'с показателями\nвашего бизнеса'}</span>
                                }
                            </div>
                        </div>
                        <div className="main__benefits__line">
                            <div className="benefit">
                                <h3 className="benefit__heading">
                                    {isMobile ? 'Dashboard' : 'Skype Аудит'}
                                </h3>
                                {
                                    !isMobile &&
                                    <span className='benefit__content'>{'отдела продаж\nи CRM системы'}</span>
                                }
                            </div>
                            <div className="benefit">
                                <h3 className="benefit__heading">
                                    {isMobile ? 'Месяц аmoCRM' : '35 дней'}
                                </h3>
                                {
                                    !isMobile &&
                                    <span className='benefit__content'>{'использования\nCRM'}</span>
                                }
                            </div>
                        </div>
                    </div>
                    {
                        !isMobile &&
                        <button className="main__button">
                            Получить консультацию
                        </button>
                    }
                </div>
            </div>
            {
                isMobile &&
                <div className="noise"></div>
            }
            <div className="glass">
                <div className="circle circle--red circle-big circle1"></div>
                <div className="circle circle--red circle-small circle2"></div>
                <div className="circle circle--purple circle-medium circle3"></div>
                <div className="light light--red"></div>
                <div className="light light--purple"></div>
                {
                    isMobile &&
                    <div className="light light--yellow"></div>
                }
            </div>
        </main>
    );
};

export default Main;

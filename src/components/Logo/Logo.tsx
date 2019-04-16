import React from 'react';
import './Logo.scss';

interface LogoProps {
  className: string;
  color?: string;
}

function Logo(props: LogoProps) {
  const { className, color } = props;
  return (
    <div className={`${className} logo`}>
      <a className="logo__item" href="https://yandex.ru">
        <img
          src={`https://yastatic.net/q/logoaas/v1/Яндекс.svg?color=${color}`}
          alt="Яндекс"
          style={{ width: 72 }}
        />
      </a>
      <a className="logo__item" href="/">
        <img
          src={`https://yastatic.net/q/logoaas/v1/Домашка.svg?color=${color}`}
          alt="Композитор"
          style={{ width: 94 }}
        />
      </a>
    </div>
  );
}

export default Logo;

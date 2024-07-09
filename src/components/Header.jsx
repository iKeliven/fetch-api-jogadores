// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://logodownload.org/wp-content/uploads/2019/08/senai-logo-3.png" alt="Logo" />
      </div>
      <nav className="navbar">
        <p>Seu nome aqui - Sua turma</p>
      </nav>
    </header>
  );
};

export default Header;

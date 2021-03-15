import React from 'react'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-title">Promotion <span className="brand-color">Pays</span></div>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Apparel</a></li>
                        <li><a href='/'>Promotion</a></li>
                        <li><a href='/'>Contact</a></li>
                    </ul>
            </nav>
        </header>
    )
}

export default Header

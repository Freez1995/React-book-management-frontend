import React from 'react';

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <a href = "http://localhost:3000/books" className='navbar-brand'>
                        Book Management Application
                    </a>
                </nav>
            </header>

        </div>
    )
};

export default HeaderComponent;

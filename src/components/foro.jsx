import React from 'react';
import './foro.css';
import { Navbar } from './Navbar.jsx';

export const Foro = () => {
    return (
        <div>
            <Navbar/>
            <header>
                <h1>Bienvenido al Foro</h1>
            </header>
            <main>
                <section className="forum-topics">
                    <article className="topic">
                        <h2>Tema del Foro 1</h2>
                        <p>Descripción breve del tema del foro.</p>
                    </article>
                    <article className="topic">
                        <h2>Tema del Foro 2</h2>
                        <p>Descripción breve del tema del foro.</p>
                    </article>
                    {}
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Foro. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Foro;

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
                        <h2>Salud sexual y derechos sexuales</h2>
                        <p>La salud sexual se refiere al bienestar físico, emocional, mental y social en relación con la sexualidad. No es simplemente la ausencia de enfermedades, disfunciones o incapacidades. Para lograr y mantener una buena salud sexual, los derechos sexuales deben ser respetados, protegidos y cumplidos. Estos derechos incluyen el derecho a la información, el derecho a decidir sobre la reproducción y el derecho a la protección contra la violencia y la discriminación.</p>
                    </article>
                    <article className="topic">
                        <h2>La importancia de la educación sexual</h2>
                        <p>La educación sexual integral es crucial para el desarrollo de una sociedad informada y responsable. Provee a las personas con el conocimiento y las habilidades necesarias para tomar decisiones informadas y responsables sobre su cuerpo y relaciones. Además, contribuye a reducir el riesgo de enfermedades de transmisión sexual (ETS), embarazos no deseados y violencia sexual.</p>
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

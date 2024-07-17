import React from 'react';
import './Home.css'; 

export const Home = () => {
    return (
        <div>
            <section className="photo" id="inicio">
                <div className="nav" id="sticker">
                    <label htmlFor="toggle">&#9776;</label>
                    <input type="checkbox" id="toggle" />
                    <div className="menu">
                        <h5 className="logo">LOGO</h5>
                        <a href="#">inicio</a>
                        <a href="#">login</a>
                    </div>
                </div>
                <div className="photo-text">
                    <h4 data-ix="skype">BLOOMED</h4>
                    <p data-ix="subtitle-hero-up">¡Hola! Te damos la bienvenida a nuestro blog de bloomed</p>
                </div>
            </section>
            
            <div className="paragraph">
                <p>La sexualidad es un aspecto fundamental de la experiencia humana que abarca diversos aspectos físicos, emocionales, psicológicos y sociales. 
                    Aquí te proporciono una visión general sobre algunos aspectos clave de la sexualidad:</p>
            </div>
        </div>
    );
};

export default Home;

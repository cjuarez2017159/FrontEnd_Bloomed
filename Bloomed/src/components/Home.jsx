import React from 'react';
import './Home.css'; 

export const Home = () => {
    return (
        <div className="container">
            <h1 className="title">
                Bienvenido a bloomed
            </h1>
            <p className="paragraph">
                ¡Hola! Te damos la bienvenida a nuestro blog de bloomed
            </p>
            <div className="paragraph">
                La información básica sobre educación sexual incluye entender aspectos fundamentales como la anatomía y fisiología sexual, métodos anticonceptivos, salud sexual y reproductiva, consentimiento, y la prevención de enfermedades de transmisión sexual (ETS). Aquí hay algunos puntos clave:
                <ul className="list">
                    <li>Comprender los órganos sexuales tanto masculinos como femeninos y cómo funcionan en el contexto de la reproducción y el placer.</li>
                    <li>Conocer diferentes métodos para prevenir embarazos no deseados, como preservativos, anticonceptivos hormonales, dispositivos intrauterinos (DIU), etc.</li>
                    <li>Mantener una buena salud sexual incluye el acceso a servicios de salud sexual, pruebas de ETS, y la importancia de relaciones sexuales seguras y consensuadas.</li>
                </ul>
                La educación sexual proporciona a las personas conocimientos necesarios para tomar decisiones informadas y responsables sobre su salud sexual y bienestar emocional.
            </div>
        </div>
    );
};

export default Home;

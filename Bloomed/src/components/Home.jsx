import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Home.css';

export const Home = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-dark navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <button className="btn btn-primary me-2">Cuentas</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-primary me-2">Creditos</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-primary me-2">Beneficios</button>
                                </li>
                            </ul>
                        </div>
                        <div className="ms-auto">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="background-image">
                <h1 className="title">
                    Bienvenido a bloomed
                </h1>
            </div>
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

import React from 'react';
import './Home.css';
import { Navbar } from './Navbar.jsx';

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <section className="photo" id="inicio">
        <div className="photo-text">
          <h4 data-ix="skype">BLOOMED</h4>
          <p data-ix="subtitle-hero-up">¡Hola! Te damos la bienvenida a nuestro blog de bloomed</p>
        </div>
      </section>
      <section className="content">
                <article>
                <p>La educación sexual es un pilar fundamental para el desarrollo integral de las personas, contribuyendo a su bienestar físico, emocional y social. A través de la educación sexual, se busca proporcionar a las personas el conocimiento y las habilidades necesarias para tomar decisiones informadas sobre su cuerpo y sus relaciones, fomentando actitudes responsables y saludables.</p>
                    <p><img src="/src/assets/image/Home.jpg" className="responsive-image"/></p>
                    <p>Uno de los aspectos esenciales de la educación sexual es el entendimiento de la anatomía y la fisiología del cuerpo humano. Conocer el propio cuerpo y sus funciones reproductivas permite a las personas entender mejor los cambios que experimentan durante la pubertad y a lo largo de su vida. Esto incluye información sobre el ciclo menstrual, la eyaculación, y otros procesos biológicos relacionados con la sexualidad.</p>
                    <p>La salud sexual y reproductiva es otro componente crítico. Proveer información sobre métodos anticonceptivos, desde los preservativos hasta las píldoras anticonceptivas, ayuda a prevenir embarazos no deseados y a planificar de manera efectiva la familia. Además, es fundamental educar sobre las enfermedades de transmisión sexual (ETS), sus síntomas, formas de prevención y la importancia de las pruebas regulares. La detección temprana de ETS y el acceso a tratamientos adecuados son cruciales para mantener una buena salud sexual.</p>
                    <p>El consentimiento es un concepto central en todas las interacciones sexuales. Comprender y respetar el consentimiento significa reconocer que todas las personas tienen el derecho a tomar decisiones autónomas sobre su propio cuerpo. Esto implica que cualquier actividad sexual debe ser consensuada, libre de coerción y con el entendimiento claro entre todas las partes involucradas. Promover el consentimiento y las relaciones saludables contribuye a prevenir el abuso y la violencia sexual.</p>      
                    <p>La identidad de género y la orientación sexual son también áreas vitales de la educación sexual. La identidad de género se refiere al sentido interno y personal de ser hombre, mujer, una combinación de ambos, o ninguno. La orientación sexual, por otro lado, describe a quiénes se siente atraída una persona. Educar sobre la diversidad en identidad y orientación sexual fomenta la inclusión y el respeto, ayudando a combatir la discriminación y el estigma.</p>
                </article>

                <section className="cards">
                    <div className="card">
                        <img src="/src/assets/image/Home.jpg" alt="Card 1" />
                        <h5>Videos</h5>
                        <p>En esta sección, encontrarás una colección de videos informativos sobre la sexualidad. </p>
                    </div>
                    <div className="card">
                        <img src="/src/assets/image/Home.jpg" alt="Card 2" />
                        <h5>Publicaciones</h5>
                        <p>Nuestra sección de publicaciones ofrece artículos detallados sobre diversos aspectos de la sexualidad.</p>
                    </div>
                    <div className="card">
                        <img src="/src/assets/image/Home.jpg" alt="Card 3" />
                        <h5>Foro</h5>
                        <p>El foro es un espacio interactivo donde puedes participar en discusiones sobre temas de sexualidad.</p>
                    </div>
                    
                </section>
                <p>Los recursos y el apoyo son indispensables para quienes buscan más información o necesitan asistencia. Organizaciones como la Organización Mundial de la Salud (OMS) y Planned Parenthood ofrecen valiosa información y servicios de salud sexual. Además, muchas comunidades cuentan con líneas de ayuda y centros de apoyo que proporcionan consejería y recursos educativos sobre sexualidad.</p>
                    <p><img src="/src/assets/image/Home.jpg" className="responsive-image"/></p>
                    <p>La educación sexual no solo informa, sino que también empodera a las personas a tomar control de su salud y bienestar, a establecer relaciones basadas en el respeto y el consentimiento, y a vivir su sexualidad de manera plena y segura. Es una herramienta poderosa para promover una sociedad más saludable y equitativa, donde todas las personas puedan ejercer sus derechos sexuales y reproductivos sin temor ni discriminación.</p>
                    <p>El consentimiento es un principio fundamental en cualquier relación sexual. Significa que todas las personas involucradas acuerdan participar en una actividad sexual de manera voluntaria y sin presiones. El consentimiento debe ser claro, informado y reversible en cualquier momento. Promover una cultura del consentimiento ayuda a prevenir el abuso sexual y a establecer relaciones basadas en el respeto mutuo.</p>
                    <p>Los recursos y apoyo son esenciales para aquellos que buscan más información o necesitan ayuda. Organizaciones como la Organización Mundial de la Salud (OMS), Planned Parenthood y muchas otras proporcionan recursos educativos, consejería y servicios médicos. Estas organizaciones juegan un papel vital en la promoción de la salud sexual y reproductiva y en la educación de las comunidades.</p>      
                    <p>En conclusión, la educación sexual integral no solo informa a las personas sobre aspectos cruciales de su salud y bienestar, sino que también empodera a las personas para vivir su sexualidad de manera segura y respetuosa. Fomentar una comprensión profunda y sin prejuicios de la sexualidad humana contribuye a una sociedad más equitativa, saludable y consciente.</p>
                    </section>
      <footer className="footer">
        <p>Bloomed 2024</p>
      </footer>
    </div>
  );
};

export default Home;
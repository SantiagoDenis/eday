import './about.scss'

const About = () => {
    return (
        <>
            <div className="aboutBanner">
                <div className="aboutBanner__data">
                    <div className="aboutBanner__text">
                        <h1 className='aboutBanner__text--sm'>Conoce nuestra</h1>
                        <h1 className='aboutBanner__text--lg'>Historia</h1>
                    </div>
                </div>
                <div className="aboutBanner__img">
                </div>
            </div>

            <div className="aboutInfo">
                <div className="aboutInfo__imgs">
                    <div className="aboutInfo__mainImg">

                    </div>
                    <div className="aboutInfo__secImg">

                    </div>
                </div>
                <div className="aboutInfo__text">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio, velit, provident, magni neque ratione eum consequuntur iste in omnis dolores culpa exercitationem! Suscipit consectetur voluptatum id quisquam, debitis placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem vel nesciunt perspiciatis laudantium. Tempora, dolore? Corporis soluta minima praesentium, hic assumenda laboriosam cumque ex doloribus harum modi nostrum aut.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eos voluptates vero nam sint ullam fugiat vitae voluptatibus, consectetur corrupti aut officia molestiae quas excepturi saepe delectus quod distinctio laborum?</p>
                </div>
            </div>

            <div className="values">
                <div className="values__vision">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur similique maxime sed laborum ut esse atque? Minima architecto nostrum consequatur nobis. Magni reprehenderit consequuntur commodi quas ipsam quisquam perspiciatis a.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint optio tempora facilis illo vitae fuga hic laborum, quos delectus inventore molestias sunt voluptatum, minima eaque. Officiis saepe amet omnis consequatur.
                    </p>
                </div>
                <div className="values__sign values__sign--left"></div>
                <div className="values__mission">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur similique maxime sed laborum ut esse atque? Minima architecto nostrum consequatur nobis. Magni reprehenderit consequuntur commodi quas ipsam quisquam perspiciatis a.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint optio tempora facilis illo vitae fuga hic laborum, quos delectus inventore molestias sunt voluptatum, minima eaque. Officiis saepe amet omnis consequatur.
                    </p>
                </div>
                <div className="values__sign values__sign--right"></div>
            </div>

            <div className="greetings">
                <div className="greetings__text">
                    <p>Te ofrecemos con mucho cariño</p>
                    <h1>Detalles ecoamigables, estudio y taller creativo</h1>
                    <p style={{marginTop: '3%'}}>Conoce nuestros servicios:</p>
                </div>

                <div className="greetings__services">
                    <div className="greetings__service">
                        <div className="greetings__img"></div>
                        <p>Estudio Creativo</p>
                    </div>
                    <div className="greetings__service">
                        <div className="greetings__img"></div>
                        <p>Detalles eco amigables</p>
                    </div>
                    <div className="greetings__service">
                        <div className="greetings__img"></div>
                        <p>Showroom</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default About;
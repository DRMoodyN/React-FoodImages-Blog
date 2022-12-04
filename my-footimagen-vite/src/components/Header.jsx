
const Header = () => {

    return (
        <section className="container-header">
            <div className="header-info">
                <h1>Te ofrecemos la <br />Mejor Comida</h1>
                <p>
                    Una de las mejores maneras de conocer un país es por medio de su comida típica.
                </p>
                <button type="button" className="header-btn-hover">Book a table</button>
            </div>
            <img className="header-img" src="../assets/hero.png" alt="" />
        </section>
    )
}

export {
    Header
}
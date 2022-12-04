
const SectionTop = () => {
    return (
        <section className="section-top-grid">
            <div className="top-info">
                <h1>Te ofrecemos la <br />Mejor Comida</h1>
                <p>
                    Una de las mejores maneras de conocer un país es por medio de su comida típica.
                </p>
                <button type="button" className="btn btn-hover">Book a table</button>
            </div>
            <img className="top-img" src="../assets/hero.png" alt="" />
        </section>
    )
}

export {
    SectionTop
}
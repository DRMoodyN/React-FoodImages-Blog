import { useState } from "react"

const Nav = () => {

    const [modeDark, setmodeDark] = useState(false);

    const onClickMode = () => {
        setmodeDark(!modeDark);
    }

    return (
        <nav className="container-nav">
            <figure className="nav-logo" >
                <img className="logo" src="../assets/Moody.jpeg" alt="" />
                <figcaption className="logo-name">MoodyCors</figcaption>
            </figure>
            <p className="nav-title">

            </p>
            <button onClick={onClickMode} className="nav-btn-mode btn-hover">
                {(!modeDark) ? "Mode Dark" : "Mode Light"}
            </button>
        </nav>
    )
}

export {
    Nav
}
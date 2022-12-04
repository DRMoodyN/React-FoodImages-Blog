import { Header, Content, Nav, Footer } from '../components';
import '../styles/global.css';

const Layout = () => {

    return (
        <>
            <main className='mode-dark'>
                <Nav />
                <Header />
                <Content />
                <Footer />
            </main>
        </>
    )
}

export {
    Layout
};
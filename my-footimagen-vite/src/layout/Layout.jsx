import { SectionTop, SectionCenter, Nav, SectionBottom } from '../components';
import '../styles/global.css';

const Layout = () => {

    return (
        <>
            <main className='mode-dark'>
                <Nav />
                <SectionTop />
                <SectionCenter />
                <SectionBottom />
            </main>
        </>
    )
}

export {
    Layout
};
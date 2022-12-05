import { SectionTop, SectionCenter, Nav, SectionBottom, SectionInfo } from '../components';
import '../styles/global.css';

const Layout = () => {

    return (
        <>
            <main className='mode-dark'>
                <Nav />
                <SectionTop />
                <SectionCenter />
                <SectionBottom />
                {/* <SectionInfo /> */}
            </main>
        </>
    )
}

export {
    Layout
};
import Footer from "./Footer"
import './FooterStyle.css'
const FooterContainer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <>
            <Footer year={year} />
        </>
    )
}

export default FooterContainer
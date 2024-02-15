import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

export default function MainLayout() {

    return (
        <>
            <Header />
            {/* <main className='container mx-auto '> */}
            <MainContent />
            {/* </main> */}
            <Footer />

        </>

    )
}
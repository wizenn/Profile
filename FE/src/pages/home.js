
import { useTranslation } from 'react-i18next';
import Banner from '../components/home-components/banner';
import Navbar from '../components/public-components/navbar';



const Home = () => {
    const { i18n } = useTranslation();
    console.log('Home render, language:', i18n.language);
    return (
        <div className="bg-black h-screen overflow-hidden">
            <div>
                <Navbar />
            </div>
            <div className="pt-14">
                <Banner key={i18n.language} />

            </div>



        </div>
    )
}
export default Home;
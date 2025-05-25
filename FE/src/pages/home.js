
import { useTranslation } from 'react-i18next';
import Banner from '../components/home-components/banner';
import Navbar from '../components/public-components/navbar';



const Home = () => {
    const { i18n } = useTranslation();
    return (
        <div className="bg-black h-screen overflow-hidden">
            <div>
                <Navbar />
            </div>
            <div className="pt-14 " key={i18n.language}>
                <Banner />
            </div>


        </div>
    )
}
export default Home;
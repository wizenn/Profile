import Banner from "../components/public-components/banner";
import Navbar from "../components/public-components/navbar";

;




const Home = () => {
    return (
        <div className="bg-black h-screen overflow-hidden">
            <div>
                <Navbar />
            </div>
            <div className="pt-14 ">
                <Banner />
            </div>


        </div>
    )
}
export default Home;
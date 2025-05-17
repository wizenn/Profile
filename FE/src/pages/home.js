import Banner from "../components/public-components/banner";
import Footer from "../components/public-components/footer";
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
            {/* <div className="pt-14 ">
                <Footer />
            </div> */}

        </div>
    )
}
export default Home;
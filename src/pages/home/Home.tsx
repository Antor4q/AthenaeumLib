import AllBooks from "../../components/AllBooks";
import Banner from "../../components/Banner";
import Subscribe from "../../components/Subscribe";
import About from "./About";

const Home = () => {
    return (
        <div>
           <Banner/>
           <About/>
           <AllBooks/>
           <Subscribe/>
        </div>
    );
};

export default Home;
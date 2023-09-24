import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import DonationItems from "./DonationItems/DonationItems";

const Home = () => {
    const DonationAllData = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <DonationItems DonationAllData={DonationAllData}></DonationItems>
        </div>
    );
};

export default Home;
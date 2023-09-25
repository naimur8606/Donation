import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import DonationItems from "./DonationItems/DonationItems";
import { useState, useEffect } from "react";
import swal from 'sweetalert';

const Home = () => {
    const [DonationAllData, setDonationAllData] = useState([]);
    const catchDonationAllData = useLoaderData();

    useEffect(() => {
        // Set the DonationAllData state after catching the data
        setDonationAllData([...catchDonationAllData]);
    }, [catchDonationAllData]); // Run this effect whenever catchDonationAllData changes

    const catchInput = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value;
        const searchDonation =catchDonationAllData.filter(item => item.category_name.toLowerCase() == searchValue.toLowerCase())
        if(searchDonation.length > 0){
            setDonationAllData([...searchDonation])
        }
        else{
            setDonationAllData([...catchDonationAllData]);
            swal("Sorry !", "The key words are 'Health', 'Education', 'Clothing', 'Food'", "error");
        }
    };

    return (
        <div>
            <Banner catchInput={catchInput}></Banner>
            <DonationItems DonationAllData={DonationAllData}></DonationItems>
        </div>
    );
};

export default Home;

import DonationContainerItem from "./DonationContainerItem/DonationContainerItem";

const DonationContainer = () => {

    const getItem = localStorage.getItem("Total_Donation");
    const storedDonation = JSON.parse(getItem);
    return (
        <div className={storedDonation? 'grid grid-cols-1 lg:grid-cols-2 gap-5':'flex justify-center items-center h-[80vh] text-3xl text-red-500 font-semibold'}>
            { storedDonation?
                storedDonation?.map((donationItm,idx) => <DonationContainerItem key={idx} donationItm={donationItm}></DonationContainerItem>)
                :
                <h1 className="text-center">There is nothing for you <br /> Please Select a donation Item</h1>
            }
        </div>
    );
};

export default DonationContainer;
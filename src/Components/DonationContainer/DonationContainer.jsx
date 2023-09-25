import { useState } from "react";
import DonationContainerItem from "./DonationContainerItem/DonationContainerItem";

const DonationContainer = () => {
  const getItem = localStorage.getItem("Total_Donation");
  const storedDonation = JSON.parse(getItem) || []; // Initialize as an empty array if no data is found in localStorage

  const [showStoredDonation, setShowStoredDonation] = useState(true);

  let showDonation = [];

  // Check if storedDonation is an array before attempting to slice or spread it
  if (Array.isArray(storedDonation)) {
    showDonation = showStoredDonation ? storedDonation.slice(0, 4) : [...storedDonation];
  }

  return (
    <div className="my-8">
      <div className={storedDonation.length ? 'grid grid-cols-1 lg:grid-cols-2 gap-5' : 'flex justify-center items-center h-[80vh] text-3xl text-red-500 font-semibold'}>
        {showDonation.length ?
          showDonation.map((donationItm, idx) => <DonationContainerItem key={idx} donationItm={donationItm}></DonationContainerItem>)
          :
          <h1 className="text-center">There is nothing for you <br /> Please Select a donation Item</h1>
        }
      </div>
      <div className="text-center my-5">
        {storedDonation.length > 4 ? showStoredDonation ?
          <button onClick={() => setShowStoredDonation(!showStoredDonation)} className="bg-green-500 px-6 py-3 text-center text-xl font-bold rounded-lg text-white">See All</button>
          : ""
          : ""}
      </div>
    </div>
  );
};

export default DonationContainer;

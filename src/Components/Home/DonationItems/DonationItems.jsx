import DonationItem from "./DonationItem/DonationItem";

const DonationItems = ({DonationAllData}) => {
    return (
        <div className="my-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                DonationAllData?.map((DonationItm,idx) => <DonationItem key={idx} DonationItm={DonationItm}></DonationItem>)
            }
        </div>
    );
};

export default DonationItems;
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"; 
import swal from 'sweetalert';
const DonationItemDetails = () => {
    const [clickedDonationItem, setClickedDonationItem] = useState({})
    const {id} = useParams();
    const DonationAllData = useLoaderData();
    useEffect(()=>{
        const clickedDonation = DonationAllData?.find(item => item.id === id);
        setClickedDonationItem(clickedDonation)
    },[id,DonationAllData])
    const {price, description, title, image, text_color} = clickedDonationItem;
    const addToDonation= () =>{
        const totalDonation = [];
        const getItem = localStorage.getItem("Total_Donation");
        if(!getItem){
            totalDonation.push(clickedDonationItem)
            localStorage.setItem("Total_Donation",JSON.stringify(totalDonation))
            swal("Good job!", "You Donation Added!", "success");
        }
        else{
            const storedDonation = JSON.parse(getItem);
            const Double = storedDonation.find(item => item.id === id)
            if(Double){
                swal("You are already Select it !", "", "error");
            }
            else{
                storedDonation.push(clickedDonationItem);
                localStorage.setItem("Total_Donation",JSON.stringify(storedDonation))
                swal("Good job!", "You Donation Added!", "success");
            }
        }
    }

    return (
        <div>
            <div className="relative my-5">
                <img className="h-[60vh] md:h-[80vh] w-full rounded-lg" src={image} alt="" />
                <div className="absolute bottom-0 bg-black w-full h-24 bg-opacity-50 flex items-center  rounded-b-lg">
                    <span onClick={addToDonation} style={{backgroundColor:text_color}} className="py-2 px-4 rounded-md ml-5 text-white font-bold text-2xl">Donate: ${price}</span>
                </div>
            </div>
            <h3 className="text-4xl font-bold my-3">{title}</h3>
            <p className="text-gray-600 mb-10">{description}</p>
            
        </div>
    );
};

export default DonationItemDetails;

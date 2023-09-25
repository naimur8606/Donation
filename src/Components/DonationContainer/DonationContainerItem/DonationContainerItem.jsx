const DonationContainerItem = ({donationItm}) => {
    const {id, price, category_name, title, image, bg_color, category_bg_color, text_color} = donationItm;
    return (
        <div style={{backgroundColor:bg_color}} className="rounded-lg flex">
            <img className="h-full rounded-l-lg w-1/3" src={image} alt="" />
            <div className="p-4 space-y-1">
                <button style={{color:text_color, backgroundColor:category_bg_color}} className="p-1 rounded">{category_name}</button>
                <h3 className='text-[18px] font-semibold'>{title}</h3>
                <h3 style={{color:text_color}} className='text-[18px] font-semibold'>Amount: ${price}</h3>
                <button style={{backgroundColor:text_color}} className="p-1.5 rounded text-white">View Details</button>
                
            </div>
        </div>
    );
};

export default DonationContainerItem;
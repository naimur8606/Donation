import { Link } from "react-router-dom";

const DonationItem = ({DonationItm}) => {
    const {id,category_name, title, image, bg_color, category_bg_color, text_color} = DonationItm;
    
    return (
        <Link to={`/${id}`}>
            <div style={{backgroundColor:bg_color}} className="rounded-lg">
            <img className="h-[160px] rounded-t-lg w-full" src={image} alt="" />
            <div className="p-2 space-y-1">
                <h3 style={{color:text_color}} className='text-[18px] font-semibold'>{title}</h3>
                <button style={{color:text_color, backgroundColor:category_bg_color}} className="p-1 rounded">{category_name}</button>
            </div>
            </div>
        </Link>
    );
};

export default DonationItem;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Components/MainLayout/MainLayout";
import Home from "../../Components/Home/Home";
import DonationItemDetails from "../../Components/Home/DonationItems/DonationItemDetails/DonationItemDetails";
import ErrorText from "../../Components/Error/Errortext";
import DonationContainer from "../../Components/DonationContainer/DonationContainer";

const MainRoute =  createBrowserRouter([
        {
            path:"/",
            element:<MainLayout></MainLayout>,
            errorElement:<ErrorText></ErrorText>,
            children:[
                {
                    path:"/",
                    element:<Home></Home>,
                    loader: ()=> fetch('/DonationAllData.json')
                },
                {
                    path:"/:id",
                    element:<DonationItemDetails></DonationItemDetails>,
                    loader: ()=> fetch('/DonationAllData.json')
                },
                {
                    path:"/donation",
                    element:<DonationContainer></DonationContainer>
                },
                {
                    path:"/statistics",
                    element:'<DonationItemDetails></DonationItemDetails>'
                }
            ]
        }
])

export default MainRoute;
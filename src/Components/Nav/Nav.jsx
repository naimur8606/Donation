// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
const Nav = () => {
    const [menu, setMenu] = useState(true)
    return (
        <div className="py-1 flex justify-between items-center my-2">
            <img className='w-40' src="https://i.ibb.co/6rCbfPQ/Logo.png" alt="logo" />
            <ul className={`absolute z-[1] duration-1000 p-5 lg:p-0 lg:static bg-white rounded-l-lg lg:bg-none space-y-2 lg:space-y-0 lg:flex items-center right-0 ${menu === false ? "top-12 md:top-10":"-top-60"}`}>
                <li className='ml-5 text-xl'>
                    <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }
                    >
                    Home
                    </NavLink>
                </li>

                <li className='ml-5 text-xl'>
                    <NavLink
                    to="/donation"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }
                    >
                    Donation
                    </NavLink>
                </li>
                <li className='ml-5 text-xl'>
                    <NavLink
                    to="/statistics"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }
                    >
                    Statistics
                    </NavLink>
                </li>
            </ul>
            <div onClick={() => setMenu(!menu)} className='text-black text-3xl lg:hidden'>
                {menu === false ?
                    <AiOutlineClose></AiOutlineClose> :
                   <AiOutlineMenu></AiOutlineMenu>
                }
            </div>
        </div>
    );
};

export default Nav;
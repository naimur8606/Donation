const Banner = () => {
    return (
        <div className='h-[40vh] lg:h-[75vh] rounded p-5 bg-blend-overlay bg-white bg-opacity-90 bg-cover bg-[url("https://i.ibb.co/Bsjk5R8/istockphoto-1271755758-170667a.jpg")] flex justify-center items-center'>
            <div className="text-center">
                <h1 className="text-2xl md:text-5xl font-bold">I Grow By Helping People In Need</h1>
                <div className="flex md:w-1/2 mt-5 mx-auto border">
                    <input className="w-2/3 rounded-l-lg pl-2" type="text" placeholder="Search here..."/>
                    <p className="text-white text-xl rounded-r-lg py-2.5 px-4 bg-red-500">Search</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;

import React, { useContext } from "react";
import SwiperTry from "../SwiperTry/SwiperTry";
import { UserContext } from "../Providers/Providers";


const Home = () => {
    const { place, SetPlace } = useContext(UserContext);
    return (

        <div
            className="relative bg-cover w-full h-screen"
            style={{
                backgroundImage: `url("${place?.backgroundImage || "/public/images/Rectangle 1.png"
                    }")`,
                height: "100vh", // Set the height of the div to full screen height
            }}
        >
            <div className="absolute inset-0 bg-black/50">
                <nav className="flex justify-between items-center py-4 mx-10 text-white ">
                    <h1 className="text-3xl font-bold">TravelBoss</h1>
                    <input
                        className="p-2 rounded-lg"
                        type="text"
                        placeholder="Search your destination"
                    />
                    <h3>News</h3>
                    <h3>Destination</h3>
                    <h3>Blogs</h3>
                    <h3>Contact</h3>
                    <button>Login</button>
                </nav>
                {/* Front items and swinger */}
                <div className="grid grid-cols-1 md:grid-cols-10 my-20">
                    <div className="ml-40 mr-20 text-white col-span-4 space-y-4  order-2 md:order-1">
                        <h3 className="text-6xl font-bold">{place?.name}</h3>
                        <p className="">{place?.info}</p>
                        <button className="px-3 py-2 rounded bg-yellow-600">Booking</button>
                    </div>
                    <div className="text-white md:col-span-6 order-1 md:order-2">
                        <SwiperTry></SwiperTry>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Home;
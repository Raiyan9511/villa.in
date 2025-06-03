"use client";
import Image from "next/image";
// Framer Motion removed
import thumbnail from "../../public/images/thumbnail.png";
import skyline1 from "../../public/images/Skyline-Suite1.jpg";
import skyline2 from "../../public/images/skyline-suite2.jpg";
import skyline3 from "../../public/images/skyline-suite3.jpg";
import cozyCabin1 from "../../public/images/Cozy-cabin1.png";
import cozyCabin2 from "../../public/images/cozy-cabin2.jpg";
import cozyCabin3 from "../../public/images/cozy-cabin3.jpeg";
import cozyCabin4 from "../../public/images/cozy-cabin4.jpg";
import gardenView1 from "../../public/images/garden-view1.jpg";
import gardenView2 from "../../public/images/garden-view2.jpg";
import gardenView3 from "../../public/images/garden-view3.png";
import sunset1 from "../../public/images/sunset-suit1.jpg";
import sunset2 from "../../public/images/sunset-suit2.jpg";
import RoomImageSlider from "./services/RoomImageSlider";

import { FiWifi, FiX } from "react-icons/fi";
import { MdPool, MdEco, MdNaturePeople, MdLocationOn } from "react-icons/md";
import { FaParking, FaConciergeBell, FaHandsHelping, FaTag } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const facilities = [
    { name: "Free Wi-Fi", icon: <FiWifi size={30} className="text-primary mb-2" /> },
    { name: "Pool", icon: <MdPool size={30} className="text-primary mb-2" /> },
    { name: "24/7 Service", icon: <FaConciergeBell size={30} className="text-primary mb-2" /> },
    { name: "Car Parking", icon: <FaParking size={30} className="text-primary mb-2" /> },
    { name: "Nature View", icon: <MdNaturePeople size={30} className="text-primary mb-2" /> },
  ];

  const roomType = [
    { name: "Matheran", img: cozyCabin1, type: "Matheran", price: "50,500", description: "A luxurious escape nestled in the forest, featuring a balcony with breathtaking views." },
    { name: "Matheran", img: cozyCabin2, type: "Matheran", price: "48,900", description: "Enjoy peaceful moments by the fire in this cabin ideal for romantic getaways." },
    { name: "Matheran", img: cozyCabin3, type: "Matheran", price: "30,000", description: "Fall asleep under the stars with skylight views from the comfort of your king bed." },
    { name: "Matheran", img: cozyCabin4, type: "Matheran", price: "29,000", description: "Step into elegance with a private patio perfect for relaxation and morning coffee." },
    { name: "Matheran", img: gardenView1, type: "Matheran", price: "35,000", description: "Wake up to lush green scenery and unwind in your own private garden area." },
    { name: "Matheran", img: gardenView2, type: "Matheran", price: "31,000", description: "Surround yourself with nature in this serene garden-view room built for comfort." },
    { name: "Lonavala", img: gardenView3, type: "Lonavala", price: "33,500", description: "Immerse in panoramic garden views with modern decor and a peaceful atmosphere." },
    { name: "Lonavala", img: skyline1, type: "Lonavala", price: "45,000", description: "An upscale suite with dazzling rooftop views of the city skyline by day and night." },
    { name: "Lonavala", img: skyline2, type: "Lonavala", price: "42,000", description: "Unwind on your private terrace while taking in the serene skyline ambiance." },
    { name: "Lonavala", img: skyline3, type: "Lonavala", price: "36,500", description: "Stylish and spacious, offering wide skyline views and contemporary elegance." },
    { name: "Lonavala", img: sunset1, type: "Lonavala", price: "48,000", description: "Perfect for sunset lovers, this room features an open balcony with golden hour views." },
    { name: "Lonavala", img: sunset2, type: "Lonavala", price: "59,500", description: "Indulge in panoramic sea views and soothing sunsets from your luxurious suite." },
  ];

  const filteredRooms = activeTab === "all" ? roomType : roomType.filter(room => room.type === activeTab);

  const tabs = [
    { label: "All", value: "all" },
    { label: "Matheran Villa", value: "Matheran" },
    { label: "Lonavala Villa", value: "Lonavala" },
  ];

  const features = [
    { title: "Eco-friendly stay", bg: "bg-primary/20", icon: <MdEco size={28} className="text-secondary/40" /> },
    { title: "Personalized services", bg: "bg-primary/30", icon: <FaHandsHelping size={28} className="text-secondary/50" /> },
    { title: "Best price guarantee", bg: "bg-primary/40", icon: <FaTag size={28} className="text-secondary/65" /> },
    { title: "Prime location", bg: "bg-primary/50", icon: <MdLocationOn size={28} className="text-secondary/80" /> },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] sm:h-[70vh] min-h-[400px]">
        <Image src={thumbnail} alt="Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center flex-col gap-5">
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-semibold text-center px-4">
            Discover comfort and relaxation Villa's
          </h1>
          <h2 className="text-white text-sm sm:text-base mt-8 text-center px-2">
            Book your stay with us and enjoy a comfortable and relaxing experience.
          </h2>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="p-6 bg-secondary">
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center text-center cursor-pointer">
                <div className="mb-2">{facility.icon}</div>
                <p className="text-sm font-medium text-gray-800">{facility.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Room Type Section */}
      <section className="m-5 mt-12 p-3">
        <div className="my-6">
          <h1 className="text-4xl font-bold">
            <strong className="text-primary">Discover</strong> Villa's
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 rounded-full font-medium ${
                activeTab === tab.value
                  ? "bg-primary text-white shadow-lg"
                  : "bg-gray-100 text-gray-800 hover:bg-primary/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Rooms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer">
              <Image src={room.img} alt={room.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{room.name}</h3>
                <p className="text-sm text-gray-700 mb-2">{room.description}</p>
                <p className="text-primary font-bold">Price: {room.price} INR</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

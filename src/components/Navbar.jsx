import { useEffect, useState } from "react";

import { IoIosSwitch } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";
import { HiSearch } from "react-icons/hi";
import { FaWifi, FaApple } from "react-icons/fa";

export default function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const day = days[now.getDay()];
      const month = months[now.getMonth()];
      const date = now.getDate();

      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12;

      setTime(`${day} ${month} ${date} ${hours}:${minutes} ${ampm}`);
    };

    updateTime(); // initial render
    const interval = setInterval(updateTime, 60000); // update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        fixed top-0 left-0 right-0 z-50 h-10
        px-4
        flex items-center justify-between
        text-[13px] font-medium
        bg-white/50 backdrop-blur-md
        text-black
        select-none
      "
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-[16px]">
        <FaApple className="text-[18px]" />

        <span className="text-lg font-bold font-sans">
          Saif&apos;s Portfolio
        </span>
        <span className="opacity-80 text-[15px]">Projects</span>
        <span className="opacity-80 text-[15px]">Contact</span>
        <span className="opacity-80 text-[15px]">Resume</span>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center font-bold gap-[15px] opacity-80">
        <FaWifi className="text-[15px]" />
        <HiSearch className="text-[15px]" />
        <PiUserCircleFill className="text-[15px]" />
        <IoIosSwitch className="text-[15px]" />

        {/* ✅ REAL TIME (EXACT FORMAT) */}
        <span className="text-[15px]">{time}</span>
      </div>
    </div>
  );
}

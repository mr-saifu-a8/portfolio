import React from "react";

const MenuBar = () => {
  const icons = [
    { src: "/public/image/finder.png", label: "Portfolio" },
    { src: "/public/image/safari.png", label: "Resume" },
    { src: "/public/image/photo.png", label: "Gallery" },
    { src: "/public/image/contact.png", label: "Contact" },
    { src: "/public/image/terminal.png", label: "Skills" },
    { src: "/public/image/trash.png", label: "Archive" },
  ];

  return (
    <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
      <div className="flex gap-3 p-2 bg-white/30 backdrop-blur-md rounded-2xl">
        {icons.map((icon, index) => (
          <div key={index} className="relative group">
            {/* 🔹 macOS Tooltip */}
            <div
              className="
                absolute bottom-full left-1/2 -translate-x-1/2 mb-9
                opacity-0 translate-y-1
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all duration-200 ease-out
                z-50 pointer-events-none
              "
            >
              {/* Bubble */}
              <div
                className="
    relative
  
   bg-blue-200/80 backdrop-blur-md
    text-black text-[13px] font-medium
    px-3 py-[3px]
    rounded-md
    shadow-md
    whitespace-nowrap
  "
              >
                {icon.label}

                {/* 🔻 Arrow */}
                <div
                  className="
    absolute left-1/2 -translate-x-1/2
    top-full
    w-0 h-0
    border-l-[6px] border-l-transparent
    border-r-[6px] border-r-transparent
  border-t-[6px] border-t-[#E5E5EA]
  border-t-[6px] border-t-blue-200/80
  "
                />
              </div>
            </div>

            {/* Icon */}
            <img
              src={icon.src}
              alt={icon.label}
              className="
                w-12
                transition-all duration-300 ease-out
                group-hover:-translate-y-4
                group-hover:scale-125
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;

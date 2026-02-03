import Image from "next/image";
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const TeamCard = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 shadow dark:bg-gray-800 rounded-2xl px-6 py-8">
      <Image
        className="w-24 h-24 mb-6 rounded-full object-cover"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400"
        alt="Bonnie image"
        height={200}
        width={200}
      />
      <h5 className="mb-0.5 text-xl font-semibold tracking-tight text-heading">
        Bonnie Green
      </h5>
      <span className="text-sm text-body">Visual Designer</span>
      <div className="flex mt-4 md:mt-6 gap-4">
        <button
          type="button"
          className="inline-flex gap-3 items-center text-white bg-primary hover:bg-blue-600 focus:ring-4 focus:ring-primary/30 shadow-xs font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none"
        >
          <FaPhone />
          Call me
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-3 self-start w-auto text-body bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-950 hover:bg-gray-200 hover:text-heading shadow-xs font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none"
        >
          <FaEnvelope />
          Message
        </button>
      </div>
    </div>
  );
};

export default TeamCard;

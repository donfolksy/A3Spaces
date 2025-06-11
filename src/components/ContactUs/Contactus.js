import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
const Contactus = () => {
  return (
    <section className="font-satoshi py-20 px-12 ">
      <div className="flex flex-col items-center">
        <h4 className="font-bold text-2xl text-[#C5A476]">Contact Us</h4>
        <p className="py-5 text-center">
          In choosing a management and consulting firm, organization should
          consider factors such as the agency’s track record, industry <br />
          expertise, reputation, and alignment with the company’s values and
          needs.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-12 items-center justify-center text-center flex-wrap py-16">
        <div className="shadow-xl rounded-lg border-2 py-10 px-5 flex flex-col items-center">
          <MdMailOutline className="text-[#C5A476] w-[200px] h-[40px]" />
          <h1 className="pt-5 pb-2 font-bold text-xl">A3 Spaces Office</h1>
          <p>
            House 89, Oba Overen Street, Works
            <br /> and Housing Estate Gwarimpa, Abuja{" "}
          </p>
        </div>
        <div className="shadow-xl rounded-lg border-2 py-10 px-5 flex flex-col items-center">
          <IoLocationOutline className="text-[#C5A476] w-[200px] h-[40px]" />
          <h1 className="pt-5 pb-2 font-bold text-xl">Email Us</h1>
          <p>A3spaces@gmail.com</p>
          <p>hra3spaces@gmail.com</p>
        </div>
        <div className="shadow-xl rounded-lg border-2 py-10 px-5 flex flex-col items-center">
          <FaRegClock className="text-[#C5A476] w-[200px] h-[40px]" />
          <h1 className="pt-5 pb-2 font-bold text-xl">Working Hours</h1>
          <p>9am-5pm</p>
          <p>Monday to Friday</p>
        </div>
        <div className="shadow-xl rounded-lg border-2 py-10 px-5 flex flex-col items-center">
          <FiPhoneCall className="text-[#C5A476] w-[200px] h-[40px]" />
          <h1 className="pt-5 pb-2 font-bold text-xl">Call</h1>
          <p>+233 (0)24 945 1884</p>
          <p>+233 (0)20 299 8006</p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full py-10 sm:px-8">
        <h1 className="text-2xl font-bold text-center mb-10">
          Get in touch with us
        </h1>

        <form action="" className="w-full max-w-none  p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Full Name / Business Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border-2 border-[#C5A476] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A476] focus:border-[#C5A476]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border-2 border-[#C5A476] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A476] focus:border-[#C5A476]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-3 border-2 border-[#C5A476] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A476] focus:border-[#C5A476]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full p-3 border-2 border-[#C5A476] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A476] focus:border-[#C5A476]"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold mb-2">
              How can we help you?
            </label>
            <textarea
              placeholder="Write your message here..."
              rows="4"
              className="w-full p-3 border-2 border-[#C5A476] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A476] focus:border-[#C5A476]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#C5A476] text-white py-3 mt-4 rounded-md hover:bg-opacity-80 transition font-bold"
          >
            Get in Touch
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contactus;

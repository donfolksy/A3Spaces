import React from "react";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import ConsultationModal from "../Consultation/ConsultationModal";
import { useState } from "react";
import { Link } from "react-router";
const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className=" font-satoshi ">

      {/* under construction section */}
<div className="h-[50vh] flex items-center justify-center">
  <div className="text-center">
    <h1 className="text-4xl font-bold text-[#C5A476] mb-4">
      We're Under Construction!
    </h1>
    <p className="text-lg mb-6">
      Our website is getting a makeover. We'll be live soon.
    </p>
    <button
      onClick={() => setIsModalOpen(true)}
      className="bg-black text-white rounded-md p-3 font-bold hover:text-[#C5A476] transition"
    >
      Request a Consultation
    </button>
  </div>
</div>


      {/* <div className="px-12 pt-12 flex flex-col-reverse sm:flex-row items-center justify-between gap-8 ">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
            Driving Excellence Across
            <br /> Industries:{" "}
            <span className="text-[#C5A476]">Expert Consulting </span>
            <br></br>Tailored to Your Needs
          </h1>
          <p className="py-7 font-bold">
            A professional service company that provides expert advice ,
            strategic <br></br>solutions and operational support to
            organizations to improve their <br></br>performance, solve business
            challenges and achieve their goals.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white rounded-md p-3 font-bold hover:text-[#C5A476] transition"
          >
            Request a Consultation
          </button>
        </div>
        <div>
          <img src="/images/img1.png " alt="" className="w-[600px] h-auto" />
        </div>
      </div> */}
      <div className="px-6 sm:px-12 pt-12 flex flex-col-reverse sm:flex-row items-center justify-between gap-8">
  {/* Left Section: Text Content */}
  <div className="text-center sm:text-left flex-1">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug md:leading-tight">
      Driving Excellence Across
      <br /> Industries:{" "}
      <span className="text-[#C5A476]">Expert Consulting</span>
      <br /> Tailored to Your Needs
    </h1>
    <p className="py-5 text-sm sm:text-base md:text-lg font-normal md:font-medium leading-relaxed">
     
A3 Spaces is a premier management consulting firm that provides strategic solutions and expert advice across various industries. Our services empower businesses and individuals to enhance performance, overcome challenges, and achieve their goals through innovative and tailored approaches.
    </p>
    <p className="py-2 mb-2 text-sm sm:text-base md:text-lg font-normal md:font-medium leading-relaxed">
Take the first step toward business transformation.
</p>
    <button
      onClick={() => setIsModalOpen(true)}
      className="bg-black text-white rounded-md p-3 font-bold hover:text-[#C5A476] transition"
    >
      Request a Consultation
    </button>
  </div>

  {/* Right Section: Image - Adjusted for Better Sizing */}
  <div className="flex justify-center w-full sm:w-[55%] md:w-[60%] lg:w-[50%]">
    <img
      src="/images/img1.png"
      alt="Consulting"
      className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px] h-auto"
    />
  </div>
</div>

{/* about us section  */}
     
<div className="AboutUs flex flex-col sm:flex-row items-center justify-between gap-20 py-20 px-12">
  <div className="flex flex-1">
    <img src="/images/img2.png" alt="" className="w-[600px] h-auto flex-shrink-0" />
  </div>
  <div className="flex flex-1 flex-col ">
    <h1 className="text-2xl font-bold text-[#C5A476] sm:text-3xl md:text-4xl">
      About Us
    </h1>
    <p className="text-center pt-5 pb-8 ">
  At A3 Spaces, we specialize in delivering expert consulting services designed to drive growth and efficiency. With a commitment to excellence, our firm provides professional guidance in business strategy, technology consulting, human resource management, marketing, sales implementation, project management, construction, and interior design.
  <br />
  <span className="pt-5 block">
    Our team of industry experts leverages data-driven insights and best practices to develop sustainable solutions for organizations and individuals seeking growth and operational excellence. Whether you’re a startup or an established enterprise, A3 Spaces is your trusted partner in success.
  </span>
</p>

    <Link to="/aboutus">
      <button className="bg-black text-white rounded-md p-3 font-bold hover:text-[#C5A476] transition">
        Learn More
      </button>
    </Link>
  </div>
</div>


      {/* Our expertise  section */}
      <div className=" flex flex-col items-center py-7 px-12">
        <h4 className="font-bold text-2xl text-[#C5A476] sm:text-3xl md:text-4xl ">Our Expertise </h4>
       

        <p className="py-4">
        A3 Spaces offers a comprehensive range of services, including:
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 py-6  ">
          <div className="rounded-2xl shadow-2xl p-6">
            <h3 className="font-bold py-2">Technology Consulting</h3>
            <p className="pb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dolor…
            </p>
            <img src="/images/img5.png" alt="" className="p-4 " />
          </div>
          <div className="rounded-2xl shadow-2xl p-6">
            <h3 className="font-bold py-2">Product Mangement</h3>
            <p className="pb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dolor…
            </p>
            <img src="/images/img4.png" alt="" className="p-4 " />
          </div>
          <div className="rounded-2xl shadow-2xl p-6">
            <h3 className="font-bold py-2">Building Construction</h3>
            <p className="pb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dolor…
            </p>
            <img src="/images/img20.png" alt="" className="p-4 " />
          </div>
        </div>
        <Link to="/services">
          <button className="mt-4 bg-black text-white rounded-md p-3 font-bold hover:text-[#C5A476] transition">
          Explore Our Services
          </button>
        </Link>
      </div>

      
      <div className="Portfolio flex flex-col items-center pt-12 px-4">
  <h1 className="text-[#C5A476] text-2xl font-bold text-center">Our Portfolio</h1>
  <p className="py-4 text-center max-w-6xl">
   
We take pride in delivering outstanding results for our clients. Our portfolio showcases successful projects across multiple industries, including: 
Technology and digital transformation initiatives,

Marketing and branding strategies for leading businesses,

Large-scale construction and interior design projects,
<br></br>
Browse our case studies and see how A3 Spaces can help transform your vision into reality.  </p>

  <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-10 w-full">
    {/* Large Image */}
    <img
      src="/images/img6.png"
      alt="Main Portfolio"
      className="w-full md:w-1/2 max-w-[500px] h-auto"
    />

    {/* Smaller Images Grid */}
    <div className="grid grid-cols-2 gap-4">
      <img src="/images/img7.png" alt="Portfolio 1" className="w-full h-auto" />
      <img src="/images/img8.png" alt="Portfolio 2" className="w-full h-auto" />
      <img src="/images/img9.png" alt="Portfolio 3" className="w-full h-auto" />
      <img src="/images/img10.png" alt="Portfolio 4" className="w-full h-auto" />
    </div>
  </div>

  <Link to="/portfolio">
    <button className="bg-black text-white rounded-md py-3 px-10 font-bold hover:text-[#C5A476] transition">
      View All Projects
    </button>
  </Link>
</div>

{/* testimonial */}
     
      <div className="Testimonials flex flex-col items-center py-14 px-4 sm:px-8 md:px-12">
  <h1 className="text-2xl text-[#C5A476] font-bold">Client Testimonials</h1>
  <p className="py-4 text-center max-w-2xl">
  Our commitment to excellence is reflected in the success of our clients. See what they have to say about working with A3 Spaces:
  </p>
  
  
  <div className="flex flex-col items-center sm:flex-row gap-10 sm:gap-6 lg:gap-16 w-full justify-center pt-4">
  <div className="bg-black pb-6 pt-20 sm:pt-28 px-6 rounded-3xl flex-1 max-w-xs">
    <div className="bg-white text-black p-5 flex flex-col items-center rounded-xl shadow-lg">
      <img src="images/logo.png" alt="User Logo" className="w-16 h-16 rounded-full object-cover" />
      <h4 className="font-semibold text-lg mt-3">Zubi sons ltd</h4>
      <h6 className="text-sm text-gray-500">Business Strategy and Operations</h6>
      <p className="py-2 text-center text-sm leading-relaxed italic ">
      “A3 Spaces provided exceptional strategic insights that helped streamline our operations and improve overall efficiency. Their expertise is unmatched.”
      </p>
    </div>
  </div>

  <div className="bg-black pb-6 pt-20 sm:pt-28 px-6 rounded-3xl flex-1 max-w-xs">
    <div className="bg-white text-black p-5 flex flex-col items-center rounded-xl shadow-lg">
      <img src="images/logo.png" alt="User Logo" className="w-16 h-16 rounded-full object-cover" />
      <h4 className="font-semibold text-lg mt-3">Bang Upin</h4>
      <h6 className="text-sm text-gray-500">Project Management</h6>
      <p className="py-2 text-center text-sm leading-relaxed italic ">
      “From concept to execution, A3 Spaces delivered top-notch project management, ensuring our building project was completed on time and within budget.”
      </p>
    </div>
  </div>

  <div className="bg-black pb-6 pt-20 sm:pt-28 px-6 rounded-3xl flex-1 max-w-xs">
    <div className="bg-white text-black p-5 flex flex-col items-center rounded-xl shadow-lg">
      <img src="images/logo.png" alt="User Logo" className="w-16 h-16 rounded-full object-cover" />
      <h4 className="font-semibold text-lg mt-3">Mr Johnson</h4>
      <h6 className="text-sm text-gray-500">Interior Design</h6>
      <p className="py-2 text-center text-sm leading-relaxed italic">
      “The team at A3 Spaces transformed our workspace with innovative design solutions that perfectly balanced functionality and aesthetics. Their attention to detail was remarkable.”
      </p>
    </div>
  </div>
</div>

</div>
?
     <div className="OurTeam flex flex-col items-center py-7 px-4">
      <h1 className="text-[#C5A476] font-bold text-2xl">Meet Our Team</h1>
      <p className="text-center max-w-5xl pt-4">
      Behind every successful project is a team of dedicated professionals. At A3 Spaces, we bring together industry experts with years of experience in consulting, project management, and design. Meet the professionals who are committed to helping your business thrive.
      </p>

      {/* Team Flex Container */}
      <div className="py-10 flex flex-wrap justify-center gap-10 md:gap-20">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center">
          <img
            src="/images/img11.png"
            alt="Mr Ebenezer Boahene"
            className="rounded-3xl w-[250px] h-auto"
          />
          <h1 className="font-bold py-4 text-center">Mr Ebenezer Boahene</h1>
          <p className="text-center">Miye@example.com</p>
          <div className="flex gap-2 pt-2">
            <FaLinkedin />
            <FaInstagramSquare />
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center">
          <img
            src="/images/img12.png"
            alt="Mrs Sandra Jacob"
            className="rounded-3xl w-[250px] h-auto"
          />
          <h1 className="font-bold py-4 text-center">Mrs Sandra Jacob</h1>
          <p className="text-center">Miye@example.com</p>
          <div className="flex gap-2 pt-2">
            <FaLinkedin />
            <FaInstagramSquare />
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center">
          <img
            src="/images/img13.png"
            alt="Mr. Emmanuel Charles"
            className="rounded-3xl w-[250px] h-auto"
          />
          <h1 className="font-bold py-4 text-center">Mr. Emmanuel Charles</h1>
          <p className="text-center">Miye@example.com</p>
          <div className="flex gap-2 pt-2">
            <FaLinkedin />
            <FaInstagramSquare />
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="flex flex-col items-center">
          <img
            src="/images/img14.png"
            alt="Mrs Pearl Tetteh-Larbi"
            className="rounded-3xl w-[250px] h-auto"
          />
          <h1 className="font-bold py-4 text-center">Mrs Pearl Tetteh-Larbi</h1>
          <p className="text-center">Miye@example.com</p>
          <div className="flex gap-2 pt-2">
            <FaLinkedin />
            <FaInstagramSquare />
          </div>
        </div>
      </div>
    </div>
    {/* Get in touch  */}
      <div className=" flex flex-col items-center bg-[#EFE6D9] py-10 px-4">
  <h2 className="font-bold text-2xl text-[#C5A476] text-center">Get in Touch</h2>
  <p className="text-sm py-7 text-center max-w-xl">
    
Ready to elevate your business? Contact us today and let’s discuss how A3 Spaces can provide the solutions you need.
  </p>

  <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-7 pb-5 w-full">
    {/* Form Section */}
    <form
      action=""
      className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
    >
      <input
        type="text"
        name="name"
        required
        placeholder="Name"
        className="w-full p-2 mb-4 border-b border-gray-300 focus:outline-none placeholder-black"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className="w-full p-2 mb-4 border-b border-gray-300 focus:outline-none placeholder-black"
      />

      <input
        type="tel"
        name="phone"
        required
        placeholder="Phone Number"
        className="w-full p-2 mb-4 border-b border-gray-300 focus:outline-none placeholder-black"
      />

      <select
        name="interest"
        required
        className="w-full p-2 mb-4 border-b border-gray-300 focus:outline-none text-black"
      >
        <option value="" disabled selected>Interested In</option>
        <option value="consulting">Technology Consulting</option>
        <option value="management">Product Management</option>
        <option value="construction">Building Construction</option>
        <option value="management">Project Management</option>
        <option value="management">Human Resources Management</option>
        <option value="consulting">Marketing and Sales</option>
        <option value="construction">Interior Design</option>
      </select>

      <textarea
        name="message"
        rows="4"
        required
        placeholder="Message"
        className="w-full p-2 mb-4 border-b border-gray-300 focus:outline-none placeholder-black"
      ></textarea>

      <button
        type="submit"
        className="w-full p-3 text-white bg-black rounded-md hover:bg-[#C5A476] transition"
      >
        Send Request
      </button>
    </form>

    {/* Responsive Image */}
    <img 
      src="images/img15.png" 
      alt="Quote Image" 
      className="w-full max-w-md md:max-w-lg h-auto"
    />
  </div>
</div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Homepage;

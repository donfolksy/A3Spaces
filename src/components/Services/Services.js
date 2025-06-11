import React from "react";
import { GoDotFill } from "react-icons/go";
import ConsultationModal from "../Consultation/ConsultationModal";
import { useState } from "react";
const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="Services py-12 px-24 font-satoshi">
      <div className="flex flex-col items-center">
        <h4 className="text-2xl font-bold text-[#A58A63] py-5">Our Services</h4>
        <p className="pt-2 pb-8">
        At A3Space, we provide comprehensive consulting and implementation services designed to help businesses navigate challenges, optimize operations, and achieve sustainable growth. With expertise across multiple industries, we deliver tailored solutions that drive measurable impact. Whether you need strategic guidance, operational support, or full-scale project execution, our commitment to excellence ensures your success every step of the way.
        </p>
      </div>
      <div className="pt-7 flex flex-col sm:flex-row gap-20">
        <img src="images/img19.png" alt="" className="w-[500px] h-auto" />
        <div>
          <h4 className="font-bold ">Technology Consulting</h4>
          <p className="py-5">
          We provide cutting-edge technology solutions to help businesses streamline their digital transformation. Our services include:
          </p>
          <div className="flex pb-2 items-center gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>IT infrastructure planning to ensure scalability and efficiency.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Software implementation guildance  for seamless system integration.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>IT support and maintenance for continuous system optimization.
            </p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Cloud solutions for improved accessibility, security, and collaboration.</p>
          </div>
          <div className="flex items-center pb-10 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Cybersecurity strategies to protect digital assets and sensitive information.</p>
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-[#A58A63] text-[#A58A63] hover:bg-[#A58A63] hover:text-white px-4 py-2 rounded-md transition"
          >
            Request Consultation
          </button>
        </div>
      </div>
      <div className="pt-20 flex flex-col-reverse sm:flex-row gap-20">
        <div>
          <h4 className="font-bold text-xl">Product Management</h4>
          <p className="py-5">
          Our product management strategies help businesses develop, launch, and scale products that meet market demands. We focus on:
          </p>
          <div className="flex pb-2 items-center gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Roadmap creation to align product vision with business goals.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Agile implementation  for adaptive and efficient product development.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>User feedback analysis to refine and enhance products.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Market research to identify trends and customer needs.</p>
          </div>
          <div className="flex items-center pb-10 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Go-to-market strategy development for successful product launches.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-[#A58A63] text-[#A58A63] hover:bg-[#A58A63] hover:text-white px-4 py-2 rounded-md transition"
          >
            Request Consultation
          </button>
        </div>
        <img src="images/img4.png" alt="" className="w-[500px] h-auto" />
      </div>
      <div className="pt-20 flex flex-col sm:flex-row gap-20">
        <img src="images/img3.png" alt="" className="w-[500px] h-auto" />
        <div>
          <h4 className="font-bold text-xl">Human Resources Management</h4>
          <p className="py-5">
          We help businesses build high-performing teams and foster positive work environments. Our HR services include:

          </p>
          <div className="flex pb-2 items-center gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Talent acquisition strategies for attracting top industry professionals.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Leadership development programs to nurture organizational growth.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Employee engagement initiatives to boost productivity and retention.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Workforce planning and succession management.</p>
          </div>
          <div className="flex items-center pb-10 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Performance management systems to drive accountability and efficiency.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-[#A58A63] text-[#A58A63] hover:bg-[#A58A63] hover:text-white px-4 py-2 rounded-md transition"
          >
            Request Consultation
          </button>
        </div>
      </div>
      <div className="pt-20 flex flex-col-reverse sm:flex-row gap-20">
        <div>
          <h4 className="font-bold text-xl">
            Marketing and Sales Consulting and Implementation
          </h4>
          <p className="py-5">
          We create data-driven marketing strategies and sales frameworks that drive business growth. Our services cover:
          </p>
          <div className="flex pb-2 items-center gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>
            Marketing analysis to understand consumer behavior and market positioning.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Campaign design and execution for brand visibility and lead generation.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>CRM implementation to enhance customer relationships and loyalty.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Digital marketing solutions, including SEO, content marketing, and social media management.</p>
          </div>
          <div className="flex items-center pb-10 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Sales funnel optimization to improve conversion rates and revenue.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-[#A58A63] text-[#A58A63] hover:bg-[#A58A63] hover:text-white px-4 py-2 rounded-md transition"
          >
            Request Consultation
          </button>
        </div>
        <img src="images/img4.png" alt="" className="w-[500px] h-auto" />
      </div>
      <div className="pt-20 flex flex-col sm:flex-row gap-20">
        <img src="images/img20.png" alt="" className="w-[500px] h-auto" />
        <div>
          <h4 className="font-bold text-xl">Building Construction</h4>
          <p className="py-5">
          We deliver top-tier construction and property development services, ensuring quality and sustainability. Our expertise includes:
          </p>
          <div className="flex pb-2 items-center gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Architectural planning and structural design for innovative solutions.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Site management and supervision for efficient project execution.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Quality assurance to ensure compliance with industry standards.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Property management solutions for commercial and residential real estate. </p>
          </div>
          <div className="flex items-center pb-10 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Green building solutions for energy-efficient and sustainable construction. </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-[#A58A63] text-[#A58A63] hover:bg-[#A58A63] hover:text-white px-4 py-2 rounded-md transition"
          >
            Request Consultation
          </button>
        </div>
      </div>
      <div className="pt-20 flex flex-col-reverse sm:flex-row gap-20">
        <div>
          <h4 className="font-bold text-xl">Interior Design</h4>
          <p className="py-5">
          We craft inspiring and functional interior spaces that align with client preferences and industry trends. Our services include:
          </p>
          <div className="flex pb-2 items-center gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Space planning to maximize efficiency and comfort.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Aesthetic consultation for a cohesive and visually appealing environment.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Custom furniture design tailored to client needs and branding.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Smart home integration for enhanced convenience and automation.</p>
          </div>
          <div className="flex items-center pb-10 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Lighting and material selection to create ambiance and functionality.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-[#A58A63] text-[#A58A63] hover:bg-[#A58A63] hover:text-white px-4 py-2 rounded-md transition"
          >
            Request Consultation
          </button>
        </div>
        <img src="images/img21.png" alt="" className="w-[500px] h-auto" />
      </div>
      <div className="pt-20 flex flex-col sm:flex-row gap-20">
        <img src="images/img22.png" alt="" className="w-[500px] h-auto" />
        <div>
          <h4 className="font-bold text-xl">Project Management</h4>
          <p className="py-5">
          We ensure seamless project execution through structured planning, coordination, and monitoring. Our services include:
          </p>
          <div className="flex pb-2 items-center gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Project planning and tracking for milestone-driven execution.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Risk management to identify and mitigate potential obstacles.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Team coordination to ensure collaboration and efficiency.</p>
          </div>
          <div className="flex items-center pb-2 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Budget management to optimize resource allocation.</p>
          </div>
          <div className="flex items-center pb-10 gap-2">
            <GoDotFill className="text-[#A58A63]" />
            <p>Stakeholder communication and reporting for transparency and accountability.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-[#A58A63] text-[#A58A63] hover:bg-[#A58A63] hover:text-white px-4 py-2 rounded-md transition"
          >
            Request Consultation
          </button>
        </div>
      </div>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Services;

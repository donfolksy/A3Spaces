import React from "react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Aboutus = () => {
  return (
    <section className="py-12 px-12 font-satoshi">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
        <div className="sm:w-1/2">
          <h4 className="font-bold text-2xl text-[#C5A476] text-center sm:text-left">
            About Us
          </h4>
          <p className="py-4">
          A3Space is a professional consulting firm committed to delivering innovative solutions and expert advisory services to businesses, organizations, and individuals seeking to optimize operations, improve efficiency, and achieve long-term growth. Our expertise spans across multiple industries, including business strategy, project management, construction, interior design, and technology integration.

<span className="pt-4 block">At A3Space, we understand that every business has unique needs and challenges. That’s why we take a personalized approach to consulting—working closely with our clients to develop tailored strategies that drive measurable results. Whether you're a startup looking to establish a strong foundation, a growing business aiming to scale operations, or an established organization seeking process improvements, our team is equipped to provide the right guidance and support.</span>

<span className="pt-4 block">With a focus on innovation, sustainability, and excellence, A3Space has built a reputation for delivering high-quality consulting services. We leverage our deep industry knowledge, technical expertise, and strategic partnerships to help our clients navigate complex challenges and seize new opportunities.</span>

<span className="pt-4 block">At A3Space, we are not just consultants—we are problem solvers, innovators, and partners in success. Our team is dedicated to ensuring that our clients achieve their goals while fostering long-term sustainability and profitability.</span>
          </p>
        </div>
        <div className="sm:w-1/2 flex justify-center">
          <img
            src="/images/img2.png"
            alt=""
            className="w-full max-w-[600px] h-auto"
          />
        </div>
      </div>

      {/*first option code <div className="py-10 flex flex-col items-center">
        
        <h4 className="font-bold text-2xl text-[#C5A476]">Our Value</h4>
        <p className="py-7">
          Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.
        </p>
        <div className="flex flex-col sm:flex-row gap-14 ">
          <div className="py-10 flex flex-col items-center ">
            <div className="py-10 px-16 shadow-2xl rounded-md">
              <img src="/images/logo1.png" alt="" />
            </div>

            <p className="pt-4">Excellence through Innovation</p>
          </div>

          <div className="py-10 flex flex-col items-center ">
            <div className="py-10 px-16 shadow-2xl rounded-md">
              <img src="/images/logo2.png" alt="" />
            </div>

            <p className="pt-4">Client-Centric Solutions</p>
          </div>
          <div className="py-10 flex flex-col items-center ">
            <div className="py-10 px-16 shadow-2xl rounded-md">
              <img src="/images/logo3.png" alt="" />
            </div>

            <p className="pt-4">Sustainable Development</p>
          </div>
          <div className="py-10 flex flex-col items-center ">
            <div className="py-10 px-16 shadow-2xl rounded-md">
              <img src="/images/logo4.png" alt="" />
            </div>

            <p className="pt-4">Integrated Expertise</p>
          </div>
          <div className="py-10 flex flex-col items-center ">
            <div className="py-10 px-16 shadow-2xl rounded-md">
              <img src="/images/logo4.png" alt="" />
            </div>

            <p className="pt-4">Professional Integrity</p>
          </div>
          <div className="py-10 flex flex-col items-center ">
            <div className="py-10 px-16 shadow-2xl rounded-md">
              <img src="/images/logo4.png" alt="" />
            </div>

            <p className="pt-4">Collaborative Growth</p>
          </div>
        </div>
      </div> */}
      <div className="py-10 flex flex-col items-center text-center px-6">
        <h4 className="font-bold text-2xl text-[#C5A476]">Our Values</h4>
        <p className="py-4 max-w-2xl">
        At A3Space, our core values guide everything we do:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 w-full max-w-5xl">
          {[
            { img: "/images/logo1.png", text: "Excellence through Innovation" },
            { img: "/images/logo2.png", text: "Client-Centric Solutions" },
            { img: "/images/logo3.png", text: "Sustainable Development" },
            { img: "/images/logo4.png", text: "Integrated Expertise" },
            { img: "/images/logo4.png", text: "Professional Integrity" },
            { img: "/images/logo4.png", text: "Collaborative Growth" },
          ].map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="p-8 shadow-2xl rounded-md flex items-center justify-center w-32 h-32">
                <img src={value.img} alt={value.text} className="w-16 h-auto" />
              </div>
              <p className="pt-4">{value.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="vision py-7 flex flex-col md:flex-col lg:flex-row justify-between gap-14 items-center text-center md:text-left">
        <img
          src="/images/img16.png"
          alt="Vision and Mission"
          className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto rounded-xl"
        />
        <div className="flex flex-col items-center  ">
          <h4 className="font-bold text-2xl text-[#A58A63] py-4">Vision</h4>
          <p className="text-sm sm:text-base ">
            To be the leading innovative force in integrated consulting
            solutions, transforming businesses through expert guidance in
            technology, construction, project management, and design while
            setting new standards for operational excellence.
          </p>
          <h4 className="font-bold text-2xl text-[#A58A63] py-4">Mission</h4>
          <p className="text-sm sm:text-base ">
          We are committed to delivering comprehensive consulting solutions that empower organizations to reach their full potential. By combining expertise in management consulting, construction, interior design, and project management, we create sustainable value and drive measurable results for our clients. Through innovation, technical excellence, and strategic partnerships, we turn challenges into opportunities and ideas into reality.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h4 className="text-[#A58A63] text-2xl py-5 font-bold">Our Story</h4>
      
        <p className="pb-7">
        A3Space was founded with a passion for solving critical capacity development challenges and fostering business growth. Our journey began with the vision of the Annoh family, leading to the creation of GREEPEC, a brand dedicated to empowering communities and businesses.
<span className="pt-4 block"></span>
Registered in 2013, A3Space set out with a strategic goal: to become a self-sustaining private business brand within five years. Over time, we have expanded from an idea to a thriving organization offering diverse business solutions. Despite challenges along the way, our commitment to excellence has driven us forward.
<span className="pt-4 block"></span>
Through our unwavering dedication, we have established strong business relationships across India, Malaysia, Germany, Bulgaria, Kenya, and China. Looking ahead, we aim to solidify our brand presence, register all business divisions, and scale our operations into medium-to-large enterprises.
        </p>
        <img src="/images/img17.png" alt="" />
      </div>
      <div className="OurTeam flex flex-col items-center py-9">
        <h4 className="font-bold text-2xl text-[#A58A63] ">Our Teams </h4>
        <p className="py-7 text-center">
        A3Space is led by a team of professionals who bring extensive experience and expertise across various industries:
        </p>

        <div className="flex flex-col sm:flex-row gap-12">
          <img
            src="images/img11.png"
            alt="Ebenezer Boahene Annoh"
            className="rounded-2xl w-full sm:w-[300px] md:w-[350px] lg:w-[400px]"
          />

          {/* Text Section */}
          <div className="flex flex-col text-center sm:text-left">
            <h2 className="text-2xl font-bold">Ebenezer Boahene Annoh</h2>
            <h6 className="font-satoshi italic font-bold">
              Operations Manager/CEO
            </h6>

            <p className="pt-5 leading-relaxed">
              He has experience in preparing business contracts and research in
              new technologies and alternative methods to maximize efficiency.
              He is a graduate from KNUST-Kumasi (BSc. Agriculture), holds a
              Postgraduate diploma in International Financial Management, UK,
              and a Master of Arts in Ministry.
              <span className="block mt-4"></span>
              His vision is to give direction and a sense of purpose to his
              generation with his God-given abilities through the sharing of
              knowledge and skills. For this reason, he mentors young people
              with his message of leadership, entrepreneurship, and personal
              life experiences. He has a passion for sales, marketing, and
              strategic planning and management.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-5 text-2xl">
              <FaLinkedinIn />
              <FaXTwitter />
              <FaInstagramSquare />
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col sm:flex-row gap-12">
          {/* Image Section */}
          <img
            src="images/img12.png"
            alt="Mrs Emma Simpey"
            className="rounded-2xl w-full sm:w-[300px] md:w-[350px] lg:w-[400px]"
          />

          {/* Text Section */}
          <div className="flex flex-col text-center sm:text-left">
            <h2 className="text-2xl font-bold">Mrs Emma Simpey</h2>
            <h6 className="font-satoshi italic font-bold">
              Human Resource Manager
            </h6>

            <p className="pt-5 leading-relaxed">
              She joined A3 Space Consult in 2017 and is responsible for product
              development, sales, and maintaining client relationships while
              coordinating with organizations to gather feedback on sold
              products.
              <span className="block mt-4"></span>
              She holds a degree in BSc Banking and Finance. She finds out from
              clients their challenges and relays this information to
              management.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-5 text-2xl">
              <FaLinkedinIn />
              <FaXTwitter />
              <FaInstagramSquare />
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col sm:flex-row gap-12">
          {/* Image Section */}
          <img
            src="images/img13.png"
            alt="Mr. Emmanuel Charles Annoh Jnr."
            className="rounded-2xl w-full sm:w-[300px] md:w-[350px] lg:w-[400px]"
          />

          {/* Text Section */}
          <div className="flex flex-col text-center sm:text-left">
            <h2 className="text-2xl font-bold">
              Mr. Emmanuel Charles Annoh Jnr.
            </h2>
            <h6 className="font-satoshi italic font-bold">
              IT and Technical Advisor
            </h6>

            <p className="pt-5 leading-relaxed">
              He has experience in preparing business contracts and conducting
              research on new technologies and alternative methods to maximize
              efficiency. He is a graduate of KNUST-Kumasi (BSc. Agriculture),
              holds a Postgraduate Diploma in International Financial Management
              (UK), and a Master of Arts in Ministry.
              <span className="block mt-4"></span>
              His vision is to give direction and a sense of purpose to his
              generation through the sharing of knowledge and skills. For this
              reason, he mentors young people with his message of leadership,
              entrepreneurship, and personal life experiences. He has a passion
              for sales, marketing, strategic planning, and management.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-5 text-2xl">
              <FaLinkedinIn />
              <FaXTwitter />
              <FaInstagramSquare />
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col sm:flex-row gap-12">
          {/* Image Section */}
          <img
            src="images/img14.png"
            alt="Mrs Pearl Tetteh-Larbi"
            className="rounded-2xl w-full sm:w-[300px] md:w-[350px] lg:w-[400px]"
          />

          {/* Text Section */}
          <div className="flex flex-col text-center sm:text-left">
            <h2 className="text-2xl font-bold">Mrs Pearl Tetteh-Larbi</h2>
            <h6 className="font-satoshi italic font-bold">Financial Manager</h6>

            <p className="pt-5 leading-relaxed">
              She joined A3 Space Consult in 2017 and is responsible for product
              development, sales, and client engagement while coordinating with
              organizations to gather feedback on products sold.
              <span className="block mt-4"></span>
              She holds a degree in BSc Banking and Finance. She identifies
              client challenges and relays that information to management.
              <span className="block mt-4"></span>
              Her dedication is to give direction and a sense of purpose to her
              generation through the sharing of knowledge and skills. For this
              reason, she mentors young people with her message of leadership,
              entrepreneurship, and personal life experiences. She has a passion
              for sales, marketing, strategic planning, and management.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-5 text-2xl">
              <FaLinkedinIn />
              <FaXTwitter />
              <FaInstagramSquare />
            </div>
          </div>
        </div>
      </div>

     
      <div className="Achievement py-7 flex flex-col items-center">
  <h4 className="font-bold text-2xl text-[#A58A63]">Our Achievement</h4>
  <p className="py-5 text-center leading-relaxed max-w-5xl">
    At A3Space, we take pride in our track record of delivering top-notch consulting services that drive real impact. Over the years, we have successfully executed projects across multiple industries, helping businesses and organizations achieve their goals through strategic planning, innovative solutions, and expert guidance.
  </p>

  <div className="flex flex-col sm:flex-row pt-7 gap-8 sm:gap-14 items-center">
    {/* Image Section */}
    <img
      src="images/img18.png"
      alt="Achievement Image"
      className="w-full sm:w-[500px] md:w-[550px] lg:w-[600px] h-auto rounded-xl"
    />

    {/* Text Section */}
    <div className="text-center sm:text-left">
      <p className="leading-relaxed">
        As we continue to grow, our commitment to delivering excellence remains unwavering. At A3Space, every achievement is a stepping stone toward greater success for us and the clients we serve.
        <br />
        Some of our key accomplishments include:
      </p>

      {/* Achievement Highlights */}
      <div>
        <div className="flex flex-col md:flex-row justify-between pt-12 gap-8 md:gap-12">
          <div className="max-w-lg">
            <h1 className="font-bold pb-4">Successful Project Executions</h1>
            <p>
              We have managed and executed a diverse range of projects, from construction and interior design to business strategy and operational optimization, ensuring efficiency and high-quality outcomes.
            </p>
          </div>
          <div className="max-w-lg">
            <h1 className="font-bold pb-4">Global Expansion & Partnerships</h1>
            <p>
              Our expertise has transcended borders, allowing us to build strong business relationships and partnerships in countries such as India, Malaysia, Germany, Bulgaria, Kenya, and China.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row pt-12 gap-8 md:gap-12">
          <div className="max-w-lg">
            <h1 className="font-bold pb-4">Client Satisfaction & Growth</h1>
            <p>
              Through our tailored consulting approach, we have helped numerous clients streamline operations, enhance productivity, and scale their businesses effectively.
            </p>
          </div>
          <div className="max-w-lg">
            <h1 className="font-bold pb-4">Innovation & Sustainability</h1>
            <p>
              We integrate sustainable practices and cutting-edge technology into our solutions, ensuring long-term success for our clients while contributing to a more sustainable business environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="flex flex-wrap justify-center sm:justify-between py-10 gap-6 sm:gap-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-4xl">834</h1>
          <p>Total Freelancers</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-4xl">924</h1>
          <p>Positive Reviews</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-4xl">90</h1>
          <p>Total Orders Received</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-4xl">324</h1>
          <p>Projects Completed</p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;

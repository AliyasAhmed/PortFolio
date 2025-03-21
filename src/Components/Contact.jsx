import React, { useState } from "react";
import InViewAnimation from "./InViewAnimation";
import axios from "axios";


const Contact = () => {

  const [message, setmessage] = useState();

  const [formFill, setFormFill] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Get the field's name (like 'name', 'email', or 'message') and its current value.
    setFormFill({ ...formFill, [name]: value }); // Update the corresponding field in the state.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
  
    try {
      const response = await axios.post("https://formspree.io/f/mnnppgjn", formData, {
        headers: { Accept: "application/json" },
      });
  
      if (response.status === 200) {
        setmessage("Message sent successfully!");
        setFormFill({ name: "", email: "", message: "" }); 
      } else {
        setmessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
    }
    setTimeout(() => {
     setmessage("") 
    },6000);
  };

  return (
    <>
      <div className=" flex flex-col justify-center p-5 backdrop-blur-sm shadow shadow-shadow border border-border rounded-md w-full ">
        {/* Header Section */}
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#36ffc6] mb-4">
            Feel Free To Contact Me
          </h1>
          <p className="text-[#FFFFFF] text-lg max-w-3xl mx-auto">
            If I get your mail, I'll surely check it out.
          </p>
        </section>

        {/* Contact Form Section */}
        <InViewAnimation className="max-w-4xl mx-auto rounded-lg p-6">
          <form
            className="grid grid-cols-1 gap-6"
            onSubmit={handleSubmit}
          >
            {message && (<p className="text-center text-[#36ffc6] font-medium">{message}</p>)}
            <div>
              <label
                htmlFor="name"
                className="block text-[#FFFFFF] font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formFill.name}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-border bg-[#0000009d] text-[#FFFFFF] rounded-md focus:ring-[#01C38D] focus:border-[#32ffc5]"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[#FFFFFF] font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formFill.email}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-border bg-[#0000009d] text-[#FFFFFF] rounded-md focus:ring-[#01C38D] focus:border-[#32ffc5]"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-[#FFFFFF] font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="5"
                value={formFill.message}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-border bg-[#000000] text-[#FFFFFF] rounded-md focus:ring-[#01C38D] focus:border-[#01C38D]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#000000] border border-border text-[#FFFFFF] shadow-lg hover:shadow-white font-bold py-2 px-4 rounded-md hover:bg-[#ffffff] hover:text-black transition duration-300"
            >
              Submit
            </button>
          </form>
        </InViewAnimation>
      </div>
      {/* Vertical Line Section */}
      <div className="line h-[20vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua] mx-auto"></div>
    </>
  );
};

export default Contact;

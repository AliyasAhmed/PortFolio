import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen h-[100vh] text-7xl" id="contact">
      <p>It's Contact!</p>
    </div>
  );
};

export default Contact;

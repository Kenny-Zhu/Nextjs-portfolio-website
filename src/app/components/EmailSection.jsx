"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon-transparent.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
      <section
          id="contact"
          className="grid place-items-center my-12 md:my-12 py-24 relative"
      >
        <div
            className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

        <div className="z-10 flex flex-col items-center">
          <div className="socials flex flex-row gap-8">
            <Link href="https://github.com/Kenny-Zhu" className="transform hover:scale-110 transition duration-300 ease-in-out">
              <Image
                  src={GithubIcon}
                  alt="Github Icon"
                  width={64}
                  height={64}
                  className="hover:animate-bounce"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/kenny-zhu-a60669206/" className="transform hover:scale-110 transition duration-300 ease-in-out">
              <Image
                  src={LinkedinIcon}
                  alt="Linkedin Icon"
                  width={64}
                  height={64}
                  className="hover:animate-bounce"
              />
            </Link>
            <Link href="mailto:kennyzhuw@gmail.com" className="transform hover:scale-110 transition duration-300 ease-in-out">
              <Image
                  src={EmailIcon}
                  alt="Email Icon"
                  width={64}
                  height={64}
                  className="hover:animate-bounce"
              />
            </Link>
          </div>
        </div>
      </section>
  );
};

export default EmailSection;

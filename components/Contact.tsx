import React, { useRef, useState } from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Loader from "./ui/Loader";

type Props = {};

const Contact = (props: Props) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_rz8joie",
        "template_czlo0qi",
        {
          subject,
          name,
          message,
          email,
        },
        "KuwLhPBIMfbEJiRUG"
      )
      .then(
        (result) => {
          setLoading(false);
          toast.success("Your message was sent successfully");
          setName("");
          setMessage("");
          setEmail("");
          setSubject("");
        },
        (error) => {
          setLoading(false);
          toast.error("Send failed. Check your connection");
          console.log(message);
        }
      );
  };
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl mx-auto items-center justify-evenly px-10">
      <h3 className="absolute top-10 tracking-[20px] uppercase text-gray-500">
        Contact
      </h3>
      <div className="flex  flex-col space-y-10">
        <h4 className="text-l font-bold text-slate-300 text-center ">
          Lets talk about your project, shall we?
        </h4>
        <div className="text-slate-300">
          <div className="flex mb-4 items-center space-x-5 justify-center">
            <PhoneIcon className="text-red-600 animate-pulse h-7 w-7" />{" "}
            <p>+2349015575260</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-red-600 animate-pulse h-7 w-7" />{" "}
            <p>ijobra20@gmail.com</p>
          </div>
        </div>
        <form
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex sm:space-x-2 space-y-2 sm:space-y-0 flex-col sm:flex-row ">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="contactInput"
              placeholder="Name"
              type="text"
            />
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contactInput"
              placeholder="Email"
              type="email"
            />
          </div>
          <input
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="contactInput placeholder:capitalize"
            placeholder="subject"
            type="text"
          />
          <textarea
            className="resize-none contactInput"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-600/40 py-2 px-6 flex text-slate-300 justify-center"
          >
            {loading ? <Loader /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

function ContacUs() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_81jjm8n", "template_q6pukmu", form.current, {
        publicKey: "txZ2Knm8iEi6KADk5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  const contacUsRef = useRef(null);
  return (
    <div ref={contacUsRef}>
      <div className="my-10 pt-5 flex justify-center lg:py-5">
        <h1 className="text-3xl font-bold text-white lg:text-5xl">
          Contact <span className="text-yellow-700">Us</span>
        </h1>
      </div>
      <div className="lg:flex lg:mx-32">
        <div className="mx-10 my-5">
          <h1 className="text-white font-bold text-2xl">Do not be shey!</h1>
          <h1 className="text-white">
            feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </h1>
        </div>
        <section>
          <form ref={form} onSubmit={sendEmail}>
            <div className="gap-5 p-2 mx-10 lg:flex">
              <input
                className="border-2 size-full border-black rounded-lg h-10 pl-3"
                type="text"
                placeholder="Full Name"
                name="user_name"
                required
              />
              <input
                className="border-2 size-full border-black rounded-lg h-10 pl-3"
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
              <input
                className="border-2 size-full border-black rounded-lg h-10 pl-3"
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>
            <div className="p-2 mx-10 ">
              <textarea
                className="border-2 size-full border-black rounded-xl pt-2 pl-2"
                name="message"
                placeholder="Your Massage"
                cols={82}
                rows={8}
                required
              ></textarea>
            </div>
            <div className="pl-2 pt-1 pb-5">
              <div className="flex justify-center gap-2 rounded-lg border-2 border-gray-900 w-32 bg-yellow-700 mx-10 lg:p-2">
                <button type="submit" className="font-bold  ">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ContacUs;

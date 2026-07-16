import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      id="partner"
      className="bg-[#07331f] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">

        {/* Badge */}
        <div className="mb-6 flex justify-center lg:justify-start">
          <span className="inline-flex rounded-full border border-[#2f6d4a] bg-[#0d4d31] px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-[#e6b45b]">
            Partner With Us
          </span>
        </div>


        {/* Main Card */}
        <div className="rounded-[32px] border border-[#174f39] bg-[#0a4028] p-6 shadow-xl sm:p-10 lg:p-12">

          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">

            <h2 className="mb-5 font-serif text-3xl font-normal leading-tight text-white sm:text-4xl md:text-5xl">
              WHOLESALE & EXPORT INQUIRIES
            </h2>

          </div>


          {/* Content */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">


            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-[28px] bg-[#f7f4e9] p-6 shadow-lg sm:p-8"
            >

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-[#0f2719]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="
                      rounded-[18px]
                      border border-[#e1d9c7]
                      bg-white
                      px-4 py-3
                      text-[#0f2719]
                      outline-none
                      transition
                      focus:border-[#e6b45b]
                      focus:ring-2
                      focus:ring-[#e6b45b]/20
                    "
                    required
                  />

                </div>


                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-[#0f2719]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="
                      rounded-[18px]
                      border border-[#e1d9c7]
                      bg-white
                      px-4 py-3
                      text-[#0f2719]
                      outline-none
                      transition
                      focus:border-[#e6b45b]
                      focus:ring-2
                      focus:ring-[#e6b45b]/20
                    "
                    required
                  />

                </div>

              </div>



              <div className="flex flex-col gap-2">

                <label
                  htmlFor="company"
                  className="text-sm font-semibold text-[#0f2719]"
                >
                  Company
                </label>

                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      company: e.target.value,
                    })
                  }
                  className="
                    rounded-[18px]
                    border border-[#e1d9c7]
                    bg-white
                    px-4 py-3
                    text-[#0f2719]
                    outline-none
                    transition
                    focus:border-[#e6b45b]
                    focus:ring-2
                    focus:ring-[#e6b45b]/20
                  "
                />

              </div>



              <div className="flex flex-col gap-2">

                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-[#0f2719]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="
                    resize-none
                    rounded-[20px]
                    border border-[#e1d9c7]
                    bg-white
                    px-4 py-3
                    text-[#0f2719]
                    outline-none
                    transition
                    focus:border-[#e6b45b]
                    focus:ring-2
                    focus:ring-[#e6b45b]/20
                  "
                  required
                />

              </div>



                <button
                type="submit"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#033f24]
                  px-7
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#0f2719]
                  hover:shadow-lg
                  sm:w-auto
                "
              >
                Send inquiry

                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>

              </button>

            </form>



            {/* Right Side Placeholder */}
            <div className="rounded-[28px] border border-[#174f39] bg-[#083620] p-8 lg:flex lg:flex-col lg:justify-center">

              <h3 className="font-serif text-3xl text-white">
                Built for global partnerships
              </h3>

              <p className="mt-4 leading-relaxed text-[#c9ddd1]">
                Connect with us for livestock supply, export partnerships,
                and long-term agricultural opportunities.
              </p>

            </div>


          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
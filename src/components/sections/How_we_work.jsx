"use client";
const img1 = "/Hwwimages/1.png";
const img2 = "/Hwwimages/2.png";
const img3 = "/Hwwimages/3.png";
const img4 = "/Hwwimages/4.png";
const img5 = "/Hwwimages/5.png";


const Timeline = () => {
  const timelineData = [
    {
      date: "Understand Your Needs",
      image: img1,
      text: "We study your plot, budget, and lifestyle before suggesting anything.",
      alt: "Tesla Roadster",
    },
    {
      date: "Plan & Design Clearly",
      image: img2,
      text: "Layouts are planned for comfort, ventilation, and long-term value — not just looks.",
      alt: "Chevy Bolt EV",
    },
    {
      date: "Lock Scope & Cost",
      image: img3,
      text: "Specifications and pricing are finalized before work starts to avoid surprises later. Build With",
      alt: "EV Announcement",
    },
    {
      date: "Build With Supervision",
      image: img4,
      text: "Construction is monitored stage by stage with quality checks and regular updates.",
      //   link: "https://www.tesla.com",
      alt: "Tesla Milestone",
    },
    {
      date: "Finish & Handover",
      image: img5,
      text: "Your home is completed, inspected, and handed over as promised.",
      alt: "EV Sales",
    },
  ];

  return (
    <div className="relative bg-[#2B2B2D] text-white min-h-screen">
      {/* Heading */}
      <section className="py-32 text-center max-w-2xl mx-auto px-4">
        <h2 className="text-5xl font-semibold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent mb-6">
          The Rise of Electric Vehicles
        </h2>
        <p className="text-lg text-gray-300">
          The electric vehicle (EV) revolution began with small, incremental
          steps.
          <br />
          This timeline tracks key moments in the development of electric cars
          and sustainability.
        </p>
      </section>

      {/* Timeline */}
      <section className="relative max-w-6xl mx-auto px-4">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[3px] bg-gray-600">
          <div className="fixed top-0 bottom-1/2 w-[3px] bg-gradient-to-b from-orange-500 to-pink-600" />
        </div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_180px_1fr] py-20 relative max-md:grid-cols-[64px_1fr]"
          >
            {/* Date */}
            <div className="text-right max-md:text-left max-md:col-start-2">
              <p className="text-4xl font-medium sticky top-1/2 -translate-y-1/2">
                {item.date}
              </p>
            </div>

            {/* Circle */}
            <div className="flex justify-center max-md:justify-start">
              <span className="w-4 h-4 bg-white rounded-full sticky top-1/2 -translate-y-1/2 shadow-[0_0_0_8px_#2B2B2D]" />
            </div>

            {/* Content */}
            <div className="flex flex-col max-md:flex-col-reverse gap-6">
              {/* Image first */}
              <img
                src={item.image}
                alt={item.alt}
                className="w-full max-w-md rounded-lg"
                loading="lazy"
              />

              {/* Text after image */}
              <div>
                <p className="text-2xl font-medium mb-4">{item.text}</p>

                {item.subText && (
                  <p className="text-gray-400 mb-4">{item.subText}</p>
                )}

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="uppercase text-sm font-bold opacity-60 hover:opacity-100 inline-block"
                  >
                    Tesla’s achievements
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Fade Effects */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#2B2B2D] to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#2B2B2D] to-transparent" />
      </section>

      <div className="h-[50vh]" />
    </div>
  );
};

export default Timeline;

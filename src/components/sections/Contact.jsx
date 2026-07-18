"use client";

import { useEffect, useState } from "react";

export default function Contact({ embedded = false, formOnly = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!success) return undefined;

    const timer = window.setTimeout(() => setSuccess(""), 8000);
    return () => window.clearTimeout(timer);
  }, [success]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message || "Your message was sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id={formOnly ? "footer-contact-form" : "contact"}
      className={`relative overflow-hidden ${
        embedded ? "bg-transparent py-0" : "bg-[#2B2B2D] py-32"
      }`}
    >
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#DD7E1F]/10 blur-[120px]" />

      <div className={embedded ? "relative z-10" : "container-custom relative z-10"}>
        <div className={formOnly ? "block" : "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"}>

          {/* LEFT */}
          {!formOnly && <div>
            <p className="uppercase tracking-[4px] text-[#DD7E1F] mb-4 text-sm">
              Contact Us
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-[1.05] mb-8">
              Let’s Build
              <br />
              Something Great
            </h2>

            <p className="text-white/60 text-lg leading-relaxed">
              Reach out to discuss your dream home project and get a free
              consultation with our construction experts.
            </p>
          </div>}

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className={`border border-orange-500 border-white/10 bg-white/5 backdrop-blur-2xl ${
              formOnly
                ? "rounded-[24px] p-5 [&>div]:gap-4 [&_input]:h-12 [&_textarea]:min-h-[105px] [&_button]:h-12"
                : "rounded-[40px] p-10"
            }`}
          >
            <div className="flex flex-col gap-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ankith Kommu"
                required
                className="h-16 rounded-2xl bg-black/40 border border-white/10 px-6 outline-none focus:border-[#DD7E1F]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ankxxkoxxx12@gmail.com"
                required
                className="h-16 rounded-2xl bg-black/40 border border-white/10 px-6 outline-none focus:border-[#DD7E1F]"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 99890xxxxx"
                required
                className="h-16 rounded-2xl bg-black/40 border border-white/10 px-6 outline-none focus:border-[#DD7E1F]"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="East Facing Plot With Lenght 50ft and Width 30ft...."
                required
                className="rounded-2xl bg-black/40 border border-white/10 px-6 py-5 outline-none focus:border-[#DD7E1F] min-h-[180px]"
              />

              {success && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-3 rounded-2xl border border-green-400/30 bg-green-400/10 px-5 py-4 text-green-300"
                >
                  <span aria-hidden="true" className="text-xl leading-none">✓</span>
                  <div>
                    <p className="font-semibold">Inquiry sent successfully</p>
                    <p className="mt-1 text-sm text-green-200/80">
                      Thank you! We received your message and will contact you soon.
                    </p>
                  </div>
                </div>
              )}

              {error && (
                <div role="alert" className="rounded-2xl border border-red-400/30 bg-red-400/10 px-5 py-4 text-sm text-red-300">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="h-16 rounded-2xl bg-[#DD7E1F] hover:bg-[#c96f18] transition-all duration-300 text-lg font-semibold disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

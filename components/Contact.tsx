"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_k3i6j2t", // Replace with your EmailJS Service ID
        "template_5a9u06c", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "58OgDJR3xM6bYYfWl" // Replace with your EmailJS Public Key
      )
      .then(() => {
        toast.success("Message sent successfully!"); // Show success toast
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again."); // Show error toast
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="scroll-mt-20" style={{ marginTop: "5%" }}>
      <Toaster position="top-right" reverseOrder={false} />

      <h2
        style={{
          backgroundColor: "#111827",
          boxShadow: "0px 0px 8px #9dfc44",
          padding: "5px",
          borderRadius: "5px",
          textAlign: "center",
          width: "57%",
          margin: "auto",
          display: "block",
          color: "#9fa0ab",
          marginTop: isMobile ? "-5%" : "-1.5%",
          marginBottom: isMobile ? "6%" : "3.8%",
          fontSize: "24px",
          fontWeight: "700",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        Contact
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-gray-700 text-gray-100 border-gray-600 focus:border-blue-400"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-gray-700 text-gray-100 border-gray-600 focus:border-blue-400"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Textarea
            name="message"
            placeholder="Your Message"
            className="bg-gray-700 text-gray-100 border-gray-600 focus:border-blue-400"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <motion.button
          type="submit"
          className="bg-blue-400 text-gray-900 hover:bg-blue-500 transition-colors px-4 py-2 rounded-md font-semibold"
          style={{ fontFamily: "Playfair Display" }}
          disabled={loading}
          whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </section>
  );
}

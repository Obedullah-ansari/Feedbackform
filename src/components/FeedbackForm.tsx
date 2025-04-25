import React, { useState } from "react";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import{ Link } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const FeedbackForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(() => true);
    try {
      const response = await fetch(
        "https://news-hub-oa-backend.vercel.app/api/v1/temp/createfeedbackform",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      await response.json();
      if (response.ok) {
        toast.success("Feedback submitted successfully");
        setIsLoading(() => false);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log("Error submitting feedback:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:w-[39%] md:w-[45%] sm:w-[95%] max-sm:w-[97%] h-[70%] flex flex-col justify-center items-center bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50"
    >
      <div className="w-[75%]">
        <label htmlFor="name" className="block text-gray-300 !p-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
          className="w-full !px-4 !py-3 bg-gray-900/50 text-white backdrop-blur-lg rounded-xl border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-300"
          placeholder="Alexander smith"
        />
      </div>

      <div className="w-[75%]">
        <label htmlFor="email" className="block text-gray-300 !p-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full !px-4 !py-3 bg-gray-900/50 text-white backdrop-blur-lg rounded-xl border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-300"
          placeholder="Alexsmith@example.com"
        />
      </div>

      <div className="w-[75%]">
        <label htmlFor="message" className="block text-gray-300 !p-2">
          Feedback
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          rows={4}
          className="w-full !px-4 !py-3 bg-gray-900/50 text-white backdrop-blur-lg rounded-xl border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-300 resize-none"
          placeholder="Enter your message here..."
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-[75%] !mt-7 cursor-pointer !py-3 !px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? <Loader className="w-5 h-5 animate-spin" /> : "Submit"}
      </button>
      <Link
        to="/admin"
        className="text-neutral-200 hover:underline text-[1rem] !p-2 cursor-pointer"
      >
        Go to Admin dashboard
      </Link>
    </form>
  );
};

export default FeedbackForm;

import { useEffect, useState } from "react";

interface FeedbackForm {
  name: string;
  email: string;
  message: string;
}

function Dasboard() {
  const [feedbackForms, setFeedbackForms] = useState<FeedbackForm[]>([]);
  useEffect(() => {
    const handelgetalluser = async () => {
      const response = await fetch(
        "https://news-hub-oa-backend.vercel.app/api/v1/temp/getfeedbackform",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setFeedbackForms(data.data.feedback);
      }
    };
    handelgetalluser();
  }, []);
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col items-center justify-start !pt-6 bg-gradient-to-br gap-5 from-gray-900 to-neutral-800">
        <div className="w-[96%]  border border-slate-800 rounded-lg shadow shadow-slate-800">
          <div className="rounded-2xl shadow-xl !p-8 !space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-slate-200">Dashboard</h1>
              <p className="text-slate-300">Welcome to the Admin Dashboard</p>
            </div>
          </div>
        </div>
        {Array.isArray(feedbackForms) && feedbackForms.length > 0 ? (
          feedbackForms.map((feedbackForm, index) => (
            <div
              key={index}
              className="w-full max-w-md bg-gray-900 border border-slate-800 rounded-2xl shadow shadow-slate-800 mt-4"
            >
              <div className="rounded-2xl bg-gradient-to-br from-gray-900  to-teal-500 shadow-xl !p-3">
                   <span className="flex justify-start items-center ">
                    <span className="text-[1rem] font-semibold text-slate-200">NAME:</span>
                    <h1 className="text-[1rem] !p-2 text-slate-200">
                      {feedbackForm.name}
                    </h1>
                   </span>
                
                   <span className="flex justify-start items-center ">
                    <span className="text-[1rem] font-semibold text-slate-200">EMAIL:</span>
                    <h1 className="text-[1rem] !p-2 text-slate-200">
                      {feedbackForm.email}
                    </h1>
                   </span>
                  <p className="text-slate-300">{feedbackForm.message}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="w-12 h-12 border border-gray-800 rounded-full animate-spin transition-all">
            
          </div>
        )}
      </div>
    </>
  );
}

export default Dasboard;

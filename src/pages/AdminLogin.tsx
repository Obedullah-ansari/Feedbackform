import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Toaster } from "sonner";
import { toast } from "sonner";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    adminId: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.adminId === import.meta.env.VITE_ADMIN_ID &&
      formData.password === import.meta.env.VITE_PASSWORD
    ) {
      navigate("/admin/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center  bg-gradient-to-br  from-gray-900 to-neutral-800">
      <div className="w-full max-w-md bg-gray-900  border border-slate-800 rounded-lg shadow shadow-slate-800">
        <div className=" rounded-2xl shadow-xl !p-8 !space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-slate-200">Admin Login</h1>
            <p className="text-slate-300">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="!space-y-6">
            <div className="!space-y-4">
              {/* Admin ID Field */}
              <div className="relative">
                <input
                  type="text"
                  name="adminId"
                  id="adminId"
                  value={formData.adminId}
                  onChange={handleInputChange}
                  className="w-full !px-4 text-neutral-100 !py-3 rounded-lg border border-slate-800 focus:border-slate-600 focus:ring-2 focus:ring-indigo-600/20 transition-all outline-none peer placeholder-transparent"
                  placeholder="Admin ID"
                  required
                />
                <label
                  htmlFor="adminId"
                  className="absolute left-4 -top-2.5 bg-gray-900 px-1 text-sm text-gray-300 transition-all 
                     peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                      peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm 
                           peer-focus:text-slate-200"
                >
                  Admin ID
                </label>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full text-neutral-100 !px-4 !py-3 rounded-lg border border-slate-800 focus:border-slate-600 focus:ring-2 focus:ring-indigo-600/20 transition-all outline-none peer placeholder-transparent"
                  placeholder="Password"
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute left-4 -top-2.5 bg-gray-900 px-1 text-sm text-gray-300 transition-all 
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                   peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm 
                        peer-focus:text-slate-200"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600/20"
              />
              <label
                htmlFor="rememberMe"
                className="!ml-2 text-sm text-slate-600"
              >
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full !py-3 !px-4 bg-gradient-to-r from-indigo-600 to-blue-500 cursor-pointer text-white rounded-lg 
                       font-medium hover:from-indigo-700 hover:to-blue-600 focus:ring-2 
                       focus:ring-indigo-600/50 transition-all disabled:opacity-50 
                       disabled:cursor-not-allowed flex items-center justify-center"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Toaster richColors position="top-center" />
    </div>
  );
};

export default AdminLogin;

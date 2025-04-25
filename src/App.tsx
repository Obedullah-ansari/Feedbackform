import FeedbackForm from "./components/FeedbackForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import Dasboard from "./pages/Dasboard";
import { Toaster } from "sonner";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <section className="flex justify-center items-center h-[100vh] w-full bg-gradient-to-br  from-gray-900 to-neutral-800">
        <FeedbackForm />
        <Toaster richColors position="top-center" />
      </section>
    ),
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/admin/dashboard",
    element: <Dasboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

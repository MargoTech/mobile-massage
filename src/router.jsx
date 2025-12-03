import { createBrowserRouter } from "react-router-dom";
import layout from "./layout";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import Therapists from "./pages/Therapists";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "therapists", element: <Therapists /> },
      { path: "booking", element: <Booking /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

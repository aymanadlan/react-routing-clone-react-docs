import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import Home from "../pages";
import Contact from "../pages/Contact";
import About from "../pages/About";
import RootLayout from "../pages/Layout";
import QuickStart from "../pages/learn/";
import LearnLayout from "../pages/learn/Layout";
import ThinkingInReact from "../pages/learn/ThinkingInReact";
import Installation from "../pages/learn/Installation";
import Login from "../pages/Login";
import Contribute from "../pages/Contribute";

const isLoggedIn = false;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/** Root Layout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route
          path="contribute"
          element={isLoggedIn ? <Contribute /> : <Navigate to="/login" />}
        />
        <Route
          path="login"
          element={isLoggedIn ? <Navigate to="/contribute" /> : <Login />}
        />
      </Route>

      {/** Learn Layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStart />} />
        <Route path="thinking-in-react" element={<ThinkingInReact />} />
        <Route path="installation" element={<Installation />} />
      </Route>
    </>
  )
);

export default router;

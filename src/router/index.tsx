import {
  createBrowserRouter,
  createRoutesFromElements,
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
import Contribute from "../pages/Contribute";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Login from "../pages/Login";

const isLoggedIn = true;
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
          element={
            <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login">
              <Contribute />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/contribute">
              <Login />
            </ProtectedRoute>
          }
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

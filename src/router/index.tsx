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
import ErrorRouteHandler from "../components/errors/ErrorRouteHandler";

const isLoggedIn = true;
const userData: { email: string } | null = isLoggedIn
  ? { email: "email@mail.com" }
  : null;
console.log("isLoggedIn", isLoggedIn);
console.log("userData", userData);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/** Root Layout */}
      <Route
        path="/"
        element={<RootLayout />}
        errorElement={<ErrorRouteHandler />}
      >
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route
          path="contribute"
          element={
            <ProtectedRoute
              isAllowed={isLoggedIn}
              redirectPath="/login"
              data={userData}
            >
              <Contribute />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoute
              isAllowed={!isLoggedIn}
              redirectPath="/contribute"
              data={userData}
            >
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

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
import "./index.css";
import { imageLoader } from "./pages/display";

import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
// import AboutPage from "./pages/about/about";
import AboutThis from "./pages/about/aboutthis";
import AboutThat from "./pages/about/aboutthat";
import ErrorPage from "./pages/errorpage";

import RootLayout from "./layouts/rootlayout";
import AboutLayout from "./layouts/aboutlayout";

// use lazy like this not directly in the Route
const DisplayPage = lazy(() => import("./pages/display"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutLayout />}>
        {/* <Route index element={<AboutPage />} /> */}
        <Route path="aboutthis" element={<AboutThis />} />
        <Route path="aboutthat" element={<AboutThat />} />
      </Route>
      <Route path="contact" element={<ContactPage />} />
      <Route path="display" element={<DisplayPage />} loader={imageLoader} />

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

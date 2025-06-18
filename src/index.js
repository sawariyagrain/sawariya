import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './section/Home/Home';
import About from './section/About/About';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Product from './section/products/Product';
import Contact from './section/Contact/Contact';
import Leadership from './section/Leadership/Leadership';
import Career from './section/Career/Career';
import LifeAtSawariya from './section/Career/ThreeBoxes/LifeAtSawariya';
import Training from './section/Career/ThreeBoxes/Training';
import Opportunities from './section/Career/ThreeBoxes/Opportunities';
import TandC from './section/Footer/Policy/TandC';
import PrivacyPolicy from './section/Footer/Policy/PrivacyPolicy';
import Disclaimer from './section/Footer/Policy/Disclaimer';

const router = createHashRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/leadership", element: <Leadership /> },
  { path: "/career", element: <Career /> },
  { path: "/contact", element: <Contact /> },
  { path: "/product", element: <Product /> },
  { path: "/life-at-sawariya", element: <LifeAtSawariya /> },
  { path: "/training", element: <Training /> },
  { path: "/current", element: <Opportunities /> },
  { path: "/terms-conditions", element: <TandC /> },
  { path: "/privacy--policy", element: <PrivacyPolicy /> },
  { path: "/disclaimer", element: <Disclaimer /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

reportWebVitals();

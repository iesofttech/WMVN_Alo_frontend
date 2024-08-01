import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./CssOverride.scss";
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import Register from "./pages/auth/Register/Register";
import Support from "./pages/Support/Support";
import { privateRoutes } from "./routes/PrivateRoutes";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/support" element={<Support />} />
          {/* <Route path="*" element={<PageNotFound />} />
        <Route path="/games/:name" element={<Games />} />
        <Route path="/promotions" element={<Bonus />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/responsible-gaming" element={<ResponsibleGaming />} />

        <Route path="/promotions/:id" element={<SinglePromotionDetails />} />
        */}
          {privateRoutes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={<PrivateRoute component={route.component} />}
            />
          ))}
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;

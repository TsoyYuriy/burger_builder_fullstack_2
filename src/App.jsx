import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./containers/MainPage/MainPage";
import { Checkout } from "./containers/Checkout/Checkout";
import { ContactData } from "./containers/Checkout/ContactData/ContactData";
import { Layout } from "./components/Layout/Layout";
import Orders from "./containers/Orders/Orders";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<MainPage/>}/>

          <Route path="/checkout" element={<Checkout/>}>
            <Route path="form-data" element={<ContactData/>}/>
          </Route>

          <Route path="/orders" element={<Orders/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;

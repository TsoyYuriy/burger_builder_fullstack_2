import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./containers/MainPage/MainPage";
import { Checkout } from "./containers/Checkout/Checkout";
import { ContactData } from "./containers/Checkout/ContactData/ContactData";

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<MainPage/>}/>

        <Route path="/checkout" element={<Checkout/>}>

          <Route path="form-data" element={<ContactData/>}/>
          
        </Route>

      </Routes>
    </>
  );
}

export default App;

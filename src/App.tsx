import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import DefaultLayout from "./layouts/DefaultLayout";
import StoreDetailPage from "./pages/StoreDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/storeDetail' element={<StoreDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

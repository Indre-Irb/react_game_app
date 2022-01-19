import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import StartGamePage from "./pages/StartGamePage";
import MainPage from "./pages/MainPage";
import TraderPage from "./pages/TraderPage";
import ArenaPage from "./pages/ArenaPage";

function App() {


  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartGamePage/>}/>
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/trader" element={<TraderPage/>}/>
          <Route path="/arena" element={<ArenaPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

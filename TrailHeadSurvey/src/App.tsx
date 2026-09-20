import { Routes, Route } from "react-router-dom";
import Header from "./Header.tsx";
import SurveyPage from "./SurveyPage.tsx";
import LogsPage from "./LogsPage.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SurveyPage />} />
        <Route path="/logs" element={<LogsPage />} />
      </Routes>
    </>
  );
}

export default App;
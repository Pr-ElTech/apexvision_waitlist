import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ApexBuildWithUsPage from "./pages/ApexBuildWithUsPage";
import ApexEarlyAccessPage from "./pages/ApexEarlyAccessPage";
import ApexWaitlistPage from "./pages/ApexWaitlistPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApexWaitlistPage />} />

        <Route path="/build-with-apex" element={<ApexBuildWithUsPage />} />

        <Route path="/early-access" element={<ApexEarlyAccessPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

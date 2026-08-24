import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ApexBuildWithUsPage from "./pages/ApexBuildWithUsPage";
import ApexEarlyAccessPage from "./pages/ApexEarlyAccessPage";
import ApexPartnerApplicationPage from "./pages/ApexPartnerApplicationPage";
import ApexWaitlistPage from "./pages/ApexWaitlistPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* APEX Home */}
        <Route path="/" element={<ApexWaitlistPage />} />

        {/* Build With APEX */}
        <Route path="/build-with-apex" element={<ApexBuildWithUsPage />} />

        {/* Partner / Merchant Application */}
        <Route
          path="/build-with-apex/apply"
          element={<ApexPartnerApplicationPage />}
        />

        {/* Early Access */}
        <Route path="/early-access" element={<ApexEarlyAccessPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

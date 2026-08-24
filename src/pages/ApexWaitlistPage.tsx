import { useState } from "react";

import ApexEarlyAccess from "../components/apex/ApexEarlyAccess";
import ApexFooter from "../components/apex/ApexFooter";
import ApexHeader from "../components/apex/ApexHeader";
import ApexHero from "../components/apex/ApexHero";
import ApexVision from "../components/apex/ApexVision";
import ApexWaitlistModal from "../components/apex/ApexWaitlistModal";

const ApexWaitlistPage = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  const closeWaitlist = () => {
    setIsWaitlistOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <ApexHeader onOpenWaitlist={openWaitlist} />

      <main>
        <ApexHero onOpenWaitlist={openWaitlist} />

        <ApexVision />

        <ApexEarlyAccess onOpenWaitlist={openWaitlist} />
      </main>

      <ApexFooter />

      <ApexWaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
};

export default ApexWaitlistPage;

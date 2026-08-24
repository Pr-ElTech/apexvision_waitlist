import { useState } from "react";

import ApexEarlyAccess from "../components/apex/ApexEarlyAccess";
import ApexFooter from "../components/apex/ApexFooter";
import ApexHeader from "../components/apex/ApexHeader";
import ApexWaitlistModal from "../components/apex/ApexWaitlistModal";

const ApexEarlyAccessPage = () => {
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
        <ApexEarlyAccess onOpenWaitlist={openWaitlist} />
      </main>

      <ApexFooter />

      <ApexWaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
};

export default ApexEarlyAccessPage;

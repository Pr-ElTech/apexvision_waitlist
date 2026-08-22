import ApexEarlyAccess from "../components/apex/ApexEarlyAccess";
import ApexFooter from "../components/apex/ApexFooter";
import ApexHeader from "../components/apex/ApexHeader";
import ApexHero from "../components/apex/ApexHero";
import ApexVision from "../components/apex/ApexVision";

const ApexWaitlistPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <ApexHeader />

      <main>
        <ApexHero />

        <ApexVision />

        <ApexEarlyAccess />
      </main>

      <ApexFooter />
    </div>
  );
};

export default ApexWaitlistPage;

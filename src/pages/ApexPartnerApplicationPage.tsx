import ApexFooter from "../components/apex/ApexFooter";
import ApexHeader from "../components/apex/ApexHeader";
import ApexPartnerApplication from "../components/apex/ApexPartnerApplication";

const ApexPartnerApplicationPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <ApexHeader />

      <main>
        <ApexPartnerApplication />
      </main>

      <ApexFooter />
    </div>
  );
};

export default ApexPartnerApplicationPage;

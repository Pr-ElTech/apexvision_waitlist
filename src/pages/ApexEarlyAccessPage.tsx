import ApexEarlyAccess from "../components/apex/ApexEarlyAccess";
import ApexFooter from "../components/apex/ApexFooter";
import ApexHeader from "../components/apex/ApexHeader";

const ApexEarlyAccessPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <ApexHeader />

      <main>
        <ApexEarlyAccess />
      </main>

      <ApexFooter />
    </div>
  );
};

export default ApexEarlyAccessPage;

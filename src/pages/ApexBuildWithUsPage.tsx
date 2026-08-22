import ApexFooter from "../components/apex/ApexFooter";
import ApexHeader from "../components/apex/ApexHeader";
import ApexPartnerForm from "../components/apex/ApexPartnerForm";
import ApexBuildWithUs from "../components/apex/ApexBuildWithUs";

const ApexBuildWithUsPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <ApexHeader />

      <main>
        <ApexBuildWithUs />

        <section className="px-6 pb-28 sm:pb-32 lg:px-10 lg:pb-40">
          <div className="mx-auto max-w-3xl">
            <ApexPartnerForm />
          </div>
        </section>
      </main>

      <ApexFooter />
    </div>
  );
};

export default ApexBuildWithUsPage;

import FirstSection from "./FirstSection/page";
import Logo from "./Navbar/_components/logo";
import Navbar from "./Navbar/navbar";
import SecondSection from "./SecondSection/page";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default LandingPage;

import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LogInModal from "@/components/Modals/LoginModal";
import NavBar from "@/components/NavBar";
import Steps from "@/components/Steps";
import Summary from "@/components/Summary";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    <NavBar/>
    <Header/>
    <Features/>
    <Summary/>
    <Steps/>
    <Testimonials/>
    <Footer/>
    </>
  );
}

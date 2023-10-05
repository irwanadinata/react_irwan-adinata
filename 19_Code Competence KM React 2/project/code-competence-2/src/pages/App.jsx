import "@/styles/App.css";
import Navbar from "@/components/navbar";
import Content from "@/components/content";
import ContactUs from "@/components/contactUs";
import AboutUs from "@/components/aboutUs";
import Footer from "@/components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Content/>
      <ContactUs/>
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default App;

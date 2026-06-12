import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar onCollectionClick={() => navigate("/coleccion")} />
      <Hero />
      <Footer />
    </>
  );
}

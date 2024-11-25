
import Footer from "@/Components/ui/Footer";
// import Image from "next/image"; // DEBEMOS USARLO Y TAMBIEN LA CARPETA PRINCIPAL DEBE SER ESTA
import Navbar from "@/Components/ui/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
        <main>
          <h1>Hotel Calacoto</h1>
        </main>
        <Footer/>
    </div>
  );
}

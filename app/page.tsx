import { CORES } from "./constantes";
import { Barra } from "./components/Barra";
import { Hero } from "./components/Hero";
import { SecaoProblema } from "./components/SecaoProblema";
import { SecaoPromessa } from "./components/SecaoPromessa";
import { SecaoOferta } from "./components/SecaoOferta";
import { Footer } from "./components/Footer";
import { SecaoConteudo } from "./components/SecaoConteudo";
import { SecaoPublico } from "./components/SecaoPublico";
import { SecaoAutor } from "./components/SecaoAutor";
import { SecaoFuncionamento } from "./components/SecaoFuncionamento";
import { SecaoGarantia } from "./components/SecaoGarantia";
import { SecaoFAQ } from "./components/SecaoFAQ";


export default function Home() {
  return (
    <main style={{ backgroundColor: CORES.bgDeep, color: CORES.textMain }} className="overflow-x-hidden min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <Barra />
      <Hero />
      <SecaoProblema />
      <SecaoPromessa />
      <SecaoConteudo />
      <SecaoFuncionamento />
      <SecaoPublico />
      <SecaoAutor />
      <SecaoGarantia />
      <SecaoOferta/>
      <SecaoFAQ />
      <Footer />
    </main>
  );
}
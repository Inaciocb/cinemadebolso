import { XCircle } from "lucide-react";
import { CORES } from "../constantes";

export function SecaoProblema() {
  const problemas = ["Vídeos com cara de amador", "Imagem sem intenção", "Dificuldade para saber por onde começar", "Sensação de que 'eu não consigo'"];
  return (
    <section className="py-32 px-6 relative overflow-hidden" style={{ backgroundColor: CORES.bgCard }}>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black/20" style={{ backgroundImage: `linear-gradient(to bottom, ${CORES.bgDeep}, transparent)` }} />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8 text-center md:text-left w-full">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">O problema <span style={{ color: CORES.accent }}>real</span></h2>
            <div className="grid grid-cols-1 gap-4 pt-4">
              {problemas.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 justify-start">
                  <XCircle size={26} style={{ color: CORES.error }} className="shrink-0" />
                  <span className="text-base md:text-lg font-medium text-red-300 text-left">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative bg-zinc-900/80 p-10 md:p-14 rounded-[2rem] border border-white/10 backdrop-blur-xl italic text-center">
            <p className="text-2xl md:text-3xl font-light leading-snug"><span className="font-bold underline decoration-green-500 underline-offset-8" style={{ color: CORES.accent }}>A boa notícia é que isso pode ser corrigido!</span> Para um vídeo ficar bonito, é mais importante saber
               <span className="font-bold underline decoration-red-500 underline-offset-8" style={{ color: CORES.accent }}> O QUE DEIXA ELE FEIO!</span>"</p>
          </div>
        </div>
      </div>
    </section>
  );
}
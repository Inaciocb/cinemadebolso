import { CheckCircle2, XCircle } from "lucide-react";
import { CORES } from "../constantes";

export function SecaoPublico() {
  const paraVoce = [
    "Grava ou quer gravar com o celular",
    "É iniciante ou ainda se sente perdido tecnicamente",
    "Quer aprender de forma simples e objetiva",
    "Quer fazer vídeos mais bonitos sem depender de equipamento caro",
    "Precisa de um passo a passo claro para sair do improviso"
  ];

  const naoParaVoce = [
    "Procura atalhos milagrosos",
    "Não quer praticar",
    "Espera que só um filtro ou um aplicativo resolva tudo sozinho"
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden isolate" style={{ backgroundColor: CORES.bgDeep }}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
            <span style={{ color: CORES.accent }}> Para quem </span> é o curso?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="p-8 md:p-12 rounded-[3rem] border border-green-500/10 bg-green-500/[0.02] space-y-8 h-full">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight text-white">
                Este curso é para <span style={{ color: CORES.accent }}>você que:</span> 
              </h3>
              <div className="h-1 w-20 bg-green-500/50" />
            </div>
            
            <ul className="space-y-6">
              {paraVoce.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <CheckCircle2 size={24} className="text-green-500 shrink-0 mt-1 transition-transform group-hover:scale-110" />
                  <span className="text-lg md:text-xl font-medium text-zinc-300 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-12 rounded-[3rem] border border-red-500/10 bg-red-500/[0.01] space-y-8 h-full opacity-80 hover:opacity-100 transition-opacity">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight text-white">
                <span className="color-red-500/50">Não</span> é para quem:
              </h3>
              <div className="h-1 w-20 bg-red-500/50" />
            </div>
            
            <ul className="space-y-6">
              {naoParaVoce.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <XCircle size={24} className="text-red-500 shrink-0 mt-1 transition-transform group-hover:scale-110" />
                  <span className="text-lg md:text-xl font-medium text-zinc-400 group-hover:text-red-200 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
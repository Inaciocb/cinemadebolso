import { Check, Camera, Lightbulb, Film, Target } from "lucide-react";
import { CORES } from "../constantes";

export function SecaoPromessa() {
  const aprendizados = [
    "Identificar o que melhora ou piora uma imagem",
    "Gravar com mais critério e menos tentativa no escuro",
    "Corrigir erros comuns",
    "Construir vídeos mais bonitos com o celular que já tem"
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
          
          <div className="flex-1 space-y-8 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
              A promessa, <br/>
              <span style={{ color: CORES.accent }}>do jeito certo!</span>
            </h2>
            
            <div className="grid grid-cols-1 gap-4 pt-4">
              {aprendizados.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 group transition-all hover:bg-white/[0.05]">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Check size={18} className="text-green-500" />
                  </div>
                  <span className="text-base md:text-lg font-medium text-zinc-300 group-hover:text-green-300 transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-8 text-center md:text-right">
            <div className="relative bg-zinc-900/80 p-10 md:p-14 rounded-[2rem] border border-white/10 backdrop-blur-xl italic">
              <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: CORES.textDim }}>
                O objetivo deste curso é simples: te ensinar a enxergar e aplicar, na prática, os elementos que fazem um vídeo gravado no celular ficar mais bonito, mais limpo e mais bem resolvido.
              </p>
              <p className="text-2xl md:text-3xl font-light leading-snug">
                <span className="font-bold underline decoration-green-500 underline-offset-8" style={{ color: CORES.accent }}>
                  Sem promessas irreais. Sem fórmulas mágicas. Sem enrolação.
                </span>
              </p>
              <p className="mt-6 text-sm uppercase tracking-widest font-black opacity-40">
                É técnica aplicada para quem quer resultado real.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-2 opacity-50">
              <div className="flex flex-col items-center gap-2">
                <Camera size={20} />
                <span className="text-[8px] uppercase font-bold">Olhar</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Lightbulb size={20} />
                <span className="text-[8px] uppercase font-bold">Luz</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Film size={20} />
                <span className="text-[8px] uppercase font-bold">Estética</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Target size={20} />
                <span className="text-[8px] uppercase font-bold">Foco</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
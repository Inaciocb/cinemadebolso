import { Settings, Maximize, Sun, Mic2, Move, Scissors, PlayCircle } from "lucide-react";
import { CORES } from "../constantes";

export function SecaoConteudo() {
  const modulos = [
    {
      num: "Módulo 1",
      titulo: "Configurando a câmera do celular",
      desc: "Saiba quais são as melhores configurações de câmera para trazer uma boa qualidade sem dor de cabeça. (e NÃO é gravar em 8k 60fps!)",
      icon: <Settings size={24} />
    },
    {
      num: "Módulo 2",
      titulo: "Captação e enquadramento",
      desc: "Entenda os princípios que fazem uma imagem funcionar: beleza, equilíbrio e intenção. Aprenda a organizar o quadro e evitar erros que deixam o vídeo confuso.",
      icon: <Maximize size={24} />
    },
    {
      num: "Módulo 3",
      titulo: "Luz, imagem e estética",
      desc: "Saiba usar a luz a seu favor, mesmo com recursos simples. Conteúdo baseado em padrões de iluminação usados na pintura há séculos!",
      icon: <Sun size={24} />
    },
    {
      num: "Módulo 4",
      titulo: "Áudio e acabamento",
      desc: "Porque não adianta imagem bonita com áudio ruim. Aprenda o essencial para elevar a percepção de qualidade e clareza sonora.",
      icon: <Mic2 size={24} />
    },
    {
      num: "Módulo 5",
      titulo: "Movimento e dinâmica",
      desc: "Descubra como movimentar a câmera com consciência, evitando vídeos tremidos, vazios ou perdidos sem direção.",
      icon: <Move size={24} />
    },
    {
      num: "Módulo Bônus",
      titulo: "Edição",
      desc: "Um complemento direto ao ponto para te ajudar a finalizar melhor o material gravado e dar o toque final de cinema.",
      icon: <Scissors size={24} />
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden" style={{ backgroundColor: CORES.bgCard }}>
    
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(to bottom, ${CORES.bgDeep}, transparent)` }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
            O que você vai <br className="md:hidden" /> <span style={{ color: CORES.accent }}>encontrar no curso?</span>
          </h2>
          <p className="text-lg md:text-xl font-medium opacity-50 uppercase tracking-[0.2em]" style={{ color: CORES.textDim }}>
            Conteúdo direto, prático e organizado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modulos.map((mod, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.01] transition-all hover:bg-white/[0.03] hover:border-white/10 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                    {mod.num}
                  </span>
                  <div className="text-white/20 group-hover:text-yellow-500/50 transition-colors">
                    {mod.icon}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-black leading-tight uppercase italic tracking-tight">
                    {mod.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-60 font-medium" style={{ color: CORES.textDim }}>
                    {mod.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="h-px w-24 bg-white/10" />
          <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10">
            <PlayCircle size={20} style={{ color: CORES.accent }} />
            <span className="text-sm md:text-base font-black uppercase tracking-widest text-white">
              Total: 27 aulas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
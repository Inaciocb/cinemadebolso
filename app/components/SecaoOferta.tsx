"use client";

import Image from "next/image";
import { Check, Users, Video, Smartphone, Sun, Maximize, Scissors } from "lucide-react";
import { CORES } from "../constantes";

export function SecaoOferta() {
  const hotmartLink = "https://pay.hotmart.com/A102928754K?bid=1773919814637";

  const itensDestaque = [
    { icon: <Sun size={18} />, text: "Luz e Estética" },
    { icon: <Maximize size={18} />, text: "Enquadramento" },
    { icon: <Scissors size={18} />, text: "Edição Prática" },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden isolate" style={{ backgroundColor: CORES.bgDeep }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-[0.9]">
                Comece a gravar com <br />
                <span style={{ color: CORES.accent }}>mais intenção e técnica</span>
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                O Cinema de Bolso é para quem quer parar de gravar no automático e dominar o que já tem em mãos.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {itensDestaque.map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <div style={{ color: CORES.accent }}>{item.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex gap-4 items-start text-left transition-colors hover:bg-white/[0.04]">
                  <Users size={24} style={{ color: CORES.accent }} className="shrink-0" />
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-tight">Comunidade no WhatsApp</h3>
                    <p className="text-sm text-zinc-500 mt-1">Trocas diárias e suporte entre alunos.</p>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-green-500/[0.03] border border-green-500/20 flex gap-4 items-start text-left transition-colors hover:bg-green-500/[0.06]">
                  <Video size={24} className="text-green-500 shrink-0" />
                  <div>
                    <h3 className="font-bold text-green-500 uppercase tracking-tight italic">Mentoria Especial</h3>
                    <p className="text-sm text-zinc-300 mt-1">Aulas de tira-dúvidas ao vivo (1ª Turma).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-yellow-500/30 to-transparent rounded-[3rem] -z-10" />
            
            <div className="p-8 md:p-12 rounded-[3rem] shadow-3xl text-center space-y-8 relative overflow-hidden border border-white/10 transition-all duration-500"
                 style={{ 
                   background: `linear-gradient(to bottom, #080c16 0%, #0c1222 100%)` 
                 }}>
              
              <div className="space-y-4">
                {/* Logo aumentada */}
                <div className="relative w-48 h-24 mx-auto mb-4">
                  <Image 
                    src="/logo.png" 
                    alt="Logo Cinema de Bolso" 
                    fill 
                    className="object-contain"
                    priority
                  />
                </div>

                <span className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-black block">Oferta de Lançamento</span>
                
                <div className="flex flex-col items-center pt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-zinc-400 font-medium">De</span>
                    <div className="relative inline-block">
                      <span className="text-xl md:text-2xl text-zinc-400 font-light italic">R$ 147</span>
                      <div className="absolute top-1/2 left-[-5%] w-[110%] h-[1px] bg-red-600/60" />
                    </div>
                    <span className="text-sm text-zinc-400 font-medium">por:</span>
                  </div>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-light text-white">R$</span>
                    <span className="text-7xl md:text-8xl font-normal tracking-tighter leading-none" style={{ color: CORES.cta }}>
                      97
                    </span>
                    <span className="text-xl font-medium text-white/40 ml-2">à vista</span>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-white/70 text-lg">
                    <span className="font-extralight">ou 12x de</span>
                    <span className="font-semibold text-2xl text-white">10,03</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div className="relative group">
                  <div className="absolute inset-0 rounded-xl blur-xl animate-pulse opacity-60 -z-10" style={{ backgroundColor: CORES.cta }} />
                  
                  <a 
                    href={hotmartLink} 
                    className="relative block py-5 md:py-6 rounded-xl font-black text-xl md:text-2xl border-2 border-white hover:border-[#16a34a] transition-all duration-300 hover:brightness-110 active:scale-95 shadow-2xl text-center uppercase tracking-tighter" 
                    style={{ 
                      backgroundColor: CORES.cta, 
                      color: "#fff",
                    }} 
                  >
                    QUERO ACESSAR AGORA
                  </a>
                </div>
                
                <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/5 w-fit mx-auto">
                   <Smartphone size={14} className="opacity-40" />
                   <span className="text-[9px] font-black uppercase tracking-widest opacity-40">Acesso de 1 ano via Hotmart</span>
                </div>
              </div>

              <ul className="text-left space-y-4 pt-8 border-t border-white/5">
                {[
                  "27 aulas práticas e diretas",
                  "5 Módulos + Bônus de Edição",
                  "Grupo de Alunos exclusivo"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-bold uppercase text-zinc-500">
                    <Check size={14} className="text-green-500 shrink-0" /> {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
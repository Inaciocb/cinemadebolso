"use client";

import { useState } from "react";
import Image from "next/image";
import { Laptop, Clock, CheckCircle, X } from "lucide-react";
import { CORES } from "../constantes";

export function SecaoFuncionamento() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const basePath = '/cinemadebolso';

  const prints = [
    { src: `${basePath}/curso1.png`, alt: "Interface do curso 1", desc: "Área inicial" },
    { src: `${basePath}/curso2.png`, alt: "Interface do curso 2", desc: "Visualização dos módulos" },
    { src: `${basePath}/curso3.png`, alt: "Interface do curso 3", desc: "Visualização da aula" }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden isolate" style={{ backgroundColor: CORES.bgDeep }}>
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
              Como o curso <br/> <span style={{ color: CORES.accent }}>funciona</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold text-white leading-tight">
              Um curso prático, objetivo e pensado para aplicação real.
            </p>
            <div className="space-y-4 text-lg text-zinc-400 leading-relaxed">
              <p>As aulas estão organizadas em módulos curtos e diretos, para que você consiga assistir, entender e colocar em prática imediatamente.</p>
              <p>Você terá acesso vitalício pela <span className="text-white font-bold">Hotmart</span>, em uma área de membros simples, intuitiva e organizada para o seu progresso.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                <Clock size={20} style={{ color: CORES.accent }} />
                <span className="text-xs font-black uppercase tracking-widest text-zinc-300">Aulas objetivas de até 15min</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                <Laptop size={20} style={{ color: CORES.accent }} />
                <span className="text-xs font-black uppercase tracking-widest text-zinc-300">Acesso Mobile & Desktop</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative p-8 rounded-[3rem] bg-white/[0.02] border border-white/5 italic">
            <p className="text-2xl md:text-3xl font-light leading-snug">
              A proposta não é te afogar em teoria. <br />
              <span className="font-bold text-white">É te mostrar o que observar, o que evitar e o que aplicar para melhorar seus vídeos de forma concreta.</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {prints.map((print, idx) => (
            <div key={idx} className="flex flex-col gap-6 group cursor-zoom-in" onClick={() => setSelectedImage(print.src)}>
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-white/30 group-hover:shadow-yellow-500/5">
               
                <Image 
                  src={print.src} 
                  alt={print.alt} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <p className="text-sm md:text-lg font-bold text-zinc-400 px-2 tracking-wide group-hover:text-white transition-colors">
                {print.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-40">
          <div className="flex items-center gap-2">
            <CheckCircle size={16} style={{ color: CORES.accent }} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Área de Membros Hotmart</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} style={{ color: CORES.accent }} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">6 Módulos Estruturados</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} style={{ color: CORES.accent }} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Suporte para Dúvidas</span>
          </div>
        </div>

      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-sm cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          
          <div 
            className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={selectedImage} 
              alt="Preview ampliado" 
              fill 
              className="object-contain bg-zinc-900"
              quality={100}
              unoptimized
            />
          </div>
        </div>
      )}
    </section>
  );
}
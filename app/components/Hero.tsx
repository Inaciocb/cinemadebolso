import Image from "next/image";
import { CORES } from "../constantes";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center pt-12 md:pt-24 pb-24 px-4 text-center min-h-[90vh] justify-center overflow-hidden isolate">
      
      <div className="absolute top-0 left-0 w-full h-[150px] pointer-events-none -z-10 overflow-hidden">
        <div 
          className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-full h-[200px] blur-[80px] opacity-30"
          style={{ 
            background: `radial-gradient(ellipse at center, ${CORES.cta} 0%, transparent 5%)` 
          }} 
        />
        <div 
          className="absolute top-0 left-0 w-full h-[2px] blur-[15px]"
          style={{ backgroundColor: CORES.accent }}
        />
      </div>

      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
        <div className="absolute left-[5%] top-[20%] w-[320px] md:w-[500px] h-[450px] md:h-[700px] opacity-20">
          <div 
            className="relative w-full h-full"
            style={{ 
              maskImage: 'radial-gradient(ellipse, black 20%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse, black 20%, transparent 75%)'
            }}
          >
            <Image src="/foto1.jpeg" alt="Background 1" fill className="object-cover" priority />
            <div 
              className="absolute inset-0" 
              style={{ 
                background: `radial-gradient(ellipse at center, transparent 0%, ${CORES.bgDeep} 98%)`
              }} 
            />
          </div>
        </div>
        
        <div className="absolute right-[8%] top-[15%] w-[220px] md:w-[350px] h-[320px] md:h-[550px] opacity-15">
          <div 
            className="relative w-full h-full"
            style={{ 
              maskImage: 'radial-gradient(ellipse, black 20%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse, black 20%, transparent 75%)'
            }}
          >
            <Image src="/foto2.jpeg" alt="Background 2" fill className="object-cover" priority />
            <div 
              className="absolute inset-0" 
              style={{ 
                background: `radial-gradient(ellipse at center, transparent 0%, ${CORES.bgDeep} 98%)`
              }} 
            />
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] opacity-5 blur-[140px] -z-20 pointer-events-none" style={{ backgroundColor: CORES.accent }} />

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Logo adicionada aqui */}
        <div className="relative w-32 h-16 md:w-48 md:h-24 mb-8">
          <Image 
            src="/logo.png" 
            alt="Logo Cinema de Bolso" 
            fill 
            className="object-contain" 
            priority 
          />
        </div>

        <h1 className="text-5xl md:text-9xl font-black tracking-tighter mb-4 uppercase italic leading-[0.85]">
          CINEMA <span style={{ color: CORES.accent }}>DE BOLSO </span> <br className="md:hidden"/>
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-12 font-medium tracking-tight px-4" style={{ color: CORES.textDim }}>
          APRENDA A GRAVAR VÍDEOS BONITOS COM O CELULAR, NA PRÁTICA!
        </p>

        <div className="w-full max-w-3xl aspect-video rounded-3xl border shadow-[0_0_100px_rgba(0,0,0,0.9)] overflow-hidden mb-16 z-10 relative bg-zinc-900" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/tRxWPij0-KA?controls=1&modestbranding=1&rel=0" title="VSL" allowFullScreen></iframe>
        </div>

        <div className="max-w-2xl mb-10 space-y-4 text-base md:text-xl leading-relaxed px-4">
          <p className="font-bold text-white">
            Você não precisa de um celular novo para melhorar seus vídeos.
          </p>
          <p style={{ color: CORES.textDim }}>
            Precisa entender luz, enquadramento, movimento, imagem, áudio e edição de um jeito simples e aplicável.
          </p>
          <p className="text-sm md:text-base italic opacity-60">
            Um mini curso direto ao ponto, para quem quer parar de gravar no improviso e começar a construir vídeos com mais estética, intenção e qualidade.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 z-30">
          <div className="relative group">
            <div className="absolute inset-0 rounded-xl blur-xl animate-aura-pulse opacity-60 -z-10" style={{ backgroundColor: CORES.cta }} />
            
            <a 
              href="https://pay.hotmart.com/A102928754K" 
              className="relative block px-12 md:px-20 py-5 md:py-7 rounded-xl font-black text-xl md:text-3xl border-2 border-white hover:border-[#16a34a] transition-all duration-300 hover:brightness-110 active:scale-95 shadow-2xl text-center uppercase tracking-tighter" 
              style={{ 
                backgroundColor: CORES.cta, 
                color: "#fff",
              }} 
            >
              QUERO APRENDER AGORA
            </a>
          </div>
          
          <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase opacity-50" style={{ color: CORES.accent }}>
            + de 26 aulas | 5 módulos + bônus de edição | acesso pela Hotmart
          </p>
        </div>
      </div>
    </section>
  );
}
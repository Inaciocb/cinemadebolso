import { CORES } from "../constantes";

export function Barra() {
  return (
    <div 
      className="relative text-center py-2.5 px-4 sticky top-0 z-50 border-b border-white/5 shadow-md"
      style={{ backgroundColor: CORES.accent }}
    >
      <span 
        className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase"
        style={{ color: "#2f2f2f" }} // Letra escura (Slate-600)
      >
        (PROMOÇÃO DE LANÇAMENTO POR TEMPO LIMITADO)
      </span>
    </div>
  );
}
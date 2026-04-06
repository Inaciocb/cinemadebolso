export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="py-12 text-center px-6">
        <div className="text-[10px] text-zinc-600 uppercase tracking-[0.5em] font-medium leading-relaxed">
          Cinema de Bolso {new Date().getFullYear()}
        </div>
      </div>

      <div className="py-3 bg-black/40 border-t border-white/[0.02] text-center px-6">
        <p className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-medium opacity-60">
          Aplicação Web desenvolvida por <span className="text-zinc-400">Inácio Buemo</span>
        </p>
      </div>
    </footer>
  );
}
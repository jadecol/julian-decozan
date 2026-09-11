import React from "react";
import planoSVG from "./assets/plano.svg";

/**
 * Cartelera de Distribución de Lotes — Proyecto San Miguel
 * Formato de impresión: 100 x 70 cm horizontal.
 */

const lotesData = [
  { id: 1, area: "467.00" },
  { id: 2, area: "93.74" },
  { id: 3, area: "94.05" },
  { id: 4, area: "94.35" },
  { id: 5, area: "94.66" },
  { id: 6, area: "94.96" },
  { id: 7, area: "95.27" },
  { id: 8, area: "95.57" },
  { id: 9, area: "95.88" },
  { id: 10, area: "91.11" },
  { id: 11, area: "79.08" },
  { id: 12, area: "77.53" },
  { id: 13, area: "77.34" },
];

export default function CarteleraLotes() {
  return (
    <div className="min-h-screen bg-[#e9e9e9] p-2 md:p-8 flex flex-col items-center gap-4 font-sans text-neutral-900 selection:bg-red-100">
      <div className="w-full max-w-[1400px] flex justify-between items-center px-1 print:hidden">
        <div className="text-[11px] tracking-[0.2em] font-bold uppercase text-neutral-500">
          100 × 70 CM • HORIZONTAL • ESC 1:1 • LISTO PARA IMPRESIÓN
        </div>
        <div className="text-[10px] text-neutral-400">
          Alta resolución • Fondo blanco
        </div>
      </div>
      <div
        className="relative w-full max-w-[1400px] bg-white border-[2.5px] border-black flex flex-col overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] print:shadow-none print:border-black"
        style={{
          aspectRatio: "10 / 7",
        }}
      >
        <div className="absolute inset-[6px] border border-black/20 pointer-events-none" />
        <header className="relative z-10 shrink-0 border-b-[2.5px] border-black bg-white px-4 md:px-8 py-[10px] md:py-[14px] flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-5">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-black text-white flex items-center justify-center font-black text-[14px] md:text-[16px]">
              PL
            </div>
            <h1 className="font-black text-[13px] md:text-[21px] tracking-[0.02em] leading-[1.1] uppercase">
              Distribución de Lotes{" "}
              <span className="font-normal text-neutral-500 mx-1 md:mx-2">
                —
              </span>{" "}
              Proyecto Predio San Miguel
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[9px] font-bold tracking-widest uppercase">
            <span className="px-2 py-1 border border-black">13 LOTES + VÍA</span>
            <span className="px-2 py-1 bg-[#D32F2F] text-white">
              SISTEMA CTM-12
            </span>
          </div>
        </header>
        <div className="relative z-10 flex-1 flex flex-col md:flex-row min-h-0">
          {/* COLUMNA IZQUIERDA (PLANO) */}
          <div className="w-full md:w-[72%] relative bg-white border-b-[2.5px] md:border-b-0 md:border-r-[2.5px] border-black overflow-hidden flex flex-col">
            <div className="h-[28px] shrink-0 border-b border-black/15 flex items-center justify-between px-4 md:px-6 text-[9px] font-bold tracking-[0.15em] uppercase text-neutral-600">
              <span>PLANO DE LOCALIZACIÓN • VISTA SUPERIOR</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#666666] rounded-[1px]" /> LOTE
              </span>
            </div>
            <div className="flex-1 relative bg-[#fcfcfc] overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="absolute top-3 right-3 md:top-5 md:right-6 z-20 flex flex-col items-center">
                <div className="w-[48px] h-[48px] rounded-full border border-black bg-white flex items-center justify-center shadow-sm">
                  <div className="relative w-[32px] h-[32px]">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[14px] border-l-transparent border-r-transparent border-b-black" />
                    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-0 h-0 border-l-[3px] border-r-[3px] border-t-[10px] border-l-transparent border-r-transparent border-t-neutral-400" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-black rounded-full" />
                  </div>
                </div>
                <div className="mt-1 flex gap-3 text-[9px] font-black tracking-widest">
                  <span>N</span>
                  <span className="text-neutral-400">S</span>
                </div>
              </div>
              
              <div className="absolute inset-0 p-3 md:p-5 flex items-center justify-center">
                {/* 
                  Contenedor Inteligente para Imagen / SVG Externo
                  Puedes reemplazar 'planoSVG' con un PNG u otro archivo.
                */}
                <div className="w-[96%] h-[96%] flex items-center justify-center">
                  <img 
                    src={planoSVG} 
                    alt="Plano San Miguel" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="h-[22px] shrink-0 bg-black text-white flex items-center justify-between px-3 text-[7px] md:text-[8px] font-bold tracking-[0.15em] uppercase">
              <span>Orientación Referencial • Norte hacia arriba</span>
              <span className="text-white/60">
                Plano vectorial importado de /assets
              </span>
            </div>
          </div>

          {/* COLUMNA DERECHA (TABLA) */}
          <div className="w-full md:w-[28%] bg-white flex flex-col min-h-[380px] md:min-h-0 text-[10px]">
            <div className="h-[28px] shrink-0 bg-neutral-900 text-white flex items-center px-4 text-[9px] font-black tracking-[0.15em] uppercase">
              Propietarios • 13 Unidades
            </div>
            <div className="grid grid-cols-[34px_54px_1fr_38px] h-[28px] shrink-0 border-b-[2px] border-black bg-[#f7f7f7] text-[8px] font-black tracking-widest uppercase">
              <div className="border-r border-black/20 flex items-center justify-center">
                LOTE
              </div>
              <div className="border-r border-black/20 flex items-center justify-center">
                Área (m²)
              </div>
              <div className="border-r border-black/20 flex items-center justify-center">
                Propietario
              </div>
              <div className="flex items-center justify-center">Obs.</div>
            </div>
            <div className="flex-1 flex flex-col">
              {lotesData.map((e, n) => (
                  <div
                    key={e.id}
                    className={`grid grid-cols-[34px_54px_1fr_38px] flex-1 min-h-[36px] md:min-h-0 border-b border-black/15 last:border-b-0 ${n % 2 === 1 ? "bg-[#fcf8f8]" : "bg-white"}`}
                  >
                    <div className="border-r border-black/10 flex items-center justify-center">
                      <span className="text-[11px] font-black text-[#D32F2F]">
                        {e.id.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <div className="border-r border-black/10 flex items-center justify-center text-[9px] font-bold text-neutral-600">
                      {e.area}
                    </div>
                    <div className="border-r border-black/10 relative px-2">
                      <div className="absolute left-2 right-2 top-[45%] border-b border-dotted border-neutral-400" />
                      <div className="absolute left-2 right-2 bottom-[6px] border-b border-dotted border-neutral-400" />
                      <span className="absolute left-2 top-[2px] text-[4.5px] font-bold tracking-widest uppercase text-neutral-400">
                        Nombre / Firma
                      </span>
                      <span className="absolute left-2 top-[50%] text-[4.5px] font-bold tracking-widest uppercase text-neutral-400">
                        C.C. / Tel.
                      </span>
                    </div>
                    <div className="relative px-1 flex items-end justify-center pb-[6px]">
                      <div className="absolute left-1 right-1 bottom-[6px] border-b border-dotted border-neutral-400" />
                    </div>
                  </div>
              ))}
            </div>
            <div className="border-t-[2px] border-black bg-[#fffafa] p-3 md:p-3 space-y-2">
              <div className="grid grid-cols-1 gap-2">
                <div>
                  <div className="text-[6px] font-black tracking-widest uppercase text-neutral-500 mb-[2px]">
                    Predio Matriz
                  </div>
                  <div className="text-[8px] font-mono font-bold leading-tight">
                    Predio: San Miguel<br/>
                    Matrícula: 172-80350<br/>
                    C.C: 2584301000000010000028000000000
                  </div>
                </div>
              </div>
              <div className="pt-1 flex gap-2">
                <div className="flex-1">
                  <div className="text-[6px] font-black tracking-widest uppercase text-neutral-500 mb-1">
                    Notas
                  </div>
                  <div className="space-y-[6px]">
                    <div className="h-[1px] border-b border-dotted border-neutral-300 w-full" />
                    <div className="h-[1px] border-b border-dotted border-neutral-300 w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="relative z-10 shrink-0 h-[28px] md:h-[32px] border-t-[2.5px] border-black bg-white flex items-center justify-between px-4 md:px-6 text-[7px] md:text-[8px] font-bold uppercase tracking-[0.12em]">
          <div className="flex items-center gap-3 md:gap-6">
            <span className="hidden md:inline">
              100×70 CM • Impresión a 150–300 DPI • Papel fotográfico / Vinilo
            </span>
            <span className="md:hidden">100×70 CM • 300 DPI</span>
            <span className="w-[1px] h-3 bg-black/20 hidden md:block" />
            <span className="text-neutral-500">
              Lotes en escala gráfica • Medidas topográficas CTM-12
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-[2px] border border-black">REV 05</span>
            <span className="text-neutral-400">
              {new Date().toLocaleDateString("es-CO")}
            </span>
          </div>
        </footer>
      </div>
      <div className="w-full max-w-[1220px] px-1 print:hidden">
        <p className="text-[11px] leading-[1.5] text-neutral-500 max-w-[720px]">
          <strong className="text-neutral-700">Diagramación lista:</strong>{" "}
          100×70 cm horizontal. El borde negro es el corte final. Diagrama
          izquierdo usando contenedor inteligente de imagen con plano generado externo.
        </p>
      </div>
      <style>{`
        @media print {
          body { background: white !important; }
          @page { size: 100cm 70cm landscape; margin: 0; }
        }
      `}</style>
    </div>
  );
}

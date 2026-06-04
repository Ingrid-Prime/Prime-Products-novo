import { useState } from 'react';
import { ArrowLeft, Activity, ArrowLeftRight, Gauge, Zap, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';
import { EditableElement } from '../../components/EditableElement';

// ─── Estilos comuns ────────────────────────────────────────────────────────────
const card  = 'bg-[#0d1929] border border-white/10 rounded-2xl p-6 shadow-2xl';
const input = 'w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition';
const label = 'block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1.5';
const unit  = 'bg-black/40 border border-white/10 text-white/70 text-xs px-2 py-3 rounded-lg flex items-center justify-center font-bold whitespace-nowrap select-none';

// ─── Dimensionamento Cv/Kv ────────────────────────────────────────────────────
function CvKvCalc() {
  const [tab, setTab] = useState<'liquid' | 'gas'>('liquid');

  // Líquidos
  const [lQ, setLQ]   = useState('');
  const [lP1, setLP1] = useState('');
  const [lP2, setLP2] = useState('');
  const [lSG, setLSG] = useState('1.0');

  // Gases
  const [gQ, setGQ]   = useState('');
  const [gP1, setGP1] = useState('');
  const [gP2, setGP2] = useState('');
  const [gT,  setGT]  = useState('20');
  const [gMW, setGMW] = useState('29');

  const calcLiquid = () => {
    const Q = parseFloat(lQ), P1 = parseFloat(lP1), P2 = parseFloat(lP2), SG = parseFloat(lSG);
    if ([Q, P1, P2, SG].some(isNaN) || P1 <= P2 || SG <= 0) return null;
    const dP = P1 - P2;
    const Cv = (Q / 3.6) * Math.sqrt(SG / dP);
    const Kv = Cv / 1.156;
    return { Cv: Cv.toFixed(3), Kv: Kv.toFixed(3), dP: dP.toFixed(2) };
  };

  const calcGas = () => {
    const Q = parseFloat(gQ), P1 = parseFloat(gP1), P2 = parseFloat(gP2);
    const T = parseFloat(gT) + 273.15, MW = parseFloat(gMW);
    if ([Q, P1, P2, T, MW].some(isNaN) || P1 <= P2) return null;
    const dP = P1 - P2;
    const Cv = (Q / 417) * Math.sqrt((T * MW) / (P1 * dP));
    const Kv = Cv / 1.156;
    return { Cv: Cv.toFixed(3), Kv: Kv.toFixed(3), dP: dP.toFixed(2) };
  };

  const result = tab === 'liquid' ? calcLiquid() : calcGas();

  return (
    <div className={card}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 bg-primary/20 rounded-lg flex items-center justify-center">
          <Activity size={18} className="text-primary" />
        </div>
        <div>
          <h3 className="text-white font-bold text-base">Dimensionamento Cv/Kv</h3>
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Norma ISA-75.01</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-black/40 rounded-lg p-1 mb-5">
        {(['liquid', 'gas'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all ${tab === t ? 'bg-primary text-white shadow' : 'text-white/40 hover:text-white/60'}`}
          >
            {t === 'liquid' ? '⚗ Líquidos' : '💨 Gases / Vapor'}
          </button>
        ))}
      </div>

      {tab === 'liquid' ? (
        <div className="space-y-3">
          <div>
            <label className={label}>Vazão desejada (Q) — m³/h</label>
            <input className={input} type="number" placeholder="0.00" value={lQ} onChange={(e) => setLQ(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={label}>Pressão entrada (P1) — bar</label>
              <input className={input} type="number" placeholder="0.00" value={lP1} onChange={(e) => setLP1(e.target.value)} />
            </div>
            <div>
              <label className={label}>Pressão saída (P2) — bar</label>
              <input className={input} type="number" placeholder="0.00" value={lP2} onChange={(e) => setLP2(e.target.value)} />
            </div>
          </div>
          <div>
            <label className={label}>Gravidade específica (SG) — Água = 1,0</label>
            <input className={input} type="number" placeholder="1.0" value={lSG} onChange={(e) => setLSG(e.target.value)} />
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div>
            <label className={label}>Vazão de gás (Q) — Nm³/h</label>
            <input className={input} type="number" placeholder="0.00" value={gQ} onChange={(e) => setGQ(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={label}>P1 entrada — bar abs</label>
              <input className={input} type="number" placeholder="0.00" value={gP1} onChange={(e) => setGP1(e.target.value)} />
            </div>
            <div>
              <label className={label}>P2 saída — bar abs</label>
              <input className={input} type="number" placeholder="0.00" value={gP2} onChange={(e) => setGP2(e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={label}>Temperatura (°C)</label>
              <input className={input} type="number" placeholder="20" value={gT} onChange={(e) => setGT(e.target.value)} />
            </div>
            <div>
              <label className={label}>Peso molecular (g/mol)</label>
              <input className={input} type="number" placeholder="29" value={gMW} onChange={(e) => setGMW(e.target.value)} />
            </div>
          </div>
        </div>
      )}

      {result ? (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { lbl: 'Cv', val: result.Cv, hi: true },
            { lbl: 'Kv', val: result.Kv, hi: true },
            { lbl: 'ΔP (bar)', val: result.dP, hi: false },
          ].map(({ lbl, val, hi }) => (
            <div key={lbl} className={`rounded-lg p-3 text-center ${hi ? 'bg-primary/20 border border-primary/40' : 'bg-white/5 border border-white/10'}`}>
              <div className={`text-xl font-black ${hi ? 'text-primary' : 'text-white/60'}`}>{val}</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-white/30 mt-0.5">{lbl}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-lg bg-white/5 border border-white/10 p-3 text-center text-white/20 text-xs">
          Preencha os campos para calcular
        </div>
      )}
    </div>
  );
}

// ─── Conversor Pro Multi-grandezas ────────────────────────────────────────────
type ConvCategory = 'pressao' | 'temp' | 'vazao' | 'comp' | 'energia' | 'potencia' | 'area' | 'veloc';

const CONV_CATS: { id: ConvCategory; label: string }[] = [
  { id: 'pressao',  label: 'Pressão' },
  { id: 'temp',     label: 'Temperatura' },
  { id: 'vazao',    label: 'Vazão' },
  { id: 'comp',     label: 'Comprimento' },
  { id: 'energia',  label: 'Energia' },
  { id: 'potencia', label: 'Potência' },
  { id: 'area',     label: 'Área' },
  { id: 'veloc',    label: 'Velocidade' },
];

type UnitEntry = { label: string; toBase: (v: number) => number; fromBase: (v: number) => number };
const UNITS: Record<ConvCategory, UnitEntry[]> = {
  pressao:  [
    { label: 'bar',   toBase: (v) => v,        fromBase: (v) => v },
    { label: 'psi',   toBase: (v) => v * 0.0689476, fromBase: (v) => v / 0.0689476 },
    { label: 'kPa',   toBase: (v) => v * 0.01, fromBase: (v) => v / 0.01 },
    { label: 'MPa',   toBase: (v) => v * 10,   fromBase: (v) => v / 10 },
    { label: 'atm',   toBase: (v) => v * 1.01325, fromBase: (v) => v / 1.01325 },
    { label: 'mmHg',  toBase: (v) => v * 0.00133322, fromBase: (v) => v / 0.00133322 },
    { label: 'mbar',  toBase: (v) => v * 0.001, fromBase: (v) => v / 0.001 },
  ],
  temp: [
    { label: '°C',  toBase: (v) => v,           fromBase: (v) => v },
    { label: '°F',  toBase: (v) => (v-32)*5/9,  fromBase: (v) => v*9/5+32 },
    { label: 'K',   toBase: (v) => v - 273.15,  fromBase: (v) => v + 273.15 },
    { label: '°R',  toBase: (v) => (v-491.67)*5/9, fromBase: (v) => v*9/5+491.67 },
  ],
  vazao: [
    { label: 'Nm³/h', toBase: (v) => v,         fromBase: (v) => v },
    { label: 'L/min', toBase: (v) => v * 0.06,  fromBase: (v) => v / 0.06 },
    { label: 'm³/h',  toBase: (v) => v,          fromBase: (v) => v },
    { label: 'SCFM',  toBase: (v) => v * 1.699,  fromBase: (v) => v / 1.699 },
    { label: 'L/s',   toBase: (v) => v * 3.6,   fromBase: (v) => v / 3.6 },
    { label: 'gal/min',toBase:(v) => v * 0.2271, fromBase:(v) => v / 0.2271 },
  ],
  comp: [
    { label: 'm',   toBase: (v) => v,        fromBase: (v) => v },
    { label: 'cm',  toBase: (v) => v / 100,  fromBase: (v) => v * 100 },
    { label: 'mm',  toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
    { label: 'in',  toBase: (v) => v * 0.0254, fromBase: (v) => v / 0.0254 },
    { label: 'ft',  toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
    { label: 'km',  toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  ],
  energia: [
    { label: 'J',    toBase: (v) => v,          fromBase: (v) => v },
    { label: 'kJ',   toBase: (v) => v * 1000,   fromBase: (v) => v / 1000 },
    { label: 'kcal', toBase: (v) => v * 4184,   fromBase: (v) => v / 4184 },
    { label: 'BTU',  toBase: (v) => v * 1055.06,fromBase: (v) => v / 1055.06 },
    { label: 'kWh',  toBase: (v) => v * 3600000,fromBase: (v) => v / 3600000 },
  ],
  potencia: [
    { label: 'W',   toBase: (v) => v,        fromBase: (v) => v },
    { label: 'kW',  toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
    { label: 'CV',  toBase: (v) => v * 735.5, fromBase: (v) => v / 735.5 },
    { label: 'HP',  toBase: (v) => v * 745.7, fromBase: (v) => v / 745.7 },
    { label: 'BTU/h',toBase:(v) => v * 0.2931, fromBase:(v) => v / 0.2931 },
  ],
  area: [
    { label: 'm²',  toBase: (v) => v,           fromBase: (v) => v },
    { label: 'cm²', toBase: (v) => v / 10000,   fromBase: (v) => v * 10000 },
    { label: 'mm²', toBase: (v) => v / 1e6,     fromBase: (v) => v * 1e6 },
    { label: 'ft²', toBase: (v) => v * 0.0929,  fromBase: (v) => v / 0.0929 },
    { label: 'in²', toBase: (v) => v * 0.000645,fromBase: (v) => v / 0.000645 },
    { label: 'ha',  toBase: (v) => v * 10000,   fromBase: (v) => v / 10000 },
  ],
  veloc: [
    { label: 'm/s',  toBase: (v) => v,         fromBase: (v) => v },
    { label: 'km/h', toBase: (v) => v / 3.6,   fromBase: (v) => v * 3.6 },
    { label: 'ft/s', toBase: (v) => v * 0.3048,fromBase: (v) => v / 0.3048 },
    { label: 'mph',  toBase: (v) => v * 0.4470, fromBase: (v) => v / 0.4470 },
    { label: 'knot', toBase: (v) => v * 0.5144, fromBase: (v) => v / 0.5144 },
  ],
};

function ConversorPro() {
  const [cat, setCat]     = useState<ConvCategory>('pressao');
  const [value, setValue] = useState('');
  const [from, setFrom]   = useState(0);
  const [to, setTo]       = useState(1);
  const [result, setResult] = useState<string | null>(null);

  const units = UNITS[cat];

  const handleCat = (c: ConvCategory) => { setCat(c); setFrom(0); setTo(1); setValue(''); setResult(null); };

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) { setResult(null); return; }
    const base = units[from].toBase(num);
    const out  = units[to].fromBase(base);
    const fmt  = Math.abs(out) < 0.001 || Math.abs(out) > 1e6 ? out.toExponential(4) : parseFloat(out.toFixed(6)).toString();
    setResult(fmt);
  };

  return (
    <div className={card}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 bg-primary/20 rounded-lg flex items-center justify-center">
          <ArrowLeftRight size={18} className="text-primary" />
        </div>
        <div>
          <h3 className="text-white font-bold text-base">Conversor Pro</h3>
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Multigrandezas</p>
        </div>
      </div>

      {/* Category tabs */}
      <div className="grid grid-cols-4 gap-1 mb-5">
        {CONV_CATS.map(({ id, label: lbl }) => (
          <button
            key={id}
            onClick={() => handleCat(id)}
            className={`py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all ${cat === id ? 'bg-primary text-white' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/70'}`}
          >
            {lbl}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="mb-4">
        <label className={label}>Valor ({units[from].label})</label>
        <input
          className={input}
          type="number"
          placeholder="0.00"
          value={value}
          onChange={(e) => { setValue(e.target.value); setResult(null); }}
          onKeyDown={(e) => e.key === 'Enter' && convert()}
        />
      </div>

      {/* From / To selects */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className={label}>De</label>
          <select
            value={from}
            onChange={(e) => { setFrom(+e.target.value); setResult(null); }}
            className={`${input} cursor-pointer`}
          >
            {units.map((u, i) => <option key={i} value={i} className="bg-[#0d1929]">{u.label}</option>)}
          </select>
        </div>
        <div>
          <label className={label}>Para</label>
          <select
            value={to}
            onChange={(e) => { setTo(+e.target.value); setResult(null); }}
            className={`${input} cursor-pointer`}
          >
            {units.map((u, i) => <option key={i} value={i} className="bg-[#0d1929]">{u.label}</option>)}
          </select>
        </div>
      </div>

      <button
        onClick={convert}
        className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-lg text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
      >
        <ArrowLeftRight size={15} /> Converter Unidade
      </button>

      {result !== null && (
        <div className="mt-4 rounded-lg bg-primary/10 border border-primary/30 p-4 text-center">
          <div className="text-white/40 text-xs mb-1">{value} {units[from].label} =</div>
          <div className="text-primary text-3xl font-black tracking-tight">{result}</div>
          <div className="text-white/50 text-sm font-bold mt-1">{units[to].label}</div>
        </div>
      )}
    </div>
  );
}

/*
// ─── Autonomia de Cilindro ────────────────────────────────────────────────────
function CylinderAutonomy() {
  const [volume,   setVolume]   = useState('');
  const [pressure, setPressure] = useState('');
  const [flow,     setFlow]     = useState('');

  const result = (() => {
    const v = parseFloat(volume), p = parseFloat(pressure), f = parseFloat(flow);
    if ([v, p, f].some(isNaN) || f <= 0 || v <= 0 || p <= 0) return null;
    const totalNm3 = v * (p / 1.013);
    const hours = totalNm3 / f;
    const h = Math.floor(hours), m = Math.round((hours - h) * 60);
    return { totalNm3: totalNm3.toFixed(1), hours: hours.toFixed(2), hms: `${h}h ${m}min` };
  })();

  return (
    <div className={card}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 bg-primary/20 rounded-lg flex items-center justify-center">
          <Wind size={18} className="text-primary" />
        </div>
        <div>
          <h3 className="text-white font-bold text-base">Autonomia de Cilindro</h3>
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Gases Comprimidos</p>
        </div>
      </div>
      <div className="space-y-3 mb-4">
        {[
          { lbl: 'Volume do cilindro (L)', ph: 'Ex: 50', val: volume, set: setVolume },
          { lbl: 'Pressão de carga (bar)', ph: 'Ex: 200', val: pressure, set: setPressure },
          { lbl: 'Vazão de consumo (Nm³/h)', ph: 'Ex: 2.5', val: flow, set: setFlow },
        ].map(({ lbl, ph, val, set }) => (
          <div key={lbl}>
            <label className={label}>{lbl}</label>
            <input className={input} type="number" placeholder={ph} value={val} onChange={(e) => set(e.target.value)} />
          </div>
        ))}
      </div>
      {result ? (
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
            <div className="text-white text-xl font-black">{result.totalNm3}</div>
            <div className="text-white/30 text-[10px] uppercase tracking-wider font-bold mt-0.5">Nm³ total</div>
          </div>
          <div className="bg-primary/20 border border-primary/40 rounded-lg p-3 text-center">
            <div className="text-primary text-xl font-black">{result.hms}</div>
            <div className="text-white/30 text-[10px] uppercase tracking-wider font-bold mt-0.5">Autonomia</div>
          </div>
        </div>
      ) : (
        <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-center text-white/20 text-xs">
          Preencha os campos para calcular
        </div>
      )}
    </div>
  );
}
*/

// ─── Conversor de Pressão rápido ──────────────────────────────────────────────
function QuickPressure() {
  const [value, setValue] = useState('');
  const [from,  setFrom]  = useState('bar');

  const units: Record<string, number> = { bar: 1, psi: 0.0689476, kPa: 0.1, MPa: 10, atm: 1.01325, mmHg: 0.00133322, mbar: 0.001 };
  const num     = parseFloat(value);
  const results = !isNaN(num) && value !== '' ? Object.entries(units).map(([u, f]) => ({ unit: u, value: (num * units[from] / f).toFixed(5) })) : [];

  return (
    <div className={card}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 bg-primary/20 rounded-lg flex items-center justify-center">
          <Gauge size={18} className="text-primary" />
        </div>
        <div>
          <h3 className="text-white font-bold text-base">Tabela de Pressão</h3>
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Conversão simultânea</p>
        </div>
      </div>
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Digite o valor"
          className={`${input} flex-1`}
        />
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className={`${input} w-24 cursor-pointer`}
        >
          {Object.keys(units).map((u) => <option key={u} value={u} className="bg-[#0d1929]">{u}</option>)}
        </select>
      </div>
      {results.length > 0 ? (
        <div className="grid grid-cols-2 gap-2">
          {results.map(({ unit, value: val }) => (
            <div key={unit} className={`rounded-lg p-3 flex items-center justify-between ${unit === from ? 'bg-primary/20 border border-primary/40' : 'bg-white/5 border border-white/10'}`}>
              <span className={`text-[11px] font-bold uppercase tracking-wider ${unit === from ? 'text-primary' : 'text-white/40'}`}>{unit}</span>
              <span className={`text-sm font-black ${unit === from ? 'text-primary' : 'text-white'}`}>{val}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-center text-white/20 text-xs">
          Digite um valor para ver todas as conversões
        </div>
      )}
    </div>
  );
}

// ─── Reynolds ─────────────────────────────────────────────────────────────────
function Reynolds() {
  const [D, setD]   = useState('');
  const [V, setV]   = useState('');
  const [mu, setMu] = useState('');
  const [rho, setRho] = useState('1000');

  const result = (() => {
    const d = parseFloat(D)/1000, v = parseFloat(V), m = parseFloat(mu)/1000, r = parseFloat(rho);
    if ([d, v, m, r].some(isNaN) || m <= 0) return null;
    const Re = (r * v * d) / m;
    const flow = Re < 2300 ? 'Laminar' : Re < 4000 ? 'Transição' : 'Turbulento';
    const color = Re < 2300 ? 'text-green-400' : Re < 4000 ? 'text-yellow-400' : 'text-red-400';
    return { Re: Re.toFixed(0), flow, color };
  })();

  return (
    <div className={card}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 bg-primary/20 rounded-lg flex items-center justify-center">
          <Zap size={18} className="text-primary" />
        </div>
        <div>
          <h3 className="text-white font-bold text-base">Número de Reynolds</h3>
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Regime de escoamento</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { lbl: 'Diâmetro interno (mm)', ph: 'Ex: 50', val: D, set: setD },
          { lbl: 'Velocidade (m/s)', ph: 'Ex: 2.0', val: V, set: setV },
          { lbl: 'Viscosidade dinâmica (cP)', ph: 'Ex: 1.0 (água)', val: mu, set: setMu },
          { lbl: 'Densidade (kg/m³)', ph: 'Ex: 1000 (água)', val: rho, set: setRho },
        ].map(({ lbl, ph, val, set }) => (
          <div key={lbl}>
            <label className={label}>{lbl}</label>
            <input className={input} type="number" placeholder={ph} value={val} onChange={(e) => set(e.target.value)} />
          </div>
        ))}
      </div>
      {result ? (
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
            <div className="text-white text-xl font-black">{Number(result.Re).toLocaleString('pt-BR')}</div>
            <div className="text-white/30 text-[10px] uppercase tracking-wider font-bold mt-0.5">Re</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
            <div className={`text-xl font-black ${result.color}`}>{result.flow}</div>
            <div className="text-white/30 text-[10px] uppercase tracking-wider font-bold mt-0.5">Regime</div>
          </div>
        </div>
      ) : (
        <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-center text-white/20 text-xs">
          Preencha os campos para calcular
        </div>
      )}
    </div>
  );
}

// ─── Velocidade em Tubulação ───────────────────────────────────────────────────
function PipeVelocity() {
  const [Q, setQ]   = useState('');
  const [DN, setDN] = useState('');

  const result = (() => {
    const q = parseFloat(Q) / 3600, d = parseFloat(DN) / 1000;
    if ([q, d].some(isNaN) || d <= 0) return null;
    const A = Math.PI * (d / 2) ** 2;
    const V = q / A;
    const ok = V < 3 ? '✓ Adequada' : V < 6 ? '⚠ Elevada' : '✗ Excessiva';
    const col = V < 3 ? 'text-green-400' : V < 6 ? 'text-yellow-400' : 'text-red-400';
    return { V: V.toFixed(2), A: (A * 10000).toFixed(2), ok, col };
  })();

  return (
    <div className={card}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 bg-primary/20 rounded-lg flex items-center justify-center">
          <Ruler size={18} className="text-primary" />
        </div>
        <div>
          <h3 className="text-white font-bold text-base">Velocidade em Tubulação</h3>
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Liquidos e gases</p>
        </div>
      </div>
      <div className="space-y-3 mb-4">
        <div>
          <label className={label}>Vazão volumétrica (m³/h)</label>
          <input className={input} type="number" placeholder="Ex: 10" value={Q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div>
          <label className={label}>Diâmetro interno da tubulação (mm)</label>
          <div className="flex gap-2">
            <input className={`${input} flex-1`} type="number" placeholder="Ex: 50" value={DN} onChange={(e) => setDN(e.target.value)} />
            <div className={`${unit} px-3`}>mm</div>
          </div>
        </div>
      </div>
      {result ? (
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-primary/20 border border-primary/40 rounded-lg p-3 text-center col-span-1">
            <div className="text-primary text-xl font-black">{result.V}</div>
            <div className="text-white/30 text-[10px] font-bold uppercase mt-0.5">m/s</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
            <div className="text-white text-xl font-black">{result.A}</div>
            <div className="text-white/30 text-[10px] font-bold uppercase mt-0.5">cm² área</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
            <div className={`text-sm font-black ${result.col}`}>{result.ok}</div>
            <div className="text-white/30 text-[10px] font-bold uppercase mt-0.5">status</div>
          </div>
        </div>
      ) : (
        <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-center text-white/20 text-xs">
          Preencha os campos para calcular
        </div>
      )}
    </div>
  );
}

// ─── Página principal ─────────────────────────────────────────────────────────
export function ToolsPro() {
  return (
    <>
      <EditableElement
        id="toolspro_hero_bg"
        type="container"
        as="section"
        className="relative min-h-[44vh] flex items-center bg-secondary overflow-hidden"
        defaultStyle={{ backgroundImage: "url('/images/app-plantas-industriais.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-secondary/88 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/60 to-secondary z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <Activity size={12} /> Engineering Tools Pro
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
              <EditableElement id="toolspro_hero_title" defaultContent="Calculadoras Técnicas" />
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
              <EditableElement id="toolspro_hero_sub" defaultContent="Ferramentas de engenharia desenvolvidas para dimensionamento e conversão em campo." />
            </div>
          </AnimateOnScroll>
        </div>
      </EditableElement>

      {/* Tools grid */}
      <section className="bg-[#060f1a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <Link to="/ferramentas" className="inline-flex items-center gap-2 text-white/40 hover:text-primary text-xs font-bold uppercase tracking-wider transition-colors">
              <ArrowLeft size={14} /> Voltar para Ferramentas
            </Link>
            <span className="text-white/20 text-xs">5 ferramentas disponíveis</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <AnimateOnScroll><CvKvCalc /></AnimateOnScroll>
            <AnimateOnScroll delay={80}><ConversorPro /></AnimateOnScroll>
            <AnimateOnScroll delay={120}><QuickPressure /></AnimateOnScroll>
            <AnimateOnScroll delay={160}><Reynolds /></AnimateOnScroll>
            <AnimateOnScroll delay={200}><PipeVelocity /></AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}

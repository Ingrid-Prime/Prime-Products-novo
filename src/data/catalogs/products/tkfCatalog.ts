const renderImages = (images: string[], scaleClass: string = '') => {
  const isMultiple = images.length > 1;
  const containerClass = isMultiple
    ? "flex flex-row flex-wrap gap-2 items-center justify-center max-w-[200px] mx-auto" 
    : "flex items-center justify-center";
    
  const imgSize = isMultiple ? "w-16 h-16" : "w-28 h-28";
    
  return `<div class="${containerClass}">` +
    images.map(img => `<img src="/images/produtos/conexao-para-instrumentacao/${img}" alt="Fittings" class="${imgSize} object-contain ${scaleClass} mix-blend-multiply transition-transform duration-300 flex-shrink-0 hover:!scale-125" />`).join('') +
    `</div>`;
};

export const TKF_CATALOG = [
  {
    title: 'ULTRA HIGH PURITY (UHP) FITTINGS & COMPONENTS',
    columns: ['IMAGE', 'PRODUCT FAMILY', 'DESCRIPTION', 'APPLICATION'],
    rows: [
      [renderImages(['Bend Fittings.jpeg', 'Bend Fittings2.jpeg', 'Bend Fittings3.jpeg']), 'Bend Fittings', 'High purity bend fittings sizes 1/4" ~ 600A for semiconductor applications.', 'UHP Systems'],
      [renderImages(['clean-ball-valve.png']), 'Clean Ball V/V', 'Ultra clean ball valves for high purity gas distribution lines.', 'UHP Systems'],
      [renderImages(['bellows-valve.png']), 'Bellows V/V', 'Bellows sealed valves ensuring absolute leak tightness in UHP environments.', 'UHP Systems'],
      [renderImages(['diaphragm-valve.png']), 'Diaphragm V/V', 'Precision metal diaphragm valves for zero particle generation.', 'UHP Systems'],
      [renderImages(['mfc.png']), 'MFC (Mass Flow Controller)', 'Accurate and stable mass flow controllers for critical process gases.', 'UHP Systems'],
      [renderImages(['pt-sensor.png']), 'PT Sensor', 'High-accuracy pressure transducers for UHP gas line monitoring.', 'UHP Systems'],
      [renderImages(['filter.png']), 'Filter', 'In-line gas filters to eliminate nano-particles from the process stream.', 'UHP Systems'],
      [renderImages(['gas-box.png']), 'Gas Box', 'Integrated gas distribution boxes engineered for semiconductor tools.', 'UHP Systems'],
      [renderImages(['igs.png']), 'IGS (Integrated Gas System)', 'Modular surface-mount gas panels for compact and efficient delivery.', 'UHP Systems'],
      [renderImages(['micro-fitting.png']), 'Micro Fitting', 'Miniaturized fittings for tightly spaced UHP analytical instrumentation.', 'UHP Systems']
    ]
  },
  {
    title: 'GENERAL INDUSTRIAL (GI) FITTINGS & COMPONENTS',
    columns: ['IMAGE', 'PRODUCT FAMILY', 'DESCRIPTION', 'APPLICATION'],
    rows: [
      [renderImages(['lok-fittings.png']), 'Lok Fittings', 'Twin-ferrule compression fittings for leak-free connections in harsh industrial environments.', 'General Industrial'],
      [renderImages(['ball-valve.png']), 'Ball V/V', 'Reliable quarter-turn ball valves for quick shut-off in plant utility lines.', 'General Industrial'],
      [renderImages(['plug-valve.png']), 'Plug V/V', 'High-performance plug valves for precise flow control and durability.', 'General Industrial'],
      [renderImages(['check-valve.png']), 'Check V/V', 'Prevents reverse flow to protect pumps, compressors, and sensitive instrumentation.', 'General Industrial'],
      [renderImages(['trunnion-valve.png']), 'Trunnion V/V', 'Robust trunnion mounted ball valves designed for high pressure and large bore pipelines.', 'General Industrial'],
      [renderImages(['relief-valve.png']), 'Relief V/V', 'Safety relief valves to protect lines and vessels from overpressure conditions.', 'General Industrial'],
      [renderImages(['toggle-valve.png']), 'Toggle V/V', 'Fast-acting toggle valves for immediate manual on/off control.', 'General Industrial']
    ]
  },
  {
    title: 'HYDROGEN FUEL CELL VEHICLE & DRONE COMPONENTS',
    columns: ['IMAGE', 'PRODUCT FAMILY', 'DESCRIPTION', 'APPLICATION'],
    rows: [
      [renderImages(['orfs-fitting.png']), 'ORFS Fitting', 'O-Ring Face Seal Fittings for 350 / 700bar.', 'H2 Fuel Cell Vehicle'],
      [renderImages(['receptacle.png']), 'Receptacle', 'Receptacles for H2 charging. W.P: 350bar.', 'H2 Fuel Cell Vehicle'],
      [renderImages(['h2-regulator.png']), 'Regulator', 'Regulator Body: 316L SS. W.P: 875 bar.', 'H2 Fuel Cell Vehicle'],
      [renderImages(['h2-check-valve.png']), 'Check Valve', 'Check valves for high pressure hydrogen.', 'H2 Fuel Cell Vehicle'],
      [renderImages(['manifold-valve.png']), 'Manifold Valve', 'W.P: 350 / 700bar.', 'H2 Fuel Cell Vehicle'],
      [renderImages(['tank-solenoid-valve.png']), 'Hydrogen Tank Solenoid Valve', 'HFV-350 / HFV-700. Aluminum 6061-T6. W.P: 350 / 700bar.', 'H2 Fuel Cell Vehicle'],
      [renderImages(['tprd.png']), 'TPRD', 'Thermally Activated Pressure Relief Device for Hydrogen Tanks.', 'H2 Fuel Cell Vehicle / Drone'],
      [renderImages(['h2-pressure-sensor.png']), 'Pressure Sensor', 'High accuracy pressure sensors for hydrogen applications.', 'H2 Fuel Cell Vehicle / Drone']
    ]
  },
  {
    title: 'HYDROGEN REFUELING STATION COMPONENTS',
    columns: ['IMAGE', 'PRODUCT FAMILY', 'DESCRIPTION', 'APPLICATION'],
    rows: [
      [renderImages(['h2-fittings.png']), 'High Pressure Fittings', 'Specialized fittings rated for 20,000 psi (1,380 bar) to handle extreme hydrogen pressure.', 'Hydrogen Refueling Station'],
      [renderImages(['h2-needle-valve.png']), 'High Pressure Needle Valve', 'Needle valves rated for 20,000 psi ensuring zero-leakage control in hydrogen dispensers.', 'Hydrogen Refueling Station'],
      [renderImages(['poppet-check-valve.png']), 'Ball-Seal Poppet Check Valve', 'Poppet check valves (20,000 psi) designed for safe unidirectional hydrogen flow.', 'Hydrogen Refueling Station'],
      [renderImages(['h2-line-filter.png']), 'High Pressure Line Filter', 'Filters impurities in 20,000 psi hydrogen streams protecting fuel cells and vehicles.', 'Hydrogen Refueling Station'],
      [renderImages(['h2-trunnion.png']), 'Trunnion Ball Valve', '6,000 psi trunnion ball valves designed for bulk hydrogen transport and storage.', 'Hydrogen Refueling Station'],
      [renderImages(['adj-air-actuator.png']), 'Adjustable Air Actuator Needle Valve', 'Pneumatically actuated needle valves (20,000 psi) for automated dispensing systems.', 'Hydrogen Refueling Station'],
      [renderImages(['air-actuator.png']), 'Air Actuator Needle Valve', 'Standard air actuated needle valves for high-pressure hydrogen routing.', 'Hydrogen Refueling Station'],
      [renderImages(['h2-relief-valve.png']), 'Set Pressure RVS Relief Valve', 'Safety relief valves to protect hydrogen tanks and refueling infrastructure from overpressure.', 'Hydrogen Refueling Station']
    ]
  },
  {
    title: 'CNG APPLICATION',
    columns: ['IMAGE', 'PRODUCT FAMILY', 'DESCRIPTION', 'APPLICATION'],
    rows: [
      [renderImages(['CVV1.png', 'CVV11.png']), 'CVV1', 'Hot Forged Brass. W.P: 26Mpa.', 'CNG Assembly'],
      [renderImages(['CVV1A.jpeg', 'CVV1AA.jpeg']), 'CVV1A', 'Hot Forged Brass. W.P: 26Mpa.', 'CNG Assembly'],
      [renderImages(['CVV2.png', 'CVV22.png']), 'CVV2', 'Hot Forged Brass. W.P: 26Mpa.', 'CNG Assembly'],
      [renderImages(['CVV2A.jpeg', 'CVV2AA.png']), 'CVV2A', 'Hot Forged Brass. W.P: 26Mpa.', 'CNG Assembly']
    ]
  }
];

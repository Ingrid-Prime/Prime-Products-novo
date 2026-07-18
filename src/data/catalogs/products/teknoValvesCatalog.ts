const renderImages = (images: string[], scaleClass: string = '') => {
  const isMultiple = images.length > 1;
  const containerClass = isMultiple
    ? "flex flex-row flex-wrap gap-2 items-center justify-center max-w-[200px] mx-auto" 
    : "flex items-center justify-center";
    
  const imgSize = isMultiple ? "w-16 h-16" : "w-28 h-28";
    
  return `<div class="${containerClass}">` +
    images.map(img => `<img src="/images/produtos/valvulas-industriais-medicinais-e-especiais-tekno-valves/${img}" alt="Valve" class="${imgSize} object-contain ${scaleClass} mix-blend-multiply transition-transform duration-300 flex-shrink-0 hover:!scale-125" />`).join('') +
    `</div>`;
};

export const TEKNO_VALVES_CATALOG = [
  {
    title: 'CYLINDER VALVES FOR O2, MEDICAL O2, H2 & INERT GASES',
    columns: ['IMAGE', 'MODEL', 'DESCRIPTION', 'APPLICATION'],
    rows: [
      [renderImages(['IHO06.png']), 'IHO-06', 'Key Operated Valves in Packed Design. 200 bar WP. Forged brass body with PTFE packing.', 'O2, Medical O2, H2 & Inert Gases'],
      [renderImages(['KHO10I&KVO10I.png'], 'scale-110'), 'KHO-10/I & KVO-10/I', 'Key Operated Valves in O-ring Seal Design. 360 bar WP. Features PA 66 thrust washer & EPDM O-rings.', 'O2, Medical O2, H2 & Inert Gases'],
      [renderImages(['SWN12O.png', 'SWN12OO.png']), 'SWN-12/O', 'Handwheel Operated Valves in O-ring Seal Design. 360/540 bar WP. Aluminium Handwheel.', 'O2, Medical O2, H2 & Inert Gases'],
      [renderImages(['SWN1245.png', 'SWN12455.png'], 'scale-125'), 'SWN-12/45', 'Handwheel Operated Valves for Cylinders up to 10 Litres WC. Compact design with O-ring seal.', 'O2, Medical O2, H2 & Inert Gases'],
      [renderImages(['BOWN12O&BOWN12N.png', 'BOWN12O&BOWN12NN.jpeg']), 'BOWN-12/O & BOWN-12/N', 'Handwheel Operated Offline Residual Pressure Valves (RPVs). 360 bar WP. Built-in NRV function.', 'O2, Medical O2, H2 & Inert Gases'],
      [renderImages(['IRPV10IO.png']), 'IRPV-10 I/O', 'Handwheel Operated Inline Residual Pressure Valves (RPVs). 276/360 bar WP.', 'O2, Medical O2, H2 & Inert Gases']
    ]
  },
  {
    title: 'CYLINDER VALVES FOR CARBON DIOXIDE',
    columns: ['IMAGE', 'MODEL', 'DESCRIPTION', 'APPLICATION'],
    rows: [
      [renderImages(['SKN12C.png']), 'SKN-12/C', 'Key Operated Valves in O-ring Seal Design. 360 bar WP. Equipped with Burst Disc.', 'Carbon Dioxide'],
      [renderImages(['SWN12C.png']), 'SWN-12/C', 'Handwheel Operated Valves in O-ring Seal Design. 360 bar WP.', 'Carbon Dioxide'],
      [renderImages(['BOWN12C.png']), 'BOWN-12/C', 'Handwheel Operated Offline Residual Pressure Valves (RPVs). 360 bar WP.', 'Carbon Dioxide'],
      [renderImages(['IWN12.png']), 'IWN-12/C', 'Handwheel Operated Inline Residual Pressure Valves (RPVs). 360 bar WP.', 'Carbon Dioxide']
    ]
  },
  {
    title: 'CYLINDER VALVES FOR ACETYLENE',
    columns: ['IMAGE', 'MODEL', 'DESCRIPTION', 'APPLICATION'],
    rows: [
      [renderImages(['IHO06Acetylene.png', 'IHO06Acetylenee.png']), 'IHO-06', 'Key Operated Valves in Packed Design. 60 kgf/cm2 WP. Available with Fusible Plug.', 'Acetylene'],
      [renderImages(['KHO10D.png'], 'scale-125'), 'KHO-10/D & KVO-10/D', 'Key Operated Valves in O-ring Seal Design. 60 bar WP.', 'Acetylene'],
      [renderImages(['BSKN2D.png'], 'scale-150'), 'BSKN-12/D & BAKN-12/D', 'Acetylene Valves for "B" & "MC" Style Cylinders. Key Operated in O-ring Seal Design.', 'Acetylene'],
      [renderImages(['CWH-10-D.png', 'CWH-10-DD.png'], 'scale-125'), 'CWH-10/D & CWV-10/D', 'Handwheel Operated Valves in O-ring Seal Design. 60 bar WP. HT brass body.', 'Acetylene'],
      [renderImages(['BSWN-12-D-30.png', 'BSWN-12-D-300.png'], 'scale-125'), 'BSWN-12/D-30 & BAWN-12/D-30', 'Handwheel Operated Acetylene Valves for "B" & "MC" Style Cylinders.', 'Acetylene']
    ]
  },
  {
    title: 'CYLINDER VALVES FOR CHLORINE & CORROSIVE GASES',
    columns: ['IMAGE', 'MODEL', 'DESCRIPTION', 'APPLICATION'],
    rows: [
      [renderImages(['CAV-06.png', 'CAV-066.png']), 'CAV-06', 'Key Operated Valves in Standard Chlorine Institute Packed Design / ISO V Design. 3000 psig WP. Al-Si Bronze body.', 'Chlorine & Corrosive Gases'],
      [renderImages(['SWN-22-V.png']), 'SWN-22/V', 'Handwheel Operated Compression Packed Valves with O-ring Seal. Al-Si Bronze / HT brass body.', 'Chlorine & Corrosive Gases']
    ]
  },
  {
    title: 'CYLINDER VALVES FOR SPECIALITY, AMMONIA & REFRIGERANT GASES',
    columns: ['IMAGE', 'MODEL', 'DESCRIPTION', 'APPLICATION'],
    rows: [
      [renderImages(['RWH-03.png', 'RWH-033.png']), 'RWH-03', 'Handwheel Operated Brass Valves in Diaphragm Design. 250 bar WP.', 'Speciality & Refrigerant Gases'],
      [renderImages(['TWH-03.png', 'TWH03.png']), 'TWH-03', 'Handwheel Operated Stainless Steel Valves in Diaphragm Design. 240 bar WP. SS 303 / SS 316L body.', 'Speciality, Toxic & Corrosive Gases'],
      [renderImages(['SSWN-22-V-S3.png']), 'SSWN-22/V-S3', 'Handwheel Operated Compression Packed Valves with O-ring Seal. SS 303 body.', 'Ammonia & Amines'],
      [renderImages(['CST-06.png']), 'CST-06', 'Key Operated Carbon Steel Valves in Packed Design (CGA V-9 / IS 3224). Low carbon steel body.', 'Ammonia & Amines'],
      [renderImages(['RDP-03.png']), 'RDP-03', 'Handwheel Operated Brass Valves in Diaphragm Design with integrated RPV.', 'Speciality Gases']
    ]
  },
  {
    title: 'CYLINDER VALVES FOR BREATHING AIR, NGV & FIRE FIGHTING',
    columns: ['IMAGE', 'MODEL', 'DESCRIPTION', 'APPLICATION'],
    rows: [
      [renderImages(['HBA-10.png', 'HBA-100.png', 'HBA-1001.png', 'HBA-1002.png']), 'HBA-10', 'Handwheel Operated Valves in O-ring Seal Design for Breathing Air.', 'Breathing Air'],
      [renderImages(['MBA-10.png'], 'scale-150'), 'MBA-10', 'Medical Valves in O-ring Seal Design. 360 bar WP.', 'Medical Breathing Air'],
      [renderImages(['ALV-10.png', 'ALV-100.png']), 'ALV-10', 'Auto Lifting Valves for Fire Fighting / CO2 Cylinders. 360 bar WP.', 'Fire Fighting'],
      [renderImages(['FSG-07.png', 'FSG-077.png']), 'FSG-07', 'Handwheel Operated Valves in Packed Design. Heavy duty design.', 'NGV (Natural Gas for Vehicles)'],
      [renderImages(['BMV-09.png'], 'scale-150'), 'BMV-09', 'Ball Valves for CNG applications.', 'NGV (Natural Gas for Vehicles)']
    ]
  }
];

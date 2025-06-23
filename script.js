/* ──────────────────────────────────────────────
   1.  Data  (118 symbols + atomic number + name)
   ────────────────────────────────────────────── */
const elements=[
  /* period, group, Z, symbol, name */
  [1,1,1,'H','Hydrogen'],      [1,18,2,'He','Helium'],

  [2,1,3,'Li','Lithium'],      [2,2,4,'Be','Beryllium'],
  [2,13,5,'B','Boron'],        [2,14,6,'C','Carbon'],
  [2,15,7,'N','Nitrogen'],     [2,16,8,'O','Oxygen'],
  [2,17,9,'F','Fluorine'],     [2,18,10,'Ne','Neon'],

  [3,1,11,'Na','Sodium'],      [3,2,12,'Mg','Magnesium'],
  [3,13,13,'Al','Aluminium'],  [3,14,14,'Si','Silicon'],
  [3,15,15,'P','Phosphorus'],  [3,16,16,'S','Sulfur'],
  [3,17,17,'Cl','Chlorine'],   [3,18,18,'Ar','Argon'],

  [4,1,19,'K','Potassium'],    [4,2,20,'Ca','Calcium'],
  [4,3,21,'Sc','Scandium'],    [4,4,22,'Ti','Titanium'],
  [4,5,23,'V','Vanadium'],     [4,6,24,'Cr','Chromium'],
  [4,7,25,'Mn','Manganese'],   [4,8,26,'Fe','Iron'],
  [4,9,27,'Co','Cobalt'],      [4,10,28,'Ni','Nickel'],
  [4,11,29,'Cu','Copper'],     [4,12,30,'Zn','Zinc'],
  [4,13,31,'Ga','Gallium'],    [4,14,32,'Ge','Germanium'],
  [4,15,33,'As','Arsenic'],    [4,16,34,'Se','Selenium'],
  [4,17,35,'Br','Bromine'],    [4,18,36,'Kr','Krypton'],

  [5,1,37,'Rb','Rubidium'],    [5,2,38,'Sr','Strontium'],
  [5,3,39,'Y','Yttrium'],      [5,4,40,'Zr','Zirconium'],
  [5,5,41,'Nb','Niobium'],     [5,6,42,'Mo','Molybdenum'],
  [5,7,43,'Tc','Technetium'],  [5,8,44,'Ru','Ruthenium'],
  [5,9,45,'Rh','Rhodium'],     [5,10,46,'Pd','Palladium'],
  [5,11,47,'Ag','Silver'],     [5,12,48,'Cd','Cadmium'],
  [5,13,49,'In','Indium'],     [5,14,50,'Sn','Tin'],
  [5,15,51,'Sb','Antimony'],   [5,16,52,'Te','Tellurium'],
  [5,17,53,'I','Iodine'],      [5,18,54,'Xe','Xenon'],

  [6,1,55,'Cs','Caesium'],     [6,2,56,'Ba','Barium'],
  [6,3,57,'La','Lanthanum'],   [6,4,72,'Hf','Hafnium'],
  [6,5,73,'Ta','Tantalum'],    [6,6,74,'W','Tungsten'],
  [6,7,75,'Re','Rhenium'],     [6,8,76,'Os','Osmium'],
  [6,9,77,'Ir','Iridium'],     [6,10,78,'Pt','Platinum'],
  [6,11,79,'Au','Gold'],       [6,12,80,'Hg','Mercury'],
  [6,13,81,'Tl','Thallium'],   [6,14,82,'Pb','Lead'],
  [6,15,83,'Bi','Bismuth'],    [6,16,84,'Po','Polonium'],
  [6,17,85,'At','Astatine'],   [6,18,86,'Rn','Radon'],

  [7,1,87,'Fr','Francium'],    [7,2,88,'Ra','Radium'],
  [7,3,89,'Ac','Actinium'],    [7,4,104,'Rf','Rutherfordium'],
  [7,5,105,'Db','Dubnium'],    [7,6,106,'Sg','Seaborgium'],
  [7,7,107,'Bh','Bohrium'],    [7,8,108,'Hs','Hassium'],
  [7,9,109,'Mt','Meitnerium'], [7,10,110,'Ds','Darmstadtium'],
  [7,11,111,'Rg','Roentgenium'],[7,12,112,'Cn','Copernicium'],
  [7,13,113,'Nh','Nihonium'],  [7,14,114,'Fl','Flerovium'],
  [7,15,115,'Mc','Moscovium'], [7,16,116,'Lv','Livermorium'],
  [7,17,117,'Ts','Tennessine'],[7,18,118,'Og','Oganesson'],

  /* Lanthanides (period 8, offset group 4) */
  [8,4,58,'Ce','Cerium'],  [8,5,59,'Pr','Praseodymium'],
  [8,6,60,'Nd','Neodymium'],[8,7,61,'Pm','Promethium'],
  [8,8,62,'Sm','Samarium'],[8,9,63,'Eu','Europium'],
  [8,10,64,'Gd','Gadolinium'],[8,11,65,'Tb','Terbium'],
  [8,12,66,'Dy','Dysprosium'],[8,13,67,'Ho','Holmium'],
  [8,14,68,'Er','Erbium'],[8,15,69,'Tm','Thulium'],
  [8,16,70,'Yb','Ytterbium'],[8,17,71,'Lu','Lutetium'],

  /* Actinides (period 9, offset group 4) */
  [9,4,90,'Th','Thorium'],   [9,5,91,'Pa','Protactinium'],
  [9,6,92,'U','Uranium'],    [9,7,93,'Np','Neptunium'],
  [9,8,94,'Pu','Plutonium'], [9,9,95,'Am','Americium'],
  [9,10,96,'Cm','Curium'],   [9,11,97,'Bk','Berkelium'],
  [9,12,98,'Cf','Californium'],[9,13,99,'Es','Einsteinium'],
  [9,14,100,'Fm','Fermium'], [9,15,101,'Md','Mendelevium'],
  [9,16,102,'No','Nobelium'],[9,17,103,'Lr','Lawrencium'],
];

/* 2 ▸ Interactive d-block set (through Hg) */
const transitionSet = new Set([
  'Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn',
  'Y','Zr','Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd',
  'La','Hf','Ta','W','Re','Os','Ir','Pt','Au'
]);

/* 3 ▸ Background-colour map (border left untouched) */
const fillMap = {
  /* pink-peach */
  Ni:'#ffc8b0', Cu:'#ffc8b0', Rh:'#ffc8b0', Pd:'#ffc8b0',
  Ag:'#ffc8b0', Ir:'#ffc8b0', Pt:'#ffc8b0', Au:'#ffc8b0',

  /* lavender */
  Sc:'#D8A9D1', Ti:'#D8A9D1', Y :'#D8A9D1', Zr:'#D8A9D1',
  Lu:'#D8A9D1', Hf:'#D8A9D1', Co:'#D8A9D1', Tc:'#D8A9D1',
  Ru:'#D8A9D1', Re:'#D8A9D1', Os:'#D8A9D1', Zn:'#D8A9D1',
  Cd:'#D8A9D1',

  /* mint */
  V :'#ccffcc', Cr:'#ccffcc', Mn:'#ccffcc', Fe:'#ccffcc',
  Nb:'#ccffcc', Mo:'#ccffcc', Ta:'#ccffcc', W :'#ccffcc'
};

/* ──────────────────────────────────────────────────────────
   4 ▸ Build blank 9×18 grid
   ────────────────────────────────────────────────────────── */
const tbl = document.getElementById('periodic-table');
for (let r = 1; r <= 9; r++) {
  for (let c = 1; c <= 18; c++) {
    const d = document.createElement('div');
    d.className = 'cell';
    d.style.gridRow = r;
    d.style.gridColumn = c;
    tbl.appendChild(d);
  }
}

/* ──────────────────────────────────────────────────────────
   5 ▸ Populate cells
   ────────────────────────────────────────────────────────── */
elements.forEach(([per,grp,Z,sym,name])=>{
  const idx  = (per-1)*18 + (grp-1);
  const cell = tbl.children[idx];
  cell.textContent = sym;
  cell.dataset.title = `${Z} • ${name}`;

  /* only set background colour */
  if (fillMap[sym]) {
    cell.style.background = fillMap[sym];
  }

  if (transitionSet.has(sym)) {
    cell.classList.add('transition');
    cell.addEventListener('click',()=>openCrystalModal(sym));
  }
});

/* ──────────────────────────────────────────────────────────
   6 ▸ Modal & plot viewer (unchanged)
   ────────────────────────────────────────────────────────── */
const modal = document.getElementById('crystal-modal');
const chosen = document.getElementById('chosen-element');
const btns = [...modal.querySelectorAll('[data-structure]')];
const closeBtn = document.getElementById('close-modal');

const plotsSection = document.getElementById('plots-container');
const plotsTitle   = document.getElementById('plots-title');
const plotsGrid    = plotsSection.querySelector('.plots-grid');
const kinds        = ['COOP','COHP','COBI','DOS'];

function openCrystalModal(sym){
  chosen.textContent = sym;
  modal.showModal();
  btns.forEach(b=>{
    b.onclick = () => { modal.close(); showPlots(sym,b.dataset.structure); };
  });
}
closeBtn.onclick = () => modal.close();

function showPlots(sym,structure){
  plotsTitle.textContent = `${sym} — ${structure.toUpperCase()} plots`;
  plotsGrid.innerHTML = '';
  kinds.forEach(k=>{
    const fig = document.createElement('figure');
    fig.className = 'plot-card';
    const img = document.createElement('img');
    img.src = `plots/${structure}/${k}_plots/${k}_${sym}.png`;
    img.alt = `${k} of ${sym} (${structure})`;
    const cap = document.createElement('figcaption');
    cap.textContent = `Energy vs ${k==='COHP' ? '-COHP' : k}`;
    fig.append(img,cap);
    plotsGrid.appendChild(fig);
  });
  plotsSection.classList.remove('hidden');
  plotsSection.scrollIntoView({behavior:'smooth'});
}
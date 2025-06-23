/* ------------------------------------------------------------------
   1.  All 118 elements + lanthanides / actinides
   ------------------------------------------------------------------ */
const elements = [
  /* Period 1 */ {sym:'H', grp:1,  per:1},  {sym:'He',grp:18, per:1},

  /* Period 2 */ {sym:'Li',grp:1,  per:2},  {sym:'Be',grp:2,  per:2},
                 {sym:'B', grp:13, per:2},  {sym:'C', grp:14, per:2},
                 {sym:'N', grp:15, per:2},  {sym:'O', grp:16, per:2},
                 {sym:'F', grp:17, per:2},  {sym:'Ne',grp:18, per:2},

  /* Period 3 */ {sym:'Na',grp:1,  per:3},  {sym:'Mg',grp:2,  per:3},
                 {sym:'Al',grp:13, per:3},  {sym:'Si',grp:14, per:3},
                 {sym:'P', grp:15, per:3},  {sym:'S', grp:16, per:3},
                 {sym:'Cl',grp:17, per:3},  {sym:'Ar',grp:18, per:3},

  /* Period 4 */ {sym:'K', grp:1,  per:4},  {sym:'Ca',grp:2,  per:4},
                 {sym:'Sc',grp:3,  per:4},  {sym:'Ti',grp:4,  per:4},
                 {sym:'V', grp:5,  per:4},  {sym:'Cr',grp:6,  per:4},
                 {sym:'Mn',grp:7,  per:4},  {sym:'Fe',grp:8,  per:4},
                 {sym:'Co',grp:9,  per:4},  {sym:'Ni',grp:10, per:4},
                 {sym:'Cu',grp:11, per:4},  {sym:'Zn',grp:12, per:4},
                 {sym:'Ga',grp:13, per:4},  {sym:'Ge',grp:14, per:4},
                 {sym:'As',grp:15, per:4},  {sym:'Se',grp:16, per:4},
                 {sym:'Br',grp:17, per:4},  {sym:'Kr',grp:18, per:4},

  /* Period 5 */ {sym:'Rb',grp:1,  per:5},  {sym:'Sr',grp:2,  per:5},
                 {sym:'Y', grp:3,  per:5},  {sym:'Zr',grp:4,  per:5},
                 {sym:'Nb',grp:5,  per:5},  {sym:'Mo',grp:6,  per:5},
                 {sym:'Tc',grp:7,  per:5},  {sym:'Ru',grp:8,  per:5},
                 {sym:'Rh',grp:9,  per:5},  {sym:'Pd',grp:10, per:5},
                 {sym:'Ag',grp:11, per:5},  {sym:'Cd',grp:12, per:5},
                 {sym:'In',grp:13, per:5},  {sym:'Sn',grp:14, per:5},
                 {sym:'Sb',grp:15, per:5},  {sym:'Te',grp:16, per:5},
                 {sym:'I', grp:17, per:5},  {sym:'Xe',grp:18, per:5},

  /* Period 6 */ {sym:'Cs',grp:1,  per:6},  {sym:'Ba',grp:2,  per:6},
                 {sym:'La',grp:3,  per:6},  {sym:'Hf',grp:4,  per:6},
                 {sym:'Ta',grp:5,  per:6},  {sym:'W', grp:6,  per:6},
                 {sym:'Re',grp:7,  per:6},  {sym:'Os',grp:8,  per:6},
                 {sym:'Ir',grp:9,  per:6},  {sym:'Pt',grp:10, per:6},
                 {sym:'Au',grp:11, per:6},  {sym:'Hg',grp:12, per:6},
                 {sym:'Tl',grp:13, per:6},  {sym:'Pb',grp:14, per:6},
                 {sym:'Bi',grp:15, per:6},  {sym:'Po',grp:16, per:6},
                 {sym:'At',grp:17, per:6},  {sym:'Rn',grp:18, per:6},

  /* Period 7 */ {sym:'Fr',grp:1,  per:7},  {sym:'Ra',grp:2,  per:7},
                 {sym:'Ac',grp:3,  per:7},  {sym:'Rf',grp:4,  per:7},
                 {sym:'Db',grp:5,  per:7},  {sym:'Sg',grp:6,  per:7},
                 {sym:'Bh',grp:7,  per:7},  {sym:'Hs',grp:8,  per:7},
                 {sym:'Mt',grp:9,  per:7},  {sym:'Ds',grp:10, per:7},
                 {sym:'Rg',grp:11, per:7},  {sym:'Cn',grp:12, per:7},
                 {sym:'Nh',grp:13, per:7},  {sym:'Fl',grp:14, per:7},
                 {sym:'Mc',grp:15, per:7},  {sym:'Lv',grp:16, per:7},
                 {sym:'Ts',grp:17, per:7},  {sym:'Og',grp:18, per:7},

  /* Lanthanides (Ln row = period 8, offset under group 3) */
  {sym:'Ce',grp:4,per:8},{sym:'Pr',grp:5,per:8},{sym:'Nd',grp:6,per:8},
  {sym:'Pm',grp:7,per:8},{sym:'Sm',grp:8,per:8},{sym:'Eu',grp:9,per:8},
  {sym:'Gd',grp:10,per:8},{sym:'Tb',grp:11,per:8},{sym:'Dy',grp:12,per:8},
  {sym:'Ho',grp:13,per:8},{sym:'Er',grp:14,per:8},{sym:'Tm',grp:15,per:8},
  {sym:'Yb',grp:16,per:8},{sym:'Lu',grp:17,per:8},

  /* Actinides (An row = period 9, offset under group 3) */
  {sym:'Th',grp:4,per:9},{sym:'Pa',grp:5,per:9},{sym:'U', grp:6,per:9},
  {sym:'Np',grp:7,per:9},{sym:'Pu',grp:8,per:9},{sym:'Am',grp:9,per:9},
  {sym:'Cm',grp:10,per:9},{sym:'Bk',grp:11,per:9},{sym:'Cf',grp:12,per:9},
  {sym:'Es',grp:13,per:9},{sym:'Fm',grp:14,per:9},{sym:'Md',grp:15,per:9},
  {sym:'No',grp:16,per:9},{sym:'Lr',grp:17,per:9}
];

/* ------------------------------------------------------------------
   2.  Set of d-block elements that should be clickable
   ------------------------------------------------------------------ */
const transitionSet = new Set([
  'Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn',
  'Y','Zr','Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd',
  'La','Hf','Ta','W','Re','Os','Ir','Pt','Au','Hg',
  'Ac','Rf','Db','Sg','Bh','Hs','Mt','Ds','Rg','Cn'
]);

/* ------------------------------------------------------------------
   3.  Build the blank 9 × 18 grid
   ------------------------------------------------------------------ */
const table = document.getElementById('periodic-table');
for (let row = 1; row <= 9; row++) {
  for (let col = 1; col <= 18; col++) {
    const d = document.createElement('div');
    d.className = 'cell';
    d.style.gridRow = row;
    d.style.gridColumn = col;
    table.appendChild(d);
  }
}

/* ------------------------------------------------------------------
   4.  Fill cells, attach click-handler only for transition metals
   ------------------------------------------------------------------ */
elements.forEach(e => {
  const idx = (e.per - 1) * 18 + (e.grp - 1);
  const cell = table.children[idx];
  cell.textContent = e.sym;

  if (transitionSet.has(e.sym)) {
    cell.classList.add('transition');
    cell.dataset.symbol = e.sym;
    cell.addEventListener('click', () => openCrystalModal(e.sym));
  }
});

/* ------------------------------------------------------------------
   5.  Modal + plot-viewer logic  (unchanged)
   ------------------------------------------------------------------ */
const modal          = document.getElementById('crystal-modal');
const chosenHeader   = document.getElementById('chosen-element');
const buttons        = [...modal.querySelectorAll('[data-structure]')];
const closeBtn       = document.getElementById('close-modal');

const plotsSection = document.getElementById('plots-container');
const plotsTitle   = document.getElementById('plots-title');
const plotsGrid    = plotsSection.querySelector('.plots-grid');
const plotKinds    = ['COOP','COHP','COBI','DOS'];

function openCrystalModal(sym){
  chosenHeader.textContent = sym;
  modal.showModal();
  buttons.forEach(b=>{
    b.onclick = () => {
      modal.close();
      showPlots(sym, b.dataset.structure);
    };
  });
}
closeBtn.onclick = () => modal.close();

function showPlots(sym, struct){
  plotsTitle.textContent = `${sym} — ${struct.toUpperCase()} plots`;
  plotsGrid.innerHTML = '';
  plotKinds.forEach(k=>{
    const img = document.createElement('img');
    img.src = `plots/${struct}/${k}_plots/${k}_${sym}.png`;
    img.alt = `${k} of ${sym} (${struct})`;
    plotsGrid.appendChild(img);
  });
  plotsSection.classList.remove('hidden');
  plotsSection.scrollIntoView({behavior:'smooth'});
}

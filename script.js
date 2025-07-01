/* ──────────────────────────────────────────────
   0 ▸  Load summary CSVs into `data`
   ────────────────────────────────────────────── */
const structures = ['bcc','fcc','hcp'];
const data       = {};  // data[structure][Metal] = {ICOHP, ICOOP, ICOBI}

Promise.all(
  structures.map(s => fetch(`plots/${s}_summary.csv`).then(r=>r.text()))
).then(results => {
  results.forEach((csvText, idx) => {
    const s   = structures[idx];
    const rows= csvText.trim().split(/\r?\n/).slice(1);  // skip header
    data[s]   = {};
    rows.forEach(line=>{
      const [Metal, ICOHP, ICOOP, ICOBI] = line.split(',');
      data[s][Metal.trim()] = {ICOHP, ICOOP, ICOBI};
    });
  });
}).catch(console.error);

/* ──────────────────────────────────────────────
   1 ▸  Periodic-table element data (unchanged)
   ────────────────────────────────────────────── */
const elements=[ /* … the full array exactly as before … */ ];

/* 2 ▸ Interactive d-block set */
const transitionSet = new Set([
  'Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn',
  'Y','Zr','Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd',
  'Hf','Ta','W','Re','Os','Ir','Pt','Au'
]);

/* 3 ▸ Interior colour map */
const fillMap = {
  Ni:'#ffc8b0', Cu:'#ffc8b0', Rh:'#ffc8b0', Pd:'#ffc8b0',
  Ag:'#ffc8b0', Ir:'#ffc8b0', Pt:'#ffc8b0', Au:'#ffc8b0',
  Sc:'#D8A9D1', Ti:'#D8A9D1', Y :'#D8A9D1', Zr:'#D8A9D1',
  Hf:'#D8A9D1', Co:'#D8A9D1', Tc:'#D8A9D1',
  Ru:'#D8A9D1', Re:'#D8A9D1', Os:'#D8A9D1', Zn:'#D8A9D1', Cd:'#D8A9D1',
  V :'#ccffcc', Cr:'#ccffcc', Mn:'#ccffcc', Fe:'#ccffcc',
  Nb:'#ccffcc', Mo:'#ccffcc', Ta:'#ccffcc', W :'#ccffcc'
};

/* ──────────────────────────────────────────────
   4 ▸  Build the periodic-table grid
   ────────────────────────────────────────────── */
const tbl      = document.getElementById('periodic-table');
const infoCard = document.getElementById('info-card');

elements.forEach(([per,grp,Z,sym,name])=>{
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.style.gridRow    = per;
  cell.style.gridColumn = grp;
  cell.textContent      = sym;
  cell.dataset.title    = `${Z} • ${name}`;

  if (fillMap[sym]) cell.style.background = fillMap[sym];

  if (transitionSet.has(sym)) {
    cell.classList.add('transition');
    cell.addEventListener('click', () => openCrystalModal(sym));
    cell.addEventListener('mouseenter', () => showInfoCard(sym));
    cell.addEventListener('mouseleave', hideInfoCard);
  }
  tbl.appendChild(cell);
});

/* ──────────────────────────────────────────────
   4-bis ▸ Hover info-card helpers
   ────────────────────────────────────────────── */
function showInfoCard(sym){
  if (!data.bcc) return;           // still fetching
  const makeRow = s=>{
    const rec = data[s][sym] || {};
    const val = v => v ?? '—';
    return `<tr><th>${s.toUpperCase()}</th>
              <td>${val(rec.ICOOP)}</td>
              <td>${val(rec.ICOHP)}</td>
              <td>${val(rec.ICOBI)}</td></tr>`;
  };
  infoCard.innerHTML = `
    <div class="title">${sym}</div>
    <table>
      <thead><tr><th></th><th>ICOOP</th><th>ICOHP</th><th>ICOBI</th></tr></thead>
      <tbody>
        ${structures.map(makeRow).join('')}
      </tbody>
    </table>`;
  infoCard.classList.remove('hidden');
}
function hideInfoCard(){ infoCard.classList.add('hidden'); }

/* ──────────────────────────────────────────────
   5 ▸  Modal & plot viewer (original code)
   ────────────────────────────────────────────── */
const modal  = document.getElementById('crystal-modal');
const chosen = document.getElementById('chosen-element');
const btns   = [...modal.querySelectorAll('[data-structure]')];
const close  = document.getElementById('close-modal');

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
close.onclick = () => modal.close();

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

    fig.append(img, cap);
    plotsGrid.appendChild(fig);
  });
  plotsSection.classList.remove('hidden');
  plotsSection.scrollIntoView({behavior:'smooth'});
}

/* ---------------- Current page (declared early: used by refreshChartColors) ---------------- */
const currentPage = 'settings';

/* ---------------- Theme handling ---------------- */
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeToggleSettings = document.getElementById('themeToggleSettings');
const sunPath = '<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/><circle cx="12" cy="12" r="5"/>';
const moonPath = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';

function applyTheme(t){
  root.setAttribute('data-theme', t);
  themeIcon.innerHTML = t === 'dark' ? sunPath : moonPath;
  if(themeToggleSettings){
    themeToggleSettings.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${t === 'dark' ? sunPath : moonPath}</svg>`;
  }
  refreshChartColors();
}
let currentTheme = 'dark';

function setTheme(t){
  currentTheme = t;
  applyTheme(currentTheme);
}
function toggleTheme(){
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}
if(themeToggleSettings) themeToggleSettings.addEventListener('click', toggleTheme);

/* ---------------- Mobile sidebar ---------------- */
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
document.getElementById('menuBtn').addEventListener('click', () => {
  sidebar.classList.add('open'); overlay.classList.add('show');
});
overlay.addEventListener('click', () => {
  sidebar.classList.remove('open'); overlay.classList.remove('show');
  closeProfileMenu();
});

/* ---------------- Profile dropdown ---------------- */
const profileWrap = document.getElementById('profileWrap');
const profileChip = document.getElementById('profileChip');
const profileMenu = document.getElementById('profileMenu');

function openProfileMenu(){
  profileMenu.classList.add('show');
  profileChip.classList.add('open');
}
function closeProfileMenu(){
  profileMenu.classList.remove('show');
  profileChip.classList.remove('open');
}

/* Avatar/name is a real link straight to profile.html.
   The small caret button opens the dropdown (settings/billing/sign out) — those are real links too. */
const chipCaretBtn = document.getElementById('chipCaretBtn');
chipCaretBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  profileMenu.classList.contains('show') ? closeProfileMenu() : openProfileMenu();
});

profileMenu.querySelector('.profile-menu-item.danger').addEventListener('click', (e) => {
  e.preventDefault();
  closeProfileMenu();
  alert('Signed out (demo only).');
});

/* ---------------- Menu search ---------------- */
const menuSearchItems = [
  { label:'Dashboard',  href:'dashboard.html',  icon:'<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>' },
  { label:'Analytics',  href:'analytics.html',  icon:'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9M13 17V5M8 17v-4"/>' },
  { label:'Customers',  href:'customers.html',  icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
  { label:'Orders',     href:'orders.html',     icon:'<path d="M20 12V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9"/><path d="M14 2v6h6"/><path d="M16 17.5l2 2 4-4"/>' },
  { label:'Billing',    href:'billing.html',    icon:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>' },
  { label:'Messages',   href:'messages.html',   icon:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>' },
  { label:'Settings',   href:'settings.html',   icon:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.13.47.4.9.76 1.24.36.34.79.6 1.24.76.13 0 .25.09.36.16"/>' },
  { label:'Logout',     action:'logout',        icon:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>', danger:true }
];

const menuSearchInput = document.getElementById('menuSearchInput');
const searchResults = document.getElementById('searchResults');
const searchWrap = document.getElementById('searchWrap');

function performLogout(){
  alert('Signed out (demo only).');
}

function searchItemHtml(item, isFirst){
  const cls = 'search-result-item' + (item.danger ? ' danger' : '') + (isFirst ? ' active' : '');
  const icon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${item.icon}</svg>`;
  if(item.action === 'logout'){
    return `<div class="${cls}" data-action="logout">${icon}${item.label}</div>`;
  }
  return `<a class="${cls}" href="${item.href}">${icon}${item.label}</a>`;
}

/* query === '' shows the full sidebar menu (used on focus); otherwise filters by label */
function renderSearchResults(query){
  const q = query.trim().toLowerCase();
  const matches = q ? menuSearchItems.filter(item => item.label.toLowerCase().includes(q)) : menuSearchItems;

  if(matches.length === 0){
    searchResults.innerHTML = `<div class="search-result-empty">No results found for "${query}"</div>`;
    searchResults.classList.add('show');
    return;
  }
  searchResults.innerHTML = matches.map((item, i) => searchItemHtml(item, i === 0)).join('');
  searchResults.classList.add('show');
}

if(menuSearchInput){
  /* Clicking/focusing into the search box opens the full sidebar menu right away */
  menuSearchInput.addEventListener('focus', () => renderSearchResults(menuSearchInput.value));

  menuSearchInput.addEventListener('input', (e) => renderSearchResults(e.target.value));

  menuSearchInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      const q = menuSearchInput.value.trim().toLowerCase();
      const match = q
        ? menuSearchItems.find(item => item.label.toLowerCase().includes(q))
        : null;
      if(!match){
        searchResults.innerHTML = `<div class="search-result-empty">No results found for "${menuSearchInput.value}"</div>`;
        searchResults.classList.add('show');
        return;
      }
      if(match.action === 'logout'){
        performLogout();
      } else {
        window.location.href = match.href;
      }
    }
    if(e.key === 'Escape'){
      searchResults.classList.remove('show');
      menuSearchInput.blur();
    }
  });

  searchResults.addEventListener('click', (e) => {
    const item = e.target.closest('[data-action="logout"]');
    if(item) performLogout();
  });

  document.addEventListener('click', (e) => {
    if(searchWrap && !searchWrap.contains(e.target)){
      searchResults.classList.remove('show');
    }
  });
}

/* ---------------- Theme toggle (instant switch) ---------------- */


const themeWrap = document.getElementById('themeWrap');
themeToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  closeProfileMenu();
  toggleTheme();
});

/* close any open dropdown when clicking outside */
document.addEventListener('click', (e) => {
  if(!profileWrap.contains(e.target)) closeProfileMenu();
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){ closeProfileMenu(); }
});

/* ---------------- Chart helpers ---------------- */
function cssVar(name){ return getComputedStyle(root).getPropertyValue(name).trim(); }

let mainChart, donutChart, analyticsChart;
const sparkCharts = [];

function buildSparklines(){
  const sparkData = [
    [4,6,5,8,7,9,12],
    [3,4,4,6,5,7,8],
    [8,6,7,5,6,4,5],
    [5,4,5,3,4,3,2]
  ];
  const colors = [cssVar('--accent'), cssVar('--good'), cssVar('--warn'), cssVar('--bad')];
  ['spark1','spark2','spark3','spark4'].forEach((id, i) => {
    const ctx = document.getElementById(id);
    if(!ctx) return;
    if(sparkCharts[i]) sparkCharts[i].destroy();
    sparkCharts[i] = new Chart(ctx, {
      type:'line',
      data:{ labels: sparkData[i].map((_,x)=>x), datasets:[{
        data: sparkData[i], borderColor: colors[i], borderWidth:2,
        pointRadius:0, tension:.4, fill:true,
        backgroundColor: colors[i] + '22'
      }]},
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{ legend:{display:false}, tooltip:{enabled:false} },
        scales:{ x:{display:false}, y:{display:false} },
        elements:{ line:{ borderJoinStyle:'round' } }
      }
    });
  });
}

function buildMainChart(){
  const ctx = document.getElementById('mainChart');
  if(!ctx) return;
  const textMuted = cssVar('--text-muted');
  const border = cssVar('--border');
  if(mainChart) mainChart.destroy();
  mainChart = new Chart(ctx, {
    type:'line',
    data:{
      labels:['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      datasets:[
        {
          label:'Revenue', data:[42,48,45,58,63,60,72],
          borderColor: cssVar('--accent'), backgroundColor: cssVar('--accent') + '26',
          fill:true, tension:.4, borderWidth:2.5, pointRadius:0, pointHoverRadius:5,
          pointBackgroundColor: cssVar('--accent'), yAxisID:'y'
        },
        {
          label:'Orders', data:[28,30,26,34,38,33,41],
          borderColor: cssVar('--good'), backgroundColor:'transparent',
          fill:false, tension:.4, borderWidth:2.5, borderDash:[5,4], pointRadius:0, pointHoverRadius:5,
          pointBackgroundColor: cssVar('--good'), yAxisID:'y'
        }
      ]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      interaction:{ mode:'index', intersect:false },
      plugins:{ legend:{ display:false } },
      scales:{
        x:{ grid:{ display:false }, ticks:{ color:textMuted, font:{family:'Inter', size:11.5} } },
        y:{ grid:{ color:border }, ticks:{ color:textMuted, font:{family:'JetBrains Mono', size:11}, callback:v=>'$'+v+'k' }, border:{display:false} }
      }
    }
  });
}

function buildDonutChart(){
  const ctx = document.getElementById('donutChart');
  if(!ctx) return;
  if(donutChart) donutChart.destroy();
  donutChart = new Chart(ctx, {
    type:'doughnut',
    data:{
      labels:['Organic Search','Direct','Social','Referral'],
      datasets:[{
        data:[42,27,19,12],
        backgroundColor:['#5B8CFF','#22D3A5','#F5A623','#8B6BFF'],
        borderColor: cssVar('--surface'), borderWidth:3, hoverOffset:6
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false, cutout:'72%',
      plugins:{ legend:{ display:false } }
    }
  });
}

function buildAnalyticsChart(){
  const ctx = document.getElementById('analyticsChart');
  if(!ctx) return;
  const textMuted = cssVar('--text-muted');
  const border = cssVar('--border');
  if(analyticsChart) analyticsChart.destroy();
  analyticsChart = new Chart(ctx, {
    type:'bar',
    data:{
      labels:['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      datasets:[
        { label:'Desktop', data:[38,41,36,44,49,45,52], backgroundColor:'#5B8CFF', borderRadius:5, maxBarThickness:16 },
        { label:'Mobile', data:[22,26,24,29,33,31,37], backgroundColor:'#22D3A5', borderRadius:5, maxBarThickness:16 },
        { label:'Tablet', data:[6,7,6,8,9,8,10], backgroundColor:'#F5A623', borderRadius:5, maxBarThickness:16 }
      ]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{
        x:{ grid:{ display:false }, ticks:{ color:textMuted, font:{family:'Inter', size:11.5} } },
        y:{ grid:{ color:border }, ticks:{ color:textMuted, font:{family:'JetBrains Mono', size:11}, callback:v=>v+'k' }, border:{display:false} }
      }
    }
  });
}

function refreshChartColors(){
  buildSparklines();
  buildMainChart();
  buildDonutChart();
  if(currentPage === 'analytics') buildAnalyticsChart();
}

/* ---------------- Customers data ---------------- */
const customers = [
  {name:'Priya Sharma', email:'priya@nimbustech.io', plan:'Enterprise', status:'active', mrr:1240, joined:'Feb 14, 2026', initials:'PS', color:'#5B8CFF'},
  {name:'Daniel Osei', email:'daniel@brightloop.com', plan:'Growth', status:'active', mrr:480, joined:'Jan 29, 2026', initials:'DO', color:'#22D3A5'},
  {name:'Mei Lin', email:'mei.lin@forgeworks.co', plan:'Starter', status:'pending', mrr:90, joined:'Jul 02, 2026', initials:'ML', color:'#F5A623'},
  {name:'Carlos Rivas', email:'carlos@rivastudio.com', plan:'Growth', status:'active', mrr:480, joined:'Nov 18, 2025', initials:'CR', color:'#8B6BFF'},
  {name:'Fatima Noor', email:'fatima@aureadigital.pk', plan:'Enterprise', status:'churned', mrr:0, joined:'Mar 08, 2025', initials:'FN', color:'#F16A6A'},
  {name:'Jonas Weber', email:'jonas@weberlabs.de', plan:'Starter', status:'active', mrr:90, joined:'Jun 21, 2026', initials:'JW', color:'#5B8CFF'},
];

function customerRowsHtml(list){
  return list.map(c => `
    <tr>
      <td data-label="Customer">
        <div class="cust">
          <div class="cust-avatar" style="background:${c.color}">${c.initials}</div>
          <div>
            <div class="cust-name">${c.name}</div>
            <div class="cust-email">${c.email}</div>
          </div>
        </div>
      </td>
      <td data-label="Plan">${c.plan}</td>
      <td data-label="Status"><span class="pill ${c.status}">${c.status.charAt(0).toUpperCase()+c.status.slice(1)}</span></td>
      <td data-label="MRR" class="amount">$${c.mrr}</td>
      <td data-label="Joined">${c.joined}</td>
      <td data-label=""><span class="row-actions">•••</span></td>
    </tr>
  `).join('');
}

function renderTable(){
  const tbody = document.getElementById('tableBody');
  if(tbody) tbody.innerHTML = customerRowsHtml(customers);
  const custTbody = document.getElementById('customersTableBody');
  if(custTbody) custTbody.innerHTML = customerRowsHtml(customers);
}

/* ---------------- Orders data ---------------- */
const orders = [
  {id:'#8841', customer:'Priya Sharma', status:'fulfilled', amount:129.00, date:'Jul 15, 2026'},
  {id:'#8840', customer:'Daniel Osei', status:'pending', amount:64.50, date:'Jul 15, 2026'},
  {id:'#8839', customer:'Mei Lin', status:'pending', amount:38.00, date:'Jul 14, 2026'},
  {id:'#8838', customer:'Carlos Rivas', status:'fulfilled', amount:212.90, date:'Jul 14, 2026'},
  {id:'#8837', customer:'Fatima Noor', status:'refunded', amount:76.20, date:'Jul 13, 2026'},
  {id:'#8836', customer:'Jonas Weber', status:'fulfilled', amount:54.00, date:'Jul 13, 2026'},
];

function renderOrders(){
  const tbody = document.getElementById('ordersTableBody');
  if(!tbody) return;
  tbody.innerHTML = orders.map(o => `
    <tr>
      <td data-label="Order" class="amount">${o.id}</td>
      <td data-label="Customer">${o.customer}</td>
      <td data-label="Status"><span class="pill ${o.status}">${o.status.charAt(0).toUpperCase()+o.status.slice(1)}</span></td>
      <td data-label="Amount" class="amount">$${o.amount.toFixed(2)}</td>
      <td data-label="Date">${o.date}</td>
      <td data-label=""><span class="row-actions">•••</span></td>
    </tr>
  `).join('');
}

/* ---------------- Billing data ---------------- */
const invoices = [
  {id:'INV-2026-07', date:'Jul 01, 2026', status:'paid', amount:249.00},
  {id:'INV-2026-06', date:'Jun 01, 2026', status:'paid', amount:249.00},
  {id:'INV-2026-05', date:'May 01, 2026', status:'paid', amount:199.00},
  {id:'INV-2026-04', date:'Apr 01, 2026', status:'paid', amount:199.00},
];

function renderBilling(){
  const tbody = document.getElementById('billingTableBody');
  if(!tbody) return;
  tbody.innerHTML = invoices.map(i => `
    <tr>
      <td data-label="Invoice" class="amount">${i.id}</td>
      <td data-label="Date">${i.date}</td>
      <td data-label="Status"><span class="pill ${i.status}">${i.status.charAt(0).toUpperCase()+i.status.slice(1)}</span></td>
      <td data-label="Amount" class="amount">$${i.amount.toFixed(2)}</td>
      <td data-label=""><span class="row-actions">Download</span></td>
    </tr>
  `).join('');
}

/* ---------------- Messages data ---------------- */
const messages = [
  {name:'Priya Sharma', initials:'PS', color:'#5B8CFF', preview:'Can we get an invoice update for last month?', time:'9:42 AM', unread:true},
  {name:'Daniel Osei', initials:'DO', color:'#22D3A5', preview:'Thanks for the quick fix, all working now.', time:'Yesterday', unread:true},
  {name:'Mei Lin', initials:'ML', color:'#F5A623', preview:'Following up on the onboarding call.', time:'Yesterday', unread:true},
  {name:'Carlos Rivas', initials:'CR', color:'#8B6BFF', preview:'Is the Growth plan able to support 3 seats?', time:'Jul 14', unread:true},
  {name:'Fatima Noor', initials:'FN', color:'#F16A6A', preview:'We may need to pause the subscription.', time:'Jul 12', unread:false},
  {name:'Jonas Weber', initials:'JW', color:'#5B8CFF', preview:'Great, looking forward to the update.', time:'Jul 10', unread:false},
];

function renderMessages(){
  const list = document.getElementById('messagesList');
  if(!list) return;
  list.innerHTML = messages.map(m => `
    <div class="msg-row ${m.unread ? 'unread' : ''}">
      <div class="cust-avatar" style="background:${m.color}">${m.initials}</div>
      <div class="msg-body">
        <div class="msg-top-row">
          <div class="msg-name">${m.name}</div>
          <div class="msg-time">${m.time}</div>
        </div>
        <div class="msg-preview">${m.preview}</div>
      </div>
    </div>
  `).join('');
}

/* ---------------- Current page ----------------
   Each page now lives at its own real URL (dashboard.html, orders.html, ...).
   The sidebar link for this page already has class="nav-item active" baked in,
   so no JS page-switching is needed — clicking a sidebar link or the profile
   avatar is a normal browser navigation to a new page. */

/* ---------------- Misc UI interactivity ---------------- */
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const group = tab.parentElement;
    group.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});
document.querySelectorAll('.seg button').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.parentElement;
    group.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

/* ---------------- Init ---------------- */
renderTable();
renderOrders();
renderBilling();
renderMessages();
applyTheme(currentTheme); // called here (not at top) so it runs only after chart/page vars below exist
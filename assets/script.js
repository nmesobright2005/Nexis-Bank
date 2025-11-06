function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    closeMobileMenu();
    if (id === 'landing' || id === 'dashboard') setTimeout(animateCharts, 300);
}

const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
function closeMobileMenu() { mobileMenu.classList.remove('open'); }

function handleGetStarted(e) {
    e.preventDefault();
    alert('Account created! Welcome to NEXIS.');
    showPage('dashboard');
}

let balanceVisible = true;
function toggleBalance() {
    const el = document.getElementById('totalBalance');
    el.textContent = balanceVisible ? '•••••••' : '$126,543.82';
    balanceVisible = !balanceVisible;
}

function animateCharts() {
    const heights = [45, 52, 48, 60, 55, 65, 58, 70, 68, 75, 72, 80, 78, 85, 90, 88, 92, 85, 88, 95];
    const container = document.getElementById('landing').classList.contains('active')
        ? document.getElementById('portfolioChart')
        : document.getElementById('dashboardChart');
    if (!container) return;
    container.innerHTML = '';
    heights.forEach((h, i) => {
        const bar = document.createElement('div');
        bar.className = 'flex-1 bg-gradient-to-t from-blue-500/50 to-purple-500 rounded-t chart-bar';
        bar.style.height = '0%';
        container.appendChild(bar);
        setTimeout(() => {
            bar.style.height = h + '%';
            bar.classList.add('animate');
        }, i * 50);
    });
}

document.addEventListener('DOMContentLoaded', () => animateCharts());
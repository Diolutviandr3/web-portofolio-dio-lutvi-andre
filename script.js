// FUNGSI NAVIGASI YANG DISEMPURNAKAN
function showPage(pageId) {
    // 1. Sembunyikan semua section halaman
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.add('hidden'));

    // 2. Tampilkan halaman yang dituju
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }

    // 3. Update status aktif pada menu navigasi atas
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('text-blue-500', 'font-bold');
        
        // Jika teks tombol menu mengandung kata dari pageId, beri warna biru
        if (link.innerText.toLowerCase().includes(pageId.toLowerCase())) {
            link.classList.add('text-blue-500', 'font-bold');
        }
    });
    
    // 4. Scroll ke posisi paling atas setiap ganti halaman
    window.scrollTo(0, 0);
}

// Pastikan halaman Home muncul pertama kali saat website dibuka
document.addEventListener('DOMContentLoaded', () => {
    renderAll(); // Memanggil fungsi render data Anda
    showPage('home'); 
});

// DATA DINAMIS BERDASARKAN CV
const experiences = [
    { title: "SEO Content Writer & Web Design Intern", org: "PT Dieng Cyber Indonesia", year: "2024", type: "Magang" },
    { title: "Master of Ceremony PPK FST", org: "Universitas Ahmad Dahlan", year: "2025", type: "Organisasi" },
    { title: "Narasumber Seminar Mahasiswa Nasional", org: "Dari Kampus untuk Negeri", year: "2025", type: "Prestasi" },
    { title: "Wakil Bidang Kaderisasi", org: "IPNU-IPPNU PAC Wadaslintang", year: "2024", type: "Organisasi" },
    { title: "Ketua & Penanggung Jawab Dewan Ambalan", org: "SMKN 1 Wadaslintang", year: "2023", type: "Leadership" }
];

const skills = [
    "React", "Python", "SQL Database", "Web Design", "UI Design", 
    "SEO Content Writer", "Photography", "Public Speaking", 
    "Leadership", "Teamwork", "Problem Solving"
];

const certs = [
    { title: "Rank 2 Best Use of Data", issuer: "International Youth Camp", year: "2025" },
    { title: "3rd Winner Essay Competition", issuer: "International Seminar #3", year: "2025" },
    { title: "Juara 1 Motret Kategori Negative Space", issuer: "Tingkat Nasional", year: "2024" },
    { title: "Belajar Dasar AI", issuer: "Dicoding Indonesia", year: "2025" },
    { title: "Google Student Ambassador Attendee", issuer: "Google Indonesia", year: "2025" }
];

const articles = [
    { title: "Juara 3 Presenter Terbaik (Teknologi)", event: "Kompetisi Artikel Ilmiah Nasional", year: "2025" },
    { title: "Harapan 1 Artikel Terbaik", event: "Kompetisi Artikel Ilmiah Nasional", year: "2025" },
    { title: "Karya Tulis Ilmiah Al-Qur'an", event: "Seleksi Internal MTQMN UAD", year: "2025" }
];

// FUNGSI RENDER DATA
function renderAll() {
    // Render Experiences
    const expDiv = document.getElementById('experience-render');
    experiences.forEach(item => {
        expDiv.innerHTML += `
            <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-blue-500 transition group">
                <span class="text-blue-500 text-[10px] font-bold uppercase tracking-widest">${item.type}</span>
                <h3 class="text-xl font-bold text-white mt-1 group-hover:text-blue-400 transition">${item.title}</h3>
                <p class="text-sm text-zinc-500">${item.org} • ${item.year}</p>
            </div>`;
    });

    // Render Skills
    const skillDiv = document.getElementById('skills-render');
    skills.forEach(s => {
        skillDiv.innerHTML += `
            <span class="bg-zinc-800/50 px-4 py-2 rounded-full text-xs font-semibold border border-zinc-700 hover:border-blue-500 transition cursor-default">
                ${s}
            </span>`;
    });

    // Render Certifications
    const certDiv = document.getElementById('cert-render');
    certs.forEach(item => {
        certDiv.innerHTML += `
            <div class="bg-zinc-900/40 p-5 rounded-lg border border-zinc-800 hover:bg-zinc-800/50 transition">
                <h4 class="font-bold text-white text-sm">${item.title}</h4>
                <p class="text-[10px] text-zinc-500 mt-1 uppercase">${item.issuer} — ${item.year}</p>
            </div>`;
    });

    // Render Articles
    const artDiv = document.getElementById('article-render');
    articles.forEach(item => {
        artDiv.innerHTML += `
            <div class="border-l-4 border-blue-600 pl-6 py-3 bg-zinc-900/20 rounded-r-xl">
                <h4 class="font-bold text-white">${item.title}</h4>
                <p class="text-sm text-zinc-500 italic">${item.event} • ${item.year}</p>
            </div>`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderAll();
    showPage('home'); // Tampilkan halaman home saat pertama buka
});
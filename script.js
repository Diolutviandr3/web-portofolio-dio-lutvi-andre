// FUNGSI NAVIGASI YANG DISEMPURNAKAN
function showPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.add('hidden'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('text-blue-500', 'font-bold');
        if (link.innerText.toLowerCase().includes(pageId.toLowerCase())) {
            link.classList.add('text-blue-500', 'font-bold');
        }
    });
    
    window.scrollTo(0, 0);
}

const skills = ["React", "Python", "SQL Database", "Web Design", "UI Design", "SEO Content Writer", "Photography", "Public Speaking", "Leadership", "Teamwork", "Problem Solving"];

// Data Pengalaman Dio Lutvi Andre
const experiences = [
   { 
        title: "Protokoler Universitas Ahmad Dahlan", 
        org: "Bidang Humas dan Protokol Universitas Ahmad Dahlan", 
        year: "2026", 
        type: "Internship",
        imgUrl: "imgexper/foto-bhp-uad.jpg", 
        credentialUrl: "https://drive.google.com/file/d/1U81GZwLDeFK77qyKF1gM_glmcXBDbMr1/view?usp=drive_link"
    },
    { 
        title: "Sekretaris II Departemen Pengabdian Masyarakat", 
        org: "PKM-Center Universitas Ahmad Dahlan", 
        year: "2025", 
        type: "Organisasi",
        imgUrl: "imgexper/foto-pkmc.jpg", 
        credentialUrl: "https://drive.google.com/file/d/13rLHpwphcU-ZlEth6Era92DtswkVsrDr/view?usp=drive_link"
    },
    { 
        title: "Master of Ceremony P2K FAST", 
        org: "Universitas Ahmad Dahlan", 
        year: "2025", 
        type: "Organisasi",
        imgUrl: "imgexper/foto-mc-p2k.jpg", 
        credentialUrl: "https://drive.google.com/file/d/14F1jiBNZZeGRXIz5e7TRSSi7QosdoyrY/view?usp=drive_link"
    },
    { 
        title: "Narasumber Seminar Mahasiswa Nasional dari Kampus untuk Negeri: Akselerasi SDGs", 
        org: "Nasional - Universitas Ahmad Dahlan", 
        year: "2025", 
        type: "Pengabdian",
        imgUrl: "imgexper/sertifikat-narasumber-seminar-nasional-akselerasi.jpg", 
        credentialUrl: "https://drive.google.com/file/d/16ugaLkSoRzrh24QbYsBBwwAGY33vvxxa/view?usp=drive_link"
    },
    { 
        title: "Volunteer National Student Leaders on Sustainability Meeting", 
        org: "Nasional - UI Green Metric dan Universitas Airlangga", 
        year: "2025", 
        type: "Pengabdian",
        imgUrl: "imgexper/sertifikat-nslsm.jpg", 
        credentialUrl: "https://drive.google.com/file/d/1B6I9RALJTMXs-y_kSQSL-9Whp4VohS0o/view?usp=drive_link"
    },
    { 
        title: "Sahabat Dahlan Muda - P2K FAST", 
        org: "Universitas Ahmad Dahlan", 
        year: "2025", 
        type: "Pengabdian",
        imgUrl: "imgexper/sertifikat-sahabat-dahlan-muda-p2k.jpg", 
        credentialUrl: "https://drive.google.com/file/d/1FbZenOouGj8fnlABpNrfnByE0-vIJwYM/view?usp=drive_link"
    },
    { 
        title: "SEO Content Writer & Web Design Intern", 
        org: "PT Dieng Cyber Indonesia", 
        year: "2024", 
        type: "Magang",
        imgUrl: "imgexper/sertifikat-magang-pt-diengcyber.jpg", 
        credentialUrl: "https://drive.google.com/file/d/1bXF3pL3aKLHG1C6ELJATeblON9zLRDHt/view?usp=drive_link"
    },
    { 
        title: "Pembelajaran Industri BOC Indonesia", 
        org: "BOC Indonesia", 
        year: "2023", 
        type: "Web Development",
        imgUrl: "imgexper/sertifikat-ki.jpg", 
        credentialUrl: "https://drive.google.com/file/d/1yD6dl-k4NQPCWevG7d8bIkCNsUsi95iO/view?usp=drive_link"
    },
    { 
        title: "Ketua & Penanggung Jawab Dewan Ambalan", 
        org: "SMKN 1 Wadaslintang", 
        year: "2023", 
        type: "Leadership",
        imgUrl: "imgexper/sertifikat-da.jpg", 
        credentialUrl: "https://drive.google.com/file/d/1YgZhwy57N30OmLYHw3s-0AKN3izV1OH3/view?usp=drive_link"
    },
    { 
        title: "Ketua Rohani Islam", 
        org: "SMKN 1 Wadaslintang", 
        year: "2023", 
        type: "Leadership",
        imgUrl: "imgexper/sertifikat-rohani-islam.jpg", 
        credentialUrl: "https://drive.google.com/file/d/1uRWua00iMAQrfFxHzVkaRB8lHTNQygYV/view?usp=drive_link"
    }
];

const achievements = [
        { title: "Top 18 Mahasiswa Berprestasi Universitas", event: "Universitas Ahmad Dahlan", level: "Lokal", year: "2026" }, 
    { title: "1st Mahasiswa Berprestasi Fakultas Sains dan Teknologi Terapan", event: "Universitas Ahmad Dahlan", level: "Lokal", year: "2026" }, 

    { title: "Rank 2 Best Use of Data/Reference", event: "Ahmad Dahlan International Youth Camp", level: "International", year: "2025" }, 
    { title: "Rank 3 Dancing Category", event: "International Art Competition", level: "International", year: "2025" }, 
    { title: "3rd Winner Essay Competition", event: "Ahmad Dahlan International Seminar #3", level: "International", year: "2025" }, 
    { title: "1st Place Poster (Technology Category)", event: "National Poster Competition #3", level: "National", year: "2025" }, 
    { title: "1st Place Photography (Negative Space)", event: "National Photography Competition", level: "National", year: "2024" }, 
    { title: "2nd Winner Presenter", event: "Ahmad Dahlan Youth Camp", level: "International", year: "2024" }, 
    { title: "3rd Winner Article", event: "Ahmad Dahlan Youth Camp", level: "International", year: "2024" }, 
    { title: "Selected Participant", event: "Raimuna Nasional XII", level: "National", year: "2023" } 
];

const certs = [
    { 
        title: "Pengenalan Keamanan Siber", 
        issuer: "Nasional - Cisco Networking Academy & IDCamp", 
        year: "2025",
        imgUrl: "imgcertif/cybersecurity_certificate.jpg",
        credentialUrl: "https://drive.google.com/file/d/1CimmaU1WwAMSj-eu6E7L0Cj5WpAh8uFo/view?usp=drive_link"
    },
    { 
        title: "Pelatihan GIG Economy untuk Gen z di DIY", 
        issuer: "Nasional - Badan Perencanaan Pembangunan, Riset, dan Inovasi Daerah Daerah Istimewa Yogyakarta", 
        year: "2025",
        imgUrl: "imgcertif/pelatihan-gig-economy.jpg",
        credentialUrl: "https://drive.google.com/file/d/1OM4AhUarHN-C2bCW-Rz9ZbQq9Nqg7UOa/view?usp=drive_link"
    },
    { 
        title: "Pelatihan Essai Ahmad Dahlan International Youth Camp", 
        issuer: "International - UAD", 
        year: "2025",
        imgUrl: "imgcertif/sertifikat-pelatihan-esai-adiyc.jpg",
        credentialUrl: "https://drive.google.com/file/d/1qarMRnZsmJkGkO0tAbgjEa20HZEd5ScJ/view?usp=sharing"
    },
    { 
        title: "Branding Product By Canva", 
        issuer: "Nasional - UAD", 
        year: "2025",
        imgUrl: "imgcertif/sertifikat-branding-product-by-canva.jpg",
        credentialUrl: "https://drive.google.com/file/d/12a4r5CcBA9OPebUXuohhzY2S6W2VibD2/view?usp=drive_link"
    },
    { 
        title: "Training K3 Future Leader Programe TKBT", 
        issuer: "Nasional - Mutiara Mutu Sertifikasi", 
        year: "2025",
        imgUrl: "imgcertif/sertifikat-pelatihan-flp.jpg",
        credentialUrl: "https://drive.google.com/file/d/1wU6EC9Ze5ALyX8b5vdpwoIVOzeqwI9L4/view?usp=sharing"
    },
    { 
        title: "Belajar Dasar AI", 
        issuer: "Nasional - Dicoding Indonesia", 
        year: "2025",
        imgUrl: "imgcertif/sertifikat_course_belajar-dasar-ai.jpg",
        credentialUrl: "https://www.dicoding.com/certificates/0LZ050853X65" 
    },
    { 
        title: "Business Model Canvas for Beginners", 
        issuer: "Nasional - UAD", 
        year: "2025",
        imgUrl: "imgcertif/sertifikat-pelatihan-business-model-canvas.jpg",
        credentialUrl: "https://drive.google.com/file/d/1uDhJ6CMEalUqrS7Se4gIKvsM4q7XHGEs/view?usp=sharing" 
    },
    { 
        title: "Video Kreatif Wirausaha Mahasiswa", 
        issuer: "Nasional - UAD", 
        year: "2025",
        imgUrl: "imgcertif/sertifikat-pelatihan-video-kreatif-wirausaha-mahasiswa.jpg",
        credentialUrl: "https://drive.google.com/file/d/1L6xOy3ZFX7fatWIPs6ivS8E0FRIgxXkE/view?usp=sharing" 
    },
    { 
        title: "Pelatihan Publikasi Ilmiah", 
        issuer: "Nasional - UAD", 
        year: "2025",
        imgUrl: "imgcertif/sertifikat-pelatihan-publikasi-ilmiah.jpg",
        credentialUrl: "https://drive.google.com/file/d/1xSTSdcSMIKc1tahBABXCqpOs5dET9E1p/view?usp=sharing" 
    },
    { 
        title: "Maxy Talks", 
        issuer: "Nasional - Maxy Academy", 
        year: "2025",
        imgUrl: "imgcertif/sertifikat-maxy-talks.png",
        credentialUrl: "https://drive.google.com/file/d/10kDDlg6KJoJtv9s6ph5pT1rC4jRH_DQW/view?usp=drive_link" 
    },
    { 
        title: "Future Entrepreneur Summit", 
        issuer: "Nasional - FESt Management & BEM-KM UMY & BEM-KM FPB UMY", 
        year: "2024",
        imgUrl: "imgcertif/certificate-future-entrepreneur-summit.jpg",
        credentialUrl: "https://drive.google.com/file/d/1idCxIJOAKgvFb809la1TVgRVD2S-_gNF/view?usp=sharing" 
    },
    { 
        title: "Training Public Speaking ", 
        issuer: "Nasional - GROW PROJECT & BEM-KM UMY & BEM-KM FPB UMY", 
        year: "2024",
        imgUrl: "imgcertif/certificate-training-public-speaking.jpg",
        credentialUrl: "https://drive.google.com/file/d/1iCfAkH3UwUNb5ocQPVh92SBR_Wr7_mfQ/view?usp=sharing" 
    },
    { 
        title: "FEST GOROWORLD ASIA FUTUREPRENEUR SELECTION PROGRAM", 
        issuer: "FESt Goroworld & BEM-KM UMY & BEM-KM FPB UMY", 
        year: "2024",
        imgUrl: "imgcertif/certificate-FEST-GOROWORLD-ASIA.jpg",
        credentialUrl: "https://drive.google.com/file/d/11FSKJ_FXQpszRjAM-XxpQrSEWmxg2kvD/view?usp=drive_link" 
    },
    { 
        title: "Training Entrepreneurship", 
        issuer: "FESt Management & BEM-KM UMY & BEM-KM FPB UMY", 
        year: "2024",
        imgUrl: "imgcertif/certificate-entrepreneurship.jpg",
        credentialUrl: "https://drive.google.com/file/d/1G1X6gz0y5ZcAe92lOPoUQRgIGAVYmd53/view?usp=drive_link" 
    },
    { 
        title: "International Conference Educations", 
        issuer: "International - BEM FKIP UAD", 
        year: "2024",
        imgUrl: "imgcertif/Sertifikat-ICE.jpg",
        credentialUrl: "https://drive.google.com/file/d/1maYRJjzVdljlKnVoH8T3bOmhWGXhCkNO/view?usp=drive_link" 
    },
        { 
        title: "Motret Dasar", 
        issuer: "Nasional - Kelas Belajar Motret & UAD", 
        year: "2024",
        imgUrl: "imgcertif/sertifikat-kompetisi-motret.jpg",
        credentialUrl: "https://drive.google.com/file/d/1VH4YQvAi2rcUtZ9vULmgAhIPRrKmczHY/view?usp=drive_link" 
    },
        { 
        title: "Uji Kompetensi Keahlian Rekayasa Perangkat Lunak", 
        issuer: "Lokal - SMKN 1 Wadaslintang", 
        year: "2024",
        imgUrl: "imgcertif/sertifikat-ukk.jpg",
        credentialUrl: "https://drive.google.com/file/d/1okRc8GTp4Y2-W3JceAwSKclNQ27Hfv-a/view?usp=drive_link" 
    }
];

const articles = [
    { title: "Juara 3 Presenter Terbaik (Teknologi)", event: "Kompetisi Artikel Ilmiah Nasional", year: "2025" },
    { title: "Harapan 1 Artikel Terbaik", event: "Kompetisi Artikel Ilmiah Nasional", year: "2025" },
    { title: "Karya Tulis Ilmiah Al-Qur'an", event: "Seleksi Internal MTQMN UAD", year: "2025" }
];

// FUNGSI RENDER DATA
function renderAll() {
    // 1. Render Skills
    const skillDiv = document.getElementById('skills-render');
    if (skillDiv) {
        skillDiv.innerHTML = ''; 
        skills.forEach(s => {
            skillDiv.innerHTML += `
                <span class="bg-zinc-800/50 px-4 py-2 rounded-full text-xs font-semibold border border-zinc-700 hover:border-blue-500 transition cursor-default">
                    ${s}
                </span>`;
        });
    }

    // 2. Render Experiences (BAGIAN YANG DIPERBAIKI)
    const expDiv = document.getElementById('experience-render');
    if (expDiv) {
        expDiv.innerHTML = ''; // Bersihkan kontainer agar tidak double
        experiences.forEach(item => {
            expDiv.innerHTML += `
                <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-blue-500 transition group flex flex-col md:flex-row gap-6 items-center mb-6">
                    <div class="flex-1 text-left">
                        <span class="text-blue-500 text-[10px] font-bold uppercase tracking-widest">${item.type}</span>
                        <h3 class="text-xl font-bold text-white mt-1 group-hover:text-blue-400 transition">${item.title}</h3>
                        <p class="text-sm text-zinc-500">${item.org} • ${item.year}</p>
                        
                        <a href="${item.credentialUrl}" target="_blank" class="inline-block mt-4 text-[11px] font-bold text-blue-500 hover:text-blue-400 transition">
                            <i class="fas fa-external-link-alt mr-1"></i> Tampilkan Kredensial
                        </a>
                    </div>

                    <div class="w-full md:w-56 h-36 rounded-lg overflow-hidden bg-zinc-800 border border-zinc-700 shadow-lg">
                        <img src="${item.imgUrl}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                    </div>
                </div>`;
        });
    }

    // 3. Render Achievements
    const achDiv = document.getElementById('achievement-render');
    if (achDiv) {
        achDiv.innerHTML = ''; 
        // SETTING RESPONSIVE: 1 Kolom di HP, 2 Kolom di Laptop
        achDiv.className = "grid grid-cols-1 md:grid-cols-2 gap-6";

        achievements.forEach(item => {
            const isInternational = item.level === 'International';
            achDiv.innerHTML += `
                <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-blue-500 transition relative overflow-hidden group">
                    <div class="flex items-center gap-4 mb-3">
                        <div class="p-3 bg-blue-600/10 rounded-lg text-blue-500">
                            <i class="fas fa-trophy text-xl"></i>
                        </div>
                        <div>
                            <span class="text-[10px] font-bold ${isInternational ? 'text-amber-500' : 'text-zinc-500'} uppercase tracking-widest">
                                ${item.level} Achievement
                            </span>
                            <h3 class="text-lg font-bold text-white group-hover:text-blue-400 transition leading-tight">${item.title}</h3>
                        </div>
                    </div>
                    <p class="text-xs text-zinc-500 ml-14">${item.event} • ${item.year}</p>
                </div>`;
        });
    }

    // 4. Render Certifications
    const certDiv = document.getElementById('cert-render');
    if (certDiv) {
        certDiv.innerHTML = ''; 
        // SETTING RESPONSIVE: 1 Kolom di HP, 2 Kolom di Tablet, 3 Kolom di Laptop
        certDiv.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

        certs.forEach(item => {
            certDiv.innerHTML += `
                <div class="bg-zinc-900/40 rounded-xl border border-zinc-800 overflow-hidden hover:border-blue-500 transition group">
                    <div class="h-40 overflow-hidden bg-zinc-800">
                        <img src="${item.imgUrl}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                    </div>
                    <div class="p-5">
                        <h4 class="font-bold text-white text-sm line-clamp-1">${item.title}</h4>
                        <p class="text-[10px] text-zinc-500 mt-1 uppercase">${item.issuer} — ${item.year}</p>
                        <a href="${item.credentialUrl}" target="_blank" class="inline-block mt-4 text-[11px] font-bold text-blue-500 hover:text-blue-400 transition">
                            <i class="fas fa-external-link-alt mr-1"></i> Tampilkan Kredensial
                        </a>
                    </div>
                </div>`;
        });
    }

    // 5. Render Articles
    const artDiv = document.getElementById('article-render');
    if (artDiv) {
        artDiv.innerHTML = ''; 
        articles.forEach(item => {
            artDiv.innerHTML += `
                <div class="border-l-4 border-blue-600 pl-6 py-3 bg-zinc-900/20 rounded-r-xl mb-4">
                    <h4 class="font-bold text-white">${item.title}</h4>
                    <p class="text-sm text-zinc-500 italic">${item.event} • ${item.year}</p>
                </div>`;
        });
    }
}

// HANYA ADA SATU EVENT LISTENER DI SINI
document.addEventListener('DOMContentLoaded', () => {
    renderAll();
    showPage('home'); 
});
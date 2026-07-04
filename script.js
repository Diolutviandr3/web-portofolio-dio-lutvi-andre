// FUNGSI NAVIGASI YANG DISEMPURNAKAN DENGAN ANIMASI TRANSISI
function showPage(pageId) {
    const activePage = document.querySelector('.page-content.page-visible');
    const targetPage = document.getElementById(pageId);
    
    if (!targetPage) return;
    
    // Update active class on nav links (desktop)
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('nav-active');
        if (link.getAttribute('onclick')?.includes(`'${pageId}'`)) {
            link.classList.add('nav-active');
        }
    });

    // Close mobile drawer menu if open
    closeMobileMenu();

    if (activePage) {
        if (activePage === targetPage) return;
        
        // Animasi keluar halaman aktif saat ini
        activePage.classList.remove('page-visible');
        
        setTimeout(() => {
            activePage.classList.add('hidden');
            
            // Animasi masuk halaman target
            targetPage.classList.remove('hidden');
            // Trigger reflow to start transition
            targetPage.offsetHeight; 
            targetPage.classList.add('page-visible');
            
            // Re-initialise scroll animations on the newly opened page
            initScrollReveal();
            
            // Run special animations based on page
            if (pageId === 'home') {
                animateCounters();
            }
        }, 300);
    } else {
        // First load
        targetPage.classList.remove('hidden');
        targetPage.offsetHeight;
        targetPage.classList.add('page-visible');
        initScrollReveal();
        
        if (pageId === 'home') {
            animateCounters();
        }
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Menu Navigation Toggle Logic
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const burger = document.getElementById('burger-icon');
    if (menu && burger) {
        const isOpen = !menu.classList.contains('hidden');
        if (isOpen) {
            closeMobileMenu();
        } else {
            menu.classList.remove('hidden');
            setTimeout(() => {
                menu.classList.remove('opacity-0', '-translate-y-4');
            }, 10);
            burger.innerHTML = '<i class="fas fa-times text-xl"></i>';
        }
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const burger = document.getElementById('burger-icon');
    if (menu && burger) {
        menu.classList.add('opacity-0', '-translate-y-4');
        burger.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        setTimeout(() => {
            menu.classList.add('hidden');
        }, 300);
    }
}

// Data Skills
const skills = ["Front End", "Python", "SQL Database", "Web Design", "UI Design", "SEO Content Writer", "Photography", "Public Speaking", "Leadership", "Teamwork", "Problem Solving", "Volunteer"];

// Data Pengalaman Dio Lutvi Andre
const experiences = [
    { 
        title: "Google Student Ambassador", 
        org: "Team Google Indonesia", 
        year: "2026", 
        type: "Ambassador",
        imgUrl: "imgexper/foto-gsa.png", 
        credentialUrl: "https://www.instagram.com/p/DWlfhOxEoxh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
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
        type: "Internship",
        imgUrl: "imgexper/sertifikat-magang-pt-diengcyber.jpg", 
        credentialUrl: "https://drive.google.com/file/d/1bXF3pL3aKLHG1C6ELJATeblON9zLRDHt/view?usp=drive_link"
    },
    { 
        title: "Pembelajaran Industri BOC Indonesia", 
        org: "BOC Indonesia", 
        year: "2023", 
        type: "Internship",
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

// Data Prestasi (Achievements)
const achievements = [
    { 
        title: "Top 18 Mahasiswa Berprestasi Universitas", 
        event: "Universitas Ahmad Dahlan", 
        level: "Lokal", 
        year: "2026",
        credentialUrl: "https://drive.google.com/drive/folders/1zJe4uiqLu4DiKSqGwNRIdz-rkwmCS_5v?usp=drive_link"
    }, 
    { 
        title: "1st Mahasiswa Berprestasi Fakultas Sains dan Teknologi Terapan", 
        event: "Universitas Ahmad Dahlan", 
        level: "Lokal", 
        year: "2026",
        credentialUrl: "https://drive.google.com/drive/folders/1zJe4uiqLu4DiKSqGwNRIdz-rkwmCS_5v?usp=drive_link"
    }, 
    { 
        title: "Rank 2 Best Use of Data/Reference", 
        event: "Ahmad Dahlan International Youth Camp", 
        level: "International", 
        year: "2025",
        credentialUrl: "https://kumparan.com/universitas-ahmad-dahlan/mahasiswa-uad-ukir-prestasi-di-kancah-nasional-dan-global-27J3oLbStf9"
    }, 
    { 
        title: "Rank 3 Dancing Category", 
        event: "International Art Competition", 
        level: "International", 
        year: "2025",
        credentialUrl: "https://drive.google.com/drive/folders/1zJe4uiqLu4DiKSqGwNRIdz-rkwmCS_5v?usp=drive_link"
    }, 
    { 
        title: "3rd Winner Essay Competition", 
        event: "Ahmad Dahlan International Seminar #3", 
        level: "International", 
        year: "2025",
        credentialUrl: "https://lldikti5.kemdiktisaintek.go.id/home/detailpost/mahasiswa-uad-sabet-beragam-penghargaan-nasional-dan-internasional"
    }, 
    { 
        title: "1st Place Poster (Technology Category)", 
        event: "National Poster Competition #3", 
        level: "National", 
        year: "2025",
        credentialUrl: "https://drive.google.com/drive/folders/1zJe4uiqLu4DiKSqGwNRIdz-rkwmCS_5v?usp=drive_link"
    }, 
    { 
        title: "1st Place Photography (Negative Space)", 
        event: "National Photography Competition", 
        level: "National", 
        year: "2024",
        credentialUrl: "https://drive.google.com/file/d/1VH4YQvAi2rcUtZ9vULmgAhIPRrKmczHY/view?usp=drive_link"
    }, 
    { 
        title: "2nd Winner Presenter", 
        event: "Ahmad Dahlan Youth Camp", 
        level: "International", 
        year: "2024",
        credentialUrl: "https://lldikti5.kemdiktisaintek.go.id/home/detailpost/pengumuman-best-article-dan-best-presenter-adyc-2024"
    }, 
    { 
        title: "3rd Winner Article", 
        event: "Ahmad Dahlan Youth Camp", 
        level: "International", 
        year: "2024",
        credentialUrl: "https://lldikti5.kemdiktisaintek.go.id/home/detailpost/pengumuman-best-article-dan-best-presenter-adyc-2024"
    }, 
    { 
        title: "Selected Participant", 
        event: "Raimuna Nasional XII", 
        level: "National", 
        year: "2023",
        credentialUrl: "https://drive.google.com/drive/folders/1zJe4uiqLu4DiKSqGwNRIdz-rkwmCS_5v?usp=drive_link"
    } 
];

// Data Sertifikasi Profesional
const certs = [
    { 
        title: "Gemini Certified Educator", 
        issuer: "Nasional - Google for Education", 
        year: "April 2026",
        imgUrl: "imgcertif/4-google.jpg",
        credentialUrl: "https://edu.google.accredible.com/a3ebc8f5-e7f7-4cac-b482-a529fdd6495b#acc.R04Ttl9L"
    },
    { 
        title: "Gemini Certified Faculty", 
        issuer: "Nasional - Google for Education", 
        year: "April 2026",
        imgUrl: "imgcertif/3-google.jpg",
        credentialUrl: "https://edu.google.accredible.com/50464396-e594-439c-95b6-0fe44d83fc01?key=57eb4ede734141197ee0537797e94f32f2e74ff58da768a5bb4e70c595327e34"
    },
    { 
        title: "Gemini Certified University Student ", 
        issuer: "Nasional - Google for Education", 
        year: "April 2026",
        imgUrl: "imgcertif/2-google.jpg",
        credentialUrl: "https://edu.google.accredible.com/592f7c82-2b45-4469-a948-871de52af3f4#acc.kmTPSctI"
    },
    { 
        title: "Next-Level Google Tools Hacks & Must Have Google Certifications", 
        issuer: "Nasional - Google for Education and Commissioned by Google Indonesia", 
        year: "April 2026",
        imgUrl: "imgcertif/1-google.jpg",
        credentialUrl: "https://drive.google.com/file/d/1xxU8yAzSrUzoVoflcjAVIp0hQt2un25T/view?usp=drive_link"
    },
    { 
        title: "Pengenalan Keamanan Siber", 
        issuer: "Nasional - Cisco Networking Academy & IDCamp", 
        year: "Maret 2026",
        imgUrl: "imgcertif/cybersecurity_certificate.jpg",
        credentialUrl: "https://drive.google.com/file/d/1CimmaU1WwAMSj-eu6E7L0Cj5WpAh8uFo/view?usp=drive_link"
    },
    { 
        title: "Pelatihan GIG Economy untuk Gen z di DIY", 
        issuer: "Nasional - Badan Perencanaan Pembangunan, Riset, dan Inovasi Daerah Daerah Istimewa Yogyakarta", 
        year: "Januari 2026",
        imgUrl: "imgcertif/pelatihan-gig-economy.jpg",
        credentialUrl: "https://drive.google.com/file/d/1OM4AhUarHN-C2bCW-Rz9ZbQq9Nqg7UOa/view?usp=drive_link"
    },
    { 
        title: "Belajar Dasar AI", 
        issuer: "Nasional - Dicoding Indonesia", 
        year: "Januari 2026",
        imgUrl: "imgcertif/sertifikat_course_belajar-dasar-ai.jpg",
        credentialUrl: "https://www.dicoding.com/certificates/0LZ050853X65" 
    },
    { 
        title: "Pelatihan Essai Ahmad Dahlan International Youth Camp", 
        issuer: "International - UAD", 
        year: "Oktober 2025",
        imgUrl: "imgcertif/sertifikat-pelatihan-esai-adiyc.jpg",
        credentialUrl: "https://drive.google.com/file/d/1qarMRnZsmJkGkO0tAbgjEa20HZEd5ScJ/view?usp=sharing"
    },
    { 
        title: "Pelatihan Publikasi Ilmiah", 
        issuer: "Nasional - UAD", 
        year: "Juli 2025",
        imgUrl: "imgcertif/sertifikat-pelatihan-publikasi-ilmiah.jpg",
        credentialUrl: "https://drive.google.com/file/d/1xSTSdcSMIKc1tahBABXCqpOs5dET9E1p/view?usp=sharing" 
    },
    { 
        title: "Branding Product By Canva", 
        issuer: "Nasional - UAD", 
        year: "Mei 2025",
        imgUrl: "imgcertif/sertifikat-branding-product-by-canva.jpg",
        credentialUrl: "https://drive.google.com/file/d/12a4r5CcBA9OPebUXuohhzY2S6W2VibD2/view?usp=drive_link"
    },
    { 
        title: "Training K3 Future Leader Programe TKBT", 
        issuer: "Nasional - Mutiara Mutu Sertifikasi", 
        year: "April 2025",
        imgUrl: "imgcertif/sertifikat-pelatihan-flp.jpg",
        credentialUrl: "https://drive.google.com/file/d/1wU6EC9Ze5ALyX8b5vdpwoIVOzeqwI9L4/view?usp=sharing"
    },
    { 
        title: "Business Model Canvas for Beginners", 
        issuer: "Nasional - UAD", 
        year: "Mei 2025",
        imgUrl: "imgcertif/sertifikat-pelatihan-business-model-canvas.jpg",
        credentialUrl: "https://drive.google.com/file/d/1uDhJ6CMEalUqrS7Se4gIKvsM4q7XHGEs/view?usp=sharing" 
    },
    { 
        title: "Video Kreatif Wirausaha Mahasiswa", 
        issuer: "Nasional - UAD", 
        year: "Mei 2025",
        imgUrl: "imgcertif/sertifikat-pelatihan-video-kreatif-wirausaha-mahasiswa.jpg",
        credentialUrl: "https://drive.google.com/file/d/1L6xOy3ZFX7fatWIPs6ivS8E0FRIgxXkE/view?usp=sharing" 
    },
    { 
        title: "Maxy Talks", 
        issuer: "Nasional - Maxy Academy", 
        year: "April 2025",
        imgUrl: "imgcertif/sertifikat-maxy-talks.png",
        credentialUrl: "https://drive.google.com/file/d/10kDDlg6KJoJtv9s6ph5pT1rC4jRH_DQW/view?usp=drive_link" 
    },
    { 
        title: "Future Entrepreneur Summit", 
        issuer: "Nasional - FESt Management & BEM-KM UMY & BEM-KM FPB UMY", 
        year: "Desember 2024",
        imgUrl: "imgcertif/certificate-future-entrepreneur-summit.jpg",
        credentialUrl: "https://drive.google.com/file/d/1idCxIJOAKgvFb809la1TVgRVD2S-_gNF/view?usp=sharing" 
    },
    { 
        title: "Training Public Speaking ", 
        issuer: "Nasional - GROW PROJECT & BEM-KM UMY & BEM-KM FPB UMY", 
        year: "Desember 2024",
        imgUrl: "imgcertif/certificate-training-public-speaking.jpg",
        credentialUrl: "https://drive.google.com/file/d/1iCfAkH3UwUNb5ocQPVh92SBR_Wr7_mfQ/view?usp=sharing" 
    },
    { 
        title: "FEST GOROWORLD ASIA FUTUREPRENEUR SELECTION PROGRAM", 
        issuer: "FESt Goroworld & BEM-KM UMY & BEM-KM FPB UMY", 
        year: "Desember 2024",
        imgUrl: "imgcertif/certificate-FEST-GOROWORLD-ASIA.jpg",
        credentialUrl: "https://drive.google.com/file/d/11FSKJ_FXQpszRjAM-XxpQrSEWmxg2kvD/view?usp=drive_link" 
    },
    { 
        title: "Training Entrepreneurship", 
        issuer: "FESt Management & BEM-KM UMY & BEM-KM FPB UMY", 
        year: "Desember 2024",
        imgUrl: "imgcertif/certificate-entrepreneurship.jpg",
        credentialUrl: "https://drive.google.com/file/d/1G1X6gz0y5ZcAe92lOPoUQRgIGAVYmd53/view?usp=drive_link" 
    },
    { 
        title: "International Conference Educations", 
        issuer: "International - BEM FKIP UAD", 
        year: "November 2024",
        imgUrl: "imgcertif/Sertifikat-ICE.jpg",
        credentialUrl: "https://drive.google.com/file/d/1maYRJjzVdljlKnVoH8T3bOmhWGXhCkNO/view?usp=drive_link" 
    },
    { 
        title: "Motret Dasar", 
        issuer: "Nasional - Kelas Belajar Motret & UAD", 
        year: "November 2024",
        imgUrl: "imgcertif/sertifikat-kompetisi-motret.jpg",
        credentialUrl: "https://drive.google.com/file/d/1VH4YQvAi2rcUtZ9vULmgAhIPRrKmczHY/view?usp=drive_link" 
    },
    { 
        title: "Uji Kompetensi Keahlian Rekayasa Perangkat Lunak", 
        issuer: "Lokal - SMKN 1 Wadaslintang", 
        year: "April 2024",
        imgUrl: "imgcertif/sertifikat-ukk.jpg",
        credentialUrl: "https://drive.google.com/file/d/1okRc8GTp4Y2-W3JceAwSKclNQ27Hfv-a/view?usp=drive_link" 
    }
];

// Data Artikel Ilmiah / Berita
const articles = [
    { 
        title: "Terpilih menjadi Google Student Ambassador", 
        event: "Google Student Ambassador Program",
        year: "2026",
        link: "https://lldikti5.kemdiktisaintek.go.id/home/detailpost/mahasiswa-uad-tembus-gsa-2026"
    },
    { 
        title: "1st Presenter", 
        event: "Ahmad Dahlan International Youth Camp #3", 
        year: "2025",
        link: "https://news.uad.ac.id/mahasiswa-uad-borong-penghargaan-di-kompetisi-nasional-hingga-internasional/"
    },
    { 
        title: "Rank 2 Best Use of Data/Reference", 
        event: "Ahmad Dahlan International Youth Camp #3", 
        year: "2025",
        link: "https://kumparan.com/universitas-ahmad-dahlan/mahasiswa-uad-ukir-prestasi-di-kancah-nasional-dan-global-27J3oLbStf9"
    },
    { 
        title: "3rd Winner Essay", 
        event: "Ahmad Dahlan International Seminar #3", 
        year: "2025",
        link: "https://lldikti5.kemdiktisaintek.go.id/home/detailpost/mahasiswa-uad-sabet-beragam-penghargaan-nasional-dan-internasional"
    },
    { 
        title: "Honorable Mention 1st Presenter", 
        event: "Ahmad Dahlan International Seminar #3", 
        year: "2025",
        link: "https://www.kompasiana.com/universitasahmaddahlan/69f2cfc8c925c411bb2ec642/mahasiswa-uad-borong-prestasi-nasional-hingga-internasional"
    },
    { 
        title: "Juara Output Essay Nasional", 
        event: "Witing Contest Family of Mahasiswa KIP-K UNY", 
        year: "2025",
        link: "https://news.uad.ac.id/mahasiswa-uad-borong-penghargaan-di-kompetisi-nasional-hingga-internasional/"
    },
    { 
        title: "Delegasi dan Finalis", 
        event: "The 5th National Student Leaders on Sustainability Meeting oleh UI GreenMetric dan Universitas Airlangga", 
        year: "2025",
        link: "https://www.instagram.com/p/DPG1Rc8ku0H/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    { 
        title: "2nd Winner Presenter", 
        event: "Ahmad Dahlan Youth Camp #2", 
        year: "2024",
        link: "https://lldikti5.kemdiktisaintek.go.id/home/detailpost/pengumuman-best-article-dan-best-presenter-adyc-2024"
    },
    { 
        title: "3rd Winner Article", 
        event: "Ahmad Dahlan Youth Camp #2", 
        year: "2024",
        link: "https://lldikti5.kemdiktisaintek.go.id/home/detailpost/pengumuman-best-article-dan-best-presenter-adyc-2024"
    }
];

// Data Projects (Technical Projects)
const projects = [
    {
        title: "Asem Dream Team Manager",
        desc: "Aplikasi web manajemen tim kolaboratif (Dream Team Manager) yang dirancang khusus untuk memantau performa, koordinasi tugas, dan kolaborasi tim akademik maupun pengembangan secara terpadu.",
        tags: ["React", "Vite", "Tailwind CSS", "ESLint"],
        icon: "fas fa-users-gear",
        year: "2026",
        role: "Front End & UI Designer",
        githubUrl: "https://github.com/Diolutviandr3/Asem-Dream-Team-Manager"
    },
    {
        title: "E-Recycle Platform",
        desc: "Platform digital pengelolaan sampah anorganik yang menghubungkan pengguna dengan pengepul terdekat. Fitur meliputi jadwal penjemputan sampah, harga pasar real-time, dan sistem poin reward.",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        icon: "fas fa-recycle",
        year: "2025",
        role: "Front End, Back End, & UI Designer",
        githubUrl: "https://github.com/Diolutviandr3/E-Recycle"
    },
    {
        title: "DENTECH - Prediksi DBD DIY",
        desc: "Aplikasi analisis dan prediksi penyebaran penyakit Demam Berdarah Dengue (DBD) di Daerah Istimewa Yogyakarta berbasis data cuaca real-time yang bersumber dari BMKG & BPBD.",
        tags: ["HTML5", "CSS3", "JavaScript", "Data Visualization"],
        icon: "fas fa-laptop-medical",
        year: "2025",
        role: "Front End, Back End, & UI Designer",
        githubUrl: "https://github.com/Diolutviandr3/dentech-app"
    },
    {
        title: "Selaras Truck System Dashboard",
        desc: "Dashboard sistem pemantauan real-time untuk inovasi truk sampah hibrida pintar (Smart Hybrid) yang dilengkapi sistem sensor pendeteksi, pemilah, dan penghancur sampah terintegrasi.",
        tags: ["HTML5", "CSS3", "JavaScript", "IoT Integration"],
        icon: "fas fa-truck-ramp-box",
        year: "2025",
        role: "Front End, Back End, & UI Designer",
        githubUrl: "https://github.com/Diolutviandr3/Selaras-Truck_Universitas-Ahmad-Dahlan"
    },
    {
        title: "iBIN - Inovasi Tempat Sampah Cerdas",
        desc: "Sistem dashboard monitoring tempat sampah pintar berbasis IoT untuk pengelolaan sampah kota (Municipal Solid Waste). Menampilkan data sensor kapasitas wadah, pemilahan jenis sampah otomatis (plastik, logam, organik), dan konektivitas WiFi.",
        tags: ["HTML5", "CSS3", "JavaScript", "IoT", "Dashboard"],
        icon: "fas fa-trash-can-arrow-up",
        year: "2025",
        role: "Front End, Back End, & UI Designer",
        githubUrl: "https://github.com/Diolutviandr3/iBIN-Inovasi-Tempat-Sampah-Cerdas"
    },
    {
        title: "DED-Kost - Kost Finder",
        desc: "Aplikasi web pencarian dan manajemen kamar kos (boarding house) di Indonesia. Membantu mahasiswa/pencari kos menemukan hunian terbaik dengan filter fasilitas, harga, dan lokasi terintegrasi.",
        tags: ["React", "Vite", "Tailwind CSS", "Shadcn UI"],
        icon: "fas fa-house-chimney-window",
        year: "2024",
        role: "Front End",
        githubUrl: "https://github.com/inthumaktics/DED-kost_Project_TEKWEB"
    },
    {
        title: "ReFocus App",
        desc: "Aplikasi asisten produktivitas digital berbasis Flutter yang dirancang untuk melacak waktu layar (screen time), membatasi kecanduan media sosial, serta melatih kedisiplinan diri secara interaktif melalui metode gamifikasi.",
        tags: ["Flutter", "Dart", "Android", "iOS", "Gamification"],
        icon: "fas fa-clock-rotate-left",
        year: "2025",
        role: "Front End",
        githubUrl: "https://github.com/Refocus-Team/ReFocus"
    },
    {
        title: "NUSA Project",
        desc: "Pengembangan logo dan identitas visual komprehensif untuk brand Nusantara. Fokus pada pembuatan aset grafis modern yang mencerminkan keragaman budaya Indonesia dengan pendekatan visual minimalis dan futuristik.",
        tags: ["Design", "Branding", "Creative"],
        icon: "fas fa-crop-simple",
        year: "2025",
        role: "Brand Identity Designer",
        githubUrl: ""
    },
    {
        title: "Food Business Innovation",
        desc: "Proyek inkubasi bisnis pangan inovatif yang berfokus pada pemanfaatan Talas Pratama sebagai bahan utama. Mengembangkan visual marketing, branding, kemasan produk, dan strategi pemasaran terpadu.",
        tags: ["Business", "Innovation", "Visual Design"],
        icon: "fas fa-seedling",
        year: "2025",
        role: "Creative Business Incubation",
        githubUrl: ""
    }
];

// FILTERING LOGIC UNTUK SERTIFIKASI
let currentCertFilter = 'Semua';
function setCertFilter(filter) {
    currentCertFilter = filter;
    
    // Update filter buttons UI
    const buttons = document.querySelectorAll('.cert-filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white', 'border-blue-600');
        btn.classList.add('bg-zinc-900', 'text-zinc-400', 'border-zinc-800', 'hover:border-zinc-700');
        
        if (btn.innerText.toLowerCase().includes(filter.toLowerCase()) || 
           (filter === 'Semua' && btn.innerText.includes('Semua'))) {
            btn.classList.add('bg-blue-600', 'text-white', 'border-blue-600');
            btn.classList.remove('bg-zinc-900', 'text-zinc-400', 'border-zinc-800');
        }
    });

    renderCertifications();
}

// RENDER SERTIFIKASI SECARA DYNAMIC DENGAN FILTER
function renderCertifications() {
    const certDiv = document.getElementById('cert-render');
    if (!certDiv) return;

    certDiv.innerHTML = '';
    
    const filteredCerts = certs.filter(item => {
        if (currentCertFilter === 'Semua') return true;
        
        const issuerLower = item.issuer.toLowerCase();
        if (currentCertFilter === 'Internasional') {
            return issuerLower.includes('international') || issuerLower.includes('internasional');
        }
        if (currentCertFilter === 'Nasional') {
            return issuerLower.includes('nasional') || (!issuerLower.includes('international') && !issuerLower.includes('internasional') && !issuerLower.includes('lokal'));
        }
        if (currentCertFilter === 'Lokal') {
            return issuerLower.includes('lokal');
        }
        return true;
    });

    if (filteredCerts.length === 0) {
        certDiv.innerHTML = `
            <div class="col-span-full py-12 text-center text-zinc-500 text-sm">
                <i class="fas fa-certificate text-3xl mb-3 opacity-50 block"></i>
                Tidak ada sertifikasi ditemukan untuk kategori ini.
            </div>`;
        return;
    }

    filteredCerts.forEach((item, index) => {
        certDiv.innerHTML += `
            <div class="glass-card tilt-element rounded-2xl overflow-hidden group reveal delay-${(index % 3) * 100}">
                <div class="h-44 overflow-hidden bg-zinc-950 relative border-b border-zinc-800/50">
                    <img src="${item.imgUrl}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60"></div>
                </div>
                <div class="p-6">
                    <span class="text-[9px] font-bold tracking-widest text-blue-500 uppercase">
                        ${item.issuer.split(' - ')[0] || 'Sertifikasi'}
                    </span>
                    <h4 class="font-bold text-white text-base mt-1 line-clamp-2 leading-snug group-hover:text-blue-400 transition-colors">${item.title}</h4>
                    <p class="text-xs text-zinc-500 mt-2 flex items-center gap-1.5">
                        <i class="far fa-calendar-alt"></i> ${item.year}
                    </p>
                    
                    <div class="mt-5 border-t border-zinc-850 pt-4">
                        <a href="${item.credentialUrl}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-500 hover:text-blue-400 hover:gap-2 transition-all">
                            Tampilkan Kredensial <i class="fas fa-arrow-up-right-from-square text-[10px]"></i>
                        </a>
                    </div>
                </div>
            </div>`;
    });

    // Re-initialize reveals since new elements were injected
    initScrollReveal();
}

// RENDER ALL DATA
function renderAll() {
    // 1. Render Skills
    const skillDiv = document.getElementById('skills-render');
    if (skillDiv) {
        skillDiv.innerHTML = ''; 
        skills.forEach((s, index) => {
            skillDiv.innerHTML += `
                <span class="bg-zinc-900/60 backdrop-blur-md px-5 py-3 rounded-xl text-sm font-semibold border border-zinc-800 hover:border-blue-500/50 hover:text-white transition-all cursor-default shadow-md reveal delay-${(index % 4) * 75}">
                    ${s}
                </span>`;
        });
    }

    // 2. Render Experiences (Timeline vertical)
    const expDiv = document.getElementById('experience-render');
    if (expDiv) {
        expDiv.innerHTML = ''; 
        
        let timelineHTML = `
            <div class="relative border-l-2 border-zinc-800 ml-4 md:ml-8 pl-8 md:pl-12 py-2 space-y-12">`;
            
        experiences.forEach((item, index) => {
            timelineHTML += `
                <div class="timeline-item relative reveal delay-${(index % 2) * 100}">
                    <div class="glass-card tilt-element p-6 md:p-8 rounded-2xl flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                        <div class="flex-1 text-left order-2 lg:order-1">
                            <span class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-blue-600/10 text-blue-400 rounded-full border border-blue-500/20">
                                ${item.type}
                            </span>
                            <h3 class="text-xl md:text-2xl font-extrabold text-white mt-3 group-hover:text-blue-400 transition-colors">${item.title}</h3>
                            <p class="text-sm text-zinc-400 mt-1 font-medium">${item.org}</p>
                            <p class="text-xs text-zinc-500 mt-0.5 flex items-center gap-1.5">
                                <i class="far fa-calendar-alt"></i> Periode: ${item.year}
                            </p>
                            
                            <a href="${item.credentialUrl}" target="_blank" class="inline-flex items-center gap-2 mt-5 text-xs font-bold text-blue-500 hover:text-blue-400 transition-all hover:translate-x-1">
                                <i class="fas fa-link text-[10px]"></i> Tampilkan Bukti Kredensial
                            </a>
                        </div>

                        <div class="w-full lg:w-60 h-40 rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-md order-1 lg:order-2 self-stretch lg:self-auto flex-shrink-0 relative group">
                            <img src="${item.imgUrl}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700">
                        </div>
                    </div>
                </div>`;
        });
        
        timelineHTML += `</div>`;
        expDiv.innerHTML = timelineHTML;
    }

    // 3. Render Achievements (Dengan sertifikat)
    const achDiv = document.getElementById('achievement-render');
    if (achDiv) {
        achDiv.innerHTML = ''; 
        achDiv.className = "grid grid-cols-1 md:grid-cols-2 gap-6";

        achievements.forEach((item, index) => {
            const isInternational = item.level === 'International';
            achDiv.innerHTML += `
                <div class="glass-card tilt-element p-6 md:p-8 rounded-2xl relative overflow-hidden group reveal delay-${(index % 2) * 100}">
                    <!-- Glow background effect inside card on hover -->
                    <div class="absolute -right-16 -top-16 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-all duration-500"></div>
                    
                    <div class="flex items-start gap-4 mb-4">
                        <div class="p-3 bg-blue-600/10 rounded-xl text-blue-400 border border-blue-500/10 group-hover:bg-blue-600/20 group-hover:text-blue-300 transition-colors">
                            <i class="fas fa-trophy text-2xl"></i>
                        </div>
                        <div class="flex-1">
                            <span class="text-[9px] font-bold ${isInternational ? 'text-amber-400 bg-amber-400/10 border-amber-500/20' : 'text-zinc-400 bg-zinc-800/40 border-zinc-700/20'} px-2 py-0.5 rounded-full border uppercase tracking-wider">
                                ${item.level} Achievement
                            </span>
                            <h3 class="text-lg md:text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors leading-snug">${item.title}</h3>
                        </div>
                    </div>
                    
                    <p class="text-xs text-zinc-400 font-medium ml-14">${item.event} • ${item.year}</p>
                    
                    <div class="mt-6 ml-14 border-t border-zinc-850 pt-4 flex items-center">
                        <a href="${item.credentialUrl}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-500 hover:text-blue-400 transition-all hover:translate-x-1">
                            <i class="fas fa-certificate text-[10px]"></i> Tampilkan Sertifikat <i class="fas fa-chevron-right text-[8px] opacity-70"></i>
                        </a>
                    </div>
                </div>`;
        });
    }

    // 4. Render Certifications (First load, filter 'Semua')
    renderCertifications();

    // 5. Render Articles
    const artDiv = document.getElementById('article-render');
    if (artDiv) {
        artDiv.innerHTML = ''; 
        articles.forEach((item, index) => {
            artDiv.innerHTML += `
                <div class="border-l-4 border-blue-500 pl-6 py-5 bg-zinc-900/30 rounded-r-2xl border-y border-r border-zinc-800/40 hover:border-blue-500/40 hover:bg-zinc-900/60 transition-all duration-300 reveal delay-${(index % 2) * 100}">
                    <h4 class="font-bold text-white text-base md:text-lg leading-snug">${item.title}</h4>
                    <p class="text-xs text-zinc-400 font-medium mt-1">${item.event} • ${item.year}</p>
                    <a href="${item.link}" target="_blank" class="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-blue-500 hover:text-blue-400 hover:gap-2 transition-all">
                        Lihat Berita Lengkap <i class="fas fa-arrow-up-right-from-square text-[9px]"></i>
                    </a>
                </div>`;
        });
    }

    // 6. Render Projects
    const projectDiv = document.getElementById('project-render');
    if (projectDiv) {
        projectDiv.innerHTML = '';
        projects.forEach((item, index) => {
            let tagsHTML = '';
            item.tags.forEach(t => {
                tagsHTML += `<span class="text-[9px] font-semibold bg-zinc-850 text-zinc-400 px-2 py-0.5 rounded-md border border-zinc-800">${t}</span>`;
            });

            let githubLinkHTML = '';
            if (item.githubUrl) {
                githubLinkHTML = `
                    <a href="${item.githubUrl}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-500 hover:text-blue-400 hover:gap-2 transition-all">
                        GitHub Repo <i class="fab fa-github"></i>
                    </a>`;
            }

            let roleHTML = '';
            if (item.role) {
                roleHTML = `
                    <p class="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-2">
                        Peran: <span class="text-blue-400">${item.role}</span>
                    </p>`;
            }

            projectDiv.innerHTML += `
                <div class="glass-card tilt-element p-6 md:p-8 rounded-2xl relative overflow-hidden group reveal delay-${(index % 2) * 100}">
                    <!-- Glow background effect inside card on hover -->
                    <div class="absolute -right-16 -top-16 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-all duration-500"></div>
                    
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/10 flex items-center justify-center text-xl group-hover:bg-blue-600/20 group-hover:text-blue-300 transition-colors">
                            <i class="${item.icon}"></i>
                        </div>
                        <span class="text-xs text-zinc-500 font-bold">${item.year}</span>
                    </div>
                    
                    <h3 class="text-xl font-bold text-white mt-3 group-hover:text-blue-400 transition-colors leading-snug">${item.title}</h3>
                    
                    <div class="mt-3 mb-4">
                        ${roleHTML}
                        <p class="text-sm text-zinc-400 leading-relaxed text-justify">${item.desc}</p>
                    </div>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${tagsHTML}
                    </div>
                    
                    <div class="border-t border-zinc-850 pt-4 flex items-center justify-between">
                        ${githubLinkHTML}
                    </div>
                </div>`;
        });
    }
}

// ANIMASI ROLL-UP ANGKA DI HERO STATS
function animateCounters() {
    const statsGrid = document.querySelector('#home .grid');
    if (!statsGrid) return;
    
    // Set target numbers based on original values
    const counters = [
        { id: 'counter-certs', target: 20, suffix: '+' },
        { id: 'counter-projects', target: 10, suffix: '+' },
        { id: 'counter-years', target: 2, suffix: '+' },
        { id: 'counter-achievements', target: 15, suffix: '+' }
    ];

    counters.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        
        let current = 0;
        const duration = 1200; // ms
        const steps = c.target;
        const stepTime = Math.max(Math.floor(duration / steps), 20);
        
        el.innerText = `0${c.suffix}`;
        
        // Cek apakah angka sudah dianimasikan
        if (el.dataset.animated === 'true') {
            el.innerText = `${c.target}${c.suffix}`;
            return;
        }
        
        el.dataset.animated = 'true';
        
        const timer = setInterval(() => {
            current += 1;
            el.innerText = `${current}${c.suffix}`;
            if (current >= c.target) {
                clearInterval(timer);
                el.innerText = `${c.target}${c.suffix}`;
            }
        }, stepTime);
    });
}

// SCROLL REVEAL UTILITY MENGGUNAKAN INTERSECTION OBSERVER
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target); // Hanya animasikan sekali
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: '0px 0px -40px 0px'
        });

        reveals.forEach(r => observer.observe(r));
    } else {
        // Fallback jika browser tidak support IntersectionObserver
        reveals.forEach(r => r.classList.add('revealed'));
    }
}

// TYPING SUBHEADLINE ANIMATION DI HERO
const typingWords = ["Google Student Ambassador", "Professional Protokoler", "UI/UX & Web Designer", "Front-End Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimeout;

function typeEffect() {
    const el = document.getElementById('typing-text');
    if (!el) return;

    const currentWord = typingWords[wordIndex];
    
    if (isDeleting) {
        el.innerText = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        el.innerText = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 65;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2200; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % typingWords.length;
        typeSpeed = 400; // Pause before typing next word
    }

    typeTimeout = setTimeout(typeEffect, typeSpeed);
}

// DOM LOADED INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // Render all items
    renderAll();
    
    // Show home page with transition
    showPage('home'); 
    
    // Start Typing Effect
    typeEffect();
});

// HANDLING FORM CONTACT (FORMSPREE INTEGRATION)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 
        
        const FORMSPREE_ID = "xreyylrz"; 
        const formData = new FormData(contactForm);
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fas fa-spinner animate-spin"></i> Sending...`;
        formStatus.innerText = "";
        formStatus.className = "text-center text-sm font-medium mt-4 opacity-0 transition-opacity duration-300";

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            formStatus.classList.remove('opacity-0');
            if (response.ok) {
                formStatus.innerHTML = `
                    <div class="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-center flex items-center justify-center gap-2">
                        <i class="fas fa-circle-check"></i> Pesan terkirim! Saya akan membalas ke email Anda segera.
                    </div>`;
                contactForm.reset(); 
            } else {
                formStatus.innerHTML = `
                    <div class="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-center flex items-center justify-center gap-2">
                        <i class="fas fa-circle-exclamation"></i> Gagal mengirim. Coba lagi dalam beberapa saat.
                    </div>`;
            }
        } catch (error) {
            formStatus.classList.remove('opacity-0');
            formStatus.innerHTML = `
                <div class="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-center flex items-center justify-center gap-2">
                    <i class="fas fa-wifi"></i> Terjadi kesalahan koneksi internet.
                </div>`;
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<i class="fas fa-paper-plane"></i> Send Message`;
        }
    });
}

// ==================== EFEK 3D TILT CARD (DELEGATED EVENTS) ====================
let activeTiltCard = null;

document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.tilt-element');
    
    if (activeTiltCard && activeTiltCard !== card) {
        // Reset card lama saat keluar
        activeTiltCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        activeTiltCard = null;
    }
    
    if (!card) return;
    
    activeTiltCard = card;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Sensitivitas rotasi 3D (Maksimal 8 derajat untuk visual yang rapi)
    const rotateX = ((centerY - y) / centerY) * 8; 
    const rotateY = ((x - centerX) / centerX) * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
});

document.addEventListener('mouseleave', () => {
    if (activeTiltCard) {
        activeTiltCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        activeTiltCard = null;
    }
}, true);
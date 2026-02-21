// Données des membres de l'équipe
const equipeMembres = [
    {
        nom: "Mohamed Soumaré",
        photo: "images/equipe/Mohamed Soumaré.jpeg",
        poste: "Ingénieur Génie Hydraulique",
        description: "Mohamed Soumaré, ingénieur en génie hydraulique et assainissement avec 15 ans d'expérience intervient dans l'aménagement des zones humides, des infrastructures d'assainissement et des corridors bleus.",
        competences: ["Hydraulique", "Assainissement", "Zones Humides", "Corridors Bleus"],
        linkedin: "#",
        email: "mohamed.soumare@urbatech.sn"
    },
    {
        nom: "Mouhamadou Abib Ba",
        photo: "images/equipe/Mouhamadou Abib Ba.jpeg",
        poste: "Expert SIG",
        description: "Mouhamadou Abib Ba est expert en Systèmes d'Information Géographique (SIG), spécialisé en analyse spatiale et en télédétection. Il accompagne le bureau d'études dans la production cartographique, la gestion et la numérisation foncière, contribuant efficacement à l'aide à la décision et aux projets d'aménagement du territoire.",
        competences: ["SIG", "Télédétection", "Analyse Spatiale", "Cartographie", "Numérisation Foncière"],
        linkedin: "#",
        email: "mouhamadou.ba@urbatech.sn"
    },
    {
        nom: "Serigne Saliou Mbengue",
        photo: "images/equipe/Urbaniste.jpg",
        poste: "Coordinateur Études",
        description: "Il assure la coordination générale des études et intervient sur : la planification urbaine et territoriale ; l'analyse spatiale et socio-économique ; l'élaboration de scénarios d'aménagement ; la cohérence globale des projets urbains.",
        competences: ["Planification Urbaine", "Analyse Spatiale", "Analyse Socio-économique", "Scénarios d'Aménagement", "Coordination Projets"],
        linkedin: "#",
        email: "urbaniste@urbatech.sn"
    },
    {
        nom: "Maguette Faye",
        photo: "images/equipe/Maguette Faye.jpeg",
        poste: "Experte Gestion Déchets",
        description: "Maguette Faye est experte en gestion des déchets, spécialisée dans la planification et l'optimisation des systèmes de collecte, de tri et de valorisation. Elle accompagne le bureau d'études dans l'élaboration de stratégies durables de gestion des déchets, contribuant à l'amélioration de la salubrité urbaine et à la protection de l'environnement.",
        competences: ["Collecte", "Tri", "Valorisation", "Stratégies Durables", "Salubrité Urbaine"],
        linkedin: "#",
        email: "maguette.faye@urbatech.sn"
    },
    {
        nom: "Abdoulaye Gueye",
        photo: "images/equipe/Abdoulaye Gueye.jpeg",
        poste: "Expert Mobilité & Transport",
        description: "Abdoulaye Gueye est Expert en mobilité et transport urbain. Il intervient dans les domaines suivants : l'analyse des déplacements urbains ; la planification des réseaux de transport ; la promotion des mobilités durables ; l'amélioration de l'accessibilité et de la fluidité urbaine. Son objectif principal est d'organiser les déplacements afin de rendre la ville plus fonctionnelle, accessible et durable.",
        competences: ["Déplacements Urbains", "Planification Transport", "Mobilités Durables", "Accessibilité", "Fluidité Urbaine"],
        linkedin: "#",
        email: "abdoulaye.gueye@urbatech.sn"
    },
    {
        nom: "OPA Kane",
        photo: "images/equipe/OPA Kane.jpeg",
        poste: "Paysagiste",
        description: "OPA Kane est paysagiste, spécialisé en conception et aménagement des espaces verts et publics. Il accompagne le bureau d'études dans la planification paysagère, l'intégration environnementale des projets et la valorisation esthétique des territoires, contribuant à créer des espaces fonctionnels, durables et harmonieux.",
        competences: ["Paysage", "Espaces Verts", "Espaces Publics", "Planification Paysagère", "Intégration Environnementale"],
        linkedin: "#",
        email: "opa.kane@urbatech.sn"
    }
];

// Données des projets réalisés
const projetsRealises = [
    {
        id: 1,
        nom: "Réaménagement Place de la République",
        localisation: "Paris, 11ème arrondissement",
        type: "urbanisme",
        date: "2023",
        description: "Projet de réaménagement complet de la Place de la République avec création d'espaces piétons, végétalisation et amélioration de l'accessibilité. Le projet inclut l'installation de nouveaux mobiliers urbains et la création d'une zone de rencontre.",
        coords: [48.8675, 2.3634],
        photos: [
            "images/projets/republique1.jpg",
            "images/projets/republique2.jpg",
            "images/projets/republique3.jpg"
        ]
    },
    {
        id: 2,
        nom: "ZAC Écoquartier du Canal",
        localisation: "Saint-Denis",
        type: "aménagement",
        date: "2022",
        description: "Développement d'un écoquartier de 15 hectares le long du canal Saint-Denis avec logements, commerces et espaces verts. Le projet intègre des principes de développement durable et de biodiversité urbaine.",
        coords: [48.9365, 2.3534],
        photos: [
            "images/projets/zac1.jpg",
            "images/projets/zac2.jpg",
            "images/projets/zac3.jpg"
        ]
    },
    {
        id: 3,
        nom: "Trame Verte de l'Agglomération",
        localisation: "Versailles et environs",
        type: "environnement",
        date: "2023",
        description: "Étude et mise en place d'une trame verte connectant les espaces naturels de l'agglomération versaillaise. Création de corridors écologiques pour la faune et la flore locales.",
        coords: [48.8049, 2.1344],
        photos: [
            "images/projets/trame1.jpg",
            "images/projets/trame2.jpg",
            "images/projets/trame3.jpg"
        ]
    },
    {
        id: 4,
        nom: "Rénovation Centre Historique",
        localisation: "Le Marais, Paris",
        type: "urbanisme",
        date: "2021",
        description: "Projet de rénovation et de mise en valeur du centre historique du Marais avec préservation du patrimoine architectural et amélioration de l'offre commerciale et culturelle.",
        coords: [48.8566, 2.3622],
        photos: [
            "images/projets/marais1.jpg",
            "images/projets/marais2.jpg",
            "images/projets/marais3.jpg"
        ]
    },
    {
        id: 5,
        nom: "Parc Technologique",
        localisation: "Saclay",
        type: "aménagement",
        date: "2022",
        description: "Aménagement d'un parc technologique de 50 hectares dédié aux entreprises innovantes et aux laboratoires de recherche, avec intégration paysagère et preservation des espaces naturels.",
        coords: [48.7269, 2.1678],
        photos: [
            "images/projets/parc1.jpg",
            "images/projets/parc2.jpg",
            "images/projets/parc3.jpg"
        ]
    }
];

// Données des projets en cours
const projetsEnCours = {
    "centre-ville": {
        titre: "R\u00e9am\u00e9nagement Centre-Ville",
        donneesClefs: [
            "P\u00e9rim\u00e8tre : 42 ha",
            "Budget estim\u00e9 : 12,4 M EUR",
            "Horizon de livraison : T4 2027",
            "Ma\u00eetre d'ouvrage : Ville m\u00e9tropolitaine"
        ],
        slides: [
            {
                titre: "Contexte et objectifs",
                contenu: "Le projet restructure le c\u0153ur de ville pour renforcer l'activit\u00e9 \u00e9conomique locale, la qualit\u00e9 des espaces publics et la s\u00e9curit\u00e9 des d\u00e9placements.",
                image: "images/presentations/centre-ville/slide1.jpg",
                donnees: ["Population cible : 38 000 habitants", "Flux moyen journalier : 21 500 d\u00e9placements", "Taux de vacance commerciale actuel : 14%"]
            },
            {
                titre: "Analyse de l'existant",
                contenu: "Le diagnostic confirme une congestion automobile \u00e9lev\u00e9e, un d\u00e9ficit d'ombrage et une accessibilit\u00e9 PMR partielle sur les axes majeurs.",
                image: "images/presentations/centre-ville/slide2.jpg",
                donnees: ["Largeur des trottoirs insuffisante : 46% des rues", "Accidents l\u00e9gers/an : 118", "\u00celot de chaleur : +3,2 C en \u00e9t\u00e9"]
            },
            {
                titre: "Proposition d'am\u00e9nagement",
                contenu: "Le sc\u00e9nario retenu combine zone 30, plateau pi\u00e9ton central, trame cyclable continue et v\u00e9g\u00e9talisation intensive des places.",
                image: "images/presentations/centre-ville/slide3.jpg",
                donnees: ["12 400 m2 d'espaces publics requalifi\u00e9s", "4,8 km de pistes cyclables", "1 150 arbres et arbustes plant\u00e9s"]
            },
            {
                titre: "Phasage du projet",
                contenu: "La mise en \u0153uvre est planifi\u00e9e en trois lots afin de maintenir la continuit\u00e9 commerciale et de limiter les impacts circulation.",
                image: "images/presentations/centre-ville/slide4.jpg",
                donnees: ["Phase 1 : r\u00e9seaux et drainage", "Phase 2 : voirie et mobilit\u00e9", "Phase 3 : mobilier et paysage"]
            }
        ]
    },
    "zac-nord": {
        titre: "ZAC \u00c9cologique Nord",
        donneesClefs: [
            "Surface op\u00e9rationnelle : 30 ha",
            "Capacit\u00e9 : 1 850 logements",
            "Part de logements sociaux : 35%",
            "Taux d'espaces verts : 32%"
        ],
        slides: [
            {
                titre: "Pr\u00e9sentation du site",
                contenu: "La ZAC se situe sur un secteur de mutation strat\u00e9gique connect\u00e9 au r\u00e9seau de transport structurant.",
                image: "images/presentations/zac-nord/slide1.jpg",
                donnees: ["Distance gare : 1,2 km", "Foncier public mobilisable : 68%", "Topographie favorable aux noues paysag\u00e8res"]
            },
            {
                titre: "Concept \u00e9cologique",
                contenu: "Le quartier vise une performance bas carbone avec \u00e9nergie solaire, r\u00e9utilisation des eaux pluviales et \u00eelots de fra\u00eecheur.",
                image: "images/presentations/zac-nord/slide2.jpg",
                donnees: ["Production PV cible : 5,6 GWh/an", "R\u00e9cup\u00e9ration d'eau pluviale : 18 000 m3/an", "R\u00e9duction des \u00e9missions estim\u00e9e : -41%"]
            },
            {
                titre: "Plan d'am\u00e9nagement",
                contenu: "Le plan masse \u00e9quilibre habitat, activit\u00e9s de proximit\u00e9, \u00e9quipements et polarit\u00e9s vertes \u00e0 l'\u00e9chelle du quartier.",
                image: "images/presentations/zac-nord/slide3.jpg",
                donnees: ["Logements : 1 850 unit\u00e9s", "Commerces/services : 22 000 m2", "\u00c9quipements publics : 2 groupes scolaires"]
            },
            {
                titre: "Innovations durables",
                contenu: "La feuille de route int\u00e8gre BIM territorial, mat\u00e9riaux biosourc\u00e9s et pilotage intelligent des consommations.",
                image: "images/presentations/zac-nord/slide4.jpg",
                donnees: ["B\u00e9tons bas carbone : 65% des volumes", "Mat\u00e9riaux biosourc\u00e9s : 18 000 m3", "Capteurs IoT quartiers : 420 points"]
            }
        ]
    },
    "trame-verte": {
        titre: "Trame Verte Urbaine",
        donneesClefs: [
            "Longueur de corridors : 27 km",
            "Communes concern\u00e9es : 6",
            "Surface renatur\u00e9e : 96 ha",
            "Horizon de d\u00e9ploiement : 2026-2029"
        ],
        slides: [
            {
                titre: "Enjeux \u00e9cologiques",
                contenu: "Le projet restaure les continuit\u00e9s biologiques entre parcs, friches et zones humides pour renforcer la r\u00e9silience urbaine.",
                image: "images/presentations/trame-verte/slide1.jpg",
                donnees: ["Habitats prioritaires identifi\u00e9s : 14", "Esp\u00e8ces cibles de suivi : 37", "Secteurs de rupture \u00e9cologique : 11"]
            },
            {
                titre: "Cartographie des corridors",
                contenu: "La mod\u00e9lisation SIG combine occupation du sol, perm\u00e9abilit\u00e9 urbaine et trames hydrauliques pour hi\u00e9rarchiser les liaisons.",
                image: "images/presentations/trame-verte/slide2.jpg",
                donnees: ["Donn\u00e9es SIG mobilis\u00e9es : 23 couches", "Pr\u00e9cision cartographique : 1/2 000", "Secteurs d'intervention prioritaires : 8"]
            },
            {
                titre: "Proposition de trame",
                contenu: "Le sch\u00e9ma propose un maillage principal et secondaire avec renaturation des berges, des venelles et des interfaces d'infrastructures.",
                image: "images/presentations/trame-verte/slide3.jpg",
                donnees: ["Berges renatur\u00e9es : 9,4 km", "Noues et bassins v\u00e9g\u00e9talis\u00e9s : 54", "C\u0153urs d'\u00eelots perm\u00e9abilis\u00e9s : 42"]
            },
            {
                titre: "B\u00e9n\u00e9fices attendus",
                contenu: "Les impacts attendus concernent la biodiversit\u00e9, le confort thermique, la qualit\u00e9 de l'air et l'appropriation citoyenne des espaces.",
                image: "images/presentations/trame-verte/slide4.jpg",
                donnees: ["Baisse de temp\u00e9rature locale estim\u00e9e : -1,6 C", "R\u00e9duction du ruissellement : -24%", "Fr\u00e9quentation des espaces verts : +31%"]
            }
        ]
    },
    "presentation-pdf": {
        titre: "Presentation PDF",
        donneesClefs: [],
        slides: []
    }
};
// Initialisation des membres de l'equipe
function initEquipe() {
    const equipeGrid = document.querySelector('.equipe-grid');
    if (!equipeGrid) return;
    
    equipeGrid.innerHTML = '';
    
    equipeMembres.forEach((membre, index) => {
        const membreCard = document.createElement('div');
        membreCard.className = 'equipe-membre';
        membreCard.setAttribute('data-aos', 'zoom-in');
        membreCard.setAttribute('data-aos-delay', `${(index + 1) * 100}`);
        
        membreCard.innerHTML = `
            <div class="membre-card-3d">
                <div class="membre-image-container">
                    <img src="${membre.photo}" alt="${membre.nom}" loading="lazy">
                    <div class="membre-overlay">
                        <div class="social-links">
                            <a href="${membre.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                            <a href="mailto:${membre.email}"><i class="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
                <div class="membre-info">
                    <h4>${membre.nom}</h4>
                    <p>${membre.poste}</p>
                    <div class="membre-skills">
                        ${membre.competences.map(comp => `<span class="skill-tag">${comp}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        
        // Ajouter un événement pour afficher les détails
        membreCard.addEventListener('click', function() {
            afficherDetailsMembre(membre);
        });
        
        equipeGrid.appendChild(membreCard);
    });
}

// Afficher les détails d'un membre
function afficherDetailsMembre(membre) {
    const modal = document.createElement('div');
    modal.className = 'membre-modal';
    modal.innerHTML = `
        <div class="membre-modal-content">
            <button class="close-modal-membre">&times;</button>
            <div class="membre-details">
                <div class="membre-photo-detail">
                    <img src="${membre.photo}" alt="${membre.nom}">
                </div>
                <div class="membre-info-detail">
                    <h3>${membre.nom}</h3>
                    <p class="poste-detail">${membre.poste}</p>
                    <div class="membre-description">
                        <p>${membre.description}</p>
                    </div>
                    <div class="membre-competences-detail">
                        <h4>Compétences</h4>
                        <div class="competences-list">
                            ${membre.competences.map(comp => `<span class="skill-tag-detail">${comp}</span>`).join('')}
                        </div>
                    </div>
                    <div class="membre-contact">
                        <a href="mailto:${membre.email}" class="contact-btn">
                            <i class="fas fa-envelope"></i> Contacter
                        </a>
                        <a href="${membre.linkedin}" target="_blank" class="contact-btn">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Ajouter les styles
    const style = document.createElement('style');
    style.textContent = `
        .membre-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            z-index: 5000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .membre-modal.active {
            opacity: 1;
        }
        .membre-modal-content {
            background: white;
            color: #1f2d43;
            border-radius: 20px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            transform: scale(0.9);
            transition: transform 0.3s ease;
        }
        .membre-modal.active .membre-modal-content {
            transform: scale(1);
        }
        .close-modal-membre {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.5);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: white;
            font-size: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 10;
        }
        .close-modal-membre:hover {
            background: rgba(0, 0, 0, 0.7);
            transform: rotate(90deg);
        }
        .membre-details {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 2rem;
            padding: 2rem;
        }
        .membre-photo-detail img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .membre-info-detail h3 {
            color: #1f2d43;
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        .poste-detail {
            color: #4e5f76;
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
        }
        .membre-description {
            margin-bottom: 2rem;
            line-height: 1.7;
            color: #2b3d54;
        }
        .membre-competences-detail h4 {
            margin-bottom: 1rem;
            color: #1f2d43;
        }
        .competences-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 2rem;
        }
        .skill-tag-detail {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            font-size: 0.9rem;
            font-weight: 500;
        }
        .membre-contact {
            display: flex;
            gap: 1rem;
        }
        .contact-btn {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            text-decoration: none;
            padding: 0.8rem 1.5rem;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        .contact-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }
        
        @media (max-width: 768px) {
            .membre-details {
                grid-template-columns: 1fr;
                gap: 1.5rem;
                padding: 1.5rem;
            }
            .membre-photo-detail img {
                height: 250px;
            }
            .membre-contact {
                flex-direction: column;
            }
        }
    `;
    
    if (!document.querySelector('#membre-modal-styles')) {
        style.id = 'membre-modal-styles';
        document.head.appendChild(style);
    }
    
    document.body.appendChild(modal);
    
    // Animation d'ouverture
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Fermeture du modal
    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
        }, 300);
    };
    
    modal.querySelector('.close-modal-membre').addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initAOS();
    initNavigation();
    // initCarteProjets(); // Temporairement désactivé
    initProjetsEnCours();
    initScrollEffects();
    initModal();
    initCounterAnimation();
    initTextReveal();
    initEquipe();
        initCarteControls();
        initCarteSenegal();
});

// Initialisation des particules
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Initialisation AOS
function initAOS() {
    if (typeof AOS !== 'undefined') {
        document.documentElement.classList.add('aos-ready');
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100
        });
    }
}

// Animation des compteurs
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-count');
        const increment = target / speed;
        
        const updateCount = () => {
            const count = +counter.innerText;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    };
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Animation de révélation de texte
function initTextReveal() {
    const textElements = document.querySelectorAll('.text-reveal');
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    textElements.forEach(element => {
        observer.observe(element);
    });
}

// Navigation mobile
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

console.log('JavaScript chargé avec succès !');

// Variables globales pour stocker les cartes
let carteFrance = null;
let carteAfrique = null;

// Gestion du changement de carte
function initCarteControls() {
    console.log('Initialisation des contrôles de carte');
    
    const btnSenegal = document.getElementById('btn-senegal');
    const btnAfrica = document.getElementById('btn-africa');
    const carteSenegal = document.getElementById('carte-projets');
    const carteAfrica = document.getElementById('carte-africa');
    
    console.log('Éléments trouvés:', btnSenegal, btnAfrica, carteSenegal, carteAfrica);
    
    if (btnSenegal && btnAfrica && carteSenegal && carteAfrica) {
        console.log('Ajout des écouteurs d\'événements');
        
        btnSenegal.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Clic sur France - événement déclenché');
            btnSenegal.classList.add('active');
            btnAfrica.classList.remove('active');
            carteSenegal.style.display = 'block';
            carteAfrica.style.display = 'none';
            console.log('Affichage de la carte France');
            
            // Détruire la carte existante si elle existe
            if (carteFrance) {
                carteFrance.remove();
            }
            initCarteSenegal();
        });
        
        btnAfrica.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Clic sur Afrique - événement déclenché');
            btnAfrica.classList.add('active');
            btnSenegal.classList.remove('active');
            carteSenegal.style.display = 'none';
            carteAfrica.style.display = 'block';
            console.log('Affichage de la carte Afrique');
            
            // Détruire la carte existante si elle existe
            if (carteAfrique) {
                carteAfrique.remove();
            }
            initCarteAfrique();
        });
        
        console.log('Contrôles de carte initialisés avec succès');
    } else {
        console.error('Éléments non trouvés:', {
            btnSenegal: !!btnSenegal,
            btnAfrica: !!btnAfrica,
            carteSenegal: !!carteSenegal,
            carteAfrica: !!carteAfrica
        });
    }
}

// Initialisation de la carte Afrique
function initCarteAfrique() {
    // Détruire la carte existante si elle existe
    if (carteAfrique) {
        carteAfrique.remove();
    }
    
    const carte = L.map('carte-africa').setView([15, 20], 3);
    carteAfrique = carte; // Stocker la référence
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(carteAfrique);
    
    // Pays cibles avec coordonnées approximatives
    const paysCibles = [
        {
            nom: "Mali",
            coords: [17.5707, -3.9962],
            couleur: "#ff6b6b"
        },
        {
            nom: "Côte d'Ivoire",
            coords: [7.5400, -5.5471],
            couleur: "#4ecdc4"
        },
        {
            nom: "Maroc",
            coords: [31.7917, -7.0926],
            couleur: "#c41e3a"
        }
    ];
    
    // Ajouter les marqueurs pour les pays cibles
    paysCibles.forEach(pays => {
        L.circleMarker(pays.coords, {
            radius: 10,
            fillColor: pays.couleur,
            color: pays.couleur,
            weight: 2,
            fillOpacity: 0.7,
            opacity: 0.9
        }).addTo(carteAfrique).bindPopup(`<strong>${pays.nom}</strong><br>Projets réalisés`);
    });
}

// Initialisation de la carte France
function initCarteSenegal() {
    // Détruire la carte existante si elle existe
    if (carteFrance) {
        carteFrance.remove();
    }
    
    const carte = L.map('carte-projets').setView([46.2276, 2.2137], 6);
    carteFrance = carte; // Stocker la référence
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(carte);
    
    // Projets réalisés avec coordonnées en France
    const projets = [
        {
            nom: "Planification Urbaine",
            localisation: "Paris",
            coords: [48.8566, 2.3522],
            type: "urbanisme"
        },
        {
            nom: "Aménagement Coastal",
            localisation: "Nice",
            coords: [43.7102, 7.2620],
            type: "aménagement"
        },
        {
            nom: "Gestion Eaux",
            localisation: "Lyon",
            coords: [45.7640, 4.8357],
            type: "environnement"
        },
        {
            nom: "Développement Durable",
            localisation: "Marseille",
            coords: [43.2965, 5.3698],
            type: "environnement"
        },
        {
            nom: "Réseau Transport",
            localisation: "Bordeaux",
            coords: [44.8378, -0.5792],
            type: "transport"
        }
    ];;
    
    // Définir les icônes personnalisées
    const icons = {
        urbanisme: L.divIcon({
            html: '<div style="background: #3498db; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>',
            iconSize: [30, 30],
            className: 'custom-marker'
        }),
        aménagement: L.divIcon({
            html: '<div style="background: #27ae60; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>',
            iconSize: [30, 30],
            className: 'custom-marker'
        }),
        environnement: L.divIcon({
            html: '<div style="background: #e74c3c; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>',
            iconSize: [30, 30],
            className: 'custom-marker'
        }),
        transport: L.divIcon({
            html: '<div style="background: #ff9800; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>',
            iconSize: [30, 30],
            className: 'custom-marker'
        })
    };

    // Ajouter les marqueurs pour chaque projet
    projets.forEach(projet => {
        const marker = L.marker(projet.coords, {
            icon: icons[projet.type]
        }).addTo(carte);
        
        // Popup avec informations de base
        const popupContent = `
            <div style="min-width: 200px;">
                <h4 style="margin: 0 0 10px 0; color: #2c3e50;">${projet.nom}</h4>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Localisation:</strong> ${projet.localisation}</p>
            </div>
        `;
        
        marker.bindPopup(popupContent);
    });
}

// Afficher les détails d'un projet
function afficherDetailsProjet(projetId) {
    const projet = projetsRealises.find(p => p.id === projetId);
    if (!projet) return;

    // Remplir les détails du projet
    document.getElementById('projet-titre').textContent = projet.nom;
    document.getElementById('projet-localisation').textContent = projet.localisation;
    document.getElementById('projet-date').textContent = projet.date;
    document.getElementById('projet-type').textContent = projet.type;
    document.getElementById('projet-description-text').textContent = projet.description;

    // Créer la galerie de photos
    const gallery = document.getElementById('projet-gallery');
    gallery.innerHTML = '';
    
    projet.photos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo;
        img.alt = `Photo du projet ${projet.nom} ${index + 1}`;
        img.loading = 'lazy';
        img.onclick = () => agrandirPhoto(photo);
        
        // Animation d'apparition progressive
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        gallery.appendChild(img);
        
        setTimeout(() => {
            img.style.transition = 'all 0.5s ease';
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        }, index * 100);
    });

    // Afficher le panneau de détails avec animation
    const detailsPanel = document.getElementById('projet-details');
    detailsPanel.classList.remove('hidden');
    setTimeout(() => {
        detailsPanel.classList.add('active');
    }, 10);
}

// Fermer les détails du projet
function fermerDetailsProjet() {
    const detailsPanel = document.getElementById('projet-details');
    detailsPanel.classList.remove('active');
    setTimeout(() => {
        detailsPanel.classList.add('hidden');
    }, 300);
}

// Événement pour fermer les détails
document.addEventListener('DOMContentLoaded', function() {
    const closeDetails = document.querySelector('.close-details');
    if (closeDetails) {
        closeDetails.addEventListener('click', fermerDetailsProjet);
    }
    
    // Fermer avec la touche ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            fermerDetailsProjet();
        }
    });
    
    // Fermer en cliquant à l'extérieur
    const detailsPanel = document.getElementById('projet-details');
    if (detailsPanel) {
        detailsPanel.addEventListener('click', function(e) {
            if (e.target === detailsPanel) {
                fermerDetailsProjet();
            }
        });
    }
});

// Agrandir une photo
function agrandirPhoto(src) {
    const modal = document.createElement('div');
    modal.className = 'photo-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 4000;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        backdrop-filter: blur(10px);
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        transform: scale(0.8);
        transition: transform 0.3s ease;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(255,255,255,0.2);
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        color: white;
        font-size: 24px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    modal.appendChild(img);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);
    
    // Animation d'ouverture
    setTimeout(() => {
        modal.style.opacity = '1';
        img.style.transform = 'scale(1)';
    }, 10);
    
    // Fermer le modal
    const closeModal = () => {
        modal.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };
    
    modal.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeModal();
    });
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.background = 'rgba(255,255,255,0.3)';
        closeBtn.style.transform = 'rotate(90deg)';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.background = 'rgba(255,255,255,0.2)';
        closeBtn.style.transform = 'rotate(0deg)';
    });
    
    // Fermer avec ESC
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);
}

// Initialisation des projets en cours
function initProjetsEnCours() {
    const btnsViewPPT = document.querySelectorAll('.btn-view-ppt');
    const btnsDownload = document.querySelectorAll('.btn-download');
    
    btnsViewPPT.forEach(btn => {
        btn.addEventListener('click', function() {
            const projetId = this.getAttribute('data-projet');
            ouvrirPresentation(projetId);
        });
    });
    
    btnsDownload.forEach(btn => {
        btn.addEventListener('click', function() {
            const projetId = this.getAttribute('data-projet');
            telechargerPresentation(projetId);
        });
    });
}

function getPresentationPdfPath(projetId) {
    const pdfFiles = {
        "presentation-pdf": "URBA-TECH.pdf"
    };
    const fileName = pdfFiles[projetId] || `${projetId}.pdf`;
    return `documents/presentations/${fileName}`;
}
// Ouvrir la présentation PowerPoint
function ouvrirPresentation(projetId) {
    const projet = projetsEnCours[projetId];
    if (!projet) return;
    
    const modal = document.getElementById('ppt-modal');
    const viewer = document.getElementById('ppt-viewer');
    if (projetId === 'presentation-pdf') {
        const pdfPath = getPresentationPdfPath(projetId);
        window.location.href = pdfPath;
        return;
    }
    modal.classList.remove('pdf-fullscreen');

    const placeholderImage = (title, dataItems = []) => {
        const d1 = dataItems[0] || "Indicateur territorial prioritaire";
        const d2 = dataItems[1] || "Performance urbaine projet\u00e9e";
        const svg = `
            <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'>
                <defs>
                    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
                        <stop offset='0%' stop-color='#18324a'/>
                        <stop offset='100%' stop-color='#0a1b2f'/>
                    </linearGradient>
                </defs>
                <rect width='100%' height='100%' fill='url(#g)'/>
                <text x='50%' y='37%' dominant-baseline='middle' text-anchor='middle' fill='#ffffff' font-size='34' font-family='Arial'>Vue d'am\u00e9nagement</text>
                <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#d6deec' font-size='23' font-family='Arial'>${title}</text>
                <rect x='200' y='390' width='800' height='64' rx='12' fill='rgba(255,255,255,0.11)'/>
                <rect x='200' y='470' width='800' height='64' rx='12' fill='rgba(255,255,255,0.08)'/>
                <text x='230' y='430' dominant-baseline='middle' fill='#e8f2ff' font-size='22' font-family='Arial'>${d1}</text>
                <text x='230' y='510' dominant-baseline='middle' fill='#d6e5f7' font-size='22' font-family='Arial'>${d2}</text>
            </svg>
        `;
        return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    };

    const projectVisuals = {
        "centre-ville": [
            "images/projets/CENTRE VILLE 1.jpg",
            "images/projets/CENTRE VILLE 2.jpg",
            "images/projets/CENTRE VILLE 3.jpg",
            "images/projets/CENTRE VILLE 4.jpg"
        ],
        "zac-nord": [
            "images/projets/ZAC ECOLOGIQUE 1.jpg",
            "images/projets/ZAC ECOLOGIQUE 2.jpg",
            "images/projets/ZAC ECOLOGIQUE 3.jpg",
            "images/projets/ZAC ECOLOGIQUE 4.jpg"
        ],
        "trame-verte": [
            "images/projets/TRAME VERTE 1.jpg",
            "images/projets/TRAME VERTE 2.jpg",
            "images/projets/TRAME VERTE 3.jpg",
            "images/projets/TRAME VERTE 4.jpg"
        ]
    };

    const resolveSlideImage = (slideIndex) => {
        const pool = projectVisuals[projetId] || ["images/bureau/URBATECH.jpeg"];
        return pool[slideIndex % pool.length];
    };

    const renderDonnees = (items) => {
        if (!Array.isArray(items) || !items.length) return '';
        return items.map((item) => `<span class="data-chip">${item}</span>`).join('');
    };
    
    // Créer le visualiseur de présentation
    viewer.innerHTML = `
        <div class="ppt-container">
            <div class="ppt-header">
                <h3>${projet.titre}</h3>
                <div class="ppt-controls">
                    <button id="prev-slide" class="ppt-btn">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <span id="slide-counter">1 / ${projet.slides.length}</span>
                    <button id="next-slide" class="ppt-btn">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div class="projet-kpis" id="projet-kpis">
                ${renderDonnees(projet.donneesClefs)}
            </div>
            <div class="ppt-slide">
                <div class="slide-content">
                    <div class="slide-media">
                        <img id="slide-image" src="${resolveSlideImage(0)}" alt="${projet.slides[0].titre}" loading="lazy" onerror="this.src='${placeholderImage(projet.slides[0].titre, projet.slides[0].donnees)}'">
                    </div>
                    <div class="slide-meta">
                        <h4 id="slide-title">${projet.slides[0].titre}</h4>
                        <p id="slide-content">${projet.slides[0].contenu}</p>
                        <div class="slide-donnees" id="slide-donnees">${renderDonnees(projet.slides[0].donnees)}</div>
                        <p class="slide-footnote">Synth\u00e8se op\u00e9rationnelle du projet.</p>
                    </div>
                </div>
            </div>
            <div class="ppt-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${(1 / projet.slides.length) * 100}%"></div>
                </div>
            </div>
        </div>
    `;
    
    // Ajouter les styles pour le visualiseur
    const styleId = 'ppt-modal-inline-style';
    let style = document.getElementById(styleId);
    if (!style) {
        style = document.createElement('style');
        style.id = styleId;
        document.head.appendChild(style);
    }
    style.textContent = `
        .ppt-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            background: linear-gradient(165deg, #f4f8fc 0%, #eaf2f9 55%, #dce9f5 100%);
            border-radius: 20px;
            overflow: hidden;
        }
        .ppt-header {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 1.5rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .ppt-header h3 {
            margin: 0;
            font-size: 1.5rem;
            font-weight: 700;
        }
        .ppt-controls {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }
        .ppt-btn {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
        }
        .ppt-btn:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
        }
        .ppt-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        #slide-counter {
            font-weight: 600;
            font-size: 1rem;
            min-width: 60px;
            text-align: center;
        }
        .ppt-slide {
            flex: 1;
            display: flex;
            align-items: stretch;
            justify-content: center;
            padding: 1.5rem 2rem 2rem 2rem;
            overflow: hidden;
        }
        .projet-kpis {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            padding: 0.9rem 2rem;
            background: rgba(255, 255, 255, 0.7);
            border-bottom: 1px solid rgba(25, 64, 102, 0.14);
        }
        .slide-content {
            width: 100%;
            display: grid;
            grid-template-columns: 1.25fr 1fr;
            gap: 1.2rem;
            align-items: stretch;
            animation: slideIn 0.5s ease;
        }
        .slide-media {
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(128, 168, 207, 0.35);
            border-radius: 16px;
            padding: 0.6rem;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 300px;
        }
        .slide-meta {
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid rgba(153, 185, 218, 0.4);
            border-radius: 16px;
            padding: 1.1rem 1.2rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
        .slide-content h4 {
            color: #163250;
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 0.9rem;
            letter-spacing: -0.5px;
            text-align: left;
        }
        .slide-content img {
            max-width: 100%;
            width: 100%;
            height: 100%;
            max-height: 100%;
            object-fit: cover;
            border-radius: 12px;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
        }
        .slide-content p {
            color: #304860;
            font-size: 1rem;
            line-height: 1.65;
            margin: 0 0 0.9rem 0;
            text-align: left;
        }
        .slide-donnees {
            display: flex;
            flex-wrap: wrap;
            gap: 0.45rem;
            justify-content: flex-start;
            margin-top: 0.2rem;
        }
        .data-chip {
            display: inline-flex;
            align-items: center;
            background: rgba(33, 110, 173, 0.12);
            border: 1px solid rgba(33, 110, 173, 0.25);
            color: #174165;
            border-radius: 10px;
            padding: 0.35rem 0.62rem;
            font-size: 0.83rem;
            line-height: 1.2;
        }
        .slide-footnote {
            margin-top: auto;
            margin-bottom: 0;
            color: #5f7690;
            font-size: 0.82rem;
            letter-spacing: 0.2px;
        }
        .ppt-progress {
            height: 6px;
            background: rgba(255, 255, 255, 0.1);
        }
        .progress-bar {
            height: 100%;
            background: rgba(255, 255, 255, 0.2);
        }
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
            transition: width 0.3s ease;
        }
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @media (max-width: 900px) {
            .slide-content {
                grid-template-columns: 1fr;
            }
            .slide-media {
                min-height: 230px;
            }
        }
    `;
    
    let currentSlide = 0;
    
    // Fonctions de navigation
    function showSlide(index) {
        if (index < 0 || index >= projet.slides.length) return;
        
        currentSlide = index;
        const slide = projet.slides[currentSlide];
        const slideContent = document.querySelector('.slide-content');
        
        // Animation de transition
        slideContent.style.animation = 'none';
        setTimeout(() => {
            document.getElementById('slide-title').textContent = slide.titre;
            const slideImage = document.getElementById('slide-image');
            slideImage.onerror = () => {
                slideImage.src = placeholderImage(slide.titre, slide.donnees);
            };
            slideImage.src = resolveSlideImage(currentSlide);
            document.getElementById('slide-content').textContent = slide.contenu;
            document.getElementById('slide-donnees').innerHTML = renderDonnees(slide.donnees);
            document.getElementById('slide-counter').textContent = `${currentSlide + 1} / ${projet.slides.length}`;
            
            const progressPercent = ((currentSlide + 1) / projet.slides.length) * 100;
            document.querySelector('.progress-fill').style.width = `${progressPercent}%`;
            
            // Désactiver/activer les boutons
            document.getElementById('prev-slide').disabled = currentSlide === 0;
            document.getElementById('next-slide').disabled = currentSlide === projet.slides.length - 1;
            
            slideContent.style.animation = 'slideIn 0.5s ease';
        }, 100);
    }
    
    // Événements de navigation
    document.getElementById('prev-slide').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });
    
    document.getElementById('next-slide').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });
    
    // Navigation au clavier
    const handleKeyNav = (e) => {
        if (modal.style.display === 'block') {
            if (e.key === 'ArrowLeft') showSlide(currentSlide - 1);
            if (e.key === 'ArrowRight') showSlide(currentSlide + 1);
            if (e.key === 'Escape') {
                modal.style.display = 'none';
                document.removeEventListener('keydown', handleKeyNav);
            }
        }
    };
    document.addEventListener('keydown', handleKeyNav);
    
    // Navigation tactile (swipe)
    let touchStartX = 0;
    let touchEndX = 0;
    
    const pptSlide = document.querySelector('.ppt-slide');
    
    pptSlide.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    pptSlide.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) showSlide(currentSlide + 1); // Swipe gauche
        if (touchEndX > touchStartX + 50) showSlide(currentSlide - 1); // Swipe droit
    }
    
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Initialiser le premier slide
    showSlide(0);
}

// Télécharger la présentation
function telechargerPresentation(projetId) {
    const projet = projetsEnCours[projetId];
    if (!projet) return;
    
    // Créer un lien de téléchargement (simulation)
    const link = document.createElement('a');
    link.href = getPresentationPdfPath(projetId);
    link.download = `${projet.titre.replace(/\s+/g, '_')}.pdf`;
    link.click();
    
    // Afficher une notification moderne
    showNotification(`Téléchargement de "${projet.titre}" commencé...`);
}

// Afficher une notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
        <div class="notification-progress"></div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 5000;
            min-width: 300px;
            overflow: hidden;
            animation: slideInRight 0.3s ease;
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 1.5rem;
        }
        .notification-content i {
            color: var(--success-color);
            font-size: 1.2rem;
        }
        .notification-content span {
            color: var(--text-primary);
            font-weight: 500;
        }
        .notification-progress {
            height: 3px;
            background: var(--success-color);
            animation: progress 3s linear;
        }
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes progress {
            from {
                width: 100%;
            }
            to {
                width: 0%;
            }
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        style.id = 'notification-styles';
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Initialisation du modal
function initModal() {
    const modal = document.getElementById('ppt-modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            modal.classList.remove('active');
            modal.classList.remove('pdf-fullscreen');
        });
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            modal.classList.remove('active');
            modal.classList.remove('pdf-fullscreen');
        }
    });
}

// Effets de scroll avancés
function initScrollEffects() {
    // Smooth scroll pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Cacher/montrer le header au scroll
        if (currentScroll > lastScroll && currentScroll > 500) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Animation des éléments au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observer les sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
    
    // Observer les cartes
    document.querySelectorAll('.mission-card, .membre-card-3d, .projet-cours-card').forEach(card => {
        observer.observe(card);
    });
}

// Animations CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);





(function () {
    const typeMeta = {
        urbanisme: {
            label: "Urbanisme",
            color: "#3498db",
            explication: "PLU et sch\u00e9mas directeurs",
        },
        amenagement: {
            label: "Am\u00e9nagement",
            color: "#27ae60",
            explication: "Voirie et espaces publics",
        },
        environnement: {
            label: "Environnement",
            color: "#e74c3c",
            explication: "Impact et r\u00e9silience climatique",
        },
    };

    const projetsFrance = [
        {
            nom: "Requalification des quais",
            localisation: "Lyon",
            coords: [45.764, 4.8357],
            type: "urbanisme",
            annee: "2023",
            statut: "Livr\u00e9",
            resume: "Valorisation des berges et mobilit\u00e9s douces.",
            videoUrl: "https://www.bing.com/videos/riverview/relatedvideo?q=am%C3%A9nagement+centre+ville+animation+3D+vid%C3%A9o&&mid=584C98FF76454A53DB33584C98FF76454A53DB33&churl=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCQtJ5b4c1E0aRo9C6X9RWsQ&FORM=VRDGAR",
        },
        {
            nom: "Sch\u00e9ma directeur communal",
            localisation: "Toulouse",
            coords: [43.6045, 1.444],
            type: "urbanisme",
            annee: "2024",
            statut: "En cours",
            resume: "Programmation urbaine \u00e0 horizon 2035.",
            videoUrl: "https://www.bing.com/videos/riverview/relatedvideo?q=am%C3%A9nagement+ZAC+ECOLOGIQUE+3D+COURTE+vid%C3%A9o&&mid=718395C29859E061299D718395C29859E061299D&churl=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCEP3fNUqpLKh2PGIXlXHy6w&FORM=VRDGAR",
        },
        {
            nom: "Programme de centralit\u00e9",
            localisation: "Bordeaux",
            coords: [44.8378, -0.5792],
            type: "amenagement",
            annee: "2022",
            statut: "Livr\u00e9",
            resume: "R\u00e9am\u00e9nagement du c\u0153ur de quartier.",
            videoUrl: "https://www.bing.com/videos/riverview/relatedvideo?q=am%C3%A9nagement+ZAC+ECOLOGIQUE+3D+COURTE+vid%C3%A9o&&mid=718395C29859E061299D718395C29859E061299D&churl=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCEP3fNUqpLKh2PGIXlXHy6w&FORM=VRDGAR",
        },
        {
            nom: "Front de mer et mobilit\u00e9s",
            localisation: "Nice",
            coords: [43.7102, 7.262],
            type: "amenagement",
            annee: "2025",
            statut: "Phase d'\u00e9tude",
            resume: "Promenade, mobilit\u00e9 et continuit\u00e9s pi\u00e9tonnes.",
        },
        {
            nom: "Trame verte m\u00e9tropolitaine",
            localisation: "Marseille",
            coords: [43.2965, 5.3698],
            type: "environnement",
            annee: "2024",
            statut: "En cours",
            resume: "Corridors \u00e9cologiques et \u00eelots de fra\u00eecheur.",
        },
        {
            nom: "Plan inondation et adaptation",
            localisation: "Nantes",
            coords: [47.2184, -1.5536],
            type: "environnement",
            annee: "2023",
            statut: "Livr\u00e9",
            resume: "Actions prioritaires de r\u00e9silience urbaine.",
        },
    ];

    const projetsAfrique = [
        {
            nom: "Plan urbain de r\u00e9f\u00e9rence",
            localisation: "Bamako, Mali",
            coords: [12.6392, -8.0029],
            type: "urbanisme",
            annee: "2024",
            statut: "En cours",
            resume: "Vision strat\u00e9gique de croissance urbaine.",
        },
        {
            nom: "Boulevard structurant",
            localisation: "Abidjan, C\u00f4te d'Ivoire",
            coords: [5.3599, -4.0083],
            type: "amenagement",
            annee: "2023",
            statut: "Livr\u00e9",
            resume: "Voirie, \u00e9clairage et travers\u00e9es pi\u00e9tonnes.",
        },
        {
            nom: "Gestion des eaux pluviales",
            localisation: "Dakar, S\u00e9n\u00e9gal",
            coords: [14.7167, -17.4677],
            type: "environnement",
            annee: "2025",
            statut: "Phase d'\u00e9tude",
            resume: "Diagnostic de vuln\u00e9rabilit\u00e9 et solutions vertes.",
        },
        {
            nom: "Plan local de mobilit\u00e9",
            localisation: "Casablanca, Maroc",
            coords: [33.5731, -7.5898],
            type: "urbanisme",
            annee: "2022",
            statut: "Livr\u00e9",
            resume: "Sc\u00e9nario multimodal et phasage d'ex\u00e9cution.",
        },
        {
            nom: "Espace public de proximit\u00e9",
            localisation: "Conakry, Guin\u00e9e",
            coords: [9.6412, -13.5784],
            type: "amenagement",
            annee: "2024",
            statut: "En cours",
            resume: "Place publique, v\u00e9g\u00e9talisation et accessibilit\u00e9.",
        },
        {
            nom: "Plan biodiversit\u00e9 urbaine",
            localisation: "Rabat, Maroc",
            coords: [34.0209, -6.8416],
            type: "environnement",
            annee: "2023",
            statut: "Livr\u00e9",
            resume: "Inventaire et protection des continuit\u00e9s naturelles.",
        },
    ];

    let mapFrance = null;
    let mapAfrique = null;

    function createMarkerIcon(type) {
        const meta = typeMeta[type];
        return L.divIcon({
            html: `<div style="background:${meta.color};width:30px;height:30px;border-radius:50%;border:3px solid white;box-shadow:0 2px 5px rgba(0,0,0,0.3);"></div>`,
            iconSize: [30, 30],
            className: "custom-marker",
        });
    }

    function updateLegend(projets, zoneLabel) {
        const legendTitle = document.querySelector(".carte-legend h4");
        const legendItems = document.querySelectorAll(".carte-legend .legend-item span:last-child");
        const orderedTypes = ["urbanisme", "amenagement", "environnement"];

        if (legendTitle) {
            legendTitle.textContent = `L\u00e9gende ${zoneLabel}`;
        }

        orderedTypes.forEach((type, index) => {
            const total = projets.filter((projet) => projet.type === type).length;
            if (!legendItems[index]) return;
            legendItems[index].innerHTML = `<strong>${typeMeta[type].label} (${total})</strong><br><small>${typeMeta[type].explication}</small>`;
        });
    }

    function buildPopup(projet) {
        const meta = typeMeta[projet.type];
        const videoBlock = projet.videoUrl
            ? `<p style="margin:10px 0 0 0;font-size:13px;"><a href="${projet.videoUrl}" target="_blank" rel="noopener noreferrer">Voir la vid\u00e9o de simulation</a></p>`
            : "";
        return `
            <div style="min-width:240px;">
                <h4 style="margin:0 0 10px 0;color:#1f2d43;">${projet.nom}</h4>
                <p style="margin:4px 0;font-size:13px;"><strong>Type :</strong> ${meta.label}</p>
                <p style="margin:4px 0;font-size:13px;"><strong>Localisation :</strong> ${projet.localisation}</p>
                <p style="margin:4px 0;font-size:13px;"><strong>Ann\u00e9e :</strong> ${projet.annee}</p>
                <p style="margin:4px 0;font-size:13px;"><strong>Statut :</strong> ${projet.statut}</p>
                <p style="margin:8px 0 0 0;font-size:13px;color:#4e5f76;">${projet.resume}</p>
                ${videoBlock}
            </div>
        `;
    }

    function initCarteFrance() {
        if (mapFrance) mapFrance.remove();
        mapFrance = L.map("carte-projets").setView([46.2276, 2.2137], 6);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(mapFrance);

        projetsFrance.forEach((projet) => {
            const marker = L.marker(projet.coords, { icon: createMarkerIcon(projet.type) }).addTo(mapFrance);
            marker.bindPopup(buildPopup(projet));
        });

        updateLegend(projetsFrance, "France");
    }

    function initCarteAfrique() {
        if (mapAfrique) mapAfrique.remove();
        mapAfrique = L.map("carte-africa").setView([14.5, 1.5], 3);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(mapAfrique);

        projetsAfrique.forEach((projet) => {
            const marker = L.marker(projet.coords, { icon: createMarkerIcon(projet.type) }).addTo(mapAfrique);
            marker.bindPopup(buildPopup(projet));
        });

        updateLegend(projetsAfrique, "Afrique");
    }

    function initCarteControls() {
        const btnSenegal = document.getElementById("btn-senegal");
        const btnAfrica = document.getElementById("btn-africa");
        const carteSenegal = document.getElementById("carte-projets");
        const carteAfrica = document.getElementById("carte-africa");
        if (!btnSenegal || !btnAfrica || !carteSenegal || !carteAfrica) return;

        btnSenegal.addEventListener("click", (e) => {
            e.preventDefault();
            btnSenegal.classList.add("active");
            btnAfrica.classList.remove("active");
            carteSenegal.style.display = "block";
            carteAfrica.style.display = "none";
            initCarteFrance();
        });

        btnAfrica.addEventListener("click", (e) => {
            e.preventDefault();
            btnAfrica.classList.add("active");
            btnSenegal.classList.remove("active");
            carteSenegal.style.display = "none";
            carteAfrica.style.display = "block";
            initCarteAfrique();
        });
    }

    window.initCarteSenegal = initCarteFrance;
    window.initCarteAfrique = initCarteAfrique;
    window.initCarteControls = initCarteControls;
})();

# Site Web du Bureau d'Études Urbatech

## Description

Ce site web présente le bureau d'études pluridisciplinaire Urbatech, spécialisé en urbanisme et aménagement du territoire. Le site est divisé en trois sections principales :

1. **Présentation du bureau d'études** - Informations sur l'équipe, les missions et les partenaires
2. **Projets réalisés** - Carte interactive des projets complétés avec détails et photos
3. **Projets en cours** - Présentations interactives des projets en développement

## Structure du Projet

```
Site_Web/
├── index.html              # Page principale du site
├── css/
│   └── style.css          # Feuille de style principale
├── js/
│   └── main.js            # Fonctionnalités JavaScript
├── images/
│   ├── bureau/            # Photos du bureau
│   ├── equipe/            # Photos des membres de l'équipe
│   ├── partenaires/       # Logos des partenaires
│   ├── projets/           # Photos des projets réalisés
│   └── presentations/      # Images pour les présentations
│       ├── centre-ville/
│       ├── zac-nord/
│       └── trame-verte/
└── documents/
    └── presentations/     # Fichiers PowerPoint/PDF à télécharger
```

## Technologies Utilisées

- **HTML5** - Structure sémantique du site
- **CSS3** - Design moderne et responsive avec animations
- **JavaScript (ES6+)** - Interactivité et fonctionnalités dynamiques
- **Leaflet.js** - Carte interactive pour les projets
- **Font Awesome** - Icônes professionnelles

## Fonctionnalités Principales

### 1. Navigation Responsive
- Menu hamburger pour mobile
- Smooth scroll entre sections
- Header fixe avec effet de transparence

### 2. Section Présentation
- Grid layout pour présentation et équipe
- Animations au scroll
- Cards pour les membres de l'équipe
- Section partenaires avec logos

### 3. Carte Interactive des Projets
- Carte Leaflet avec marqueurs personnalisés
- Popups avec informations de base
- Panneau de détails avec galerie photos
- Légende interactive par type de projet
- Trois types de projets : urbanisme, aménagement, environnement

### 4. Projets en Cours
- Cards avec statut des projets
- Modal PowerPoint intégré
- Navigation entre slides
- Téléchargement des présentations
- Support clavier (flèches et ESC)

## Instructions de Personnalisation

### 1. Remplacer les Images

#### Images du Bureau
Placez les photos du bureau dans `images/bureau/` :
- `bureau.jpg` - Photo principale du bureau

#### Photos de l'Équipe
Placez les photos des membres dans `images/equipe/` :
- `directeur.jpg` - Photo du directeur
- `architecte.jpg` - Photo de l'architecte
- `geomaticien.jpg` - Photo du géomaticien
- `ingenieur.jpg` - Photo de l'ingénieur

#### Logos des Partenaires
Placez les logos dans `images/partenaires/` :
- `logo1.png` - Logo partenaire 1
- `logo2.png` - Logo partenaire 2
- `logo3.png` - Logo partenaire 3
- `logo4.png` - Logo partenaire 4

#### Photos des Projets Réalisés
Placez les photos dans `images/projets/` :
- `republique1.jpg`, `republique2.jpg`, `republique3.jpg`
- `zac1.jpg`, `zac2.jpg`, `zac3.jpg`
- `trame1.jpg`, `trame2.jpg`, `trame3.jpg`
- `marais1.jpg`, `marais2.jpg`, `marais3.jpg`
- `parc1.jpg`, `parc2.jpg`, `parc3.jpg`

#### Images des Présentations
Placez les images dans les dossiers correspondants :
- `images/presentations/centre-ville/slide1.jpg` à `slide4.jpg`
- `images/presentations/zac-nord/slide1.jpg` à `slide4.jpg`
- `images/presentations/trame-verte/slide1.jpg` à `slide4.jpg`

### 2. Documents à Télécharger
Placez les fichiers PDF dans `documents/presentations/` :
- `centre-ville.pdf`
- `zac-nord.pdf`
- `trame-verte.pdf`

### 3. Personnaliser les Données

#### Modifier les Projets Réalisés
Dans `js/main.js`, modifiez le tableau `projetsRealises` :

```javascript
const projetsRealises = [
    {
        id: 1,
        nom: "Nom du projet",
        localisation: "Ville, région",
        type: "urbanisme", // ou "aménagement", "environnement"
        date: "2024",
        description: "Description détaillée du projet...",
        coords: [latitude, longitude],
        photos: [
            "images/projets/photo1.jpg",
            "images/projets/photo2.jpg"
        ]
    }
];
```

#### Modifier les Projets en Cours
Dans `js/main.js`, modifiez l'objet `projetsEnCours` :

```javascript
const projetsEnCours = {
    "identifiant-projet": {
        titre: "Titre du projet",
        slides: [
            {
                titre: "Titre de la slide",
                contenu: "Contenu de la slide",
                image: "images/presentations/dossier/slide.jpg"
            }
        ]
    }
};
```

### 4. Personnaliser les Informations

#### Coordonnées et Contact
Modifiez les informations dans le footer de `index.html` :

```html
<div class="footer-section">
    <h4>Contact</h4>
    <p><i class="fas fa-map-marker-alt"></i> Votre adresse</p>
    <p><i class="fas fa-phone"></i> Votre téléphone</p>
    <p><i class="fas fa-envelope"></i> votre.email@domaine.fr</p>
</div>
```

#### Informations de l'Équipe
Modifiez les informations dans la section équipe de `index.html` :

```html
<div class="equipe-membre">
    <img src="images/equipe/nom.jpg" alt="Fonction">
    <h4>Nom Prénom</h4>
    <p>Fonction - Spécialité</p>
</div>
```

## Déploiement

### Serveur Local
1. Placez le dossier `Site_Web` dans le répertoire web de votre serveur
2. Accédez au site via `http://localhost/Site_Web/`

### Serveur XAMPP
1. Copiez le dossier dans `C:/xampp/tomcat/webapps/`
2. Démarrez Tomcat
3. Accédez via `http://localhost:8080/Site_Web/`

## Optimisation et Maintenance

### Performance
- Les images sont optimisées pour le web
- Le CSS est minifié pour un chargement rapide
- Le JavaScript utilise des techniques modernes

### SEO
- Structure HTML5 sémantique
- Métadonnées complètes
- URLs propres avec ancres

### Accessibilité
- Navigation au clavier complète
- Textes alternatifs pour les images
- Contrastes respectés

## Personnalisation Avancée

### Couleurs et Thème
Modifiez les variables CSS dans `css/style.css` :

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --accent-color: #667eea;
    --success-color: #27ae60;
    --warning-color: #f39c12;
    --danger-color: #e74c3c;
}
```

### Polices
Remplacez les polices dans `css/style.css` :

```css
body {
    font-family: 'Votre Police', sans-serif;
}
```

### Animations
Personnalisez les animations dans `css/style.css` :

```css
@keyframes votreAnimation {
    from { /* état initial */ }
    to { /* état final */ }
}
```

## Support

Pour toute question ou modification personnalisée, contactez l'équipe de développement.

---

**Urbatech - Solutions innovantes pour la planification urbaine et l'aménagement durable**

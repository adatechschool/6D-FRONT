# installations:

- aller sur le backlog FRONT voir ce qu'il y a à faire : https://github.com/orgs/adatechschool/projects/76
- aller sur la branche dev
- git pull origin dev
- créer sa branche avec le nom de la fonctionnalité
- npm install react-router-dom - pour installer react router dom
- NPM run dev pour (re)lancer le serveur - manip à faire à chaque fois que vous faite une manip dans le terminal



## Tailwind CSS https://tailwindcss.com/docs/
Tailwind CSS, c'est quoi ?

Framework CSS Utility-First : Tailwind est un ensemble d'outils qui te permet de styliser ton application web rapidement et efficacement. Au lieu d'écrire des styles personnalisés pour chaque élément, tu utilises des classes prédéfinies.
Classes Utilitaires : Ce sont des classes toutes prêtes comme bg-orange-50 pour un fond orange clair ou text-emerald-700 pour du texte vert foncé. Elles te permettent de styliser directement dans le HTML sans écrire de CSS séparé.
Responsive Design : Tailwind facilite la création de sites qui s'adaptent bien aux différentes tailles d'écran (ordinateurs, tablettes, smartphones).
Personnalisable : Tu peux configurer Tailwind pour ajouter tes propres couleurs ou styles si besoin.

Exemples de couleurs utilisées : 
- GLOBAL TEXT COLOR and font: text-emerald-700 font-primary
- HEADER BUTTONS : hover:scale-90 transition-all text-black


### React
React, c'est quoi ?

Bibliothèque JavaScript pour construire des interfaces utilisateur : 

React te permet de créer des applications web dynamiques et interactives.
Composants : Ce sont des blocs de construction réutilisables. Par exemple, un bouton, une carte d'annonce, ou une barre de navigation peuvent être des composants.
État et Props : L'état (state) permet de gérer les données dynamiques dans un composant. Les props (propriétés) permettent de passer des données d'un composant parent à un composant enfant.
Re-rendu Efficient : Quand une donnée change, seules les parties de l'interface qui en dépendent sont mises à jour, ce qui rend l'application plus rapide.


#### React Router
React Router, c'est quoi ?

Gestion de la navigation dans une application React :https://www.geeksforgeeks.org/reactjs-router/

React Router te permet de créer des routes pour naviguer entre différentes pages sans recharger toute l'application.
Composants de Route : Tu définis des routes avec des composants comme <Route> pour dire quelle page afficher en fonction de l'URL.
Navigation Dynamique : Utilise des liens (<Link>) pour naviguer entre les pages, ce qui rend l'expérience utilisateur fluide.
Historique de Navigation : Permet de gérer l'historique des pages visitées, comme les boutons "retour" du navigateur.
Ensemble dans notre projet :
Tailwind CSS nous aide à styliser rapidement notre application avec des classes utilitaires, rendant le design cohérent et facile à ajuster.
React nous permet de structurer notre application en composants réutilisables, facilitant la gestion des données dynamiques et des interactions utilisateur.
React Router gère la navigation entre les différentes pages de notre application, comme la page d'accueil et la page des détails, sans recharger toute l'application.
Avec ces outils, nous pouvons créer une application web moderne, performante et facile à maintenir, tout en offrant une expérience utilisateur fluide et agréable.


##### Doc sur les hooks de react + lien de la doc officiel
https://fr.legacy.reactjs.org/docs/hooks-overview.html



###### React + Vite (doc d'origine à la création du projet)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

###### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

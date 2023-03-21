# API_indy
API_indy est un projet d'API qui permet de gérer les pourboires dans un restaurant et de les répartir équitablement entre les salariés de chaque service. Ce projet comprend les fonctionnalités suivantes :

CRUD des utilisateurs (salariés)

CRUD des tables du restaurant

CRUD des services

Jointure entre le service et les utilisateurs (serviceUser)

Gestion des pourboires par table (tableTips)

Gestion des paiements des pourboires (tipsPayment)

Calcul de la somme totale des pourboires pour chaque mois

Utilisation de JSON Web Token (JWT) pour l'authentification

# Technologies utilisées

API_indy utilise les technologies et dépendances suivantes :

dotenv

express

jsonwebtoken

mysql

nodemon

swagger

swagger-ui-express

docker

# Installation

Pour installer et exécuter API_indy sur votre machine locale, vous pouvez suivre les étapes suivantes :

Clonez le repository sur votre machine
Ouvrez le terminal et allez dans le dossier API_indy
Tapez docker-compose up --build pour exécuter le projet avec Docker, ou sinon tapez npm install pour installer les dépendances, puis npm start pour lancer le projet.
# Utilisation
Une fois que vous avez exécuté le projet, vous pouvez accéder à la documentation Swagger pour tester les différentes fonctionnalités. La documentation est disponible à l'adresse suivante : http://localhost:3004/api-docs.

Vous pouvez également utiliser le fichier postman fourni pour tester les requêtes.

# Contribution
Toutes les contributions sont les bienvenues. Si vous souhaitez contribuer à API_indy, veuillez ouvrir une pull request ou une issue sur le repository.

# Licence
Ce projet est distribué sous la licence MIT.

N'hésitez pas à me faire savoir si vous avez besoin d'autres informations ou si vous avez des suggestions pour améliorer ce README.md.

import React from 'react';
import { Container } from 'react-bootstrap';

function PrivacyPolicyView() {
  return (
    <Container>
    <h1 class="mt-5">Politique de confidentialité</h1>

    <p>
      Cette politique de confidentialité décrit comment <b>Entre Citoyens</b> collecte, utilise et protège les données
      personnelles que vous nous fournissez lorsque vous utilisez notre site web.
    </p>

    <h2>Collecte des données personnelles</h2>
    <p>
      Nous collectons les données personnelles suivantes lorsque vous vous inscrivez sur notre site, remplissez un formulaire
      de contact ou effectuez une commande :
    </p>
    <ul>
      <li>Pseudo</li>
      <li>Adresse e-mail</li>
    </ul>

    <h2>Utilisation des données personnelles</h2>
    <p>
      Les données personnelles que nous collectons sont utilisées pour les finalités suivantes :
    </p>
    <ul>
      <li>Personnaliser votre expérience sur notre site</li>
      <li>Traiter vos commandes et paiements</li>
      <li>Vous envoyer des informations relatives à nos produits et services</li>
      <li>Vous contacter pour des enquêtes et des études de marché</li>
    </ul>

    <h2>Protection des données personnelles</h2>
    <p>
      Nous mettons en place des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès,
      divulgation, utilisation ou modification non autorisés.
    </p>

    <h2>Cookies</h2>
    <p>
      Notre site utilise des cookies pour améliorer votre expérience utilisateur. Vous pouvez modifier les paramètres de votre
      navigateur pour désactiver les cookies si vous le souhaitez.
    </p>

    <h2>Partage des données personnelles</h2>
    <p>
      Nous ne partageons pas vos données personnelles avec des tiers sans votre consentement préalable, sauf dans les cas
      suivants :
    </p>
    <ul>
      <li>Lorsque cela est nécessaire pour l'exécution d'un contrat</li>
      <li>Lorsque nous sommes légalement tenus de le faire</li>
      <li>Pour protéger nos droits et notre propriété</li>
    </ul>

    <h2>Exercice de vos droits</h2>
    <p>
      Vous avez le droit d'accéder, de rectifier, de supprimer ou de limiter l'utilisation de vos données personnelles. Vous
      pouvez également vous opposer au traitement de vos données personnelles. Pour exercer ces droits, veuillez nous
      contacter à l'adresse [adresse e-mail].
    </p>

    <h2>Modification de la politique de confidentialité</h2>
    <p>
      Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera
      publiée sur cette page. Nous vous encourageons à consulter régulièrement cette page pour rester informé des mises à jour.
    </p>
  </Container>
  );
}

export default PrivacyPolicyView;

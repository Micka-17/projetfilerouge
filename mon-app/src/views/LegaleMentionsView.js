import React from 'react';
import { Container } from 'react-bootstrap';

function LegaleMentionsView() {
    return (
            <Container>
            <h1 class="mt-5">Mentions légales</h1>
        
              <h2>1. Informations générales</h2>
              <p>
                Ce site est édité par <strong>Entre Citoyens</strong><br />
                Siège social : <strong>33 Rue de la dépression</strong><br />
                Numéro de téléphone : <strong>04 55 88 99 66</strong><br />
                Adresse e-mail : <strong>entrecitoyens@gmail.com</strong><br />
                Numéro d'immatriculation : <strong>123 456 782</strong>
              </p>
        
              <p>
                Hébergeur du site : <strong>Nom de l'hébergeur</strong><br />
                Adresse de l'hébergeur : <strong>Adresse de l'hébergeur</strong>
              </p>
        
              <h2>2. Propriété intellectuelle</h2>
              <p>
                Le contenu de ce site, y compris les textes, les images, les vidéos, les graphiques et les logos, est la propriété
                exclusive de <strong>Entre Citoyens</strong> ou de ses partenaires et est protégé par les lois sur la propriété
                intellectuelle. Toute utilisation, reproduction ou diffusion non autorisée du contenu est strictement interdite.
              </p>
        
              <h2>3. Collecte de données personnelles</h2>
              <p>
                Lors de votre visite sur ce site, il est possible que nous collectons des données personnelles vous concernant. Ces
                données sont traitées conformément à notre politique de confidentialité, que vous pouvez consulter à l'adresse suivante :
                <a href="/politique-de-confidentialite">Politique de confidentialité</a>.
              </p>
        
              <h2>4. Cookies</h2>
              <p>
                Ce site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez consulter notre politique en
                matière de cookies pour obtenir plus d'informations sur l'utilisation des cookies et la manière de les gérer.
              </p>
        
              <h2>5. Liens externes</h2>
              <p>
                Ce site peut contenir des liens vers d'autres sites internet. Nous ne sommes pas responsables du contenu de ces sites ni
                des pratiques de confidentialité qu'ils peuvent mettre en place. Nous vous recommandons de lire attentivement les
                politiques de confidentialité de ces sites avant de fournir vos données personnelles.
              </p>
        
              <h2>6. Limitation de responsabilité</h2>
              <p>
                Nous nous efforçons de maintenir les informations de ce site à jour et exactes. Cependant, nous ne pouvons garantir
                l'exactitude, l'exhaustivité ou la pertinence des informations fournies. Nous déclinons toute responsabilité quant à
                l'utilisation que vous faites de ces informations.
              </p>
        
              <h2>7. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit en vigueur dans votre pays. Tout litige relatif à
                l'interprétation ou à l'exécution des présentes sera de la compétence exclusive des tribunaux de votre pays.
              </p>
    </Container>
        
    )
  }
  
  export default LegaleMentionsView;
import '../components/Footer/Footer.css'


function Footer() {
  return (

    <footer className=" footer-bg-color mt-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <h4>Nos Services</h4>
            <ul className="list-unstyled style-links">
              <li><a href="#">Solidarité</a></li>
              <li><a href="#">Santé</a></li>
              <li><a href="#">Administration</a></li>
              <li><a href="#">Enfance</a></li>
              <li><a href="#">Loisir</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h4>Contactez-nous</h4>
            <ul className="list-unstyled style-links">
              <li><a href="#">04 55 88 99 66</a></li>
              <li><a href="#">contact@entrecitoyens.com</a></li>
              <li><a href="#">33 Rue de la dépression</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h4>Suivez-nous</h4>
            <ul className="list-unstyled style-links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <ul className="list-unstyled style-links">
              <li><a href="/mention-legales">Mentions légales</a></li>
              <li><a href="/politique-de-confidentialite">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="mt-3 mb-0">© 2023 Entre Citoyens. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
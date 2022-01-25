import busikLogo from "../../images/sponsor-logo/busik.png"
import pzlLogo from "../../images/sponsor-logo/pzl.png"
import iteLogo from "../../images/sponsor-logo/ITE.png"
import vertipolLogo from "../../images/sponsor-logo/vertipol.png"
import { Link } from 'react-router-dom'

const Footer = ({ sponsors }) => {

  const currentYear = new Date().getFullYear()

  return (
    <section className="footer">
      <div className="footer__sponsors">
        <h2 className="footer__sponsors-title">Sponsorzy i partnerzy</h2>
        <div className="footer__sponsors-container">
          {sponsors.map(sponsor =>

            <a key={sponsor.id} href={sponsor.link} className="footer__sponsors-container-image">
              <img className="footer__sponsors-image" src={sponsor.image} alt={`Logo firmy ${sponsor.name}`} />
            </a>
          )}
        </div>
      </div>

      <div className="footer__copyright">
        <p className="footer__copyright-info">Copyrights &copy; {currentYear} Stowarzyszenie Inicjatyw Niezależnych "Galicja" / Wszelkie prawa zastrzeżone</p>
        <p className="footer__copyright-info">Wykonanie: Marcin Marciniak</p>
      </div>
    </section>
  )
}

export default Footer;
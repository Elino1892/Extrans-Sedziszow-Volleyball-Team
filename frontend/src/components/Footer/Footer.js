import busikLogo from "../../images/sponsor-logo/busik.png"
import pzlLogo from "../../images/sponsor-logo/pzl.png"
import iteLogo from "../../images/sponsor-logo/ITE.png"
import vertipolLogo from "../../images/sponsor-logo/vertipol.png"

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <section className="footer">
      <div className="footer__sponsors">
        <h2 className="footer__sponsors-title">Sponsorzy i partnerzy</h2>
        <div className="footer__sponsors-container">
          <div className="footer__sponsors-container-image">
            <img className="footer__sponsors-image" src={busikLogo} alt="Logo firmy busik" />
          </div>
          <div className="footer__sponsors-container-image">
            <img className="footer__sponsors-image" src={pzlLogo} alt="Logo firmy PZL Sędziszów" />
          </div>
          <div className="footer__sponsors-container-image">
            <img className="footer__sponsors-image" src={iteLogo} alt="Logo firmy ITE" />
          </div>
          <div className="footer__sponsors-container-image">
            <img className="footer__sponsors-image" src={vertipolLogo} alt="Logo firmy Vertipol" />
          </div>
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
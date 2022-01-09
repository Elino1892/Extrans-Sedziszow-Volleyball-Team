import Authority from "./Authority/Authority";
import Contact from "./Contact/Contact";
import Sponsor from "./Sponsor/Sponsor";

import logoImage from "../../images/logo_volleyball_team.png"

const Club = ({ sponsors }) => {
  return (
    <section className="club">
      <div className="club__background">
        <div className="club__background-light-overlay"></div>
        <div className="team__logo" style={{ opacity: '0.6' }}>
          <img src={logoImage} alt="Logo drużyny Extransu Sędziszów Małopolski" className="team__logo-image" />
        </div>
      </div>
      <div className="club__content">
        <Authority />
        <Sponsor
          sponsors={sponsors}
        />
        <Contact />
      </div>
    </section>
  )
}

export default Club;
import logoImage from "../../../images/logo_volleyball_team.png"
import PlayerItem from "../PlayerItem/PlayerItem";

const PlayerList = ({ team }) => {

  return (
    <section className="team">
      <div className="team__background">
        <div className="team__background-dark-overlay">
        </div>
        <div className="team__logo">
          <img src={logoImage} alt="Logo drużyny Extransu Sędziszów Małopolski" className="team__logo-image" />
        </div>
      </div>
      <div className="team__skewed-gradient">
        <div className="team__gradient"></div>
        <div className="team__gradient"></div>
        <div className="team__gradient"></div>
        <div className="team__gradient"></div>
        <div className="team__gradient"></div>
      </div>
      <div className="team__players">
        <div className="team__players-wrapper">
          {team.map(group =>
            <div key={group.id} className="team__group">
              <p className="team__group-name">{group.group}</p>
              {group.players.map(player =>
                <PlayerItem
                  key={player.id}
                  id={player.id}
                  firstName={player.firstName}
                  lastName={player.lastName}
                  number={player.number}
                  smallImage={player.image}
                />
              )}

            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PlayerList;
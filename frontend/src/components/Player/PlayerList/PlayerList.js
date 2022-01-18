import logoImage from "../../../images/logo_volleyball_team.png"
import PlayerItem from "../PlayerItem/PlayerItem";

const PlayerList = ({ team, groups }) => {

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
          {groups.map(group =>
            <div key={group.id} className="team__group">
              <p className="team__group-name">{group.name}</p>
              {team.map(player =>
                player.group.name === group.name &&
                <PlayerItem
                  key={player.id}
                  id={player.id}
                  firstName={player.first_name}
                  lastName={player.last_name}
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
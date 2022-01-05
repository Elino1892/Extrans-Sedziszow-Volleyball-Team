const TeamItem = ({ place, name, isHome, numberOfMatches, numberOfWonMatches, numberOfLostMatches, points, wonSets, lostSets, wonSmallPoints, lostSmallPoints, ratioSets, ratioSmallPoints, image }) => {
  return (
    <tr className="league-table__table-body-line">
      <td className={isHome ? "league-table__highlighted" : ''}>{place}</td>
      <td>
        <div className="league-table__logo-team">
          <img src={image} alt={`Logo zespołu ${name}`} className="league-table__logo-team-img" />
        </div>
      </td>
      <td>{name}</td>
      <td>{points}</td>
      <td>{numberOfMatches}</td>
      <td>{numberOfWonMatches}</td>
      <td>{numberOfLostMatches}</td>
      <td>{wonSets}</td>
      <td>{lostSets}</td>
      <td>{wonSmallPoints}</td>
      <td>{lostSmallPoints}</td>
      <td>{ratioSets}</td>
      <td>{ratioSmallPoints}</td>
    </tr>
  )
}

export default TeamItem;
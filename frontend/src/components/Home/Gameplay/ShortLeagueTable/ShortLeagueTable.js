import useWindowSize from '../../../../hooks/useWindowSize';

const WIDTH_SIZE_XSMALL = 480;

const ShortTableLeague = ({ table }) => {

  const size = useWindowSize();

  return (
    <div className="short-league-table">
      <h2 className="short-league-table__title">Sezon 2021/2022</h2>
      <table className="short-league-table__container">
        <thead className="short-league-table__table-head">
          <tr className="short-league-table__table-head-line">
            <th>Miejsce</th>
            <th colSpan={2}>Drużyna</th>
            <th>Punkty</th>
            <th>Mecze</th>
          </tr>
        </thead>
        <tbody className="short-league-table__table-body">
          {table.map(team =>
            <tr key={team.place} className={team.team === 'Extrans Sędziszów Małopolski' ? "short-league-table__table-body-line short-league-table__table-body-line--highlighted" : "short-league-table__table-body-line"}>
              <td>{team.place}</td>
              <td><img src={team.team_logo} alt={`Logo ${team.team}`} className="short-league-table__table-body-image"></img></td>
              <td className='short-league-table__team-name'>{size.width > WIDTH_SIZE_XSMALL ? team.team : ''}</td>
              <td>{team.points}</td>
              <td>{team.matches_played}</td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  )
}

export default ShortTableLeague;
import TeamItem from "./TeamItem/TeamItem";

const LeagueTable = ({ leagueTable }) => {
  return (
    <main className="league-table">
      <table className="league-table__container">
        <thead className="league-table__table-head">
          <tr className="league-table__table-head-line">
            <th rowSpan={2}>Miejsce</th>
            <th rowSpan={2} colSpan={2}>Drużyna</th>
            <th rowSpan={2}>Punkty</th>
            <th colSpan={3}>Mecze</th>
            <th colSpan={2}>Sety</th>
            <th colSpan={2}>Punkty</th>
            <th colSpan={2}>Stosunek</th>
          </tr>
          <tr className="league-table__table-head-line-second">
            {/* <th></th>
            <th></th>
            <th></th> */}
            <th>Rozegrane</th>
            <th>Wygrane</th>
            <th>Przegrane</th>
            <th>Wygrane</th>
            <th>Przegrane</th>
            <th>Wygrane</th>
            <th>Przegrane</th>
            <th>Sety</th>
            <th>Punkty</th>
          </tr>
        </thead>
        <tbody className="league-table__table-body">
          {leagueTable.map((team, index) =>
            <TeamItem
              key={team.id}
              place={index + 1}
              name={team.team}
              // isHome={team.isHome}
              numberOfMatches={team.matches_played}
              numberOfWonMatches={team.matches_won}
              numberOfLostMatches={team.matches_lost}
              points={team.points}
              wonSets={team.sets_won}
              lostSets={team.sets_lost}
              wonSmallPoints={team.small_points_won}
              lostSmallPoints={team.small_points_lost}
              ratioSets={team.ratio_sets}
              ratioSmallPoints={team.ratio_small_points}
              image={team.team_logo}
            />
          )}
        </tbody>
      </table>
    </main>
  )
}

export default LeagueTable;
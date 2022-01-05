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
          {leagueTable.map(team =>
            <TeamItem
              key={team.id}
              place={team.place}
              name={team.name}
              isHome={team.isHome}
              numberOfMatches={team.numberOfMatches}
              numberOfWonMatches={team.numberOfWonMatches}
              numberOfLostMatches={team.numberOfLostMatches}
              points={team.points}
              wonSets={team.wonSets}
              lostSets={team.lostSets}
              wonSmallPoints={team.wonSmallPoints}
              lostSmallPoints={team.lostSmallPoints}
              ratioSets={team.ratioSets}
              ratioSmallPoints={team.ratioSmallPoints}
              image={team.image}
            />
          )}
        </tbody>
      </table>
    </main>
  )
}

export default LeagueTable;
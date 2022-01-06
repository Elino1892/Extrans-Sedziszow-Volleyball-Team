import firstTeamLogo from "../../../../images/team-logo/Jaworzno-logo-192x192.jpg"
import secondTeamLogo from "../../../../images/team-logo/Andrychow-logo-192x192.jpg"
import thirdTeamLogo from "../../../../images/team-logo/Krosno-logo-192x192.jpg"
import sedziszowTeamLogo from "../../../../images/team-logo/sedziszow-mlp-logo-192x192.png"

const TableLeague = () => {
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
          <tr className="short-league-table__table-body-line">
            <td>1</td>
            <td><img src={firstTeamLogo} alt="" className="short-league-table__table-body-image"></img></td>
            <td>MCKiS Jaworzno</td>
            <td>44</td>
            <td>15</td>
          </tr>
          <tr className="short-league-table__table-body-line">
            <td>2</td>
            <td><img src={secondTeamLogo} alt="" className="short-league-table__table-body-image"></img></td>
            <td>MKS Andrychów</td>
            <td>36</td>
            <td>15</td>
          </tr>
          <tr className="short-league-table__table-body-line">
            <td>3</td>
            <td><img src={thirdTeamLogo} alt="" className="short-league-table__table-body-image"></img></td>
            <td>Karpaty Krosno Glass - KPU w Krośnie</td>
            <td>31</td>
            <td>15</td>
          </tr>
          <tr className="short-league-table__table-body-line short-league-table__table-body-line--highlighted">
            <td>6</td>
            <td><img src={sedziszowTeamLogo} alt="" className="short-league-table__table-body-image"></img></td>
            <td>Extrans Sędziszów Małopolski</td>
            <td>25</td>
            <td>15</td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default TableLeague;
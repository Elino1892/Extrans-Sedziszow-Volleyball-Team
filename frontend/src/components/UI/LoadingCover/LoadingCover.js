import { useEffect } from "react";

const LoadingCover = () => {

  // useEffect(() => {
  //   return () => {
  //     <div className="loading-cover loading-cover--opacity">
  //       <img src="../../../images/logo_volleyball_team.png" alt="logo-extrans-sedziszow malopolski" />
  //     </div>
  //   }
  // }, [])


  return (
    <div className="loading-cover">
      <img src="../../../images/logo_volleyball_team.png" alt="logo-extrans-sedziszow malopolski" />
    </div>
  )
}

export default LoadingCover;
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listSponsors } from '../../store/actions/sponsorActions'

const Layout = ({ children }) => {

  const dispatch = useDispatch();

  const sponsorList = useSelector(state => state.sponsorList)
  const { loading, error, sponsors } = sponsorList

  useEffect(() => {
    dispatch(listSponsors())
  }, [dispatch])

  return (
    <div className="wrapper">
      <Header />
      {children}
      <Footer
        sponsors={sponsors}
      />
    </div>
  )
}

export default Layout;
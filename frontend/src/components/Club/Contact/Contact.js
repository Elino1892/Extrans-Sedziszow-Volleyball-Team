const Contact = () => {
  return (
    <div className="article-item__text-container">
      <div className="article-item__text">
        <div className="article-item__text-skew-container article-item__text-skew-container--club">
          <div className="article-item__text-content article-item__text-content--player-info article-item__text-content--club" style={{ paddingTop: 0 }}>
            <div className="club__container">
              <div className="club__skewed-icon-container">
                <div className="club__icon-container">
                  <span className="fas fa-phone-square-alt"></span>
                </div>
                <div className="club__skew-container"></div>
              </div>
              <h2 className="club__title" >Kontakt</h2>
              <div className="club__text">
                <p>Stowarzyszenie Inicjatyw Niezależnych Galicja</p>
                <p>ul. Konopnickiej 5</p>
                <p>39-120 Sędziszów Małopolski</p>
                <p>Polska / Poland</p>
                <p>e-mail: <span>singalicja@gmail.com</span></p>
                <p>telefon: 504124638</p>
                <p>KRS / NIP: 8181719040</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
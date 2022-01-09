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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
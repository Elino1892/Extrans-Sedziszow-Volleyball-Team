const Gradient = ({ type, children, style }) => {

  return (
    <>
      <div className={type} style={style}>
        {children}
      </div>
    </>
  )
}

export default Gradient;
const Gradient = ({ type, children, style }) => {

  // const content = type === 'top-gradient' ?
  //   <div className='top-gradient'>

  //   </div>
  //   : <div className='bottom-gradient'>
  //     {children}
  //   </div>

  return (
    <>
      {type === 'top-gradient' ?
        <div className='top-gradient' style={style}>
        </div>
        :
        <div className='bottom-gradient' style={style}>
          {children}
        </div>
      }
    </>
  )
}

export default Gradient;
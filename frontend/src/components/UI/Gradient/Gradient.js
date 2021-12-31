const Gradient = ({ type, children }) => {

  // const content = type === 'top-gradient' ?
  //   <div className='top-gradient'>

  //   </div>
  //   : <div className='bottom-gradient'>
  //     {children}
  //   </div>

  return (
    <>
      {type === 'top-gradient' ?
        <div className='top-gradient'>
        </div>
        :
        <div className='bottom-gradient'>
          {children}
        </div>
      }
    </>
  )
}

export default Gradient;
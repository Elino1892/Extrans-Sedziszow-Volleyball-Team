const AdminLayout = ({ children }) => {
  return (
    <div className='local-bootstrap'>
      <div className='admin'>
        {children}
      </div>
    </div>
  )
}

export default AdminLayout;
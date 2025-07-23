const Notification = ({show, message}) => {
  if (show) {    
    return <>
      <div className="notification">
        {message}
      </div>
    </>
  }
}

export default Notification
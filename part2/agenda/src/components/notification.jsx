const Notification = ({show, message, error}) => {  
  if (show) {    
    return <>
      <div className={!error ? "notification" : "error"}>
        {message}
      </div>
    </>
  }
}

export default Notification
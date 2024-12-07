
const EventHandling = () => {
    const clickHandler=(e:React.MouseEvent<HTMLButtonElement>)=>{
        console.log('button CLiked',e.currentTarget);
    }
    const handleMouseEnter=(e:React.MouseEvent<HTMLDivElement>)=>{
        
        console.log('Mouse entered',e.currentTarget);
    }
  return (
    <div onMouseEnter={handleMouseEnter} >
        <h2>Event handler Example</h2>
        <button onClick={clickHandler} >Click Me</button>
    </div>
  )
}

export default EventHandling
import Button from '../components/Button'
import './Recommended.css'


const Recommended = ({handleClick}) => {
  return (
    <div>
      <h2 className='recommended-title' >Recommended</h2>
      <div className="recommended-flex">
        <Button onClinkHandler={handleClick} value="" title="All Products"/>
        <Button onClinkHandler={handleClick} value="Nike" title="Nike"/>
        <Button onClinkHandler={handleClick} value="Adidas" title="Adidas"/>
        <Button onClinkHandler={handleClick} value="Puma" title="Puma"/>
        <Button onClinkHandler={handleClick} value="Vans" title="Vans"/>
      </div>
    </div>
  )
}

export default Recommended
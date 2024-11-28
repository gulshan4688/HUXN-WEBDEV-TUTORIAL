import Input from '../../components/Input'
import './Category.css'

const Catergory = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">Catergory</h2>
      <div>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="All" name='test' />
        <span className="checkmark"></span>All
      </label>
      <Input handleChange={handleChange} value="sneakers" title='Sneakers' name='test' />
      <Input handleChange={handleChange} value="flats" title='Flats' name='test' /> 
      <Input handleChange={handleChange} value="sports" title='Sports' name='test' />
      <Input handleChange={handleChange} value="heels" title='Heels' name='test' />
      <Input handleChange={handleChange} value="sandals" title='Sandals' name='test' />
      </div>
    </div>
  )
}

export default Catergory
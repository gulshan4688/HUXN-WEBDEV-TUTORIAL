import Input from '../../components/Input'
import './Category.css'

const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name='test' />
        <span className="checkmark"></span>All
      </label>
      <Input handleChange={handleChange} value="sneakers" title='sneakers' name='test' />
      <Input handleChange={handleChange} value="flats" title='flats' name='test' /> 
      <Input handleChange={handleChange} value="heels" title='heels' name='test' />
      <Input handleChange={handleChange} value="sandals" title='sandals' name='test' />
      </div>
    </div>
  )
}

export default Category
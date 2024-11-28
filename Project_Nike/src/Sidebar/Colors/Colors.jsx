import Input from '../../components/Input'
import './Colors.css'


const Colors = ({handleChange}) => {
  return (
    <div>
      <h2 className='sidebar-title price-title' >Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value=" " name='test3' />
        <span className="checkmark all "></span>All
      </label>
      <Input  handleChange={handleChange} value="black" title="Black" name="test3" color="Black" />
      <Input  handleChange={handleChange} value="blue" title="Blue" name="test3" color="blue" />
      <Input  handleChange={handleChange} value="red" title="Red" name="test3" color="red" />
      <Input  handleChange={handleChange} value="green" title="Green" name="test3" color="green" />
      <Input  handleChange={handleChange} value="white" title="White" name="test3" color="white" />
    </div>
  )
}

export default Colors
import Input from '../../components/Input'
import './Price.css'


const Price = ({handleChange}) => {
  return (
    <div className='ml' >
      <h2 className='sidebar-title price-title color-title' >Price</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="All" name='test2' />
        <span className="checkmark"></span>All
      </label>

      <Input handleChange={handleChange} value={50} title="$0-$50" name="test2" />
      <Input handleChange={handleChange} value={100} title="$50-$100" name="test2" />
      <Input handleChange={handleChange} value={150} title="$100-$150" name="test2" />
      <Input handleChange={handleChange} value={200} title="$150-$200" name="test2" />
      <Input handleChange={handleChange} value={250} title="over $200" name="test2" />
    </div>
  )
}

export default Price 
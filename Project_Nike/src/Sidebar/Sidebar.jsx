import Category from './category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'
import './sidebar.css'


const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  )
}

export default Sidebar
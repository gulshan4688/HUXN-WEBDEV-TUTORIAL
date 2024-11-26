import Category from './category/Catergory'
import Colors from './Colors/Colors'
import Price from './Price/Price'
import './sidebar.css'


const Sidebar = () => {
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
            <h1>🛒</h1>
        </div>
        <Category/>
        <Price/>
        <Colors/>
    </section>
    </>
  )
}

export default Sidebar
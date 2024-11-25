import { AiFillStar } from 'react-icons/ai';
import {BsFillBagHeartFill} from 'react-icons/bs'
import './Product.css'


const Products = () => {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe" className='card-img' />
          <div className="card-details">
            <h3 className="card-title">shoe</h3>
            <section className="card-reviews">
              <AiFillStar className='ratings-star' /><AiFillStar className='ratings-star' /><AiFillStar className='ratings-star' /><AiFillStar className='ratings-star' />
              <span className="total-reviews">5k</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>$400</del> $299
              </div>
              <div className="bag">
                <BsFillBagHeartFill className='bag-icon' />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  )
}

export default Products;
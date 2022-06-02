import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { useVideo } from '../../context'


const Home = () => {

  const { categories } = useVideo();
  return (
    <>
      <header className='banner '>
        <div className='banner-text'>
          <h2>Watch Videos on</h2>
          <h2>Technology Startup <br /> and Finance</h2>
          <h4>Watch Videos on</h4>
          <h4>Technology Startup <br /> and Finance</h4>
          <Link to='/explore'>
            <button>Explore Videos </button>  
          </Link>
        </div>
      </header>
      <div className="category-section">
        <h3>Category</h3>
        <div className="category-container">
          {categories.map((category) => (
            <Link to='/' key={category.id}>
              <div className='category-item'>
                <img src={category.categoryImage} alt={category.categoryName} />
                <p className="overlay-text flex-center">{category.categoryName}</p>
              </div>
            </Link>

          ))}
        </div>
      </div>

    </>
  )
}
export { Home }

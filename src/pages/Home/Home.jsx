import React from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import { useVideo } from '../../context'

const Home = () => {
  const { videoDispatch, categories } = useVideo();
  const navigate = useNavigate();

  const categoryHandler = (categoryName) => {
    videoDispatch({ type: "FILTER_VIDEO_CATEGORYWISE", payload: categoryName })
    navigate("/explore");
  }

  return (
    <>
      <header className='banner'>
        <div className='banner-text'>
          <h1>Watch Videos on</h1>
          <h1>Technology Startup <br /> and Finance</h1>
          <h3>Watch Videos on</h3>
          <h3>Technology Startup <br /> and Finance</h3>
          <Link to='/explore'>
            <button>Explore Videos </button>
          </Link>
        </div>
      </header>
      <div className="category-section">
        <h3>Category</h3>
        <div className="category-container">
          {categories.map((category) => (
            <div key={category._id} onClick={() => categoryHandler(category.categoryName)}>
              <div className='category-item'>
                <img src={category.categoryImage} alt={category.categoryName} />
                <p className="overlay-text flex-center">{category.categoryName}</p>
              </div>
            </div>

          ))}
        </div>
      </div>

    </>
  )
}
export { Home }

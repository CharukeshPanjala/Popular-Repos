import './index.css'

const RepositoryItem = props => {
  const {details} = props
  const {avatarUrl, forksCount, issuesCount, id, name, starsCount} = details
  return (
    <li className="each-product" id={id}>
      <img src={avatarUrl} className="product-image" alt={name} />
      <h1 className="product-heading">{name}</h1>
      <div className="details-container">
        <div className="stars-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="star"
          />
          <p className="stars-count">{`${starsCount} stars`}</p>
        </div>
        <div className="stars-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="star"
          />
          <p className="stars-count">{forksCount} forks</p>
        </div>
        <div className="stars-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="star"
          />
          <p className="stars-count">{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {selectedButton: languageFiltersData[0].id, productsList: []}

  componentDidMount = () => {
    this.renderProducts()
  }

  renderProducts = async () => {
    const {selectedButton} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${selectedButton}`
    const response = await fetch(url)
    const data = await response.json()
    const array = data.popular_repos
    const updatedData = array.map(eachItem => ({
      avatarUrl: eachItem.avatar_url,
      forksCount: eachItem.forks_count,
      id: eachItem.id,
      issuesCount: eachItem.issues_count,
      name: eachItem.name,
      starsCount: eachItem.stars_count,
    }))
    this.setState({productsList: updatedData}, this.renderProductsList)
  }

  renderProductsList = () => {
    const {productsList} = this.state
    return (
      <ul className="products-list">
        {productsList.map(eachItem => (
          <RepositoryItem details={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onChangeItem = selectedButton => {
    this.setState({productsList: [], selectedButton}, this.renderProducts)
  }

  render() {
    const {selectedButton, productsList} = this.state
    const output =
      productsList.length === 0
        ? this.renderLoader()
        : this.renderProductsList()
    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>
        <ul className="language-filter-items">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              details={eachItem}
              key={eachItem.id}
              selectedButton={selectedButton}
              onChangeItem={this.onChangeItem}
            />
          ))}
        </ul>
        {output}
      </div>
    )
  }
}

export default GithubPopularRepos

import './index.css'

const LanguageFilterItem = props => {
  const {details, selectedButton, onChangeItem} = props
  const {id, language} = details
  const selectedClass = selectedButton === id ? 'selected-button' : ''
  const onClickButton = () => {
    onChangeItem(id)
  }
  return (
    <li className="list-item" id={id}>
      <button
        className={`button ${selectedClass}`}
        type="button"
        onClick={onClickButton}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem

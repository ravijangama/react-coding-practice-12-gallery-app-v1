// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachObj, objContext, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachObj
  const clickOnImage = () => {
    objContext(id)
  }
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`
  return (
    <li className="image-li-container">
      <button type="button" onClick={clickOnImage} className="image-btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem

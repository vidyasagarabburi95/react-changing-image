// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbNail, changingImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbNail

  const changeImage = () => {
    changingImage(id)
  }

  return (
    <li>
      <button type="button" onClick={changeImage}>
        <img className="images" src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem

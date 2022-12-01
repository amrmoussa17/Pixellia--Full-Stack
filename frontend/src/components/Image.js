const Image = ({ imgUrl }) => {
  return (
    <div className="text-center">
      <img src={imgUrl} alt="resized" />
    </div>
  )
}
export default Image

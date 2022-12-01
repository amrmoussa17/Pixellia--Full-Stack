import serialize from "form-serialize"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ReactComponent as ImageIcon } from "../image-solid.svg"

function Main({ setImgUrl }) {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(false)
  const sendData = (e) => {
    e.preventDefault()
    const resizerForm = document.querySelector("#resizer-form")
    const { width, height, image } = serialize(resizerForm, { hash: true })
    if (image === "default") {
      return setErrorMessage(true)
    }
    fetch(
      `http://localhost:8080/img?filename=${image}&width=${width}&height=${height}`
    )
      .then((response) => response.blob())
      .then((imageBlob) => {
        const imageObjectURL = URL.createObjectURL(imageBlob)
        setImgUrl(imageObjectURL)
        navigate("/img")
      })
  }

  return (
    <div className="App container py-3 ">
      <div className="text-center d-flex align-items-center justify-content-center p-3 gap-3">
        <div style={{ width: "30px" }}>
          <ImageIcon />
        </div>
        <h2 className=" text-uppercase text-muted m-0">pixellia</h2>
      </div>
      <form id="resizer-form" className="w-75 mx-auto" onSubmit={sendData}>
        <div className="mb-3">
          <label htmlFor="width">Enter Dimensions:</label>
          <div className="row">
            <div className="col">
              <input
                type="number"
                className="form-control"
                id="width"
                name="width"
                placeholder="Enter Width"
                aria-label="First name"
                required
                min="1"
              />
            </div>
            <div className="col">
              <input
                required
                type="number"
                name="height"
                placeholder="Enter Height"
                className="form-control"
                aria-label="Last name"
                min="1"
              />
            </div>
          </div>
        </div>
        <label htmlFor="image">Choose input image:</label>
        <div>
          <select
            defaultValue="default"
            required
            id="image"
            name="image"
            className="form-select mb-3"
            aria-label="Default select example"
          >
            <option disabled value="default">
              choose an image
            </option>
            <option value="encenadaport">1.encenadaport</option>
            <option value="fjord">2.fjord</option>
            <option value="icelandwaterfall">3.icelandwaterfall</option>
            <option value="palmtunnel">4.palmtunnel</option>
            <option value="santamonica">5.santamonica</option>
          </select>
        </div>
        {errorMessage && (
          <div className="alert alert-warning" role="alert">
            please select an image!
          </div>
        )}
        <div className="d-grid gap-2 ">
          <button type="submit" className="btn btn-primary btn-lg">
            Resize
          </button>
        </div>
      </form>
    </div>
  )
}

export default Main

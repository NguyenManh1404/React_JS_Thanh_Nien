import { useState } from "react";


const EditComponent = () => {

  const [topic, setTopic] = useState();
  const [image, setImage] = useState();
  const [title, setTitle] = useState();

  return (
    <div>
      <div>
        <div>
          <h2>Edit Post Page</h2>
        </div>
        <div
          style={{
            border: "1px solid gray",
            margin: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label>Enter your topic:
            <input
              className="inputForm"
              placeholder="Topic"
              onChange={(e) => setTopic(e.target.value)}
            />
          </label>
          <br />

          <label>Enter your title:
            <input
              className="inputForm"
              placeholder="Content Main title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <br />
          <label>Enter your url image:
            <input
              className="inputForm"
              placeholder="Image"
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <br />
          <button

            style={{ width: "60px", height: "30px", marginLeft: "45%" }}
          >
            Save
          </button>

        </div>
      </div>
    </div>
  )
}

export default EditComponent
import './style.css'
import { FiGlobe } from "react-icons/fi"
const TitleContentComponent = ({ item }) => {

  // const ListMenu = ["Quân sự", "Quân Nhân", "Hồ sơ", "Người Việc Nam", "Kinh tế thế giới", "Chuyện lạ"];
  return (
    <div className="titleContentContainer">
      <div className="titleLeft">
        <FiGlobe style={{ fontSize: 20 }} />
        <h2 style={{ margin: 10 }}>{item.topic}</h2>
      </div>
      <div className="titleRight">
        {item.menulist.map((item) => {
          return (
            <h4>{item}/</h4>
          )
        })}
      </div>
    </div>
  )

}

export default TitleContentComponent

// "image":"http://loremflickr.com/640/480","content":"demo demo","time":"1 tháng trước"
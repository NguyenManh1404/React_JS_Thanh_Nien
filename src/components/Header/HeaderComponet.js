import './style.css';
import { FiSearch, FiBriefcase } from "react-icons/fi"

const HeaderComponent = () => {

  return (
    <div className="container">
      <div className="left">
        <FiBriefcase style={{ color: "white" }} /><h4 style={{ color: "white", margin: 10 }}>VIỆC LÀM</h4>
      </div>
      <div className="center">
        <h2 className="title">THANH NIÊN</h2>
      </div>
      <div className="right">
        <FiSearch style={{ color: 'white' }} />
      </div>

    </div>
  )


}


export default HeaderComponent;
import './style.css'
import { FaRocketchat, FaPlay } from "react-icons/fa";


const BodyContentComponent = ({ item }) => {


  return (

    <div className="bodyContentContainer">
      <div className="leftBodyContentContainer" style={{ marginRight: 5 }}>
        <div className='imageMainDiv'>
          <img className='imageMain' src={item.imageMain} alt="hhh" />
        </div>

        <div>
          <h3 style={{ color: 'black' }} >{item.contentMain}</h3>

          <div className="moreInfo">
            <h4> {item.timeMain}</h4>
            <FaRocketchat style={{ marginLeft: 10 }} /> 0
          </div>

        </div>


      </div>
      <div className="rightBodyContentContainer" style={{ marginLeft: 5, overflow: 'auto', height: 500 }}>

        {item.postSmall.map((item) => {
          return (
            <div className="rightBodyContentItem">

              <div className="rightBodyContentImageDiv">
                <img className='imageSmall' src={item.image} alt="hhh" />
          
              </div>
              <div className="rightBodyContentContent">

                <div>
                  <h5> <FaPlay style={{ color: 'blue' }} /> {item.content}</h5>
                </div>
                <div className="moreInfo">
                  <h4>{item.time}</h4>
                  <FaRocketchat style={{ marginLeft: 10 }} /> 0
                </div>

              </div>

            </div>



          )
        })}









      </div>


    </div>
  )
}

export default BodyContentComponent
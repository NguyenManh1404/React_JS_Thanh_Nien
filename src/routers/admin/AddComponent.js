import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./style.css";


const postSmall = [
  {
    "image": "https://image.thanhnien.vn/w2048/Uploaded/2022/ycwkdqmb/2022_04_26/kim-dong-su-hagl-jeonbuk-dl-7930.jpg",
    "content": "Ông Park mới đây chia sẻ rằng nếu như vị trí tiền đạo U.23 Việt Nam khiến ông lo lắng ít nhiều vì tìm kiếm nhân tài quả là khó, thì ông lại hoàn toàn tâm đắc về các vị trí trung vệ và điểm ra những gương mặt mà người kế nhiệm",
    "time": "1 tháng trước"
  },
  {
    "image": "https://image.thanhnien.vn/w2048/Uploaded/2022/pwivoviu/2022_05_28/20a3-3968.jpg",
    "content": "Ông Park mới đây chia sẻ rằng nếu như vị trí tiền đạo U.23 Việt Nam khiến ông lo lắng ít nhiều vì tìm kiếm nhân tài quả là khó, thì ông lại hoàn toàn tâm đắc về các vị trí trung vệ và điểm ra những gương mặt mà người kế nhiệm",
    "time": "1 tháng trước"
  },
  {
    "image": "https://image.thanhnien.vn/w2048/Uploaded/2022/ujwyqdxwp/2022_05_28/bui-hoang-viet-anh-nguyen-thanh-binh-truoc-u-23-chau-a-2022-1-2658.jpg",
    "content": "Ông Park mới đây chia sẻ rằng nếu như vị trí tiền đạo U.23 Việt Nam khiến ông lo lắng ít nhiều vì tìm kiếm nhân tài quả là khó, thì ông lại hoàn toàn tâm đắc về các vị trí trung vệ và điểm ra những gương mặt mà người kế nhiệm",
    "time": "1 tháng trước"
  },
  {
    "image": "http://loremflickr.com/640/480",
    "content": "Ông Park mới đây chia sẻ rằng nếu như vị trí tiền đạo U.23 Việt Nam khiến ông lo lắng ít nhiều vì tìm kiếm nhân tài quả là khó, thì ông lại hoàn toàn tâm đắc về các vị trí trung vệ và điểm ra những gương mặt mà người kế nhiệm",
    "time": "1 tháng trước"
  }
];

const AddComponent = () => {
  const [topic, setTopic] = useState();
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const navigate = useNavigate();
  // const [time, setTime] = useState();
  // const [menuList, setMenuList] = useState([]);
  // const [postSmall, setPostSmall] = useState([]);

  const handleSubmit = async () => {
    let today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const postData = {
      contentMain: title,
      imageMain: image,
      timeMain: date,
      postSmall: postSmall,
      topic: topic,
      menulist: ["Quân sự",
        "Quân Nhân",
        "Hồ sơ",
        "Người Việc Nam",
        "Kinh tế thế giới",
        "Chuyện lạ"],
    };

    try {
      await fetch(`https://60935d54a7e53a0017950c0e.mockapi.io/news`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
      });
    } catch (error) {
      console.log(error);
    }
    navigate('/');

  };

  return (
    <div>
      <div>
        <h2>Add New Post Page</h2>
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
          onClick={() => handleSubmit()}
          style={{ width: "60px", height: "30px", marginLeft: "45%" }}
        >
          Save
        </button>

      </div>
    </div>
  );
};

export default AddComponent;

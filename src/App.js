
import './App.css';
import ContentComponent from './components/Content';
import HeaderComponent from './components/Header';
import MenuComponent from './components/Menu';

function App() {
  return (
    <div className="App">
      <div className="searchDiv">
        <HeaderComponent />
      </div>

      <div className="menuDiv">
        <MenuComponent />

      </div>

      <div className="contentDiv" style={{ marginRight: 30, marginLeft: 30 }}>

        <div className="leftContent">
          <ContentComponent />
        </div>
        <div className="rightContent">
          <img src="https://ads.zalo.me/business/wp-content/uploads/2021/10/ZAD_QCMesseage1_1000x640.jpg" style={{ width: "100%", height: "200px", margin: 20 }} />
          <img src="https://thientu.vn/userfiles/images/xay-dung-chien-dich-quang-cao-nhu-the-nao-de-thanh-cong.jpg" style={{ width: "100%", height: "200px", margin: 20 }} />
          <img src="https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/images/chi16358374907454.jpg" style={{ width: "100%", height: "200px", margin: 20 }} />
          <img src="https://ads.zalo.me/business/wp-content/uploads/2021/10/ZAD_QCMesseage1_1000x640.jpg" style={{ width: "100%", height: "200px", margin: 20 }} />
          <img src="https://ads.zalo.me/business/wp-content/uploads/2021/10/ZAD_QCMesseage1_1000x640.jpg" style={{ width: "100%", height: "200px", margin: 20 }} />
        </div>

      </div>
    </div>
  );
}

export default App;

import './style.css';

const MenuComponent = () => {

  const MenuList = ["THẾ GIỚI", "TÀI CHINH-KINH DOANH", "ĐỜI SÔNG", "VĂN HÓA", "GIẢI TRí", "GIÁO DỤC", "THỂ THAO", "SỨC KHOẻ", "DU LỊCH", "CÔNG NGHỆ"];

  return (
    <div className="containerMenu">
      {
        MenuList.map((item) => {
          return (
            <h4 style={{ color: 'black', margin: 5 }}>{item}</h4>
          )
        })
      }



    </div>
  )
}

export default MenuComponent
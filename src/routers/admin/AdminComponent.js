import { useEffect, useState } from "react";
import TableComponent from "../../components/Admin/TableComonent";
import "./style.css"
import { Link } from "react-router-dom";

const AdminComponent = () => {
  const [dataPosts, setDataPosts] = useState([]);
  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const response = await fetch(
        "https://60935d54a7e53a0017950c0e.mockapi.io/news",
        {
          method: "GET",
        }
      );

      const dataRes = await response.json();
      setDataPosts(dataRes);

      //  console.log(dataPosts);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("show", dataPosts);
  return (
    <div className="containerAdmin">
      <div className="headerAdmin" style={{ display: 'flex', alignItems: "center", justifyContent: "space-between", margin: 20 }}>
        <h1>ADMIN PAGE</h1>
        <button style={{ height: 50 }}><h3><Link to="/add">ADD NEW</Link></h3></button>
      </div>

      <div className="bodyAdmin">

        <table className="tablePost">
          <tr>
            <th>ID</th>
            <th>Topic</th>
            <th style={{ width: "30%" }}>Image</th>
            <th>Title</th>
            <th>Time</th>
            <th>Action</th>
          </tr>

          {dataPosts.map((item, index) => {
            return (
              <TableComponent item={item} index={index} />
            )
          })}

        </table>
      </div>

    </div>
  )
}

export default AdminComponent
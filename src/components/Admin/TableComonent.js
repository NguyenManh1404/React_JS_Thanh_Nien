
const TableComponent = ({ item, index }) => {


  const deletePost = async (id) => {
    try {
      await fetch(`https://60935d54a7e53a0017950c0e.mockapi.io/news/${id}`, {
        method: 'delete',
      }).then(response => response.json());

      // gọi lại data sau khi xóa
    } catch (error) {
      console.log(error);
    }
    window.location.reload()
  };



  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.topic}</td>
      <td><img className='imageMain' src={item.imageMain} alt="picture" /></td>
      <td>{item.contentMain}</td>
      <td>{item.timeMain}</td>
      <td>
        <button onClick={() => deletePost(item.id)}>Delete</button>
        <button >Edit</button>
      </td>
    </tr>
  );
};

export default TableComponent

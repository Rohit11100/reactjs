

import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";


import { Table } from 'react-bootstrap';

function Pagination() {
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 10;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        ` https://api.instantwebtools.net/v1/passenger?page=1&size=${limit}`
      );
      const data = await res.json();

      const total = data.totalPassengers;
      console.log(total);

      setpageCount(Math.ceil(total / limit));

      let my = data.data.map((q) => {

        return q.airline[0]
      })

      setItems(my);

    };

    getComments();
  }, [limit]);


  const fetchComments = async (currentPage) => {
    const res = await fetch(
      ` https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=${limit}`

    );
    const data = await res.json();

    let my = data.data.map((q) => {

      return q.airline[0]
    })
    return my;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setItems(commentsFormServer);
  
  };
  return (



    <div className='container'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>country</th>
            <th>slogan</th>
            <th>logo</th>
          </tr>
        </thead>
        <tbody>



          {
            items.map((w)=>{
              console.log(w);

              return(
                <tr>
            <td>{w.name}</td>
            <td>{w.country}</td>
            <td>{w.slogan}</td>
            <td>
                <img  src={w.logo}  height='30px'/>

            </td>
          </tr>
              )
            })
          }
          
         
        </tbody>
      </Table>











      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />

    </div>
  );
}

export default Pagination;

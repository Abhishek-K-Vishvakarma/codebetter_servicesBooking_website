import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Navbar, Container} from "react-bootstrap";
const Usercategory = () => {
  const [get, setGet] = useState([]);
  useEffect(() => {
    fetch('http://localhost:7207/api/get_category')
      .then(e => e.json())
      .then((data) => {
        setGet(data.category);
        console.log(data.category)
      })
  }, []);

  return (
    <div>
      <Navbar className="bg-dark">
          <Container>
            <Navbar.Brand className="text-white">View Category and Select category for adding subcategory</Navbar.Brand>
          </Container>
      </Navbar>
      <div>
        <br/>
        <br/>
        {get.length > 0 ?
          (get.map((data) =>{
            return <>
              <div className="card" style={{ width: '20rem', textAlign: 'center', height: '25rem', boxShadow: '0px 0px 5px 2px #999', borderRadius: '0px', display: 'inline-block', margin: '30px'}}>
                <div>
                  <p style={{fontSize: '20px', fontWeight: 'bold'}}>{data.category_name}</p>
                  <br />
                  <img src={data.logo_url} style={{width: '12', height: '10rem', boxShadow: '0px 0px 5px 2px #999'}}/>
                   <Link to="/usersubcategory" type="button" style={{marginTop: '70px', backgroundColor: 'orange', border: 'none', padding: '5px', fontWeight: 'bold', textDecoration: 'none', color: 'black', borderRadius: '20px'}}>View More Subcategory</Link>
                </div>
              </div>
            </>
          }
          )
          ) :
          (<li>No Found data!</li>)}
      </div>
    </div>
  )
}

export default Usercategory;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import useNavigate
import {Navbar} from 'react-bootstrap';
const Usersubcategory = () => {
  const [get, setGet] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7207/api/subget`)
      .then((res) => res.json())
      .then((data) => {
        setGet(data.subGet);
      });
  }, []);

  const filteredResult = get.filter(item => item.subcategory_name.toLowerCase().includes(search));
  console.log(filteredResult)
  return (
    <div style={{ backgroundImage: "url(https://workinsync.io/wp-content/uploads/2023/09/96-Image-3-Increased-Cost-Savings-1-1024x546.webp)", height: "1000px", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%'}}>
      <Navbar style={{backdropFilter: 'blur(20px)', boxShadow: '0px 0px 10px 2px #999'}} >
         <p style={{fontSize: '20px', marginLeft: '10rem', fontWeight: 'bold', color: 'blue'}}>SUBCATGORIES PAGE</p>
      </Navbar>
      <br />
      <h2 style={{ textAlign: "center", color: 'blue'}}>Search Subcategories...</h2>
      <br />
      <br/>
      <input type="text" placeholder="Search..." value={search} onChange={(e)=> setSearch(e.target.value)} style={{width: '25rem', margin: 'auto', boxShadow: '0px 0px 8px 2px #666'}} className="form-control"/>
      <div>
        {
          filteredResult.map((item) => (
            <div className="card" key={item.id} style={{textAlign: "center", padding: '10px', fontWeight: 'bold',borderRadius: '0px', boxShadow: '0 0 10px 1px #999', backgroundColor: 'white', width: '20rem', height: '22rem', display: 'inline-block', margin: '25px'}}>
              <img src={item.image_logo} style={{ width: '10rem', height: '10rem', marginLeft: '.1rem', boxShadow: '0 0 10px 1px #999', marginTop: '2rem'}}/>
             <br/><br/>
              <p>Name: {item.subcategory_name}</p>
              <br />
              <Link to="/getuserservice" style={{ textDecoration: 'none', backgroundColor: 'orange', color: 'black', margin: 'auto', padding: '10px 100px', borderRadius: '50px' }}>Services</Link>
              <br />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Usersubcategory;

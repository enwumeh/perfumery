import React, { useEffect, useContext } from "react";
import FindOils from "../APIs/FindOils";
import { OilsContext } from "../context/OilsContext";
import styles from "../styles/scss/oils.scss";
import Layout from "../components/Layout";
import { Link } from 'react-router-dom';
import Oildetails from "../routes/Oildetails";



const Oils = () => {
  const { oils, setOils } = useContext(OilsContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await FindOils.get("/");
        setOils(response.data.data.oils);
        console.log("response should be here", oils);
      } catch (error) {
        console.log("whats wrong", error);
      }
    };
    getData();
  }, []);

  return (
    <Layout>
      <div className="oils-main">
        {oils.map((oil) => {
          return (
            <div className="oils-list" key={oil.id}>
              <div>{oil.companytype} by {oil.name}</div>
            <Link to="/oils/:id">
              
                <img className="oil-pic" src={oil.url}></img>
            </Link>
              {/* <Oildetails oil={oils}/> */}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Oils;

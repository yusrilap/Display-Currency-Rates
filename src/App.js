import axios from "axios";
import { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import "../src/style/landingpage.css";

const API =
  "https://api.currencyfreaks.com/latest?apikey=9e50f14dbb14462e868e83a0dd523503&symbols=CAD,EUR,IDR,JPY,CHF,GBP";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(API);
      setData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="style1">
      <Container>
        <Container>
          <h1>Display Currency Rates</h1>
          <br></br>
        </Container>
        <Table striped bordered hover className="BG">
          <thead>
            <tr>
              <th>Currency</th>
              <th>We Buy</th>
              <th>Exchange Rate</th>
              <th>We Sell</th>
            </tr>
          </thead>
          <tbody>
            {data.rates &&
              Object.keys(data.rates).map((key, index) => (
                <tr key={index}>
                  <td>{key} </td>
                  <td>{parseFloat(data.rates[key] * (1 + 0.05)).toFixed(6)}</td>
                  <td>{parseFloat(data.rates[key]).toFixed(6)}</td>
                  <td>{parseFloat(data.rates[key] * (1 - 0.05)).toFixed(6)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () =>  {
    return (
      <div className="App">
        <h1>Bookkeeper</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link>
        </nav>
      </div>
    );
  }

export default Home;
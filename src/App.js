import {Link, Outlet} from 'react-router-dom';

function App() {
  return (
    <div>
      holo
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
      <footer>Soy footer</footer>
    </div>
  );
}

export default App;

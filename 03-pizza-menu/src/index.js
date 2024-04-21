import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import ReactDOM from "react-dom"; // import before v18

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// Main component
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "36px",
  //   textTransform: "uppercase",
  // };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Nova Scotia Pizzeria</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzaInStock = pizzas.length > 0;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* {pizzaInStock && (
        <ul className="pizzas">
          {pizzaData.map((p) => (
            <Pizza pizzaObj={p} key={p.name} />
          ))}
        </ul>
      )} */}

      {pizzaInStock ? (
        <>
          {/* React Fragment*/}
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((p) => (
              <Pizza pizzaObj={p} key={p.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          Unfortunately, we are unable to process any orders right now. Please
          check back again later!
        </p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (props.pizzaObj.soldOut) return null;

  return (
    // <li className={pizzaObj.soldOut ? "pizza sold-out" : "pizza"} />
    // <li className={`pizza ${pizzaObj.soldOut && "sold-out"}`} />
    // Using && operator - short circuiting

    <li className={`pizza${pizzaObj.soldOut ? " sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT 😭</span>
        ) : (
          <span>pizzaObj.price</span>
        )} */}

        <span>{pizzaObj.soldOut ? "Sold out 😭" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;

  // if (hour >= openHours && hour <= closeHours) alert("We are currently open!");
  // else alert("Sorry we are closed");

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHours} openHours={openHours} />
      ) : (
        <p>
          We're open until {closeHours}:00. Come visit us later at {openHours}
          :00
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHours, openHours }) {
  return (
    <div className="order">
      <p>
        Order online and enjoy the Pizzas with Nova Scotian ingredients! Open
        from {openHours}:00 to {closeHours}:00
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// ReactDOM.render(<App />, document.getElementById("root"));

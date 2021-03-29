import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//======= код видит машина
/* const link = React.createElement("a", { href: "reactjs.org" }, "link ho ho");
console.log(link); */

//============== пишем код удобно, но в исходниках будет как показано выше
/* const jsxLink = <a href="reactjs.org">link ho ho</a>;
console.log(jsxLink); */

/* ReactDOM.render(link, document.querySelector("#root")); */

// использование динамических данных
/* const template = (
  <div>
    <img src={painting.url} alt={painting.title} width="500"></img>
    <h2>{painting.title}</h2>
    <p>
      author: <a href={painting.author.url}>{painting.author.tag}</a>
    </p>
    <p> цена: {painting.price} кредитов</p>
    <button type="button">Добавить в корзину</button>
  </div>
);


ReactDOM.render(template, document.getElementById("root")); */

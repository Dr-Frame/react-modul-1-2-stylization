import React from "react";
//импортируем путь к картинке для дефолтного значения
import defaultImg from "./default.png";

// импорт библиотеки PropTypes
import PropTypes from "prop-types";

//пропс это обьект настроек который приходт
// вариант БЕЗ деструктуризации
/* const Painting = (props) => {
  return (
    <div>
      <img src={props.url} alt={props.title} width="500"></img>
      <h2>{props.title}</h2>
      <p>
        author: <a href={props.authorUrl}>{props.authorTag}</a>
      </p>
      <p> цена: {props.price} кредитов</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}; */

//вариант С дестрктуризацией
const Painting = ({ url, title, authorUrl, authorTag, price, quantity }) => (
  /* условия так же можно выносить в отдельные переменные, если они большие например
  const availability = quantity < 10 ? "Заканчивается" : "есть в наличии"; */

  <div>
    <img src={url} alt={title} width="500"></img>
    <h2>{title}</h2>
    <p>
      author: <a href={authorUrl}>{authorTag}</a>
    </p>
    {/* рендер по условию */}
    <p>Availability: {quantity < 10 ? "Заканчивается" : "есть в наличии"}</p>
    <p> цена: {price} кредитов</p>
    <button type="button">Добавить в корзину</button>
  </div>
);

//дефолтные значение Пропсов
// обычно дефолт только для картинок ставят
Painting.defaultProps = {
  url: defaultImg,
};

//описываем все получаемые пропы которые получили сверху
//TODO:====ЕСЛИ проп ISREQUIRED то дефолтПроп не нужен, и наоборот, если не реквайредд, то НУЖЕН

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  /* authorUrl: PropTypes.string.isRequired,
  authorTag: PropTypes.string.isRequired, */
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

//

export default Painting;

// значения null, undefined, false не рендерятся вообще в реакте

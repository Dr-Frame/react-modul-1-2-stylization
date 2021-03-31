import React from 'react';
import Painting from '../Painting/Painting';
import PropTypes from 'prop-types';
import './PaintingList.css';

const PaintingList = ({ paintingData }) => (
  /* рендеринг коллекций */

  /* TODO: Ключи помогают опознать реакту элемент коллекции
          ЕСЛИ нету id, то используем что то уникальное например имя, цвет и т.д */
  <ul className="PaintingList">
    {paintingData.map(
      ({ url, id, title, price, authorUrl, authorTag, quantity }) => (
        <li key={id} className="PaintingList__item">
          <Painting
            url={url}
            title={title}
            price={price}
            authorUrl={authorUrl}
            authorTag={authorTag}
            quantity={quantity}
          />
        </li>
      ),
    )}
  </ul>
);

PaintingList.propTypes = {
  //проверка того, что за массив приходит
  paintingData: PropTypes.arrayOf(
    //используем шейп что бы указать что должно приходить в обьекте массива
    //проверяем только АЙДИ, другие проверяли раньше, нету смысла сейчас
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PaintingList;

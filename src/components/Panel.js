import React from "react";
import PropTypes from "prop-types";

//дети не отобразятся в разметке, пока мы явно не укажем это
const Panel = ({ title, children }) => (
  <div>
    {/* //рендер по условию, если СЛЕВА ДА - рендерим справа, если СЛЕВА НЕТ - undefined ничего не рендерит */}
    {title && <h2>{title}</h2>}

    {children}
  </div>
);

Panel.defaultProps = {
  title: "",
};

Panel.propTypes = {
  title: PropTypes.string,
  //дети
  children: PropTypes.node,
};

export default Panel;

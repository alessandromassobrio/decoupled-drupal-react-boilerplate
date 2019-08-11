import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ArticleItem = props => {
  const {
    type,
    attributes: {
      title,
      body: { value }
    }
  } = props.item;

  return (
    <Fragment>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: value }} />
      <small><b>Type:</b> {type}</small>
    </Fragment>
  );
};

ArticleItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ArticleItem;

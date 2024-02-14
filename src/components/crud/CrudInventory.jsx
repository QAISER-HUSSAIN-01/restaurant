import React from "react";
import PropTypes from "prop-types";
export default function CrudInventory() {
  return <div>CrudInventory</div>;
}


CrudInventory.propTypes={
    searchField: PropTypes.element,
    formField: PropTypes.element,
    addFormInstance: PropTypes.node,
    searchFormInstance: PropTypes.node,
    extra:PropTypes.element,
    handleSubmit:PropTypes.func,
    handleSearch:PropTypes.func,
    formTitle:PropTypes.string,
    tableTitle:PropTypes.string,
    formLoading:PropTypes.bool,
    tableLoading:PropTypes.bool,
}

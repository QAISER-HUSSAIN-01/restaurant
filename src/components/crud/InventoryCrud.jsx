import React from "react";
import PropTypes from "prop-types";
import FormComponent from "components/form/FormComponent";
import TableComponent from "components/TableComponent";
import { EditOutlined } from "@ant-design/icons";
import ButtonComponent from "components/ButtonComponent";
import DrawerComponent from "components/DrawerComponent";
export default function InventoryCrud(props) {
  return (
    <>
      <FormComponent
        title={props?.formTitle}
        children={props?.searchFields}
        handleSubmit={props?.handleSearch}
        form={props?.searchFormInstancech}
        submit={"Search"}
        isLoading={props?.isFormLoading}
        initialValues={props?.initialValues}
        extra={
          <ButtonComponent
            icon={<EditOutlined />}
            text={"Add"}
            size={"small"}
            onClick={props?.handleDrawer}
          />
        }
      />
      <br />
      <TableComponent
        title={props?.tableTitle}
        columns={props?.columns || []}
        rows={props?.rows || []}
        loading={props?.isTableLoading}
      />

      <DrawerComponent onClose={props?.handleDrawer} open={props?.isDrawerOpen}>
        <FormComponent
          children={props?.formFields}
          handleSubmit={props?.handleSubmit}
          form={props?.addFormInstance}
          submit={props?.id ? "Update" : "Save"}
          isLoading={props?.isFormLoading}
          initialValues={props?.initialValues}
        />
      </DrawerComponent>
    </>
  );
}

BasicCrud.propTypes = {
  searchFields: PropTypes.element,
  formFields: PropTypes.element,
  addFormInstance: PropTypes.node,
  searchFormInstance: PropTypes.node,
  extra: PropTypes.element,
  handleSubmit: PropTypes.func,
  handleSearch: PropTypes.func,
  formTitle: PropTypes.string,
  tableTitle: PropTypes.string,
  isFormLoading: PropTypes.bool,
  isTableLoading: PropTypes.bool,
  handleDrawer: PropTypes.func,
  isDrawerOpen: PropTypes.bool,
  rows:PropTypes.array,
  columns:PropTypes.array,
};

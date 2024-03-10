import { EditOutlined } from "@ant-design/icons";
import { Card, Col, Form, Row } from "antd";
import ButtonComponent from "components/ButtonComponent";
import DrawerComponent from "components/DrawerComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import { SuccessNotification } from "components/popup/Notifications";
import useFormHook from "hooks/useFormHook";
import React, { useEffect, useState } from "react";
import { Post } from "utils/CrudApi";
import { Operations } from "utils/constants";


const initialValues = {
  OperationId: 1,
  Id: 0,
  CategoryId: 0,
  BranchId: 0,
  Name: "",
  ShortName: "",
  Enabled: true,
  Deleted: true,
};
export default function Subcategory() {
  const { getColumnSearchProps, sort, sortString } = TableConfig();
  const {
    isLoading,
    isTableLoading,
    handleDelete,
    handleDrawer,
    handleEdit,
    handleSearch,
    handleSubmit,
    open,
    add,
    formData,
    search,
    dataSet,
  } = useFormHook("SubCategory", initialValues);

  const columns = [
    {
      key: "1",
      title: "SubCategory Name",
      dataIndex: "SubCategoryName",
    },
    {
      key: "2",
      title: "Category Name",
      dataIndex: "CategoryName",
    },
    {
      key: "3",
      title: "Is Active",
      dataIndex: "Enabled",
    },
    {
      key: "4",
      title: "Account Name",
      dataIndex: "AccountName",
    },
  ];
  const formFields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Category Name"} name={"CategoryId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"SubCategory Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"SubCategory Code"} name={"SubCategoryCode"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Account"} name={"Account"} />
        </Col>
        <Col xs={3} md={3} xl={3} className="flex align-center">
          <InputCheckbox label={"Is Active"} name={"Enabled"} />
        </Col>
      </Row>
    </>
  );
  const searchFields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Category Name"} name={"CategoryId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"SubCategory Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"SubCategory Code"} name={"SubCategoryCode"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Account"} name={"Account"} />
        </Col>
        <Col xs={3} md={3} xl={3} className="flex align-center">
          <InputCheckbox label={"Is Active"} name={"Enabled"} />
        </Col>
      </Row>
    </>
  );

  return (
    <>
      <FormComponent
        title={"Search Sub Category"}
        children={searchFields}
        handleSubmit={handleSubmit}
        form={search}
        submit={"Search"}
        isLoading={isLoading}
        initialValues={initialValues}
        extra={
          <ButtonComponent
            icon={<EditOutlined />}
            text={"Add"}
            size={"small"}
            onClick={()=>handleDrawer(Operations.Insert)}
          />
        }
      />
      <br />
      <TableComponent columns={columns || []} rows={dataSet?.Table1 || []} title={'Subcategory List'} loading={isTableLoading} />
      <DrawerComponent onClose={()=>handleDrawer(Operations.Select)} open={open}>
        <FormComponent
          children={formFields}
          handleSubmit={handleSubmit}
          form={add}
          submit={formData?.OperationId == Operations.Update ? "Update" : "Save"}
          isLoading={isLoading}
          initialValues={initialValues}
        />
      </DrawerComponent>
    </>
  );
}

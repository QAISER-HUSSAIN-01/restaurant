import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card, Col, Form, Row, Space } from "antd";
import ButtonComponent from "components/ButtonComponent";
import DrawerComponent from "components/DrawerComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import { SuccessNotification } from "components/popup/Notifications";
import PopDelete from "components/popup/PopDelete";
import useFormHook from "hooks/useFormHook";
import React, { useEffect, useState } from "react";
import { Post } from "utils/CrudApi";
import { Operations } from "utils/constants";


const initialValues = {
  OperationId: 1,
  Id: null,
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
    transformOptions
  } = useFormHook("SubCategory", initialValues);

  const columns = [
    {
      key: "1",
      title: "SubCategory Name",
      dataIndex: "Name",
    },
    {
      key: "2",
      title: "Category Name",
      dataIndex: "CategoryName",
    },
    {
      key: "3",
      title: "Enabled",
      dataIndex: "Enabled",
      render:(_,record) => record?.Enabled ? 'Yes':'No'
    },
    // {
    //   key: "4",
    //   title: "Account Name",
    //   dataIndex: "AccountName",
    // },
    {
      key: "4",
      title: "Action",
      render: (_, record) => (
        <Space>
          {" "}
          <ButtonComponent
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />{" "}
          <PopDelete handleDelete={() => handleDelete(record)}>
          <ButtonComponent
            icon={<DeleteOutlined />}
            // onClick={() => handleDelete(record)}
            danger={true}
          />{" "}
          </PopDelete>
        </Space>
      ),
    },
  ];
  
 

  const formFields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Category Name"} name={"CategoryId"} options={transformOptions(dataSet?.Table2)} required />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"SubCategory Name"} name={"Name"} required />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"SubCategory Code"} name={"ShortName"} required />
        </Col>
        {/* <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Account"} name={"Account"} />
        </Col> */}
        <Col xs={3} md={3} xl={3} className="flex align-center">
          <InputCheckbox label={"Enabled"} name={"Enabled"} />
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

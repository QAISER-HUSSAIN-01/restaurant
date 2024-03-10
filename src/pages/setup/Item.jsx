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
  OperationId:1,
  Id: 0,
  SubCategoryId: 0,
  Name: "",
  ItemCode: "",
  ItemTypeId: 0,
  PurchaseUnitId: 0,
  IssuanceUnitId: 0,
  RecipeUnitId: 0,
  PurchaseIssuance: 0,
  IssuanceRecipe: 0,
  Enabled: true,
  Deleted: true,
};
export default function Item() {
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
  } = useFormHook("Items", initialValues);
  const columns = [
    {
      key: "1",
      title: "SubCategory Name",
      dataIndex: "SubCategoryName",
      filterSearch: true,
    },
    {
      key: "2",
      title: "Item Code",
      dataIndex: "CategoryName",
    },
    {
      key: "3",
      title: "Item Name",
      dataIndex: "IsActive",
    },
    {
      key: "4",
      title: "Purchase Unit",
      dataIndex: "AccountName",
    },
    {
      key: "5",
      title: "Issuance Unit",
      dataIndex: "AccountName",
    },
    {
      key: "6",
      title: "Recipe Unit",
      dataIndex: "AccountName",
    },
    {
      key: "7",
      title: "Purchase Issuance",
      dataIndex: "AccountName",
    },
    {
      key: "8",
      title: "Issuance Recipe",
      dataIndex: "AccountName",
    },
    {
      key: "9",
      title: "Is Active",
      dataIndex: "AccountName",
    },
    {
      key: "10",
      title: "Item type",
      dataIndex: "AccountName",
    },
    {
      key: "11",
      title: "Action",
      // className: "text-center",
      render: (_, record) => (
        <Space>
          {" "}
          <ButtonComponent
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />{" "}
          <PopDelete handleDelete={() => handleDelete(record)}>
            <ButtonComponent icon={<DeleteOutlined />} danger={true} />{" "}
          </PopDelete>
        </Space>
      ),
    },
  ];
  const formfields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Item Type"} name={"ItemTypeId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"SubCategory"} name={"SubCategoryId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Item Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Item Code"} name={"ItemCode"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Purchase Unit"} name={"PurchaseUnitId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Issuance Unit"} name={"IssuanceUnitId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Recipe Unit"} name={"RecipeUnitId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Purchase Issuance"} name={"PurchaseIssuance"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Issuance Recipe"} name={"IssuanceRecipe"} />
        </Col>
        <Col xs={3} md={3} xl={3} className="flex align-center">
          <InputCheckbox label={"Is Active"} name={"Enabled"} />
        </Col>
      </Row>
    </>
  );

  const searchfields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Item Type"} name={"ItemTypeId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"SubCategory"} name={"SubCategoryId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Item Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Item Code"} name={"ItemCode"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Purchase Unit"} name={"PurchaseUnitId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Issuance Unit"} name={"IssuanceUnitId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Recipe Unit"} name={"RecipeUnitId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Purchase Issuance"} name={"PurchaseIssuance"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Issuance Recipe"} name={"IssuanceRecipe"} />
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
        title={"Search Item"}
        children={searchfields}
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
      <TableComponent
        columns={columns || []}
        rows={dataSet?.Table1 || []}
        title={"Item List"}
        loading={isTableLoading}
      />
      <DrawerComponent onClose={()=>handleDrawer(Operations.Select)} open={open}>
        <FormComponent
          children={formfields}
          handleSubmit={handleSubmit}
          form={add}
          submit={formData.OperationId == Operations.Update ? "Update" : "Save"}
          isLoading={isLoading}
          initialValues={initialValues}
        />
      </DrawerComponent>
    </>
  );
}

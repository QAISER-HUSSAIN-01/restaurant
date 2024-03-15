import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Checkbox, Col, Form, Row, Space } from "antd";
import ButtonComponent from "components/ButtonComponent";
import DrawerComponent from "components/DrawerComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import BasicCrud from "components/crud/BasicCrud";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import InputTextarea from "components/form/InputTextarea";
import useFormHook from "hooks/useFormHook";
import React, { useEffect, useState } from "react";
import { Operations } from "utils/constants";

const initialValues = {
  Id: 0,
  Name: "",
  ShortName: "",
  UniqueId: "",
  HeadOffice: true,
  Enabled: true,
  Deleted: true,
};

export default function PurchaseOrder() {
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
  } = useFormHook("Branch", initialValues);
  const columns = [
    {
      key: "1",
      title: "Item Code",
      dataIndex: "Name",
    },
    {
      key: "2",
      title: "Item",
      dataIndex: "ShortName",
    },
    {
      key: "3",
      title: "Unit",
      dataIndex: "HeadOffice",
    },
    {
      key: "4",
      title: "Qty",
      dataIndex: "Enabled",
    },
    {
      key: "5",
      title: "Rate",
      dataIndex: "Name",
    },
    {
      key: "6",
      title: "Amount",
      dataIndex: "ShortName",
    },
    {
      key: "7",
      title: "Min",
      dataIndex: "HeadOffice",
    },
    {
      key: "8",
      title: "Max",
      dataIndex: "Enabled",
    },
    {
      key: "9",
      title: "Balance",
      dataIndex: "Enabled",
    },
    {
      key: "10",
      title: "Action",
      className: "text-center",
      render: (_, record) => (
        <Space>
          {" "}
          <ButtonComponent
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />{" "}
          <ButtonComponent
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
            danger={true}
          />{" "}
        </Space>
      ),
    },
  ];

  const searchFields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"PO"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"PO Date"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Vendor"} name={"HeadOffice"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Branch"} name={"Enabled"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Department Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Items"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Demand Qty"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Rate"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputTextarea label={"Description"} name={"Name"} />
        </Col>
      </Row>
    </>
  );
  const formFields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"PO"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"PO Date"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Vendor"} name={"HeadOffice"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Branch"} name={"Enabled"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Department Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Items"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Demand Qty"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Rate"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputTextarea label={"Description"} name={"Name"} />
        </Col>
      </Row>
    </>
  );

  return (
    // <Card>
    // <BasicCrud
    //   formTitle="Purchase Order"
    //   tableTitle="Purchase Order"
    //   searchFields={searchFields}
    //   formFields={formFields}
    //   handleSubmit={handleSubmit}
    //   handleSearch={handleSearch}
    //   addFormInstance={addFormInstance}
    //   searchFormInstance={searchFormInstance}
    //   extra={"add"}
    //   rows={rows}
    //   columns={columns}
    //   handleDrawer={handleDrawer}
    //   isDrawerOpen={isDrawerOpen}
    //   isFormLoading={isFormLoading}
    //   isTableLoading={isTableLoading}
    // />
    <>
      <FormComponent
        title={"Search Purchase Order"}
        children={searchFields}
        handleSubmit={handleSearch}
        form={search}
        submit={"Search"}
        isLoading={isLoading}
        initialValues={initialValues}
        extra={
          <ButtonComponent
            icon={<EditOutlined />}
            text={"Add"}
            size={"small"}
            onClick={() => handleDrawer(Operations.Insert)}
          />
        }
        // customAction={customAction}
      />
      <br />
      <TableComponent
        columns={columns || []}
        rows={dataSet?.Table1 || []}
        title={"Purchase Order List"}
        loading={isTableLoading}
      />
      <DrawerComponent
        onClose={() => handleDrawer(Operations.Select)}
        open={open}
      >
        <FormComponent
          children={formFields}
          handleSubmit={handleSubmit}
          form={add}
          submit={
            formData?.OperationId == Operations.Update ? "Update" : "Save"
          }
          isLoading={isLoading}
          initialValues={initialValues}
        />
      </DrawerComponent>
    </>
    // </Card>
  );
}

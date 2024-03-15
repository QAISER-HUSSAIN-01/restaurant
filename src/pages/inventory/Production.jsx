import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Checkbox, Col, Form, Row, Space } from "antd";
import ButtonComponent from "components/ButtonComponent";
import DrawerComponent from "components/DrawerComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
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
export default function Production() {

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
  } = useFormHook("", initialValues);

  const columns = [
    {
      key: "1",
      title: "Item",
      dataIndex: "Name",
    },
    {
      key: "2",
      title: "Unit",
      dataIndex: "HeadOffice",
    },
    {
      key: "3",
      title: "Qty",
      dataIndex: "Enabled",
    },
    {
      key: "4",
      title: "Rate",
      dataIndex: "Name",
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

  const formFields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Production #"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Production Date"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Items"} name={"HeadOffice"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Qty"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Branch"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Department"} name={"Name"} />
        </Col>
      </Row>
    </>
  );
  const searchFields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Production #"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Production Date"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Items"} name={"HeadOffice"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Qty"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Branch"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Department"} name={"Name"} />
        </Col>
      </Row>
    </>
  );
  return (
    // <Card>
    <>
      <FormComponent
        title={"Search Production"}
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
            onClick={()=>handleDrawer(Operations.Insert)}
          />
        }
        // customAction={customAction}
      />
      <br />
      <TableComponent
        columns={columns || []}
        rows={dataSet?.Table1 || []}
        title={"Production List"}
        loading={isTableLoading}
      />
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
    // </Card>
  );
}


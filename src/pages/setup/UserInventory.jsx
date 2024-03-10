import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Checkbox, Col, Form, Row, Space } from "antd";
import ButtonComponent from "components/ButtonComponent";
import DrawerComponent from "components/DrawerComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormTabs from "components/form";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import { SuccessNotification } from "components/popup/Notifications";
import useFormHook from "hooks/useFormHook";
import React, { useEffect, useState } from "react";
import { Operations } from "utils/constants";

export default function UserInventory() {
  const initialValues = {
    OperationId:1,
    "Id": 0,
      "UserId": 0,
      "FormId": 0,
      "Save": false,
      "Edit": false,
      "Delete": false,
      "Post": false,
      "Enabled": true,
      "Deleted": false,
      "Form": null,
      "User": null
  };
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
  } = useFormHook("UserRights", initialValues);

  const columns = [
    {
      key: "1",
      title: "Form Name",
      dataIndex: "Name",
      ...getColumnSearchProps("Name"),
      ...sortString("Name"),
    },
    {
      key: "2",
      title: "Save",
      dataIndex: "IsSave",
      render: (_, record) => <Checkbox checked={record.IsSave} />,
      className: "text-center",
    },
    {
      key: "3",
      title: "Edit",
      dataIndex: "IsEdit",
      render: (_, record) => <Checkbox checked={record.IsEdit} />,
      className: "text-center",
    },
    {
        key: "4",
        title: "Delete",
        dataIndex: "IsDelete",
        render: (_, record) => <Checkbox checked={record.IsDelete} />,
        className: "text-center",
      },
      {
        key: "5",
        title: "Post",
        dataIndex: "IsPost",
        render: (_, record) => <Checkbox checked={record.IsPost} />,
        className: "text-center",
      },
    {
      key: "6",
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
          <InputSelect label={"Branch"} name={"Branch"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"User"} name={"User"} />
        </Col>
      </Row>
    </>
  );
  
  const formFields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Branch"} name={"Branch"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"User"} name={"User"} />
        </Col>
      </Row>
    </>
  );

  return (
    <>
      <FormComponent
        title={"Search User Role"}
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
      />
      <br />
      <TableComponent
        columns={columns || []}
        rows={dataSet?.Table1 || []}
        title={"User Inventory Role List"}
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
  );
}

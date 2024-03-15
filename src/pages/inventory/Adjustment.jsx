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
import { SuccessNotification } from "components/popup/Notifications";
import PopDelete from "components/popup/PopDelete";
import useFormHook from "hooks/useFormHook";
import React, { useEffect, useState } from "react";
import { Post } from "utils/CrudApi";
import { Operations } from "utils/constants";

const initialValues = {
  Id: 0,
  CompanyId: 0,
  Name: "",
  ShortName: "",
  UniqueId: "",
  HeadOffice: false,
  Enabled: true,
  Deleted: true,
};

export default function Adjustment() {
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
      title: "Item Code",
      dataIndex: "Name",
      ...getColumnSearchProps("Name"),
      ...sortString("Name"),
    },
    {
      key: "2",
      title: "Item",
      dataIndex: "item",
      ...getColumnSearchProps("ShortName"),
      ...sort("ShortName"),
    },
    {
      key: "3",
      title: "Unit",
      dataIndex: "unit",
      // className: "text-center",
    },
    {
      key: "4",
      title: "Qty",
      dataIndex: "qty",
      // className: "text-center",
    },
    {
      key: "5",
      title: "Type",
      dataIndex: "type",
      // className: "text-center",
    },
   
    {
      key: "6",
      title: "Delete",
      // className: "text-center",
      render: (_, record) => (
        <Space>
          {" "}
          {/* <ButtonComponent
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />{" "} */}
          <PopDelete handleDelete={() => handleDelete(record)}>
            <ButtonComponent icon={<DeleteOutlined />} danger={true} />{" "}
          </PopDelete>
        </Space>
      ),
    },
  ];

  const formFields = (
    <Row gutter={[20, 0]}>
    <Col xs={24} md={12} xl={8}>
      <InputText label={"ADJ #"} name={"Name"} />
    </Col>
    <Col xs={24} md={12} xl={8}>
      <InputSelect label={"ADJ Date"} name={"Name"} />
    </Col>
    <Col xs={24} md={12} xl={8}>
      <InputSelect label={"Branch"} name={"Name"} />
    </Col>
    <Col xs={24} md={12} xl={8}>
      <InputSelect label={"Department Name"} name={"Name"} />
    </Col>
    <Col xs={24} md={12} xl={8}>
      <InputSelect label={"Items"} name={"Name"} />
    </Col>
    <Col xs={24} md={12} xl={8}>
      <InputSelect label={"Type"} name={"Name"} />
    </Col>
  
    <Col xs={24} md={12} xl={8}>
      <InputText label={"Qty"} name={"ShortName"} />
    </Col>
    
  </Row>
  );

  const searchFields = (
    <Row gutter={[20, 0]}>
      <Col xs={24} md={12} xl={8}>
        <InputText label={"ADJ #"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"ADJ Date"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Branch"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Department Name"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Items"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Type"} name={"Name"} />
      </Col>
    
      <Col xs={24} md={12} xl={8}>
        <InputText label={"Qty"} name={"ShortName"} />
      </Col>
      
    </Row>
  );

  return (
    // <Card>
    <>
      <FormComponent
        title={"Search Adjustment"}
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
            onClick={handleDrawer}
          />
        }
      />
      <br />
      <TableComponent
        title={"Adjustment List"}
        columns={columns || []}
        rows={dataSet?.Table1 || []}
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

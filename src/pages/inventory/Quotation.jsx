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

export default function Quotation() {
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
      title: "Ite,",
      dataIndex: "Name",
      ...getColumnSearchProps("Name"),
      ...sortString("Name"),
    },
    {
      key: "2",
      title: "Qty",
      dataIndex: "name",
      ...getColumnSearchProps("ShortName"),
      ...sort("ShortName"),
    },
    {
      key: "3",
      title: "Vendor 1",
      dataIndex: "unit",
      // className: "text-center",
    },
    {
      key: "4",
      title: "Rate 1",
      dataIndex: "qty",
      // className: "text-center",
    },
    {
      key: "5",
      title: "Vendor 2",
      dataIndex: "qty",
      // className: "text-center",
    },
    {
      key: "6",
      title: "Rate 2",
      dataIndex: "rate",
      // className: "text-center",
    },
    {
      key: "7",
      title: "Vendor 3",
      dataIndex: "rate",
      // className: "text-center",
    },
    {
      key: "8",
      title: "Rate 3",
      dataIndex: "rate",
      // className: "text-center",
    },
    // {
    //   key: "10",
    //   title: "Action",
    //   // className: "text-center",
    //   render: (_, record) => (
    //     <Space>
    //       {" "}
    //       {/* <ButtonComponent
    //         icon={<EditOutlined />}
    //         onClick={() => handleEdit(record)}
    //       />{" "} */}
    //       <PopDelete handleDelete={() => handleDelete(record)}>
    //         <ButtonComponent icon={<DeleteOutlined />} danger={true} />{" "}
    //       </PopDelete>
    //     </Space>
    //   ),
    // },
  ];

  const formFields = (
    <Row gutter={[20, 0]}>
      <Col xs={24} md={12} xl={8}>
        <InputText label={"Demand #"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Branch"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Demand Date"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputText label={"Branch"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputText label={"Demand Qty"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={12}>
        {/* <Col xs={24} md={24} xl={24}> */}
          <Row align={'bottom'} gutter={[10,0]}>
            <Col xs={24} md={12} xl={12}>
              <InputText label={"Quotation 1"} name={"Name"} />
            </Col>
            <Col xs={24} md={12} xl={12}>
              <InputText name={"Name"} />
            </Col>
          </Row>
        {/* </Col> */}
        {/* <Col xs={24} md={24} xl={24}> */}
          <Row align={'bottom'} gutter={[10,0]}>
          <Col xs={24} md={12} xl={12} >
              <InputText label={"Quotation 2"} name={"Name"} />
            </Col>
            <Col xs={24} md={12} xl={12}>
              <InputText label={''} name={"Name"} />
            </Col>
          </Row>
        {/* </Col> */}
        {/* <Col xs={24} md={24} xl={24}> */}
          <Row align={'bottom'} gutter={[10,0]}>
          <Col xs={24} md={12} xl={12}>
              <InputText label={"Quotation 3"} name={"Name"} />
            </Col>
            <Col xs={24} md={12} xl={12}>
              <InputText name={"Name"} />
            </Col>
          </Row>
        {/* </Col> */}
      </Col>
    </Row>
  );

  const searchFields = (
    <Row gutter={[20, 0]}>
    <Col xs={24} md={12} xl={8}>
      <InputText label={"Demand #"} name={"Name"} />
    </Col>
    <Col xs={24} md={12} xl={8}>
      <InputSelect label={"Branch"} name={"Name"} />
    </Col>
    <Col xs={24} md={12} xl={8}>
      <InputSelect label={"Demand Date"} name={"Name"} />
    </Col>
    <Col xs={24} md={12} xl={8}>
      <InputText label={"Branch"} name={"Name"} />
    </Col>
    <Col xs={24} md={12} xl={8}>
      <InputText label={"Demand Qty"} name={"Name"} />
    </Col>
    <Col xs={24} md={12} xl={12}>
      {/* <Col xs={24} md={24} xl={24}> */}
        <Row align={'bottom'} gutter={[10,0]}>
          <Col xs={24} md={12} xl={12}>
            <InputText label={"Quotation 1"} name={"Name"} />
          </Col>
          <Col xs={24} md={12} xl={12}>
            <InputText name={"Name"} />
          </Col>
        </Row>
      {/* </Col> */}
      {/* <Col xs={24} md={24} xl={24}> */}
        <Row align={'bottom'} gutter={[10,0]}>
        <Col xs={24} md={12} xl={12} >
            <InputText label={"Quotation 2"} name={"Name"} />
          </Col>
          <Col xs={24} md={12} xl={12}>
            <InputText label={''} name={"Name"} />
          </Col>
        </Row>
      {/* </Col> */}
      {/* <Col xs={24} md={24} xl={24}> */}
        <Row align={'bottom'} gutter={[10,0]}>
        <Col xs={24} md={12} xl={12}>
            <InputText label={"Quotation 3"} name={"Name"} />
          </Col>
          <Col xs={24} md={12} xl={12}>
            <InputText name={"Name"} />
          </Col>
        </Row>
      {/* </Col> */}
    </Col>
  </Row>
  );

  return (
    // <Card>
    <>
      <FormComponent
        title={"Search Quotation"}
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
        title={"Quotation List"}
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

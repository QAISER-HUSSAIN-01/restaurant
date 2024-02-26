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
import React, { useEffect, useState } from "react";

const initialValues = {
  Id: 0,
  Name: "",
  ShortName: "",
  UniqueId: "",
  HeadOffice: true,
  Enabled: true,
  Deleted: true,
};
export default function Recipe() {
  
  const { getColumnSearchProps, sort, sortString } = TableConfig();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const [rows, setRows] = useState([]);
  const [search] = Form.useForm();
  const [add] = Form.useForm();

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleSearch = (values) => {
    console.log(values);
  };
  
  const handleSubmit = (values) => {
    handleDrawer();
    setIsLoading(true);
    if (formData?.operation == 3) {
      setIsLoading(false);
      setRows(
        rows.map((item) =>
          item.Id == formData.Id ? { ...formData, ...values } : item
        )
      );
      add.setFieldsValue(initialValues);
      setFormData({});
      SuccessNotification("successfully saved!");
    } else {
      const Id = (Math.random() * 356).toString();
      setIsLoading(false);
      setRows([...rows, { ...values, Id: Id }]);
      add.setFieldsValue(initialValues);
      setFormData({});
      SuccessNotification("success");
    }
  };
 
  const handleEdit = (record) => {
    setFormData({ ...record, operation: 3 });
    add.setFieldsValue(record);
    handleDrawer();
  };

  const handleDelete = (record) => {
    const copy = [...rows];
    setRows(copy.filter((item) => item.Id != record.Id));
  };

  const columns = [
    {
      key: "1",
      title: "Branch Name",
      dataIndex: "Name",
      ...getColumnSearchProps("Name"),
      ...sortString("Name"),
    },
    {
      key: "2",
      title: "Branch Code",
      dataIndex: "ShortName",
      ...getColumnSearchProps("ShortName"),
      ...sort("ShortName"),
    },
    {
      key: "3",
      title: "Is Head Office",
      dataIndex: "HeadOffice",
      render: (_, record) => <Checkbox checked={record.HeadOffice} />,
      className: "text-center",
    },
    {
      key: "4",
      title: "Is Active",
      dataIndex: "Enabled",
      render: (_, record) => <Checkbox checked={record.Enabled} />,
      className: "text-center",
    },
    {
      key: "5",
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
          <InputSelect label={"Categories"} name={"Categories"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Products"} name={"Categories"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Ingredients"} name={"Categories"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Recipe Unit"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Recipe Qty"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Cost Price"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Profit"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Sale Price"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Purchasing Unit"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Issuance Unit"} name={"ShortName"} />
        </Col>
        <Col xs={12} md={6} xl={3} className="flex align-center">
          <InputCheckbox label={"Dine In"} name={"ShortName"} />
        </Col>
        <Col xs={12} md={6} xl={3} className="flex align-center">
          <InputCheckbox label={"Take Away"} name={"ShortName"} />
        </Col>
        <Col xs={12} md={6} xl={3} className="flex align-center">
          <InputCheckbox label={"Delivery"} name={"ShortName"} />
        </Col>
      </Row>
    </>
  );
  
  const formFields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Categories"} name={"Categories"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Products"} name={"Categories"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Ingredients"} name={"Categories"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Recipe Unit"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Recipe Qty"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Cost Price"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Profit"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Sale Price"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Purchasing Unit"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Issuance Unit"} name={"ShortName"} />
        </Col>
        <Col xs={12} md={6} xl={6} className="flex align-center">
          <InputCheckbox label={"Dine In"} name={"ShortName"} />
        </Col>
        <Col xs={12} md={6} xl={6} className="flex align-center">
          <InputCheckbox label={"Take Away"} name={"ShortName"} />
        </Col>
        <Col xs={12} md={6} xl={6} className="flex align-center">
          <InputCheckbox label={"Delivery"} name={"ShortName"} />
        </Col>
      </Row>
    </>
  );

  return (
    <>
      <FormComponent
        title={"Search Recipe"}
        children={searchFields}
        handleSubmit={handleSearch}
        form={search}
        submit={'Search'}
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
        columns={columns || []}
        rows={rows || []}
        title={"Recipe List"}
        loading={isTableLoading}
      />
      <DrawerComponent onClose={handleDrawer} open={open}>
        <FormComponent
          children={formFields}
          handleSubmit={handleSubmit}
          form={add}
          submit={formData.Id ? "Update" : "Save"}
          isLoading={isLoading}
          initialValues={initialValues}
        />
      </DrawerComponent>
    </>
  );
}

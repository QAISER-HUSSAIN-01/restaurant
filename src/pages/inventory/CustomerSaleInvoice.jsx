
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
import React, { useEffect, useState } from "react";
import { Post } from "utils/CrudApi";

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

export default function CustomerSaleInvoice() {
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

  useEffect(() => {
    setIsTableLoading(true);
    const fetch = async () => {
      const data = await Post("Branch", initialValues);
      setRows(data);
      setIsTableLoading(false);
    };
    fetch();
    // setIsTableLoading(false);
  }, []);

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
      title: "Rate",
      dataIndex: "rate",
      // className: "text-center",
    },
    {
      key: "6",
      title: "Amount",
      dataIndex: "amount",
      // className: "text-center",
    },
    {
      key: "7",
      title: "min",
      dataIndex: "min",
      // className: "text-center",
    },
    {
      key: "8",
      title: "max",
      dataIndex: "max",
      // className: "text-center",
    },
    {
      key: "9",
      title: "BR Balance",
      dataIndex: "brbalance",
      // className: "text-center",
    },
    {
      key: "10",
      title: "ST Balance",
      dataIndex: "stbalance",
      // className: "text-center",
    },
    {
      key: "5",
      title: "Action",
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
        <InputText label={"Sale #"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Date"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Branch"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Customer"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Department"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Items"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputText label={"Qty"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Rate"} name={"ShortName"} />
      </Col>
      
      <Col xs={24} md={12} xl={8}>
        <InputTextarea label={"Description"} name={"ShortName"} />
      </Col>
    </Row>
  );

  const searchFields = (
    <Row gutter={[20, 0]}>
      <Col xs={24} md={12} xl={8}>
        <InputText label={"Sale #"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Date"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Branch"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Customer"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Department"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Items"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputText label={"Qty"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect label={"Rate"} name={"ShortName"} />
      </Col>
      
      <Col xs={24} md={12} xl={8}>
        <InputTextarea label={"Description"} name={"ShortName"} />
      </Col>
    </Row>
  );

  return (
    // <Card>
    <>
      <FormComponent
        title={"Search Sale Invoice"}
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
        title={"Sale Invoice List"}
        // columns={columns || []}
        // rows={rows || []}
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
    // </Card>
  );
}

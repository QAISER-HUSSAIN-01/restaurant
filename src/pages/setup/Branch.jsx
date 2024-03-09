import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Checkbox, Col, Form, Row, Space } from "antd";
import ButtonComponent from "components/ButtonComponent";
import DrawerComponent from "components/DrawerComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputText from "components/form/InputText";
import {
  ErrorNotification,
  SuccessNotification,
} from "components/popup/Notifications";
import PopDelete from "components/popup/PopDelete";
import useForm from "hooks/useFormHook";
import React, { useEffect, useState } from "react";
import { Get, Post } from "utils/CrudApi";

const initialValues = {
  OperationId: 1,
  Id: 0,
  CompanyId: 1,
  Company: null,
  Name: "",
  ShortName: "",
  UniqueId: "00000000-0000-0000-0000-000000000000",
  HeadOffice: false,
  Enabled: true,
  Deleted: true,
};

export default function Branch() {
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
    rows,
  } = useForm("Branch", initialValues);
  // const [isLoading, setIsLoading] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [isTableLoading, setIsTableLoading] = useState(false);
  // const [formData, setFormData] = useState(initialValues);
  // const [rows, setRows] = useState([]);
  // const [search] = Form.useForm();
  // const [add] = Form.useForm();

  // const handleDrawer = () => {
  //   setOpen(!open);
  //   open ? setFormData({...formData,OperationId:1}) : setFormData({...formData,OperationId:2})
  // };

  // const handleSearch = (values) => {
  //   console.log(values);
  // };

  // const handleSubmit = async (values) => {
  //   // handleDrawer();
  //   setIsLoading(true);
  //   if (formData?.OperationId == 3) {
  //     setIsLoading(false);
  //     setRows(
  //       rows.map((item) =>
  //         item.Id == formData.Id ? { ...formData, ...values } : item
  //       )
  //     );
  //     add.setFieldsValue(initialValues);
  //     setFormData({});
  //     SuccessNotification("successfully saved!");
  //   } else {
  //     const payload = { ...formData,...values};
  //     const data = await Post("Branch", payload);
  //     if (data?.HasError == "1") {
  //       ErrorNotification(data?.Error_Message);
  //       setIsLoading(false);
  //       return;
  //     }
  //     console.log(data);
  //     setIsLoading(false);
  //     // setRows([...rows, { ...values, Id: Id }]);
  //     add.setFieldsValue(initialValues);
  //     setFormData({});
  //     SuccessNotification(data?.Message);
  //   }
  // };

  // const handleEdit = (record) => {
  //   setFormData({ ...record, operation: 3 });
  //   add.setFieldsValue(record);
  //   handleDrawer();
  // };

  // const handleDelete = (record) => {
  //   const copy = [...rows];
  //   setRows(copy.filter((item) => item.Id != record.Id));
  // };

  // useEffect(() => {
  //   setIsTableLoading(true);
  //   const fetch = async () => {
  //     const data = await Post("Branch", {...initialValues});
  //     if (data.HasError == "1") {
  //       ErrorNotification(data?.Error_Message);
  //       return;
  //     }
  //     setRows(data?.DataSet?.Table1);
  //     setIsTableLoading(false);
  //   };
  //   fetch();
  //   // setIsTableLoading(false);
  // }, []);

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
      // className: "text-center",
    },
    {
      key: "4",
      title: "Is Active",
      dataIndex: "Enabled",
      render: (_, record) => <Checkbox checked={record.Enabled} />,
      // className: "text-center",
    },
    {
      key: "5",
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
  const formFields = (
    <Row gutter={[20, 0]}>
      <Col xs={24} md={12} xl={12}>
        <InputText label={"Branch Name"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={12}>
        <InputText label={"Branch Code"} name={"ShortName"} />
      </Col>
      <Col xs={12} md={6} xl={6} className="flex align-center">
        <InputCheckbox label={"Is Head Office"} name={"HeadOffice"} />
      </Col>
      <Col xs={12} md={6} xl={6} className="flex align-center">
        <InputCheckbox label={"Is Active"} name={"Enabled"} />
      </Col>
    </Row>
  );

  const searchFields = (
    <Row gutter={[20, 0]}>
      <Col xs={24} md={12} xl={8}>
        <InputText label={"Branch Name"} name={"Name"} />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputText label={"Branch Code"} name={"ShortName"} />
      </Col>
      <Col xs={12} md={6} xl={4} className="flex align-center">
        <InputCheckbox label={"Is Head Office"} name={"HeadOffice"} />
      </Col>
      <Col xs={12} md={6} xl={4} className="flex align-center">
        <InputCheckbox label={"Is Active"} name={"Enabled"} />
      </Col>
    </Row>
  );
  return (
    // <Card>
    <>
      <FormComponent
        title={"Search Branch"}
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
            onClick={()=>handleDrawer(2)}
          />
        }
      />
      <br />
      <TableComponent
        title={"Branch List"}
        columns={columns || []}
        rows={rows || []}
        loading={isTableLoading}
      />
      <DrawerComponent onClose={()=>handleDrawer(1)} open={open}>
        <FormComponent
          children={formFields}
          handleSubmit={handleSubmit}
          form={add}
          submit={formData?.OperationId == 3 ? "Update" : "Save"}
          isLoading={isLoading}
          initialValues={initialValues}
        />
      </DrawerComponent>
    </>
    // </Card>
  );
}

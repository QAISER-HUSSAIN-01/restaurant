import { Col, Form, Row } from "antd";
import ButtonComponent from "components/ButtonComponent";
import TableComponent from "components/TableComponent";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputText from "components/form/InputText";
import React, { useState } from "react";


export default function Branch() {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const initialValues = {
    Id: 0,
    Name: "",
    ShortName: "",
    UniqueId: "",
    HeadOffice: true,
    Enabled: true,
    Deleted: true
  }
  const columns = [
    {
      key: "1",
      title: "Branch Name",
      dataIndex: "Name",
      // filters: []?.map(item=>{return{text:item?.Name,value:item?.Name}}),
      // filterSearch: true,
      // onFilter: (value, record) => record.Name.startsWith(value),
    },
    {
      key: "2",
      title: "Branch Code",
      dataIndex: "ShortName",
    },
    {
      key: "3",
      title: "Is Heade Office",
      dataIndex: "HeadOffice",
    },
    {
      key: "4",
      title: "Is Active",
      dataIndex: "Enabled",
    },
  ];
  const fields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Branch Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Branch Code"} name={"ShortName"} />
        </Col>
        <Col xs={12} md={6} xl={3} className="flex align-center">
          <InputCheckbox label={"Is Head Office"} name={"HeadOffice"} />
        </Col>
        <Col xs={12} md={6} xl={3} className="flex align-center">
          <InputCheckbox label={"Is Active"} name={"Enabled"} />
        </Col>
      </Row>
    </>
  );

  const customAction = (
    <>
      <ButtonComponent text={"Delete"} />
      <ButtonComponent text={"Close"} />
      <ButtonComponent text={"Print"} />
    </>
  );

  const handleSubmit = (values) => {
    setIsLoading(true);
    console.log(values);
    setTimeout(() => {
      setIsLoading(false);
    }, [2000]);
  };

  return (
    <>
      <FormComponent
        children={fields}
        handleSubmit={handleSubmit}
        form={form}
        submit={"Save"}
        isLoading={isLoading}
        initialValues={initialValues}
        // customAction={customAction}
      />
      <TableComponent columns={columns || []} rows={[]} />
    </>
  );
}

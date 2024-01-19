import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import InputText from "components/form/InputText";
import { colFn, rowFn } from "utils/dummy";
import { Form } from "antd";
import FormAndTable from "components/FormAndTable";
import InputSelect from "components/form/InputSelect";
export default function Inventory() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log(values);
  };

  // const validate = (change, values) => {
  //   if (change.cities == "two") {
  //     form.setFieldValue("lastname", "male");
  //   }
  // };

  const onEdit = () => {
    const obj = {
      firstname: "Qaiser",
      lastname: "Hussain",
      fathername: "M Hussain",
      contactnumber: "03012709842",
      cities: "two",
      description: "description description description",
      employee: true,
    };
    form.setFieldsValue({ ...obj });
  };

  const fields = (
    <Row gutter={[10, 0]}>
      <Col xs={24} md={12} lg={8}>
        <InputText label={"First Name"} name={"firstname"} />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <InputSelect label={"City"} name={"cities"} />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <InputText label={"Last Name"} name={"lastname"} />
      </Col>
    </Row>
  );

  return (
    <FormAndTable
      form={{ children: fields, handleSubmit, form }}
      table={{ columns: colFn(), rows: rowFn() }}
    />
    
  );
}
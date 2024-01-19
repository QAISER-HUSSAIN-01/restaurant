import React from "react";
import FormAndTable from "components/FormAndTable";
import InputText from "components/form/InputText";
import { Col, Form, Row } from "antd";
import { colFn, rowFn } from "utils/dummy";
import InputSelect from "components/form/InputSelect";

export default function Components() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log(values);
  };

  const fields = (
    <Row gutter={[10, 0]}>
      <Col xs={24} md={12} lg={8}>
        <InputText label={"First Name"} name={"firstname"} required={true} />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <InputText label={"Last Name"} name={"lastname"} />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <InputSelect label={"City"} name={"cities"} />
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

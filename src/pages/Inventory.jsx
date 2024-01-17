import React, { useState } from "react";
import { Col, Row } from "antd";
import FormComponent2 from "components/form/FormComponent2";
import InputText from "components/form/InputText";
import { ALPHANUMERIC, NUMERIC } from "utils/constants";
import InputSelect from "components/form/InputSelect";
import InputPassword from "components/form/InputPassword";
import InputCheckbox from "components/form/InputCheckbox";
import TableComponent from "components/TableComponent";
import { colFn, rowFn } from "utils/dummy";

export default function Inventory() {
  const initialData = {
    firstname: "",
    lastname: "",
    fathername: "",
    contactnumber: null,
    cities: "",
  };
  const fields = (
    <Row gutter={[10, 0]}>
      <Col xs={24} md={12} lg={8}>
        <InputText
          label={"First Name"}
          name={"firstname"}
          value={initialData.firstname}
          pattern={ALPHANUMERIC}
          required={true}
        />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <InputText
          label={"Last Name"}
          name={"lastname"}
          value={initialData.lastname}
          required={true}
        />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <InputText
          label={"Father Name"}
          name={"fathername"}
          value={initialData.fathername}
        />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <InputText
          label={"Contact Number"}
          name={"contactnumber"}
          value={initialData.fathername}
          pattern={NUMERIC}
        />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <InputSelect
          label={"City List"}
          name={"cities"}
          value={initialData.cities}
          required={true}
        />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <InputPassword
          label={"Password"}
          name={"password"}
          value={initialData.password}
          required={true}
        />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <InputCheckbox
          label={"Is False"}
          name={"isfalse"}
          value={initialData.isfalse}
          required={true}
        />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <InputCheckbox
          label={"Is True"}
          name={"istrue"}
          value={initialData.istrue}
        />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <InputCheckbox
          label={"Is Okay"}
          name={"isokay"}
          value={initialData.isokay}
        />
      </Col>
    </Row>
  );
  return (
    <div>
      <FormComponent2 initialData={initialData}>{fields}</FormComponent2>
      <br />
      <TableComponent columns={colFn()} rows={rowFn()}  />
    </div>
  );
}

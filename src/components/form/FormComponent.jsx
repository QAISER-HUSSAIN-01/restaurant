import React, { useEffect, useState } from "react";
import {
  checkValidation,
  transformDataIntoInitialFields,
} from "utils/functions";
import FieldsComponent from "./FieldsComponent";
import { Button, Col, Row, Form } from "antd";
import InputText from "./InputText";
import InputSelect from "./InputSelect";
import InputCheckbox from "./InputCheckbox";
import InputPassword from "./InputPassword";
import InputTextarea from "./InputTextarea";

export default function FormComponent({ fields, path, submit, reset }) {
  const [loader, setLoader] = useState(false);

  const [formData, setFormData] = useState({});

  const handleTextField = ({ target: { name, value } }, validation) => {
    const sanitized = checkValidation(value, validation);
    setFormData({ ...formData, [name]: sanitized });
  };

  const handleSelectField = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = ({ target: { name, checked } }) => {
    setFormData({ ...formData, [name]: checked });
  };

  const handleFormData = (values) => {
    // e.preventDefault();
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, [2000]);
    console.log("formData", values);
  };

  const handleReset = () => setFormData(transformDataIntoInitialFields(fields));

  useEffect(() => {
    setFormData(transformDataIntoInitialFields(fields));
  }, []);

  return (
    <Form
      onFinish={(values) => handleFormData(values)}
      layout="vertical"
      className="form"
      autoComplete="off"
    >
      {fields?.length == 0 ? (
        <div>Form is Empty!</div>
      ) : (
        <Row gutter={[10, 10]} className="align-center">
          {fields?.map(
            ({
              label,
              type,
              placeholder,
              name,
              startIcon,
              endIcon,
              validation,
              max,
              min,
              showCount,
              required,
              responsive,
            }) => (
              <FieldsComponent
                handleTextField={handleTextField}
                handleSelectField={handleSelectField}
                handleCheckbox={handleCheckbox}
                key={name}
                label={label}
                type={type}
                placeholder={label}
                name={name}
                value={formData[name]}
                startIcon={startIcon}
                endIcon={endIcon}
                validation={validation}
                min={min}
                max={max}
                showCount={showCount}
                required={required}
                responsive={responsive}
              />
            )
          )}
        </Row>
      )}
      {/* <br /> */}
      <Row gutter={[10, 0]} className="justify-end">
        <Col>
          <Button loading={loader} htmlType="submit" type="primary">
            {submit || "Submit"}
          </Button>
        </Col>
        <Col>
          <Button htmlType="reset" danger>
            {reset || "Reset"}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

// {fields?.length == 0 ? (
//   <div>Form is Empty!</div>
// ) : (
//   <Row gutter={[10, 10]} className="align-center">
//     {fields?.map(
//       ({
//         label,
//         type,
//         placeholder,
//         name,
//         value,
//         startIcon,
//         endIcon,
//         validation,
//         maxLength,
//         showCount,
//         required,
//         responsive,
//       }) => (
//         <FieldsComponent
//           handleTextField={handleTextField}
//           handleSelectField={handleSelectField}
//           handleCheckbox={handleCheckbox}
//           key={name}
//           label={label}
//           type={type}
//           placeholder={label}
//           name={name}
//           value={formData[name]}
//           startIcon={startIcon}
//           endIcon={endIcon}
//           validation={validation}
//           maxLength={maxLength}
//           showCount={showCount}
//           required={required}
//           responsive={responsive}
//         />
//       )
//     )}
//   </Row>
// )}

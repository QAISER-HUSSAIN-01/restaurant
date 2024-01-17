import React from "react";
import { Input, Select, Checkbox, Typography, Col, Form } from "antd";

export default function FieldsComponent({
  label,
  type,
  placeholder,
  name,
  value,
  startIcon,
  endIcon,
  disabled,
  handleTextField,
  handleCheckbox,
  handleSelectField,
  min,
  max,
  showCount,
  validation,
  required,
  responsive,
}) {
  switch (type) {
    case "text":
      return (
        <Col
          xs={responsive[0] ? responsive[0] : 24}
          md={responsive[1] ? responsive[1] : 24}
          xl={responsive[2] ? responsive[2] : 24}
          className="form_field_group"
        >
          <Form.Item
            label={label}
            name={name}
            initialValue={value}
            rules={[
              { required: required, message: `${label} is required!` },
              { min: min, message: `Minimum length must be ${min}` },
              { max: max, message: `Maximum length must be ${max}` },
            ]}
            className="ant-form-item-custom-style"
          >
            <Input
              onChangeCapture={(e) => handleTextField(e, validation)}
              disabled={disabled}
              placeholder={placeholder}
            />
          </Form.Item>
        </Col>
      );
    case "textarea":
      return (
        <Col
          xs={responsive[0] ? responsive[0] : 24}
          md={responsive[1] ? responsive[1] : 24}
          xl={responsive[2] ? responsive[2] : 24}
          className="form_field_group"
        >
          <Form.Item
            label={label}
            name={name}
            initialValue={value}
            rules={[
              { required: required, message: `${label} is required!` },
              { min: min, message: `Minimum length required ${min}` },
              { max: max, message: `Maximum length is ${max}` },
            ]}
          >
            <Input.TextArea
              placeholder={placeholder}
              onChangeCapture={(e) => handleTextField(e)}
              disabled={disabled}
              // showCount={showCount}
              // maxLength={max}
            />
          </Form.Item>
        </Col>
      );
    case "password":
      return (
        <Col
          xs={responsive[0] ? responsive[0] : 24 }
          md={responsive[1] ? responsive[1] : 24 }
          xl={responsive[2] ? responsive[2] : 24 }
          className="form_field_group"
        >
          <Form.Item
            label={label}
            name={name}
            initialValue={value}
            rules={[{ required: required, message: `${label} is required!` }]}
          >
            <Input.Password
              onChangeCapture={(e) => handleTextField(e, validation)}
              disabled={disabled}
              placeholder={placeholder}
            />
          </Form.Item>
        </Col>
      );
    case "select":
      return (
        <Col
          xs={responsive[0] ? responsive[0] : 24 }
          md={responsive[1] ? responsive[1] : 24 }
          xl={responsive[2] ? responsive[2] : 24 }
          className="form_field_group"
        >
          <Form.Item
            label={label}
            name={name}
            initialValue={value}
            rules={[{ required: required, message: `${label} is required!` }]}
            className="ant-form-item-custom-style"
          >
            <Select
              style={{ width: "100%" }}
              placeholder={placeholder}
              showSearch
              disabled={disabled}
              onChange={(val) => handleSelectField(val, name)}
              options={[
                { value: "", label: "Select" },
                { value: "one", label: "label one" },
                { value: "two", label: "label two" },
                { value: "three", label: "label three" },
              ]}
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              // filterSort={(optionA, optionB) =>
              //   (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              // }
            />
          </Form.Item>
        </Col>
      );
    case "checkbox":
      return (
        <Col
          xs={responsive[0] ? responsive[0] : 24 }
          md={responsive[1] ? responsive[1] : 24 }
          xl={responsive[2] ? responsive[2] : 24 }
          className="form_field_group"
        >
          <Form.Item initialValue={value} name={name} valuePropName="checked">
            <Checkbox
              onChange={handleCheckbox}
              disabled={disabled}
              required={required}
            >
              {label} {required && <span className="steric">*</span>}
            </Checkbox>
          </Form.Item>
        </Col>
      );
    default:
      break;
  }
}

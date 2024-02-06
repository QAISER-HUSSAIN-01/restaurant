import React from "react";
import { Button, Col, Row, Form, Space, Card } from "antd";

export default function FormComponent({
  title,
  form,
  isLoading,
  handleSubmit,
  submit,
  children,
  validate,
  initialValues,
  layout,
}) {
  const handleFormData = (values) => {
    handleSubmit(values);
  };

  return (
      <Form
        form={form}
        onFinish={(values) => handleFormData(values)}
        layout={layout || "vertical"}
        autoComplete="off"
        onValuesChange={(change, values) => {
          if (validate) {
            validate(change, values);
          }
        }}
        initialValues={initialValues}
        // validateTrigger={['onBlur']}
      >
        {children}
      
      </Form>
  );
}

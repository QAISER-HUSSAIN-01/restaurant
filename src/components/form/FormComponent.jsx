import React from "react";
import { Button, Col, Row, Form, Space, Card } from "antd";

export default function FormComponent({
  form,
  isLoading,
  handleSubmit,
  submit,
  reset,
  children,
  customAction,
  validate,
  initialValues,
  customActionJustify
}) {
  const handleFormData = (values) => {
    handleSubmit(values);
  };

  return (
    <Form
      form={form}
      onFinish={(values) => handleFormData(values)}
      layout="vertical"
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
      <Row gutter={[10, 0]} className={`justify-end mt-2`}>
        {/* {customAction ? customAction : <div></div>} */}
        <Space>
          {customAction && customAction}
          <Col>
            <Button loading={isLoading} htmlType="submit" type="primary" disabled={isLoading}>
              {submit || "Submit"}
            </Button>
          </Col>
          {reset !== false && (
            <Col>
              <Button htmlType="reset" danger>
                {reset || "Reset"}
              </Button>
            </Col>
          )}
        </Space>
      </Row>
    </Form>
  );
}

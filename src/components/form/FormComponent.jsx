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
}) {
  const handleFormData = (values) => {
    handleSubmit(values);
  };

  return (
    <Card bordered={false}>
      <Form
        form={form}
        onFinish={(values) => handleFormData(values)}
        layout="vertical"
        className=""
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
        <Row gutter={[10, 0]} className="space-between mt-2 p-2">
          {customAction ? customAction : <div></div>}
          <Space>
            <Col>
              <Button loading={isLoading} htmlType="submit" type="primary">
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
    </Card>
  );
}

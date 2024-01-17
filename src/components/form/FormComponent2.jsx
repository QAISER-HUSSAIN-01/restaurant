import React, { useEffect, useState } from "react";
import { checkValidation } from "utils/functions";
import { Button, Col, Row, Form, Space } from "antd";

export default function FormComponent2({
  handleSubmit,
  initialData,
  submit,
  reset,
  children,
  customAction,
}) {
  const [loader, setLoader] = useState(false);

  const handleFormData = async (values) => {
    setLoader(true);
    await handleSubmit(values);
  };

  return (
    <Form
      onFinish={(values) => handleFormData(values)}
      layout="vertical"
      className="form"
      autoComplete="off"
    >
      {children}
      <Row gutter={[10, 0]} className="space-between mt-2">
        {customAction ? customAction : <div></div>}
        <Space>
          <Col>
            <Button loading={loader} htmlType="submit" type="primary">
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

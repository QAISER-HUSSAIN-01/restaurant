import React from "react";
import { Button, Col, Row, Form, Space, Card } from "antd";
import {SearchOutlined,EditOutlined} from '@ant-design/icons'
export default function InventoryForm({
  title,
  form,
  isLoading,
  handleSubmit,
  submit,
  reset,
  children,
  customAction,
  validate,
  initialValues,
  customActionJustify,
  hideActions,
  layout,
  extra
}) {
  const handleFormData = (values) => {
    handleSubmit(values);
  };

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     event.preventDefault(); // Prevent default form submission behavior
  //     handleSubmit(form.getFieldValue()); // Get form values using form.getFieldValue()
  //   }
  // };

  return (
    <Card title={title} bordered={false} extra={extra}>
      <Form
        form={form}
        onFinish={(values) => handleFormData(values)}
        layout={layout || "vertical"}
        autoComplete="off"
        // onKeyDown={handleKeyDown}
        onValuesChange={(change, values) => {
          if (validate) {
            validate(change, values);
          }
        }}
        initialValues={initialValues}
        // validateTrigger={['onBlur']}
      >
        {children}
        {!hideActions && (
          <Row gutter={[10, 0]} className={`justify-end mt-2`}>
            {/* {customAction ? customAction : <div></div>} */}
            <Space>
              {customAction && customAction}
              <Col>
                <Button
                  loading={isLoading}
                  htmlType="submit"
                  type="primary"
                  disabled={isLoading}
                  icon={submit == 'Search' ? <SearchOutlined /> : <EditOutlined />}
                >
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
        )}
      </Form>
    </Card>
  );
}

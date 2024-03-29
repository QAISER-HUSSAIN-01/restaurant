import { Card, Col, Form, Row } from "antd";
import FormComponent from "components/form/FormComponent";
import InputText from "components/form/InputText";
import React, { useState } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { Get } from "utils/CrudApi";
import { EMAIL } from "utils/constants";
import { setLocalItem } from "utils/functions";

export default function Login() {
  const [isLoading,setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [login] = Form.useForm();
  const customActions = <Link to={"/forgotpassword"}>forgot password ?</Link>;
  const handleSubmit = async (values) => {
    setIsLoading(true);
    const data = await Get(`Security/Auth/${values.email}/${values.password}`);
    setLocalItem("token", data?.token);
    setIsLoading(false);
    navigate("/");

  };
  return (
    <div className="flex justify-center align-center h-100">
      <Col xs={24} sm={18} md={16} lg={6} className="login-container h-contain">
        {/* <Card> */}
          <FormComponent
          form={login}
            handleSubmit={handleSubmit}
            submit={"Login"}
            reset={false}
            customAction={customActions}
            isLoading={isLoading}
          >
            <Row>
              <Col xs={24} md={24} lg={24}>
                <InputText
                  label={"Email"}
                  name={"email"}
                  required={true}
                  // pattern={EMAIL}
                />
              </Col>
              <Col xs={24} md={24} lg={24}>
                <InputText
                  label={"Password"}
                  name={"password"}
                  required={true}
                />
              </Col>
            </Row>
          </FormComponent>
        {/* </Card> */}
      </Col>
    </div>
  );
}

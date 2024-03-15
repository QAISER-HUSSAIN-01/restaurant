import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Checkbox, Col, Form, Row, Space, Typography } from "antd";
import ButtonComponent from "components/ButtonComponent";
import DrawerComponent from "components/DrawerComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import InputTextarea from "components/form/InputTextarea";
import { SuccessNotification } from "components/popup/Notifications";
import PopDelete from "components/popup/PopDelete";
import useFormHook from "hooks/useFormHook";
import React, { useEffect, useState } from "react";
import { Post } from "utils/CrudApi";
import { Operations } from "utils/constants";

const initialValues = {
  Id: 0,
  CompanyId: 0,
  Name: "",
  ShortName: "",
  UniqueId: "",
  HeadOffice: false,
  Enabled: true,
  Deleted: true,
};

export default function GrnReturn() {
  const { getColumnSearchProps, sort, sortString } = TableConfig();
  const {
    isLoading,
    isTableLoading,
    handleDelete,
    handleDrawer,
    handleEdit,
    handleSearch,
    handleSubmit,
    open,
    add,
    formData,
    search,
    dataSet,
  } = useFormHook("", initialValues);

  const columns = [
    {
      key: "1",
      title: "Item",
      dataIndex: "Name",
    },
    {
      key: "2",
      title: "Unit",
      dataIndex: "HeadOffice",
    },
    {
      key: "3",
      title: "Qty",
      dataIndex: "Enabled",
    },
    {
      key: "4",
      title: "Rate",
      dataIndex: "Name",
    },
    {
      key: "5",
      title: "Amount",
      dataIndex: "ShortName",
    },
    {
      key: "6",
      title: "Tax Percentage",
      dataIndex: "Enabled",
    },
    {
      key: "7",
      title: "Tax Amount",
      dataIndex: "Enabled",
    },
    {
      key: "8",
      title: "Discount Amount",
      dataIndex: "Name",
    },
    {
      key: "9",
      title: "Total Amount",
      dataIndex: "ShortName",
    },
    {
      key: "10",
      title: "Check Qty",
      dataIndex: "HeadOffice",
    },
    {
      key: "11",
      title: "Action",
      className: "text-center",
      render: (_, record) => (
        <Space>
          {" "}
          <ButtonComponent
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />{" "}
          <ButtonComponent
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
            danger={true}
          />{" "}
        </Space>
      ),
    },
  ];

  const formFields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={6}>
          <InputText label={"GRN #"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"GRN #"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"GRN Date"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"Vendor"} name={"HeadOffice"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputText label={"Ref#"} name={"Enabled"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"Items"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputText label={"GRN Qty"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputText label={"Rate"} name={"ShortName"} />
        </Col>

        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"PO"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"Branch"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"Department"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputTextarea label={"Description"} name={"Name"} />
        </Col>
      </Row>
      <Row justify={"end"}>
        <Col xs={24} md={12} xl={12}>
          <Col xs={24} md={24} xl={24} className="mb-2">
            <Row>
              <Col xs={12} md={8} xl={8}>
                <Typography.Text>Gross Amount</Typography.Text>
              </Col>
              <Col xs={8} md={8} xl={8}>
                <Typography.Text>250</Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={24} xl={24}>
            <Row>
              <Col xs={12} md={8} xl={8}>
                <Typography.Text>Total Tax</Typography.Text>
              </Col>
              <Col xs={12} md={12} xl={12}>
                {" "}
                <InputText name={"Name"} size={"small"} />{" "}
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={24} xl={24}>
            <Row>
              <Col xs={12} md={8} xl={8}>
                <Typography.Text>Discount</Typography.Text>
              </Col>
              <Col xs={12} md={12} xl={12}>
                {" "}
                <InputText name={"Name"} size={"small"} />{" "}
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={24} xl={24}>
            <Row>
              <Col xs={12} md={8} xl={8}>
                <Typography.Text>Transportation</Typography.Text>
              </Col>
              <Col xs={12} md={12} xl={12}>
                {" "}
                <InputText name={"Name"} size={"small"} />{" "}
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={24} xl={24}>
            <Row>
              <Col xs={12} md={8} xl={8}>
                <Typography.Text>Total Amount</Typography.Text>
              </Col>
              <Col xs={12} md={12} xl={12}>
                {" "}
                <InputText name={"Name"} size={"small"} />{" "}
              </Col>
            </Row>
          </Col>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <Row gutter={[20, 0]}>
            <Col xs={12} md={12} xl={12}>
              <InputText label={"Tax"} name={"ShortName"} />
            </Col>
            <Col xs={12} md={12} xl={12}>
              <InputText label={"Tax2"} name={"ShortName"} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
  const searchFields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={6}>
          <InputText label={"GRN #"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"GRN #"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"GRN Date"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"Vendor"} name={"HeadOffice"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputText label={"Ref#"} name={"Enabled"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"Items"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputText label={"GRN Qty"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputText label={"Rate"} name={"ShortName"} />
        </Col>

        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"PO"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"Branch"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"Department"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputTextarea label={"Description"} name={"Name"} />
        </Col>
      </Row>
      <Row justify={"end"}>
        <Col xs={24} md={12} xl={6}>
          <Col xs={24} md={24} xl={24} className="mb-2">
            <Row>
              <Col xs={12} md={8} xl={8}>
                <Typography.Text>Gross Amount</Typography.Text>
              </Col>
              <Col xs={8} md={8} xl={8}>
                <Typography.Text>250</Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={24} xl={24}>
            <Row>
              <Col xs={12} md={8} xl={8}>
                <Typography.Text>Total Tax</Typography.Text>
              </Col>
              <Col xs={12} md={12} xl={12}>
                {" "}
                <InputText name={"Name"} size={"small"} />{" "}
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={24} xl={24}>
            <Row>
              <Col xs={12} md={8} xl={8}>
                <Typography.Text>Discount</Typography.Text>
              </Col>
              <Col xs={12} md={12} xl={12}>
                {" "}
                <InputText name={"Name"} size={"small"} />{" "}
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={24} xl={24}>
            <Row>
              <Col xs={12} md={8} xl={8}>
                <Typography.Text>Transportation</Typography.Text>
              </Col>
              <Col xs={12} md={12} xl={12}>
                {" "}
                <InputText name={"Name"} size={"small"} />{" "}
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={24} xl={24}>
            <Row>
              <Col xs={12} md={8} xl={8}>
                <Typography.Text>Total Amount</Typography.Text>
              </Col>
              <Col xs={12} md={12} xl={12}>
                {" "}
                <InputText name={"Name"} size={"small"} />{" "}
              </Col>
            </Row>
          </Col>
        </Col>
        <Col xs={24} md={12} xl={6}>
          <Row gutter={[20, 0]}>
            <Col xs={12} md={12} xl={12}>
              <InputText label={"Tax"} name={"ShortName"} />
            </Col>
            <Col xs={12} md={12} xl={12}>
              <InputText label={"Tax2"} name={"ShortName"} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );

  return (
    // <Card>
    <>
      <FormComponent
        title={"Search GRN Return"}
        children={searchFields}
        handleSubmit={handleSearch}
        form={search}
        submit={"Search"}
        isLoading={isLoading}
        initialValues={initialValues}
        extra={
          <ButtonComponent
            icon={<EditOutlined />}
            text={"Add"}
            size={"small"}
            onClick={handleDrawer}
          />
        }
      />
      <br />
      <TableComponent
        title={"GRN Return List"}
        columns={columns || []}
        rows={dataSet?.Table1 || []}
        loading={isTableLoading}
      />
      <DrawerComponent
        onClose={() => handleDrawer(Operations.Select)}
        open={open}
      >
        <FormComponent
          children={formFields}
          handleSubmit={handleSubmit}
          form={add}
          submit={
            formData?.OperationId == Operations.Update ? "Update" : "Save"
          }
          isLoading={isLoading}
          initialValues={initialValues}
        />
      </DrawerComponent>
    </>
    // </Card>
  );
}

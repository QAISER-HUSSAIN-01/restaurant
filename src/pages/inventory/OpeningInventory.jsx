import { Checkbox, Col, Form, Row } from "antd";
import ButtonComponent from "components/ButtonComponent";
import TableComponent from "components/TableComponent";
import BasicCrud from "components/crud/BasicCrud";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import React, { useEffect, useState } from "react";

export default function OpeningInventory() {
  const initialValues = {
    Id: 0,
    Name: "",
    ShortName: "",
    UniqueId: "",
    HeadOffice: true,
    Enabled: true,
    Deleted: true,
  };

  const [isTableLoading, setIsTableLoading] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [addFormInstance] = Form.useForm();
  const [searchFormInstance] = Form.useForm();
  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleSearch = (values) => {
    console.log(values);
  };
  
  const handleSubmit = (values) => {
    setIsFormLoading(true);
    console.log(values);
    setTimeout(() => {
      setIsFormLoading(false);
    }, [2000]);
  };

  const columns = [
    {
      key: "1",
      title: "Item Code",
      dataIndex: "ItemCode",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "Name",
    },
    {
      key: "3",
      title: "Unit",
      dataIndex: "Unit",
    },
    {
      key: "4",
      title: "Qty",
      dataIndex: "Qty",
    },
    {
      key: "5",
      title: "Rate",
      dataIndex: "Rate",
    },
  ];

  const searchFields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Branch"} name={"Branch"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Department Name"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Opening Date"} name={"ShortName"} />
        </Col>
      </Row>
    </>
  );

  const formFields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Branch"} name={"Branch"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Department Name"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Opening Date"} name={"ShortName"} />
        </Col>
      </Row>
    </>
  );

  
  return (
    // <Card>
    <BasicCrud
      formTitle="Opening Inventory"
      tableTitle="Opening Inventory"
      searchFields={searchFields}
      formFields={formFields}
      handleSubmit={handleSubmit}
      handleSearch={handleSearch}
      addFormInstance={addFormInstance}
      searchFormInstance={searchFormInstance}
      extra={'add'}
      rows={rows}
      columns={columns}
      handleDrawer={handleDrawer}
      isDrawerOpen={isDrawerOpen}
      isFormLoading={isFormLoading}
      isTableLoading={isTableLoading}  
    />
    // <>
    //   <FormComponent
    //     title={"Opening Inventory"}
    //     children={searchFields}
    //     handleSubmit={handleSubmit}
    //     form={search}
    //     submit={"Search"}
    //     isLoading={isFormLoading}
    //     initialValues={initialValues}
    //     hideActions={true}
    //   />
    //   <br />
    //   <TableComponent columns={columns || []} rows={rows || []} title={'Opening Inventory List'} />
    // </>
    // </Card>
  );
}

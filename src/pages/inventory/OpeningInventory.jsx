import { EditOutlined } from "@ant-design/icons";
import { Checkbox, Col, Form, Row } from "antd";
import ButtonComponent from "components/ButtonComponent";
import DrawerComponent from "components/DrawerComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import BasicCrud from "components/crud/BasicCrud";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import useFormHook from "hooks/useFormHook";
import React, { useEffect, useState } from "react";
import { Operations } from "utils/constants";

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
  } = useFormHook("Branch", initialValues);
 

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
    // <BasicCrud
    //   formTitle="Opening Inventory"
    //   tableTitle="Opening Inventory"
    //   searchFields={searchFields}
    //   formFields={formFields}
    //   handleSubmit={handleSubmit}
    //   handleSearch={handleSearch}
    //   addFormInstance={addFormInstance}
    //   searchFormInstance={searchFormInstance}
    //   extra={'add'}
    //   rows={rows}
    //   columns={columns}
    //   handleDrawer={handleDrawer}
    //   isDrawerOpen={isDrawerOpen}
    //   isFormLoading={isFormLoading}
    //   isTableLoading={isTableLoading}  
    // />
    <>
      <FormComponent
        title={"Search Opening Inventory"}
        children={searchFields}
        handleSubmit={handleSearch}
        form={search}
        submit={"Search"}
        isLoading={isLoading}
        initialValues={initialValues}
        // hideActions={true}
        extra={
          <ButtonComponent
            icon={<EditOutlined />}
            text={"Add"}
            size={"small"}
            onClick={()=>handleDrawer(Operations.Insert)}
          />
        }
      />
      <br />
      <TableComponent columns={columns || []} rows={dataSet?.Table1 || []} title={'Opening Inventory List'} />
      <DrawerComponent onClose={()=>handleDrawer(Operations.Select)} open={open}>
        <FormComponent
          children={formFields}
          handleSubmit={handleSubmit}
          form={add}
          submit={formData?.OperationId == Operations.Update ? "Update" : "Save"}
          isLoading={isLoading}
          initialValues={initialValues}
        />
      </DrawerComponent>
    </>
    // </Card>
  );
}

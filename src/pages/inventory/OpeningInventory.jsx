import { EditOutlined, SaveOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Checkbox, Col, Form, Row, Input, Space } from "antd";
import ButtonComponent from "components/ButtonComponent";
import DrawerComponent from "components/DrawerComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import BasicCrud from "components/crud/BasicCrud";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import InventoryForm from "components/form/InventoryForm";
import PopDelete from "components/popup/PopDelete";
import useFormHook from "hooks/useFormHook";
import React, { useEffect, useRef, useState } from "react";
import { Operations } from "utils/constants";
import { OPTIONS } from "utils/dummy";

export default function OpeningInventory() {
  const initialValues = {
    OperationId: 1,
    Id: 0,
    ReferenceNo: null,
    TransactionTypeId: 1002,
    DemandOrderId: null,
    TransactionDate: "2022-10-23",
    TransactionNo: "",
    SupplierId: null,
    DepartmentId: 1,
    ToDepartmentId: null,
    UserId: 1,
    Gross: 0,
    Tax: 0,
    Discount: 0,
    Amount: 0,
    TimeStamp: "",
    Enabled: 1,
    Deleted: 0,
    IsSubmit: 0,
    TransType: "OpenInv",
    TransactionDetail: [
      {
        ItemId: 6,
        UnitId: 1,
        Quantity: 10,
        IssuanceRate: 0,
        Rate: 0,
        Enabled: 1,
        Deleted: 0,
      },
      {
        ItemId: 61,
        UnitId: 1,
        Quantity: 110,
        IssuanceRate: 0,
        Rate: 0,
        Enabled: 1,
        Deleted: 0,
      },
    ],
  };
  const { getColumnSearchProps, sort, sortString } = TableConfig();
  const {
    firstFieldRef,
    tempRows,
    isLoading,
    isTableLoading,
    handleDelete,
    handleDrawer,
    handleEdit,
    handleSearch,
    handleSubmit,
    handleAdd,
    handleSubmitAll,
    open,
    add,
    formData,
    search,
    dataSet,
    inputRef,
  } = useFormHook("GRN", initialValues);

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

  const columns2 = [
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
      render: (_, row) => <InputText />,
    },
    {
      key: "4",
      title: "Qty",
      dataIndex: "Qty",
      render: (_, row) => <InputText />,
    },
    {
      key: "5",
      title: "Rate",
      dataIndex: "Rate",
      render: (_, row) => <InputText />,
    },
    // {
    //   key: "6",
    //   title: "Action",
    //   render: (_, record) => (
    //     <Space>
    //       {" "}
    //       <PopDelete handleDelete={() => handleDelete(record)}>
    //         <ButtonComponent icon={<MinusCircleOutlined />} danger={true} type={'dashed'}  />{" "}
    //       </PopDelete>
    //     </Space>
    //   ),
    // }
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
    <Row gutter={[20, 0]}>
      <Col xs={24} md={12} xl={8}>
        <InputSelect
          label={"Branch"}
          name={"Name"}
          options={OPTIONS}
          myRef={inputRef}
        />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect
          label={"Department Name"}
          name={"ShortName"}
          options={OPTIONS}
        />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <InputSelect
          label={"Opening Date"}
          name={"UniqueId"}
          options={OPTIONS}
        />
      </Col>
    </Row>
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
            onClick={() => handleDrawer(Operations.Insert)}
          />
        }
      />

      <br />
      <TableComponent
        columns={columns || []}
        rows={dataSet?.Table1 || []}
        title={"Opening Inventory List"}
        loading={isTableLoading}
      />

      <DrawerComponent
        onClose={() => handleDrawer(Operations.Select)}
        open={open}
        width={1000}
        extra={
          <Space>
            <ButtonComponent
              icon={<EditOutlined />}
              text={"Save"}
              size={"small"}
              onClick={() => handleDrawer(Operations.Insert)}
            />
            <ButtonComponent
              icon={<SaveOutlined />}
              text={"Submit"}
              size={"small"}
              onClick={() => handleDrawer(Operations.Insert)}
            />
          </Space>
        }
      >
        <InventoryForm
          children={formFields}
          handleSubmit={handleAdd}
          form={add}
          submit={formData?.OperationId == Operations.Update ? "Update" : "Add"}
          isLoading={isLoading}
          initialValues={initialValues}
        />

        <TableComponent
          columns={columns2 || []}
          rows={tempRows || []}
          title={"Opening Inventory List"}
          header={true}
        />

      </DrawerComponent>
    </>
    // </Card>
  );
}

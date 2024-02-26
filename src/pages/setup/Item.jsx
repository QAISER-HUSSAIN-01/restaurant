import { EditOutlined } from "@ant-design/icons";
import { Card, Col, Form, Row } from "antd";
import ButtonComponent from "components/ButtonComponent";
import DrawerComponent from "components/DrawerComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import { SuccessNotification } from "components/popup/Notifications";
import React, { useEffect, useState } from "react";
import { Post } from "utils/CrudApi";

const initialValues = {
  Id: 0,
  SubCategoryId: 0,
  Name: "",
  ItemCode: "",
  ItemTypeId: 0,
  PurchaseUnitId: 0,
  IssuanceUnitId: 0,
  RecipeUnitId: 0,
  PurchaseIssuance: 0,
  IssuanceRecipe: 0,
  Enabled: true,
  Deleted: true,
};
export default function Item() {
  const { getColumnSearchProps, sort, sortString } = TableConfig();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const [rows, setRows] = useState([]);
  const [search] = Form.useForm();
  const [add] = Form.useForm();

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleSearch = (values) => {
    console.log(values);
  };
  
  const handleSubmit = (values) => {
    handleDrawer();
    setIsLoading(true);
    if (formData?.operation == 3) {
      setIsLoading(false);
      setRows(
        rows.map((item) =>
          item.Id == formData.Id ? { ...formData, ...values } : item
        )
      );
      add.setFieldsValue(initialValues);
      setFormData({});
      SuccessNotification("successfully saved!");
    } else {
      const Id = (Math.random() * 356).toString();
      setIsLoading(false);
      setRows([...rows, { ...values, Id: Id }]);
      add.setFieldsValue(initialValues);
      setFormData({});
      SuccessNotification("success");
    }
  };
 
  const handleEdit = (record) => {
    setFormData({ ...record, operation: 3 });
    add.setFieldsValue(record);
    handleDrawer();
  };

  const handleDelete = (record) => {
    const copy = [...rows];
    setRows(copy.filter((item) => item.Id != record.Id));
  };

  useEffect(() => {
    setIsTableLoading(true);
    const fetch = async () => {
      const data = await Post("Item", initialValues);
      setRows(data);
      setIsTableLoading(false);
    };
    fetch();
  }, []);
 
  const columns = [
    {
      key: "1",
      title: "SubCategory Name",
      dataIndex: "SubCategoryName",
      filterSearch: true,
    },
    {
      key: "2",
      title: "Item Code",
      dataIndex: "CategoryName",
    },
    {
      key: "3",
      title: "Item Name",
      dataIndex: "IsActive",
    },
    {
      key: "4",
      title: "Purchase Unit",
      dataIndex: "AccountName",
    },
    {
      key: "5",
      title: "Issuance Unit",
      dataIndex: "AccountName",
    },
    {
      key: "6",
      title: "Recipe Unit",
      dataIndex: "AccountName",
    },
    {
      key: "7",
      title: "Purchase Issuance",
      dataIndex: "AccountName",
    },
    {
      key: "8",
      title: "Issuance Recipe",
      dataIndex: "AccountName",
    },
    {
      key: "9",
      title: "Is Active",
      dataIndex: "AccountName",
    },
    {
      key: "10",
      title: "Item type",
      dataIndex: "AccountName",
    },
  ];
  const formfields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Item Type"} name={"ItemTypeId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"SubCategory"} name={"SubCategoryId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Item Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Item Code"} name={"ItemCode"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Purchase Unit"} name={"PurchaseUnitId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Issuance Unit"} name={"IssuanceUnitId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Recipe Unit"} name={"RecipeUnitId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Purchase Issuance"} name={"PurchaseIssuance"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Issuance Recipe"} name={"IssuanceRecipe"} />
        </Col>
        <Col xs={3} md={3} xl={3} className="flex align-center">
          <InputCheckbox label={"Is Active"} name={"Enabled"} />
        </Col>
      </Row>
    </>
  );

  const searchfields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Item Type"} name={"ItemTypeId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"SubCategory"} name={"SubCategoryId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Item Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Item Code"} name={"ItemCode"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Purchase Unit"} name={"PurchaseUnitId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Issuance Unit"} name={"IssuanceUnitId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Recipe Unit"} name={"RecipeUnitId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Purchase Issuance"} name={"PurchaseIssuance"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Issuance Recipe"} name={"IssuanceRecipe"} />
        </Col>
        <Col xs={3} md={3} xl={3} className="flex align-center">
          <InputCheckbox label={"Is Active"} name={"Enabled"} />
        </Col>
      </Row>
    </>
  );
  return (
    <>
      <FormComponent
        title={"Search Item"}
        children={searchfields}
        handleSubmit={handleSubmit}
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
        columns={columns || []}
        rows={rows || []}
        title={"Item List"}
        loading={isTableLoading}
      />
      <DrawerComponent onClose={handleDrawer} open={open}>
        <FormComponent
          children={formfields}
          handleSubmit={handleSubmit}
          form={add}
          submit={formData.Id ? "Update" : "Save"}
          isLoading={isLoading}
          initialValues={initialValues}
        />
      </DrawerComponent>
    </>
  );
}

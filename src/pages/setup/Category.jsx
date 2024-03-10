import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Checkbox, Col, Row, Space } from "antd";
import ButtonComponent from "components/ButtonComponent";
import DrawerComponent from "components/DrawerComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputText from "components/form/InputText";
import useFormHook from "hooks/useFormHook";
import { Operations } from "utils/constants";

const initialValues = {
  OperationId: 1,
  Id: 0,
  BranchId: 0,
  Name: "",
  ShortName: "",
  Enabled: true,
  Deleted: true,
};
export default function Category() {
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
  } = useFormHook("Category", initialValues);
  const columns = [
    {
      key: "1",
      title: "Category Name",
      dataIndex: "Name",
      ...getColumnSearchProps("Name"),
      ...sortString("Name"),
    },
    {
      key: "2",
      title: "Category Code",
      dataIndex: "ShortName",
      ...getColumnSearchProps("ShortName"),
      ...sort("ShortName"),
    },
    {
      key: "3",
      title: "Is Active",
      dataIndex: "Enabled",
      render: (_, record) => <Checkbox checked={record.Enabled} />,
    },
    {
      key: "4",
      title: "Action",
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

  const formfields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Category Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Category Code"} name={"ShortName"} />
        </Col>
        <Col xs={3} md={3} xl={3} className="flex align-center">
          <InputCheckbox label={"Is Active"} name={"Enabled"} />
        </Col>
      </Row>
    </>
  );

  const searchFields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Category Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Category Code"} name={"ShortName"} />
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
        title={"Search Category"}
        children={searchFields}
        handleSubmit={handleSearch}
        form={search}
        submit={"Save"}
        isLoading={isLoading}
        initialValues={initialValues}
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
      <TableComponent
        columns={columns || []}
        rows={dataSet?.Table1 || []}
        title={"Category List"}
        loading={isTableLoading}
      />
      <DrawerComponent onClose={()=>handleDrawer(Operations.Select)} open={open}>
        <FormComponent
          children={formfields}
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
  );
}

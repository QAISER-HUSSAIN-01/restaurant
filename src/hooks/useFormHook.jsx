import { Form } from "antd";
import {
  ErrorNotification,
  SuccessNotification,
} from "components/popup/Notifications";
import React, { useEffect, useState } from "react";
import { Post } from "utils/CrudApi";

export default function useFormHook(path, initialValues) {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const [rows, setRows] = useState([]);
  const [search] = Form.useForm();
  const [add] = Form.useForm();

  const handleDrawer = (operation,row) => {
    setOpen(!open);
    const record = row || {}
    setFormData({ ...formData, ...record, OperationId: operation });
  };

  const handleSearch = async(values) => {
    setIsLoading(true);
    const payload = { ...formData, ...values, OperationId:1 };
    const data = await Post(path, payload);
    if (data?.HasError == "1") {
      ErrorNotification(data?.Error_Message);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    setRows(data?.DataSet?.Table1);
    search.setFieldsValue(initialValues);
    setFormData(initialValues);
  };

  const handleSubmit = async (values) => {
    setIsLoading(true);
    if (formData?.OperationId == 3) {
      const payload = { ...formData, ...values };
      const data = await Post(path, payload);
      if (data?.HasError == "1") {
        ErrorNotification(data?.Error_Message);
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      setRows(data?.DataSet?.Table1);
      add.setFieldsValue(initialValues);
      setFormData(initialValues);
      SuccessNotification("successfully saved!");
      handleDrawer(1);
    } else {
      const payload = { ...formData, ...values };
      const data = await Post(path, payload);
      if (data?.HasError == "1") {
        ErrorNotification(data?.Error_Message);
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      setRows(data?.DataSet?.Table1);
      add.setFieldsValue(initialValues);
      setFormData(initialValues);
      SuccessNotification(data?.Message);
      handleDrawer(1);
    }
  };

  const handleEdit = (record) => {
    setFormData({ ...formData, ...record, OperationId:3 });
    add.setFieldsValue(record);
    handleDrawer(3,record);
  };

  const handleDelete = async (record) => {
    const payload = { ...formData, ...record, OperationId: 4 };
    const data = await Post(path, payload);
    if (data.HasError == "1") {
      ErrorNotification(data?.Error_Message);
      return;
    }
    SuccessNotification(data?.Message);
    setRows(data?.DataSet?.Table1);
  };

  useEffect(() => {
    setIsTableLoading(true);
    const fetch = async () => {
      const payload = initialValues;
      const data = await Post(path, payload);
      if (data.HasError == "1") {
        ErrorNotification(data?.Error_Message);
        setIsTableLoading(false);
        return;
      }
      setRows(data?.DataSet?.Table1);
      setIsTableLoading(false);
    };
    fetch();
  }, []);

  return {
    isLoading,
    isTableLoading,
    open,
    search,
    add,
    formData,
    rows,
    handleDelete,
    handleSubmit,
    handleSearch,
    handleDrawer,
    handleEdit,
  };
}

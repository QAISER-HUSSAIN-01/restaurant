import { Form } from "antd";
import {
  ErrorNotification,
  SuccessNotification,
} from "components/popup/Notifications";
import { useEffect, useRef, useState } from "react";
import { Post } from "utils/CrudApi";
import { Operations } from "utils/constants";
export default function useFormHook(path, initialValues) {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const [dataSet, setDataSet] = useState({});
  const [tempRows, setTempRows] = useState([]);
  const [search] = Form.useForm();
  const [add] = Form.useForm();

  const inputRef = useRef(null);
  
  useEffect(() => {
    console.log('run');
    if (inputRef.current) {
      inputRef?.current?.focus();
    }
  }, [open]);

  const handleDrawer = (operation, row) => {
    setOpen(!open);
    const record = row || {};
    setFormData({ ...formData, ...record, OperationId: operation });
  };

  const handleSearch = async (values) => {
    setIsLoading(true);
    const payload = { ...formData, ...values, OperationId: Operations.Select };
    const data = await Post(path, payload);
    if (data?.HasError == "1") {
      ErrorNotification(data?.Error_Message);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    setDataSet(data?.DataSet);
    search.setFieldsValue(initialValues);
    setFormData(initialValues);
  };

  const handleSubmit = async (values) => {
    setIsLoading(true);
    const opId =
      formData?.OperationId == Operations.Insert
        ? Operations.Insert
        : Operations.Update;
    const payload = { ...formData, ...values, OperationId: opId };
    const data = await Post(path, payload);
    if (data?.HasError == "1") {
      ErrorNotification(data?.Error_Message);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    setDataSet(data?.DataSet);
    add.setFieldsValue(initialValues);
    setFormData(initialValues);
    SuccessNotification(data?.Message);
    handleDrawer(Operations.Select);
  };

  const handleSubmitAll = async () => {
    setIsLoading(true);
    const opId =
      formData?.OperationId == Operations.Insert
        ? Operations.Insert
        : Operations.Update;
    const payload = { ...formData, data: tempRows, OperationId: opId };
    const data = await Post(path, payload);
    if (data?.HasError == "1") {
      ErrorNotification(data?.Error_Message);
      setIsLoading(false);
      return;
    }
    setTempRows([]);
    setIsLoading(false);
    setDataSet(data?.DataSet);
    add.setFieldsValue(initialValues);
    setFormData(initialValues);
    SuccessNotification(data?.Message);
    handleDrawer(Operations.Select);
  };

  const handleAdd = async (newRow) => {
    setTempRows([...tempRows, newRow]);
    add.setFieldsValue(initialValues);
    setFormData(initialValues);
    if (inputRef.current) {
      inputRef?.current?.focus();
    }
  };

  const handleEdit = (record) => {
    setFormData({ ...formData, ...record, OperationId: Operations.Update });
    add.setFieldsValue(record);
    handleDrawer(Operations.Update, record);
  };

  const handleDelete = async (record) => {
    const payload = { ...formData, ...record, OperationId: Operations.Delete };
    const data = await Post(path, payload);
    if (data?.HasError == "1") {
      ErrorNotification(data?.Error_Message);
      return;
    }
    SuccessNotification(data?.Message);
    setDataSet(data?.DataSet);
  };
  const transformOptions = (data) => {
    return data?.map((item) => {
      return {
        label: item?.Name,
        value: item?.Id,
      };
    });
  };
  useEffect(() => {
    setIsTableLoading(true);
    const fetch = async () => {
      const payload = initialValues;
      const data = await Post(path, payload);
      if (data?.HasError == "1") {
        ErrorNotification(data?.Error_Message);
        setIsTableLoading(false);
        return;
      }
      setDataSet(data?.DataSet);
      setIsTableLoading(false);
    };
    fetch();
  }, []);

  return {
    inputRef,
    tempRows,
    isLoading,
    isTableLoading,
    open,
    search,
    add,
    formData,
    dataSet,
    transformOptions,
    handleDelete,
    handleSubmit,
    handleSearch,
    handleDrawer,
    handleEdit,
    handleAdd,
    handleSubmitAll,
  };
}

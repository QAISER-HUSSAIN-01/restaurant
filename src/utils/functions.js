import * as Icons from "@ant-design/icons";

export const transformDataIntoInitialFields = (data) => {
  let obj = {};
  for (let x of data || []) {
    switch (x.validation) {
      case "alphanumeric":
        obj[x.name] = "";
        break;
      case "alphabet":
        obj[x.name] = "";
        break;
      case "numeric":
        obj[x.name] = null;
        break;
      case "decimal":
        obj[x.name] = null;
        break;
      case "boolean":
        obj[x.name] = false;
        break;
      default:
        obj[x.name] = [];
        break;
    }
  }
  return obj;
};

export const checkValidation = (value, validation) => {
  let sanitized = "";
  switch (validation) {
    case "alphabet":
      sanitized = value.replace(/[^A-Za-z\s]/g, "");
      break;
    case "alphanumeric":
      sanitized = value.replace(/[^A-Za-z0-9\s]/g, "");
      break;
    case "numeric":
      sanitized = value.replace(/[^0-9]/g, "");
      break;
    default:
      sanitized = value;
      break;
  }
  return sanitized;
};

export const extractIcons = () => {
  let list = [{ label: "select", value: "" }];
  Object.keys(Icons).map((item) => {
    if (
      !(
        item == "createFromIconfontCN" ||
        item == "getTwoToneColor" ||
        item == "setTwoToneColor"
      )
    ) {
      list.push({ label: item, value: () => Icons[item] });
    }
  });
  return list;
};

export const encrypt = (data) => {};
export const decrypt = (data) => {};
export const getLocalItem = (key) => localStorage.getItem(key);
export const setLocalItem = (key, value) => localStorage.setItem(key, value);
export const removeLocalItem = (key, value) => localStorage.removeItem(key);

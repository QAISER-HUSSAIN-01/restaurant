export const InitialPayloads = {
    "Branch": {
      "Id": 0,
      "CompanyId": 0,
      "Name": null,
      "ShortName": null,
      "UniqueId": "00000000-0000-0000-0000-000000000000",
      "HeadOffice": false,
      "Enabled": null,
      "Deleted": false,
      "Company": null,
      "Categories": [],
      "Departments": [],
      "Users": []
    },
    "Category": {
      "Id": 0,
      "BranchId": 0,
      "Name": null,
      "ShortName": null,
      "Enabled": null,
      "Deleted": false,
      "Branch": null,
      "SubCategories": []
    },
    "Company": {
      "Id": 0,
      "Name": null,
      "UniqueId": "00000000-0000-0000-0000-000000000000",
      "Enabled": null,
      "Deleted": false,
      "Branches": [],
      "Suppliers": []
    },
    "DemandOrderMaster": {
      "Id": 0,
      "ShortName": null,
      "DepartmentId": 0,
      "UserId": 0,
      "TimeStamp": "0001-01-01T00:00:00",
      "Enabled": null,
      "Deleted": false,
      "Department": null,
      "User": null,
      "DemandOrderDetails": [],
      "PurchaseOrderMasters": []
    },
    "DemandOrderDetail": {
      "Id": 0,
      "MasterId": 0,
      "ItemId": 0,
      "UnitId": 0,
      "Quantity": 0,
      "Enabled": null,
      "Deleted": false,
      "Item": null,
      "Master": null,
      "Unit": null
    },
    "Department": {
      "Id": 0,
      "BranchId": 0,
      "Name": null,
      "ShortName": null,
      "Enabled": null,
      "Deleted": false,
      "Branch": null,
      "DemandOrderMasters": [],
      "GoodsReceivingMasters": [],
      "IssuanceMasterFromDepartments": [],
      "IssuanceMasterToDepartments": [],
      "ItemParLevels": [],
      "PurchaseOrderMasters": []
    },
    "GoodsReceivingMaster": {
      "Id": 0,
      "Date": "0001-01-01T00:00:00",
      "Grnnumber": null,
      "SupplierId": 0,
      "ReferenceNo": null,
      "Description": null,
      "Amount": 0,
      "Discount": 0,
      "Tax": 0,
      "TotalAmount": 0,
      "UserId": 0,
      "TimeStamp": "0001-01-01T00:00:00",
      "DepartmentId": null,
      "TransportationCost": 0,
      "Enabled": null,
      "Deleted": false,
      "Department": null,
      "Supplier": null,
      "User": null,
      "GoodsReceivingDetails": []
    },
    "GoodsReceivingDetail": {
      "Id": 0,
      "MasterId": 0,
      "ItemId": 0,
      "UnitId": 0,
      "PurchaseOrderId": null,
      "Quantity": 0,
      "Rate": 0,
      "Tax": 0,
      "Discount": 0,
      "ExpiryDate": "0001-01-01T00:00:00",
      "Enabled": null,
      "Deleted": false,
      "Item": null,
      "Master": null,
      "PurchaseOrder": null,
      "Unit": null
    },
    "IssuanceMaster": {
      "Id": 0,
      "ShortName": null,
      "TimeStamp": "0001-01-01T00:00:00",
      "UserId": 0,
      "FromDepartmentId": 0,
      "ToDepartmentId": 0,
      "Enabled": null,
      "Deleted": false,
      "FromDepartment": null,
      "ToDepartment": null,
      "User": null,
      "IssuanceDetails": []
    },
    "IssuanceDetail": {
      "Id": 0,
      "MasterId": 0,
      "ItemId": 0,
      "UnitId": 0,
      "Quantity": 0,
      "Rate": 0,
      "Enabled": null,
      "Deleted": false,
      "Item": null,
      "Master": null,
      "Unit": null
    },
    "PurchaseOrderMaster": {
      "Id": 0,
      "DemandOrderId": 0,
      "ShortName": null,
      "SupplierId": 0,
      "DepartmentId": 0,
      "UserId": 0,
      "Amount": 0,
      "TimeStamp": "0001-01-01T00:00:00",
      "Enabled": null,
      "Deleted": false,
      "DemandOrder": null,
      "Department": null,
      "Supplier": null,
      "User": null,
      "GoodsReceivingDetails": [],
      "PurchaseOrderDetails": []
    },
    "PurchaseOrderDetail": {
      "Id": 0,
      "MasterId": 0,
      "ItemId": 0,
      "UnitId": 0,
      "Quantity": 0,
      "Rate": 0,
      "Enabled": null,
      "Deleted": false,
      "Item": null,
      "Master": null,
      "Unit": null
    },
    "Item": {
      "Id": 0,
      "SubCategoryId": 0,
      "Name": null,
      "ItemCode": null,
      "ItemTypeId": 0,
      "PurchaseUnitId": 0,
      "IssuanceUnitId": 0,
      "RecipeUnitId": 0,
      "PurchaseIssuance": 0,
      "IssuanceRecipe": 0,
      "Enabled": null,
      "Deleted": false,
      "IssuanceUnit": null,
      "ItemType": null,
      "PurchaseUnit": null,
      "RecipeUnit": null,
      "SubCategory": null,
      "DemandOrderDetails": [],
      "GoodsReceivingDetails": [],
      "IssuanceDetails": [],
      "ItemParLevels": [],
      "PurchaseOrderDetails": [],
      "RecipeDetails": [],
      "RecipeMasters": []
    },
    "RecipeMaster": {
      "Id": 0,
      "ItemId": 0,
      "SubRecipe": false,
      "Enabled": null,
      "Deleted": false,
      "Item": null,
      "ItemNavigation": null,
      "RecipeDetails": []
    },
    "RecipeDetail": {
      "Id": 0,
      "MasterId": 0,
      "IngredientId": 0,
      "Quantity": 0,
      "DineIn": false,
      "TakeAway": false,
      "Delivery": false,
      "Enabled": null,
      "Deleted": false,
      "Ingredient": null,
      "Master": null
    },
    "SubCategory": {
      "Id": 0,
      "CategoryId": 0,
      "Name": null,
      "ShortName": null,
      "Enabled": null,
      "Deleted": false,
      "Category": null,
      "Items": []
    },
    "Supplier": {
      "Id": 0,
      "CompanyId": 0,
      "Name": null,
      "Address": null,
      "ContactNumber": null,
      "Person": null,
      "Ntn": null,
      "CreditPeriod": null,
      "PaymentTerm": null,
      "Enabled": null,
      "Deleted": false,
      "Company": null,
      "GoodsReceivingMasters": [],
      "PurchaseOrderMasters": []
    },
    "Unit": {
      "Id": 0,
      "Name": null,
      "Enabled": null,
      "Deleted": false,
      "DemandOrderDetails": [],
      "GoodsReceivingDetails": [],
      "IssuanceDetails": [],
      "ItemIssuanceUnits": [],
      "ItemPurchaseUnits": [],
      "ItemRecipeUnits": [],
      "PurchaseOrderDetails": []
    },
    "User": {
      "Id": 0,
      "BranchId": 0,
      "Username": null,
      "Password": null,
      "AdminUser": false,
      "Enabled": null,
      "Deleted": false,
      "Branch": null,
      "DemandOrderMasters": [],
      "GoodsReceivingMasters": [],
      "IssuanceMasters": [],
      "PurchaseOrderMasters": [],
      "UserRights": []
    },
    "UserRight": {
      "Id": 0,
      "UserId": 0,
      "FormId": 0,
      "Save": false,
      "Edit": false,
      "Delete": false,
      "Post": false,
      "Enabled": null,
      "Deleted": false,
      "Form": null,
      "User": null
    }
  }
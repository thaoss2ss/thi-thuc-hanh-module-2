"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rl = __importStar(require("readline-sync"));
const Product_Management_1 = require("./src/Product-Management");
const Product_1 = require("./src/Product");
const Enum_1 = require("./src/Enum/Enum");
let choice = -1;
let productManagement = new Product_Management_1.ProductManagement();
function Menu() {
    console.log("---Quản Lý Hàng Hóa Siêu Thị---");
    console.log("1.Hiển thị danh sách hàng hóa");
    console.log("2.Tìm kiếm mặt hàng theo tên sản phẩm");
    console.log("3.Thêm mới một mặt hàng");
    console.log("4.Chỉnh sửa thông tin một mặt hàng");
    console.log("5.Xóa mặt hàng");
    console.log("6.Thoát chương trình");
}
function FindName(products) {
    if (!productManagement.checkProductName(products)) {
        console.log("Không có dữ liệu phù hợp");
    }
    else {
        productManagement.findNameProduct(products);
    }
}
function UpdateProduct(id) {
    if (!productManagement.checkProductId(id)) {
        console.log("Không tồn tại mặt hàng cần update");
    }
    else {
        let product = inputProduct();
        productManagement.UpdateProduct(id, product);
    }
}
function DeleteProduct(id) {
    if (!productManagement.checkProductId(id)) {
        console.log("Không tồn tại mặt hàng cần xóa");
    }
    else {
        productManagement.DeleteProduct(id);
    }
}
function ShowAdd() {
    console.log("---Thêm mới mặt hàng---");
    let product = inputProduct();
    productManagement.createNewProduct(product);
}
function ShowFind() {
    console.log("---Tìm kiếm mặt hàng---");
    let products = rl.question("Nhập tên mặt hàng cần tìm kiếm : ");
    FindName(products);
}
function ShowShow() {
    console.log("---Danh sách hàng hóa---");
    productManagement.getAllProduct();
}
function ShowUpdate() {
    console.log("---Chỉnh sủa thông tin mặt hàng---");
    let id = +rl.question("Nhập id mặt hàng cần sửa : ");
    UpdateProduct(id);
}
function ShowDelete() {
    console.log("---Xóa mặt hàng---");
    let id = +rl.question("Nhập ID cần xóa : ");
    DeleteProduct(id);
}
do {
    Menu();
    choice = +rl.question("Nhập lựa chọn của bạn : ");
    switch (choice) {
        case Enum_1.ChoiceProduct.SHOW: {
            ShowShow();
            break;
        }
        case Enum_1.ChoiceProduct.FIND: {
            ShowFind();
            break;
        }
        case Enum_1.ChoiceProduct.ADD: {
            ShowAdd();
            break;
        }
        case Enum_1.ChoiceProduct.UPDATE: {
            ShowUpdate();
            break;
        }
        case Enum_1.ChoiceProduct.DELETE: {
            ShowDelete();
            break;
        }
        case Enum_1.ChoiceProduct.EXIT: {
            break;
        }
    }
} while (choice != Enum_1.ChoiceProduct.EXIT);
function inputProduct() {
    let id = +rl.question("Nhập ID : ");
    let name = rl.question("Nhập tên mặt hàng : ");
    let type = rl.question("Nhập loại hàng : ");
    let price = +rl.question("Nhập giá : ");
    let amount = +rl.question("Nhập số lượng : ");
    let date = new Date();
    let describe = rl.question("Nhập mô tả mặt hàng : ");
    return new Product_1.Product(id, name, type, price, amount, date, describe);
}

import * as rl from 'readline-sync'
import {ProductManagement} from "./src/Product-Management";
import {Product} from "./src/Product";
import {ChoiceProduct} from "./src/Enum/Enum";



let choice = -1;

let productManagement = new ProductManagement();

function Menu() {
    console.log("---Quản Lý Hàng Hóa Siêu Thị---")
    console.log("1.Hiển thị danh sách hàng hóa")
    console.log("2.Tìm kiếm mặt hàng theo tên sản phẩm")
    console.log("3.Thêm mới một mặt hàng")
    console.log("4.Chỉnh sửa thông tin một mặt hàng")
    console.log("5.Xóa mặt hàng")
    console.log("6.Thoát chương trình")
}

function FindName(products: string) {
    if (!productManagement.checkProductName(products)) {
        console.log("Không có dữ liệu phù hợp")
    } else {
        productManagement.findNameProduct(products);

    }
}

function UpdateProduct(id: number) {
    if (!productManagement.checkProductId(id)) {
        console.log("Không tồn tại mặt hàng cần update")
    } else {
        let product = inputProduct()
        productManagement.UpdateProduct(id, product);
    }
}

function DeleteProduct(id: number) {
    if (!productManagement.checkProductId(id)) {
        console.log("Không tồn tại mặt hàng cần xóa")
    } else {

        productManagement.DeleteProduct(id);

    }
}

function ShowAdd() {
    console.log("---Thêm mới mặt hàng---")
    let product = inputProduct()
    productManagement.createNewProduct(product);
}

function ShowFind() {
    console.log("---Tìm kiếm mặt hàng---")
    let products = rl.question("Nhập tên mặt hàng cần tìm kiếm : ");

    FindName(products);
}

function ShowShow() {
    console.log("---Danh sách hàng hóa---")
    productManagement.getAllProduct();
}

function ShowUpdate() {
    console.log("---Chỉnh sủa thông tin mặt hàng---")
    let id = +rl.question("Nhập id mặt hàng cần sửa : ")

    UpdateProduct(id);
}

function ShowDelete() {
    console.log("---Xóa mặt hàng---")
    let id = +rl.question("Nhập ID cần xóa : ")

    DeleteProduct(id);
}

do {
    Menu();
    choice = +rl.question("Nhập lựa chọn của bạn : ")
    switch (choice) {
        case ChoiceProduct.SHOW : {
            ShowShow();
            break;
        }
        case ChoiceProduct.FIND : {
            ShowFind();
            break;
        }
        case ChoiceProduct.ADD : {
            ShowAdd();
            break;
        }
        case ChoiceProduct.UPDATE : {
            ShowUpdate();
            break;
        }
        case ChoiceProduct.DELETE : {
            ShowDelete();
            break;
        }
        case ChoiceProduct.EXIT : {
            break;
        }

    }
}
while (choice != ChoiceProduct.EXIT);


function inputProduct() {
    let id = +rl.question("Nhập ID : ")
    let name = rl.question("Nhập tên mặt hàng : ")
    let type = rl.question("Nhập loại hàng : ")
    let price = +rl.question("Nhập giá : ")
    let amount = +rl.question("Nhập số lượng : ")
    let date = new Date();
    let describe = rl.question("Nhập mô tả mặt hàng : ")
    return new Product(id, name, type, price, amount, date, describe);
}


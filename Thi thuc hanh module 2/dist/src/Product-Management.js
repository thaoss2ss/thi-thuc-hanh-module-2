"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManagement = void 0;
class ProductManagement {
    constructor() {
        this.products = [];
    }
    getAllProduct() {
        console.table(this.products);
    }
    createNewProduct(product) {
        this.products.push(product);
    }
    UpdateProduct(id, newProduct) {
        this.products.forEach((product, index) => {
            if (product.id === id) {
                this.products[index] = newProduct;
                console.table(newProduct);
            }
        });
    }
    DeleteProduct(id) {
        this.products.forEach((product, index) => {
            if (product.id === id) {
                this.products.splice(index, 1);
            }
        });
    }
    findNameProduct(name) {
        let flag = -1;
        let nameProductList = [];
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name === name) {
                flag++;
                nameProductList.push(this.products[i]);
            }
        }
        console.table(nameProductList);
    }
    checkProductId(id) {
        let flag = false;
        this.products.forEach(product => {
            if (product.id === id) {
                flag = true;
            }
        });
        return flag;
    }
    checkProductName(name) {
        let flag = false;
        this.products.forEach(product => {
            if (product.name === name) {
                flag = true;
            }
        });
        return flag;
    }
}
exports.ProductManagement = ProductManagement;

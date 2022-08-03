import {Product} from "./Product";


export class ProductManagement {
    private products: Product[] = [];

    getAllProduct() {
        console.table(this.products);
    }
    createNewProduct(product: Product){
        this.products.push(product);

    }
    UpdateProduct(id: number, newProduct: Product){
        this.products.forEach((product,index) => {
            if (product.id === id){
                this.products[index] = newProduct
                console.table(newProduct);
            }
        })
    }
    DeleteProduct(id: number){
        this.products.forEach((product,index) => {
            if (product.id === id){
                this.products.splice(index, 1);
            }
        })
    }
    findNameProduct(name: string){
        let flag = -1;
        let nameProductList = [];
        for (let i = 0; i < this.products.length; i++) {
            if( this.products[i].name === name){
                flag ++;
                nameProductList.push(this.products[i]);
            }
        }
        console.table(nameProductList)
    }

    checkProductId(id: number): boolean {
        let flag = false;
        this.products.forEach(product => {
            if(product.id === id) {
                flag = true;
            }
        })
        return flag;
    }
    checkProductName(name: string): boolean {
        let flag = false;
        this.products.forEach(product => {
            if(product.name === name) {
                flag = true;
            }
        })
        return flag;
    }

}
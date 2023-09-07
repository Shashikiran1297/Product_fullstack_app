import axios from "axios";

const API_URl="http://localhost:8080"

class ProductService{

    AddProducts(product){
         return axios.post(API_URl+"/addProduct",product);
    }

    getAllProducts(){
        return axios.get(API_URl+"/getAll");
    }

    getProductByID(Id){
        return axios.get(API_URl+"/byId"+Id);
    }

    deleteProduct(Id){
        return axios.delete(API_URl+"/del"+Id);
    }
}

export default  ProductService
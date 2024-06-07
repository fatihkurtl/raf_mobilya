import useApi from "../utils/axiosApi";
import { IRegisterData } from "../interfaces/register";


class ApiServices {
  
   public async getProducts(category: string = ''): Promise<any> {
        try {
            const response = await useApi.get(`/products?category=${category}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching data: ", error);
            return null;
        }
    }

    public async getProductById(id: number): Promise<any> {
        try {
            const response = await useApi.get(`/products/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching data: ", error);
            return null;
        }
    }

    public async getCategories(): Promise<any> {
        try {
            const response = await useApi.get("/categories");
            return response.data;
        } catch (error) {
            console.error("Error fetching data: ", error);
            return null;
        }
    }

    public async postData(data: any): Promise<any> {
        try {
            const response = await useApi.post("/products", data);
            return response.data;
        } catch (error) {
            console.error("Error fetching data: ", error);
            return null;
        }
    }

    public async putData(id: number, data: any): Promise<any> {
        try {
            const response = await useApi.put(`/products/${id}`, data);
            return response.data;
        } catch (error) {
            console.error("Error fetching data: ", error);
            return null;
        }
    }

    public async deleteData(id: number): Promise<any> {
        try {
            const response = await useApi.delete(`/products/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching data: ", error);
            return null;
        }
    }

    public async registerDataPost(data: IRegisterData): Promise<any> {
        try {
            const response = await useApi.post("/register", data);
            return response.data;
        } catch (error) {
            console.error("Error fetching data: ", error);
            return null;
        }
    }

    public async getCustomer(id: number): Promise<any> {
        try {
            const response = await useApi.get(`/customer/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching data: ", error);
            return null;
        }
    }

}

export default new ApiServices();
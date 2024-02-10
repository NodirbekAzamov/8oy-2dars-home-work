import { create } from "zustand";
import AxiosClent from "../plugins/AxiosClent";


const useAuthStore = create(() => ({
    register: async (payload) => {
        try {
            const response = await AxiosClent.post("/auth/signup", payload)
            return response
        } catch (error) {
            console.error(error);
        }
    },
    login: async (payload) => {
        try {
            const response = await AxiosClent.post("/auth/signin", payload);
            return response
            
        } catch (error) {
            console.error(error);
        }
    }
}))

export default useAuthStore
import { create } from 'zustand';
import axios from '../api/axios'
const REGISTER_URL = '/user/register'

const useSignUpStore = create((set, get) => ({
    email: '',
    password: '',
    loading: false,
    handleChangePassword: (value) => { set({ password: value }) },
    handleChangeEmail: (value) => { set({ email: value }) },
    handleClickSignUp: async () => {
        try {
            set({ loading: true });
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({
                    email: get().email,
                    password: get().password
                }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
            console.log(response.data);
            set({ loading: false });
        } catch (error) {
            console.error('Error signing up:', error);
            set({ loading: false });
        }
    }
}))

export default useSignUpStore;
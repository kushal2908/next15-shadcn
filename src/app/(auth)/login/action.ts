'use server';
import axios from 'axios';
import { cookies } from 'next/headers';
export async function loginUser(values: { username: string; password: string }) {
    const res = await axios.post('https://dummyjson.com/auth/login', values);
    const data = res.data;
    const cookieStore = await cookies();
    cookieStore.set('accessToken', data.accessToken);
    cookieStore.set('refreshToken', data.refreshToken);
    delete data.accessToken;
    delete data.refreshToken;
    return data;
}

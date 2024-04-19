import { LOGIN_ENDPOINT } from "@/utils/endpoints";
import { LoginOutput } from "@/utils/types";

export async function login(usernameOrEmail: string, password: string) : Promise<LoginOutput> {
    const response = await fetch(LOGIN_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usernameOrEmail, password }),
    })
    const data = await response.json()
    
    return data
}
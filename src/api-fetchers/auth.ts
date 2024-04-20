import { ADD_USER_ENDPOINT, GET_USER_ENDPOINT, LOGIN_ENDPOINT, LOGOUT_ENDPOINT, UPDATE_USER_ENDPOINT } from "@/utils/endpoints";
import { LoginOutput, UserInput } from "@/utils/types";

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

export async function logout(token: string): Promise<any> {
    const response = await fetch(LOGOUT_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
    const data = await response.json()
    return data
}

export async function addUser(input:UserInput, token: string): Promise<any> {
    const response = await fetch(ADD_USER_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(input),
          })
    const data = await response.json()
    return data
}

export async function getUser(token: string): Promise<any> {
    const response = await fetch(GET_USER_ENDPOINT, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
    const data = await response.json()
    return data
}

export async function updateUser(token: string, input:UserInput): Promise<any> {
    const response = await fetch(UPDATE_USER_ENDPOINT, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
    const data = await response.json()
    return data
}
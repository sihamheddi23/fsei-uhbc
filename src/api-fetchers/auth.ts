import { ADD_USER_ENDPOINT, USER_ENDPOINT, LOGIN_ENDPOINT, LOGOUT_ENDPOINT } from "@/utils/endpoints";
import { LoginOutput, User } from "@/utils/types";

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

export async function addUser(input:User, token: string): Promise<any> {
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
    const response = await fetch(USER_ENDPOINT, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
    const data = await response.json()
    return data
}

export async function updateUser(token: string, input: User, id: string | number): Promise<any> {
   const UPDATE_USER_ENDPOINT = `${USER_ENDPOINT}/${id}`
    const response = await fetch(UPDATE_USER_ENDPOINT, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(input),
          })
    const data = await response.json()
    return data
}

export async function deleteUser(token: string, id: string | number): Promise<any> {
   const DELETE_USER_ENDPOINT = `${USER_ENDPOINT}/${id}`
    const response = await fetch(DELETE_USER_ENDPOINT, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
    const data = await response.json()
    return data
}
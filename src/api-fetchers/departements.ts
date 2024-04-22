import { GET_DEPARTEMNTS_ENDPOINT } from "@/utils/endpoints"

export async function getDepartements(): Promise<any> {
    const response = await fetch(GET_DEPARTEMNTS_ENDPOINT)
    const data = await response.json()
    return data
}
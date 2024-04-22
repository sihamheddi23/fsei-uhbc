import { GET_SUBMAJORS_ENDPOINT } from "@/utils/endpoints"

export async function getSubMajors(): Promise<any> {
    const response = await fetch(GET_SUBMAJORS_ENDPOINT)
    const data = await response.json()
    return data
}
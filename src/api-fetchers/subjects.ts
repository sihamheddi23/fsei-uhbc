import { SUBJECTS_ENDPOINT } from "@/utils/endpoints";

export async function getSubjects() {
    const response = await fetch(SUBJECTS_ENDPOINT);
    const data = await response.json();
    return data;
}

export function createSubject(input: any, token: string) {
    console.log(input);
    const response = fetch(SUBJECTS_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(input),
    });
    return response;
}

export function updateSubject(token: string, input: any, id: string | number) {
    const UPDATE_SUBJECTS_ENDPOINT = `${SUBJECTS_ENDPOINT}/${id}`;
    const response = fetch(UPDATE_SUBJECTS_ENDPOINT, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(input),
    });
    return response;
}

export function deleteSubject(token: string, id: string | number) {
    const DELETE_SUBJECTS_ENDPOINT = `${SUBJECTS_ENDPOINT}/${id}`; 
    const response = fetch(DELETE_SUBJECTS_ENDPOINT, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
}   
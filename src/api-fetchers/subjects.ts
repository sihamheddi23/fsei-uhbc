import { SUBJECTS_ENDPOINT } from "@/utils/endpoints";

export async function getSubjects() {
    const response = await fetch(SUBJECTS_ENDPOINT);
    const data = await response.json();
    return data;
}

export async function getSubjectsByTeacher(token: string) {
    const response = await fetch(`${SUBJECTS_ENDPOINT}/teacher`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
}


export function createSubject(input: any, token: string) {
    const { teacher_id, sub_major_id } = input
    const response = fetch(SUBJECTS_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({...input, teacher_id: +teacher_id, sub_major_id: +sub_major_id}),
    });
    return response;
}

export function updateSubject(token: string, input: any, id: string | number) {
    const UPDATE_SUBJECTS_ENDPOINT = `${SUBJECTS_ENDPOINT}/${id}`;
    const { teacher_id, sub_major_id } = input
    const response = fetch(UPDATE_SUBJECTS_ENDPOINT, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({...input, teacher_id: +teacher_id, sub_major_id: +sub_major_id}),
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
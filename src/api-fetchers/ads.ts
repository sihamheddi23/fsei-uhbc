import { GET_ADS_ENDPOINT } from "@/utils/endpoints";

export const getAds = async () => {
    const response = await fetch(GET_ADS_ENDPOINT);
    const data = await response.json();

    return data;
}

export const create_ads = async (input: any, token: string) => {
    // request with files 
    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("description", input.description);
    formData.append("type", input.type);
    formData.append("document_pdf", input.document_pdf);
    if (input.type === "DEPARTEMENT") {
       formData.append("departement_id", input.departement_id);
    }
    
    const response = await fetch(GET_ADS_ENDPOINT, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        body: formData,
    });
    const data = await response.json();
    return data;
}

export const update_ads = async (token: string, input: any, id: number | string) => {
    // request with files 
    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("description", input.description);
    formData.append("type", input.type);
    formData.append("document_pdf", input.document_pdf);
    if (input.type === "DEPARTEMENT") {
       formData.append("departement_id", input.departement_id);
    }
    const UPDATE_ADS_ENDPOINT = `${GET_ADS_ENDPOINT}/${id}`
    const response = await fetch(UPDATE_ADS_ENDPOINT, {
        method: "PATCH",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        body: formData,
    });

    const data = await response.json();
    return data;
}

export const delete_ads = async (token: string, id: number | string ) => {
    const response = await fetch(`${GET_ADS_ENDPOINT}/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    const data = await response.json();
    return data;
}

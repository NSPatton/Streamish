const baseUrl = '/api/video';

export const getAllVideos = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
};

export const getAllWithComments = () => {
    return fetch(`${baseUrl}/GetWithComments`)
        .then((res) => res.json())
}

// everything in the search that we've entered gets fetched and interpolates whatever has been searched
export const getVideoSearchResults = (search) => {
    return fetch(`${baseUrl}/search?q=${search}`)
        .then((res => res.json()))
}

export const getVideo = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};


export const addVideo = (video) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
    });
};

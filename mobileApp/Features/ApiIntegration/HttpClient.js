class HttpClient {
    post = async (url, data) => {
        let fetchResponse = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        let jsonResponse = await fetchResponse.json();
        
        return jsonResponse;
    }
}

export default new HttpClient();
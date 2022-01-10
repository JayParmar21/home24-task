const GRAPHQL_URL = '/graphql'; 

export const getServerData = <T>(fn: () => string ):Promise<T> => {
    return new Promise<T>( (res, req) => {
        const query = fn ();
         
        fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({query}),
        })
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            const response: T = data.data;
            res(response);
        })
        .catch((e) => {
            req('ERROR');
            return new Error(e);
        });
    })
}
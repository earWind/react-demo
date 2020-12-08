import qs from 'querystring'

export default function req(url, params) {
    const result = fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        body: qs.stringify(params), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    }).then(res => res.json()) // parses response to JSON

    return result
}  
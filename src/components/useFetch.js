import {useEffect, useState} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading]  = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortFetch = new AbortController()

        setTimeout(() => {
            fetch(url, {signal: abortFetch.signal}).then(response => {
                if (!response.ok) {
                    throw Error('couldn\'t fetch the requested information at this time')
                }
                return response.json();
            }).then(data => {
                console.log(data)
                setData(data)
                setIsLoading(false)
                setError(null)
            }).catch(error => {
                if (error.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsLoading(false)
                    setError(error.message)
                }
            })
        }, 900)  

        return () => abortFetch.abort()
    }, [url])

    return {error, isLoading, data}
}
 
export default useFetch;
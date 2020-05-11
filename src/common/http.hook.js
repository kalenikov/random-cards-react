import {useState, useCallback} from 'react'
const queryString = require('query-string');

export const useHttp = () => {
    console.log('call useHttp')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = async (url, method = 'GET', body = null, headers = {}, query={}) => {
        console.log('call request')
        setLoading(true)
        try {
            let urlWithParams = url + '?' + queryString.stringify(query)
            console.log(urlWithParams)
            const response = await fetch(urlWithParams, {method, body, headers})
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }
            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }
    return {loading, request, error}
}
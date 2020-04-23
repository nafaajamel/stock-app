import { useEffect,  useState} from 'react'
import axios from 'axios'
const useFetcher = (url) => {

    let [state, setState] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {
        setState({...state,loading: true
        })
        axios.get(url)
            .then(({data}) => {
                setState({
                    data,
                    loading: false
                })
            })
            .catch(err=>console.log(err))

    },[url])
    return state

}

export {useFetcher}
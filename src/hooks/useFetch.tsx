import React, { useEffect } from 'react'

function useFetch(url : string) {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    
    useEffect(()=>{
      fetch(url)
      .then((res)=>res.json())
      .then((data)=>{
        setData(data);
        setLoading(false);
      })
      .catch((error)=>{
        setError(error);
        setLoading(false);
      })
    })

    return { data, loading, error }
}

export default useFetch
import React, { useEffect, useState } from 'react'

export default function useSinglePost(id) {
  
    const [singleArticle, setSingleArticle] = useState();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_uri}/blog/${id}`)
            .then(res => res.json())
            .then(data => setSingleArticle(data))
    }, [id])

   
    return { singleArticle }
}

import React, { useEffect, useState } from 'react'

export default function useSinglePost(id) {
  
    const [singleArticle, setSingleArticle] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/blog/${id}`)
            .then(res => res.json())
            .then(data => setSingleArticle(data))
    }, [id])

   
    return { singleArticle }
}

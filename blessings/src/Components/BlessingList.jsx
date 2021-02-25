import { useState, useEffect } from 'react';

export default function BlessingList() {
    const [blessings, setBlessings] = useState([])

    // useEffect(() => fetchBlessings(), [])

    // const fetchBlessings = async () => {
    //     try {
    //         const url = 
    //             process.env.NODE_ENV === 'production'
    //                 ? ''
    //                 : 'http://localhost:8000/blessings'
    //         const blessingList = await axios(url);
    //         setBlessings(blessingList.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const fetchBlessings = async () => {
        await fetch('http://localhost:8000/blessings/')
        .then(res => res.json())
        .then(res => {
            setBlessings(res)
            console.log(res)
        })
    }
    useEffect(() => {
        fetchBlessings()
    }, []);


    return(
        <div>
            {blessings.map(blessing => {
                return (
                    <div>
                        <h2>{blessing.author}</h2>
                        <h3>{blessing.title}</h3>
                        <h6>{blessing.content}</h6>
                    </div>
                )
            })}
        </div>
    )
}
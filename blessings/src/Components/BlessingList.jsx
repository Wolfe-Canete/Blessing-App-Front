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
        await fetch('http://127.0.0.1:8000/blessings/')
        .then(res => res.json())
        .then(res => {
            setBlessings(res)
        })
    }
    useEffect(() => {
        fetchBlessings()
    }, []);


    return(
        <div>
            <h1>TEST</h1>
            {blessings.map(blessing => {
                return (
                    <h1>{blessing.author}</h1>
                )
            })}
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Fetchingfromserver() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3002/Movie_list')
            .then((res) => {
                console.log(res.data);
                setList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {list.map((x) => (
                <p key={x.id}>
                    {x.name} {x.rating}
                </p>
            ))}
        </div>
    );
}
                                     
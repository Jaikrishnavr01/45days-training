import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function CRDmethod() {

    const [list, setList] =useState([])

    // create
    const [id ,setId] =useState('')
    const [name,setName] = useState('')
    const [ratings, setRatings ] = useState(0)
    const [poster, setPoster] = useState('')

    //update
    const [id1 ,setId1] =useState('')
    const [name1,setName1] = useState('')
    const [ratings1, setRatings1 ] = useState(0)
    const [poster1, setPoster1] = useState('')
    const [isPopUp, setIsPopUp] = useState(false)

 
    //Api url
    let url = "http://localhost:3002/Movie_list"
    //read operation
    useEffect(() => {
        axios.get(url)
            .then((res) => {
                console.log(res.data);
                setList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    // Create Operation
    const handleSubmit=()=> {
        axios.post(url,{
            id:id,name:name,ratings:ratings,poster:poster
        }).then(res => {console.log(res)}).catch(err => {console.log(err);})
    }

    // delete operation 
    const handledelete=(id1)=>{
        axios.delete(`${url}/${id1}`)
        .then(res =>{console.log(res); alert('deleted successfully')})
        .catch(err => {console.log(err);})
    }



    // update Operation 

    const openPopUp = (data) => {
        set
    }
    const handleUpdate=()=>{
        axios.put(`${url}/${id}`,{
            id:id1, name:name1, ratings:ratings1, poster:poster1
        }
        .then(res => {console.log(res);}))
        .catch(res => {console.log(err);})
    }

  return (
    <div>
        <h1>Update Movie</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <label>ID :</label>
                <input type="text" value={id} onChange={(e) =>  {setId(e.target.value)}} />
                <br />
                <label>Name :</label>
                <input type="text" value={name} onChange={(e) =>  {setName(e.target.value)}} />
                <br />
                <label>Ratings :</label>
                <input type="number" value={ratings} onChange={(e) =>  {setRatings(e.target.value)}} />
                <br />
                <label>Poster :</label>
                <input type="text" value={poster} onChange={(e) =>  {setPoster(e.target.value)}} />
                <br />
                <button type="submit">Add Movie</button>
            </form>
        </div>


<br />
<br />
<h1>Movie List</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Ratings</th>
                    <th>Poster</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                {list.map(x => (
                <tr key={x.id}>

                    <td>{x.id} </td>
                    <td>{x.name}</td>
                    <td>{x.ratings}</td>
                    <td><img src={x.poster} alt="poster-img" height={90} width={90}/></td>
                    <td>
                        <button onClick={() => handledelete(x.id)}>delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
      
    </div>
  )
}

import React, { useCallback, useState } from 'react'
import Title from './subfile/Title'
import Display from './subfile/display'
import Button from './subfile/Button'


export default function Usecallback1() {
    const[age , setAge]=useState(25)
    const[salary, setSalary] = useState(2000)
    
    const handleage = useCallback(()=> {
        setAge(age+1)
    }, [age])

    const handleIncrement = useCallback(() => {
        setSalary(salary+1000)
    },[salary])
  return (
    <div>
        <Title/>
        <Display name="age" display={age}/>
        <Button name= "age"  handleclick={handleage}/>

        <Display name="salary" display={salary}/>
        <Button name= "salary"  handleclick={handleIncrement}/>
    </div>
  )
}

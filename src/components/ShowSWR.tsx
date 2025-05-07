"use client"
import useSWR from "swr"

export default function ShowSWR() {
    const {data} = useSWR("randomNumber", async () => {
        return Math.random()
    })
  
    return (<h3>{data}</h3>)
    
}
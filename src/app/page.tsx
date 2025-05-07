"use client"
import ShowSWR from "@/components/ShowSWR";
import axios from "axios";
import { redirect } from "next/navigation";
import useSWR from "swr";
export default function Home() {
  const {data, isLoading, error} = useSWR("randomUser", async () => {
      await new Promise(r => setTimeout(r, 2000));
      return (await axios.get("https://randomuser.me/api/")).data.results[0]
  })

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <h1>ERROR: {error.message}</h1>
  }
  return (
    <>
      <p>{JSON.stringify(data)}</p>
      <h2>{data.name.first}</h2>
      <ShowSWR />
    </>
  );
}

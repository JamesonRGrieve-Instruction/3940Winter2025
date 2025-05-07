"use client"
import ShowSWR from "@/components/ShowSWR";
import axios from "axios";
import { redirect } from "next/navigation";
import useSWR, {mutate} from "swr";
export default function Home() {
  const {data: userData, isLoading, error, mutate: mutateUser} = useSWR("randomUser", async () => {
      await new Promise(r => setTimeout(r, 2000));
      return (await axios.get("https://randomuser.me/api/")).data.results[0]
  }, {
    revalidateOnFocus: false,
    fallbackData: {
      name: {
        first: "Loading, please wait..."
      }
    }
  });

  // if (isLoading) {
  //   return <p>Loading...</p>
  // }
  if (error) {
    return <h1>ERROR: {error.message}</h1>
  }
  return (
    <>
      <p>{JSON.stringify(userData)}</p>
      <h2>{userData.name.first}</h2>
      <ShowSWR />
      <button onClick={() => {
        mutateUser()
      }}>Revalidate User</button>
      <button onClick={() => {
        mutate("randomNumber")
      }}>Revalidate Number</button>
    </>
  );
}

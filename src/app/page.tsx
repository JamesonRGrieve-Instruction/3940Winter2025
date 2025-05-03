import { redirect } from "next/navigation";
export default function Home() {
  async function processForm(formData: FormData) {
    "use server";
    const postID = formData.get("postID");
    console.log("POST ID: ", postID);
    redirect(`/example/${postID}`);
  }

  return (
    <form
      action={processForm}
      className="flex flex-col gap-4 w-full align-middle text-center px-24"
    >
      <label htmlFor="postID">Post ID</label>
      <input id="postID" type="text" name="postID" />
      <button type="submit">Go To Post</button>
    </form>
  );
}

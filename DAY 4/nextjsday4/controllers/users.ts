import { User } from "@/types/user.schema";

const API_KEY = process.env.EXCEL_STUDIO_API_KEY || "";
export async function getUsers(): Promise<User[]> {
  try {
    const res = await fetch(
      "https://excelapi-studio.vercel.app/api/projects/nextjs-fs-bootcamp/endpoints/bootcamp-users",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
      }
    );
    // convert to a usable json frmart
    const resData = await res.json();
    const users = resData.data;
    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
}

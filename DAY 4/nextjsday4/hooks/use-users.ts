import { getUsers } from "@/controllers/users";
import { useQuery } from "@tanstack/react-query";

// queryKey is a unique identifier that RQ uses for caching or updating data
//queryFxn is a fxn that return the data you want
export function useUsersData() {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
}

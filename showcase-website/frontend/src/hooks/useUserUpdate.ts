import { User } from "../types";

export const useUserUpdate = () => {
  const updateUser = async (user: User) => {
    if (!user || !user.id) {
      return;
    }

    const response = await fetch(`http://localhost:3001/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseObject = await response.json();

    return responseObject;
  };

  return { updateUser };
};

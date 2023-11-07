import { useGetPosts } from "../hooks/useGetPosts";

export const useGetParameters = () =>
  useGetPosts({
    url: "http://localhost/calculator/API/queries/getParameters.php",
  });

export const resetDatabase = async () => {
  await fetch("http://localhost/calculator/API/queries/resetDatabase.php");
};

export const newPostParameter = async ({ parameter, price, table }) => {
  const response = await fetch(
    "http://localhost/calculator/API/queries/postParameter.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ parameter, price, table }),
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

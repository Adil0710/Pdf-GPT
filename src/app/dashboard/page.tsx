import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Page = () => {
  const { getUser } = getKindeServerSession();

  const fetchData = async () => {
    try {
      const user = await getUser();

      if (user) {
        return user.email;
      } else {
        return "User not found";
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      return "Error fetching user";
    }
  };

  const user = fetchData();

  return <div>{user}</div>;
};

export default Page;

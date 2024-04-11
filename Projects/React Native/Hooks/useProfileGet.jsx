import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetProfileQuery } from "../app/Service/userProfileApi";

function useProfileGet() {
  const user = useSelector((state) => state.auth);
  const { data, isLoading, isError, error, isFetching } = useGetProfileQuery(user.localId);
  const [profile, setProfile] = useState("");

  useEffect(() => {
    if (data !== undefined) setProfile(data);
  }, [data]);


  return { profile, isLoading, isError, error, isFetching };
}

export default useProfileGet;

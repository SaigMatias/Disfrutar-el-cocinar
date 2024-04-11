import { useSelector } from "react-redux";
import { useGetUserQuery } from "../app/Service/userAccountApi";
import { useEffect, useState } from "react";

function useSessionGet() {
  const user = useSelector((state) => state.auth);
  const { data, isLoading, isError, error } = useGetUserQuery(user.localId);
  const [session, setSession] = useState("");


  useEffect(() => {
    if (data) {
      setSession(data)
    }

  }, [data]);


  return { session, isLoading, isError, error };
}

export default useSessionGet;

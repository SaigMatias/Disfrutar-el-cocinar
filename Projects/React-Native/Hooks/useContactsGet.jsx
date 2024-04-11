import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetContactsQuery } from "../app/Service/userContactsApi";

// get contact list
function useContactsGet() {
  const user = useSelector((state) => state.auth);
  const { data, isLoading, isError, error, isFetching } = useGetContactsQuery(
    user.localId,
  );
  const [contacts, setContacts] = useState("");

  useEffect(() => {
    if (data !== undefined) setContacts(data);
  }, [data]);

  return { contacts, isLoading, isError, error, isFetching };
}

export default useContactsGet;

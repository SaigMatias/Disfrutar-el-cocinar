import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// features
import contactsReducer from "../features/Contacts/ContactsSlice";
import authReducer from "../features/Auth/AuthSlice";

// service
import { userAccountApi } from "./Service/userAccountApi";
import { userContactsApi } from "./Service/userContactsApi";
import { userProfileApi } from "./Service/userProfileApi";
import { userAuthApi } from "./Service/userAuth";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [userAccountApi.reducerPath]: userAccountApi.reducer,
    [userContactsApi.reducerPath]: userContactsApi.reducer,
    [userProfileApi.reducerPath]: userProfileApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userAuthApi.middleware,
      userAccountApi.middleware,
      userContactsApi.middleware,
      userProfileApi.middleware,
    ),
});

setupListeners(store.dispatch);

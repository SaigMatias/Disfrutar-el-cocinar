import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("session.db");

const setupDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS user_session (localId TEXT PRIMARY KEY, email TEXT, idToken TEXT)",
      [],
      () => console.log("Base Init Ok"),
      (_, error) => console.error("Base Init Error", error),
    );
  });
};

export const initDatabase = () => {
  setupDatabase();
};

export const getUserSession = () =>
  new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM user_session",
        [],
        (_, { rows }) => {
          resolve(rows._array[0]);
        },
        (_, error) => reject(console.error("getUser Error", error)),
      );
    });
  });

export const saveUserSession = (localId, email, idToken) =>
  new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "REPLACE INTO user_session (localId, email, idToken) VALUES (?, ?, ?)",
        [localId, email, idToken],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve();
            console.log("SaveUser Ok",rowsAffected);
          } else {
            reject(new Error("SaveUser Error"));
          }
        },
      );
    });
  });

export const deleteUserSession = () =>
  new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM user_session", [], (_, { rowsAffected }) => {
        if (rowsAffected > 0) {
          resolve();
          console.log("Delete user_session");
        } else {
          reject(new Error(console.log("DeleteUser Error", Error)));
        }
      });
    });
  });


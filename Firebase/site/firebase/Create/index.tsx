import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { addRes } from "../Controller";
import { auth } from "../firebaseApp";

function CreateRes() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user, loading] = useAuthState(auth);
  const [agent, setAgent] = useState("");
  const usr = user?.displayName;
  const strUsr = String(usr);

  const addNewRes = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addRes({ firstName, lastName, agent });
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <form onSubmit={(e) => addNewRes(e)}>
        <div className="flex justify-start flex-col">
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleFormControlInput1"
              className="inline-block mb-2 text-gray-700 text-left"
            >
              First Name
            </label>
            <input
              type="text"
              className="names_input"
              id="exampleFormControlInput1"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleFormControlInput1"
              className="inline-block mb-2 text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              className="names_input"
              id="exampleFormControlInput1"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="hidden"
            value={agent}
            onChange={(e) => setAgent(strUsr)}
          />
        </div>
        <div className="flex space-x-2 justify-center">
          <button type="button" className="btn">
            Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateRes;

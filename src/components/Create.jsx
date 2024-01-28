import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import "../../firebase";
import Classes from "../style/Create.module.css";
import Form from "./Form";
import Input from "./Input";

const initialState = {
  first_name: "",
  last_name: "",
  email_addr: "",
  password: "",
};

function Create() {
  const [state, setState] = useState(initialState);
  const database = getDatabase();
  const databaseRef = ref(database, `user/lkjhg`);

  const { first_name, last_name, email_addr, password } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!first_name || !last_name || !email_addr || !password) {
      console.log("You are not provide a value.");
    } else {
      await set(databaseRef, {
        id: "5",
        first_name: first_name,
        last_name: last_name,
        email_addr: email_addr,
        password: password,
      });
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <section>
        <div className="container">
          <div className={Classes.form_section_area}>
            <Form className={Classes.form} onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Enter your frist Name"
                name="first_name"
                value={first_name}
                onChange={handleInput}
                className={Classes.input}
              />
              <Input
                type="text"
                placeholder="Enter your last name"
                name="last_name"
                value={last_name}
                onChange={handleInput}
                className={Classes.input}
              />
              <Input
                type="text"
                placeholder="Enter your email address"
                name="email_addr"
                value={email_addr}
                onChange={handleInput}
                className={Classes.input}
              />
              <Input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={handleInput}
                className={Classes.input}
              />
              <Input type="submit" value="Submit" className={Classes.input} />
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Create;

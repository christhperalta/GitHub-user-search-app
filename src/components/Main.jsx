import { useState } from "react";
import useFetch from "../api/useFetch";
import Form from "./Form";
import Loading from "./Loading";
import Content from "./Content";

export default function Main() {
  const [getUser, setGetUser] = useState("octocat");
  const { data, loading, err } = useFetch(getUser);

  return (
    <main className='Main'>
      <Form onGetUser={setGetUser} error={err} />
      {loading ? <Loading /> : <Content data={data} />}
    </main>
  );
}

import React from "react";
import axios from "axios";
import { Customer } from "../components/Customer";

export const GetDatosComprador = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/api/customers/serviceTransactions", {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*", // Could work and fix the previous problem, but not in all APIs
        },
      })
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  return (
    <div>
      <h6>GetDatosComprador</h6>
      {post && post.data[0].map((data,i) => (
          <Customer key={i} customer={data}/>
        ))}
    </div>
  );
};

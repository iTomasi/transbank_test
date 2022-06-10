import { useEffect, useState } from "react";
import Button from "../components/Button";
import Axios from "axios";

const Index = function() {
  const [url, setUrl] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const effectFunc = async function() {
      const response = await Axios.get(
        "http://localhost:4000/webpay/create"
      );

      const data = response.data.data;

      console.log(data)

      setUrl(data.url);
      setToken(data.token);
    };

    effectFunc()
  }, [])

  return (
    <div>
      <form method="POST" action={url}>
        <input type="hidden" name="token_ws" value={token} />
        <Button
          className="bg-indigo-500 hover:bg-indigo-600 disabled:bg-green-400 disabled:opacity-50"
          type="submit"
        >
          Pagar con webpay
        </Button>

      </form>
      
    </div>
  )
};

export default Index;
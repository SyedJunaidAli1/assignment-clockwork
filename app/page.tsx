"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!apiUrl) {
      alert("Api Url is not Found");
      return;
    }

    fetch(`${apiUrl}/api/shop/message/c3abnk-qk.myshopify.com`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, [apiUrl]);

  const saveMessage = async () => {
    if (!apiUrl) {
      alert("Api Url is Missing");
      return;
    }

    await fetch(`${apiUrl}/api/shop/message`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        shopDomain: "c3abnk-qk.myshopify.com",
        message,
      }),
    });
    alert("Message saved");
  };

  return (
    <main style={{ padding: 40 }}>
      <h2>Post-Purchase Message</h2>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full px-2 py-4 border rounded"
      />
      <br />
      <br />
      <button onClick={saveMessage}>Save</button>
    </main>
  );
}

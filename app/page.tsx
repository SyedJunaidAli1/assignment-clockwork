"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/shop/message/c3abnk-qk.myshopify.com`,
    )
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  const saveMessage = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/shop/message`, {
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
        style={{ width: "100%", padding: 10 }}
      />
      <br />
      <br />
      <button onClick={saveMessage}>Save</button>
    </main>
  );
}

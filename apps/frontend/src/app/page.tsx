"use client";

import { client } from "@/utils/client";

export default function Home() {
  const handleClick = async () => {
    const res = await client.api.$get();
    const data = await res.json();
    alert(data.message);
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

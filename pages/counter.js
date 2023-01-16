import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function Counter() {
  const [number, setNumber] = useState(0);
  const searchParams = useSearchParams();
  const isUser = searchParams.get("username");
  const router = useRouter();

  useEffect(() => {
    !isUser ? router.push("/") : <></>;
  }, [isUser]);

  return (
    <>
      <main className="counter-body">
        <div className="counter-container">
          <div className="counter-titles">
            <h1 className="title-main">COUNTER PAGE</h1>
            <h3 className="title-player">Welcome {isUser}</h3>
          </div>

          <div className="counter-number">
            <h2>{number}</h2>
          </div>

        <div className="counter-buttons">
          <button className="button-main" onClick={() => setNumber(number + 1)}>Increment</button>
          <button className="button-main" onClick={() => setNumber(number - 1)}>Decrement</button>
          </div>
        </div>
      </main>
    </>
  );
}

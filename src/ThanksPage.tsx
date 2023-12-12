import "../src/App.css";
import "../src/mobileMax500.css";
import Button from "./components/button";
import { useNavigate } from "react-router";

export default function ThanksPage() {
  const navigator = useNavigate();

  return (
    <div className="container_thanksPage">
      <img src="/images/icon-success.svg" alt="" width="65px" />
      <h1 className="title_thanksPage">Thanks for subscribing!</h1>
      <p
        className="description_thanksPage description-thxPage"
        style={{ fontWeight: "400" }}
      >
        A confirmation email has been sent to{" "}
        <span style={{ fontFamily: "var(--roboto-bold)", fontWeight: "700" }}>
          ash@loremcompany.com
        </span>
        . Please open it and click the button inside to confirm your
        subscription.
      </p>
      <Button type="button-thxPage" onClick={() => navigator("/")}>
        Dismiss message
      </Button>
    </div>
  );
}

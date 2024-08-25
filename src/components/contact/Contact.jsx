import "./contact.css";
import Lottie from "lottie-react";
import done from "../../animation/done.json";
import email from "../../animation/email.json";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("mzbnbzng");

  return (
    <section id="contact"className="contact-us ">
     <div>
     <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and get notified when i publish
        something new.
      </p>
      <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address: </label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message: </label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Sumbitting ..." : "Submit"}
          </button>
          {state.succeeded && (
            <p className="flex success" style={{ marginTop: "24px", fontSize: "16px" }}>
              {" "}
              <Lottie
                loop={false}
                style={{ height: 77 }}
                animationData={done}
              />{" "}
              Your message has been sent successfully ♥{" "}
            </p>
          )}
        </form>
     </div>
    
  
       
        <Lottie
               className="animation"
                style={{ height: 400}}
                animationData={email}
              />

    </section>
  );
};

export default Contact;

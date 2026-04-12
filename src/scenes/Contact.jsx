import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";
import contactImg from "../assets/contact-image.jpeg";

const formCardClass =
  "rounded-xl border border-pdt-violet/20 bg-[rgba(53,45,122,0.38)] p-6 shadow-sm shadow-pdt-violet/10 md:p-8";

const Contact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submitState, setSubmitState] = useState("idle");

  const onSubmitForm = async (data) => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("Set VITE_WEB3FORMS_ACCESS_KEY in .env (see .env.example)");
      setSubmitState("error");
      return;
    }

    setSubmitState("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "Portfolio — contact form",
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      const json = await response.json();
      if (json.success) {
        setSubmitState("success");
        reset();
      } else {
        setSubmitState("error");
      }
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <section id="contact" className="contact site-section isolate overflow-x-clip">
      <motion.div
        className="mx-auto max-w-3xl text-center md:max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="font-playfair text-4xl font-extrabold tracking-display md:text-5xl">
          <span className="font-playfair text-pdt-mint">Contact</span>{" "}
          <span className="font-playfair text-pdt-lemon">me</span>
        </h2>
        <div className="mt-5 flex justify-center">
          <LineGradient width="w-2/3 md:w-1/3" />
        </div>
        <p className="font-opensans pdt-body-muted mx-auto mt-8 max-w-md text-sm leading-relaxed md:text-base">
          Have a project in mind? Send a message — I&apos;ll get back to you.
        </p>
      </motion.div>

      <div className="site-stack mx-auto mt-10 max-w-3xl md:mt-12 md:max-w-4xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex shrink-0 justify-center md:basis-[42%] md:max-w-md"
          >
            <img
              src={contactImg}
              alt="Contact"
              className="w-full max-w-md rounded-md ring-2 ring-pdt-violet/45 ring-offset-4 ring-offset-pdt-bg shadow-pdt-glow"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0 },
            }}
            className="min-w-0 flex-1 md:pt-1"
          >
            <form
              onSubmit={handleSubmit(onSubmitForm)}
              className={formCardClass}
              noValidate
            >
              <input
                className="pdt-input"
                type="text"
                placeholder="NAME"
                autoComplete="name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-pdt-violet">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 char."}
                </p>
              )}

              <input
                className="pdt-input mt-5"
                type="email"
                placeholder="EMAIL"
                autoComplete="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-pdt-violet">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" &&
                    "Invalid email address."}
                </p>
              )}

              <textarea
                className="pdt-input mt-5"
                name="message"
                placeholder="MESSAGE"
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-pdt-violet">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              {submitState === "success" && (
                <p className="mt-4 text-sm text-pdt-tag" role="status">
                  Message sent. I&apos;ll get back to you soon.
                </p>
              )}
              {submitState === "error" && (
                <p className="mt-4 text-sm text-pdt-violet" role="alert">
                  Couldn&apos;t send the message. Please try again or email me
                  directly.
                </p>
              )}

              <button
                className="pdt-btn-primary mt-6 w-full px-5 py-3.5 text-sm font-medium uppercase tracking-wide shadow-pdt-glow-mint sm:w-auto"
                type="submit"
                disabled={submitState === "loading"}
              >
                {submitState === "loading" ? "Sending…" : "Send message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

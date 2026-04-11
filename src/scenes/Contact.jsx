import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import contactImg from "../assets/contact-image.jpeg";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="contact py-48">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex w-full justify-end"
      >
        <div>
          <p className="font-playfair text-4xl font-semibold leading-tight">
            <span className="text-pdt-violet">CONTACT ME</span>{" "}
            <span className="pdt-body-muted font-normal">TO GET STARTED</span>
          </p>
          <div className="my-5 flex md:justify-end">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      <div className="mt-5 gap-16 md:flex md:justify-between">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex basis-1/2 justify-center"
        >
          <img
            src={contactImg}
            alt="contact"
            className="max-w-full rounded-md ring-2 ring-pdt-mint/30 ring-offset-4 ring-offset-[#0d0d0d]"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-10 basis-1/2 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/aleks.protasov94@gmail.com"
            method="POST"
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
              <p className="mt-1 text-sm text-pdt-coral">
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
              <p className="mt-1 text-sm text-pdt-coral">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
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
              <p className="mt-1 text-sm text-pdt-coral">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="mt-6 w-full rounded-md bg-gradient-to-r from-pdt-lemon via-pdt-mint to-pdt-coral px-5 py-4 text-sm font-bold uppercase tracking-wide text-pdt-ink shadow-pdt-glow-mint transition duration-500 hover:from-pdt-violet hover:via-pdt-mint hover:to-pdt-lemon hover:text-white hover:shadow-pdt-glow md:w-auto"
              type="submit"
            >
              Send me a message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

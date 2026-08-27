import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CheckCircle, ChevronDown, Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Reveal } from "../common/Reveal";
import { SectionLabel } from "../common/SectionLabel";
import type { ContactFormData } from "../../types/portfolio";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
};

export function ContactSection() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = (): boolean => {
    const nextErrors: Partial<ContactFormData> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email";
    }
    if (form.phone && !/^[+\d\s()-]{7,15}$/.test(form.phone)) {
      nextErrors.phone = "Please enter a valid phone number";
    }
    if (!form.subject.trim()) nextErrors.subject = "Subject is required";
    if (!form.message.trim()) nextErrors.message = "Message is required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    setSending(true);
    setSubmitError("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service is not configured yet.");
      }

      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone || "Not provided",
        subject: form.subject,
        message: form.message
      }, publicKey);

      setSending(false);
      setSubmitted(true);
    } catch (error) {
      setSending(false);
      setSubmitError(error instanceof Error ? error.message : "Unable to send your message. Please email me directly.");
    }
  };

  const inputClass = (field: keyof ContactFormData) =>
    `w-full rounded-xl border-2 bg-[#faf8f4] px-4 py-3.5 text-sm font-medium outline-none transition placeholder:text-black/30 focus:border-accent focus:bg-white ${
      errors[field] ? "border-red-400" : "border-black/10"
    }`;

  const resetForm = () => {
    setSubmitted(false);
    setForm(initialForm);
    setErrors({});
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:py-32">
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#e8ddf8] blur-3xl" />
      <div className="absolute -left-32 bottom-10 h-56 w-56 rounded-full bg-[#e5d7b9] blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel number="05">Contact</SectionLabel>
          <h2 className="display-font max-w-5xl text-[15vw] font-bold leading-[.75] tracking-[-.08em] sm:text-8xl">
            LET'S<br /><span className="text-accent">BUILD.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <Reveal delay={0.1}>
            <div>
              <p className="max-w-xl text-lg leading-8 text-black/55">
                Have a project in mind? Fill in your details below and I&apos;ll get back to you as soon as possible.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-10 flex flex-col items-center rounded-[2rem] border-2 border-green-200 bg-green-50 p-10 text-center"
                  >
                    <CheckCircle size={52} className="text-green-500" />
                    <h3 className="display-font mt-5 text-2xl font-bold">Message Sent!</h3>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-black/55">
                      Thank you, <strong>{form.name}</strong>! Your message has been captured locally.
                    </p>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-4"
                    noValidate
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField label="Full Name" required error={errors.name}>
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" className={inputClass("name")} />
                      </FormField>
                      <FormField label="Email Address" required error={errors.email}>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="example@gmail.com" className={inputClass("email")} />
                      </FormField>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField label="Phone Number" error={errors.phone}>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 1234567890" className={inputClass("phone")} />
                      </FormField>
                      <FormField label="Subject" required error={errors.subject}>
                        <div className="relative">
                          <select name="subject" value={form.subject} onChange={handleChange} className={`${inputClass("subject")} appearance-none pr-12`}>
                            <option value="">Select a subject</option>
                            <option>Website Development</option>
                            <option>Web Application</option>
                            <option>UI/UX Design</option>
                            <option>Automation Workflow</option>
                            <option>Digital Marketing / SEO</option>
                            <option>Video Editing</option>
                            <option>General Inquiry</option>
                            <option>Other</option>
                          </select>
                          <ChevronDown aria-hidden="true" size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/70" />
                        </div>
                      </FormField>
                    </div>

                    <FormField label="Your Message" required error={errors.message}>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, timeline, and budget..."
                        rows={5}
                        className={`${inputClass("message")} resize-none`}
                      />
                    </FormField>

                    <button
                      type="submit"
                      disabled={sending}
                      className="group flex w-full items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 disabled:opacity-60 sm:w-auto"
                    >
                      {sending ? (
                        <>
                          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden" aria-hidden="true">
                            <Send size={17} className="absolute transition-all duration-500 ease-out group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:rotate-12 group-hover:opacity-0" />
                            <Send size={17} className="absolute -translate-x-8 translate-y-8 rotate-12 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100" />
                          </span>
                        </>
                      )}
                    </button>
                    {submitError && <p className="text-sm font-medium text-red-500">{submitError}</p>}
                  </motion.form>
                )}
              </AnimatePresence>

              <div className="mt-10 flex flex-wrap gap-3">
                <a href="mailto:vpraveenk1202@gmail.com" className="flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-bold transition hover:-translate-y-1 hover:border-black">
                  <Mail size={16} /> Email me
                </a>
                <a href="https://github.com/Prmersal" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-bold transition hover:-translate-y-1 hover:border-black">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/praveen-kumar-v" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-bold transition hover:-translate-y-1 hover:border-black">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <motion.div
              whileHover={{ rotate: 0, y: -8 }}
              className="relative ml-auto max-w-md rotate-[2deg] rounded-[1.8rem] border-2 border-black bg-white p-5 shadow-[16px_16px_0_#111]"
            >
              <div className="flex items-center justify-between">
                <div className="display-font text-sm font-black tracking-[.08em]">PK.</div>
                <span className="mono-font text-[9px] uppercase tracking-[.18em] text-black/40">Contact us</span>
              </div>

              <div className="mt-5 flex gap-5">
                <div className="h-36 w-28 shrink-0 overflow-hidden rounded-xl border-2 border-black bg-[#e8e2d7]">
                  <img src="/assets/portrait-cutout.png" alt="Praveen Kumar V" className="h-full w-full object-cover object-top" />
                </div>
                <div className="pt-2">
                  <h3 className="display-font text-2xl font-bold leading-none">Praveen<br />Kumar V</h3>
                  <p className="mono-font mt-3 text-[9px] uppercase tracking-[.13em] text-black/45">Full Stack Developer</p>
                  <p className="mt-4 text-xs font-medium text-black/55">Freelancer • Web • Automation • Growth</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-3">
                <span className="mono-font text-[8px] uppercase tracking-[.12em] text-black/40"> • AI Automation & Full stack </span>
                <span className="text-sm font-black text-accent">PK</span>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function FormField({ label, required = false, error, children }: FormFieldProps) {
  return (
    <div>
      <label className="mono-font mb-1.5 block text-[10px] font-bold uppercase tracking-[.18em] text-black/45">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs font-medium text-red-400">{error}</p>}
    </div>
  );
}
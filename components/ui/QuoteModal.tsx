// "use client";

// import { useEffect, useMemo, useState } from "react";

// type CustomerType = "individual" | "company";

// export default function QuoteModal({
//   open,
//   onClose,
// }: {
//   open: boolean;
//   onClose: () => void;
// }) {
//   const [step, setStep] = useState<1 | 2 | 3>(1);

//   // Step 1
//   const [customerType, setCustomerType] = useState<CustomerType>("individual");
//   const [service, setService] = useState("Cleaning Services");

//   // Common contact
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [notes, setNotes] = useState("");

//   // Individual
//   const [name, setName] = useState("");
//   const [surname, setSurname] = useState("");

//   // Company
//   const [companyName, setCompanyName] = useState("");
//   const [companyReg, setCompanyReg] = useState("");
//   const [vatNumber, setVatNumber] = useState("");
//   const [industry, setIndustry] = useState("");
//   const [contactPerson, setContactPerson] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [successMsg, setSuccessMsg] = useState<string | null>(null);
//   const [errorMsg, setErrorMsg] = useState<string | null>(null);

//   // Lock body scroll when open
//   useEffect(() => {
//     if (!open) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [open]);

//   // ESC closes modal
//   useEffect(() => {
//     if (!open) return;
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [open, onClose]);

//   // Reset everything when closing
//   useEffect(() => {
//     if (!open) return;
//     // reset messages each open
//     setErrorMsg(null);
//     setSuccessMsg(null);
//     setStep(1);
//   }, [open]);

//   const title = useMemo(() => {
//     return step === 1
//       ? "Start Your Request"
//       : step === 2
//       ? "Your Details"
//       : "Review & Submit";
//   }, [step]);

//   const resetMessages = () => {
//     setErrorMsg(null);
//     setSuccessMsg(null);
//   };

//   const resetForm = () => {
//     setStep(1);
//     setCustomerType("individual");
//     setService("Cleaning Services");
//     setPhone("");
//     setEmail("");
//     setAddress("");
//     setNotes("");
//     setName("");
//     setSurname("");
//     setCompanyName("");
//     setCompanyReg("");
//     setVatNumber("");
//     setIndustry("");
//     setContactPerson("");
//     resetMessages();
//   };

//   // Step validations
//   const validateStep1 = () => {
//     if (!customerType) return "Please choose customer type.";
//     if (!service) return "Please choose service needed.";
//     return null;
//   };

//   const validateStep2 = () => {
//     if (customerType === "individual") {
//       if (!name.trim()) return "Name is required.";
//       if (!surname.trim()) return "Surname is required.";
//     } else {
//       if (!companyName.trim()) return "Company name is required.";
//       if (!contactPerson.trim()) return "Contact person is required.";
//     }

//     if (!phone.trim()) return "Phone number is required.";
//     if (!email.trim()) return "Email address is required.";
//     return null;
//   };

//   const goNext = () => {
//     resetMessages();
//     const err = step === 1 ? validateStep1() : validateStep2();
//     if (err) return setErrorMsg(err);

//     setStep((prev) => (prev === 1 ? 2 : 3));
//   };

//   const goBack = () => {
//     resetMessages();
//     setStep((prev) => (prev === 3 ? 2 : 1));
//   };

//   const submit = async () => {
//     resetMessages();
//     const err = validateStep2();
//     if (err) return setErrorMsg(err);

//     setLoading(true);
//     try {
//       const payload = {
//         customerType,
//         service,
//         phone,
//         email,
//         address,
//         notes,
//         // individual
//         name,
//         surname,
//         // company
//         companyName,
//         companyReg,
//         vatNumber,
//         industry,
//         contactPerson,
//       };

//       const res = await fetch("/api/quote", {
//         method: "POST",
//         body: JSON.stringify(payload),
//       });

//       if (res.ok) {
//         setSuccessMsg("Quote request sent! We’ll get back to you soon.");
//         // Optional: auto-close after success
//         // setTimeout(() => onClose(), 1800);
//         // Optional: clear form after success
//         resetForm();
//       } else {
//         setErrorMsg("Failed to send. Please try again.");
//       }
//     } catch {
//       setErrorMsg("Network error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-[999] flex items-center justify-center" role="dialog" aria-modal="true">
//       {/* Overlay */}
//       <button
//         onClick={onClose}
//         className="absolute inset-0 bg-black/60"
//         aria-label="Close quote modal"
//       />

//       {/* Modal */}
//       <div className="relative mx-4 w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 max-h-[92vh] flex flex-col">
//         {/* Header */}
//         <div className="flex items-start justify-between border-b px-6 py-5">
//           <div>
//             <p className="text-sm font-semibold text-red-600">ExpressMaids</p>
//             <h3 className="mt-1 text-xl font-extrabold text-blue-900">{title}</h3>

//             {/* Step indicator */}
//             <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-gray-600">
//               <StepDot active={step >= 1} />
//               <span className={step === 1 ? "text-blue-900" : ""}>Type</span>
//               <span className="text-gray-300">/</span>
//               <StepDot active={step >= 2} />
//               <span className={step === 2 ? "text-blue-900" : ""}>Details</span>
//               <span className="text-gray-300">/</span>
//               <StepDot active={step >= 3} />
//               <span className={step === 3 ? "text-blue-900" : ""}>Review</span>
//             </div>
//           </div>

//           <button
//             onClick={onClose}
//             className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Body */}
//         <div className="px-6 py-6">
//           {/* STEP 1 */}
//           {step === 1 && (
//             <div className="space-y-4">
//               <div>
//                 <label className="text-sm font-semibold text-blue-900">Customer Type</label>
//                 <select
//                   value={customerType}
//                   onChange={(e) => setCustomerType(e.target.value as CustomerType)}
//                   className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//                 >
//                   <option value="individual">Individual</option>
//                   <option value="company">Company</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="text-sm font-semibold text-blue-900">Service Needed</label>
//                 <select
//                   value={service}
//                   onChange={(e) => setService(e.target.value)}
//                   className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//                 >
//                   <option>Cleaning Services</option>
//                   <option>Hygiene Services</option>
//                   <option>Pest Control Services</option>
//                 </select>
//               </div>

//               <p className="text-xs text-gray-500">
//                 Next, we’ll collect the right details for a quick quotation.
//               </p>
//             </div>
//           )}

//           {/* STEP 2 */}
//           {step === 2 && (
//             <div className="space-y-5">
//               {customerType === "individual" ? (
//                 <div className="grid gap-4 md:grid-cols-2">
//                   <div>
//                     <label className="text-sm font-semibold text-blue-900">Name</label>
//                     <input
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//                       placeholder="Your name"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-sm font-semibold text-blue-900">Surname</label>
//                     <input
//                       value={surname}
//                       onChange={(e) => setSurname(e.target.value)}
//                       className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//                       placeholder="Your surname"
//                     />
//                   </div>
//                 </div>
//               ) : (
//                 <div className="grid gap-4 md:grid-cols-2">
//                   <div className="md:col-span-2">
//                     <label className="text-sm font-semibold text-blue-900">Company Name</label>
//                     <input
//                       value={companyName}
//                       onChange={(e) => setCompanyName(e.target.value)}
//                       className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//                       placeholder="Company name"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-sm font-semibold text-blue-900">Company Reg No (optional)</label>
//                     <input
//                       value={companyReg}
//                       onChange={(e) => setCompanyReg(e.target.value)}
//                       className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//                       placeholder="Registration number"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-sm font-semibold text-blue-900">VAT No (optional)</label>
//                     <input
//                       value={vatNumber}
//                       onChange={(e) => setVatNumber(e.target.value)}
//                       className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//                       placeholder="VAT number"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-sm font-semibold text-blue-900">Industry (optional)</label>
//                     <input
//                       value={industry}
//                       onChange={(e) => setIndustry(e.target.value)}
//                       className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//                       placeholder="e.g. Office, Retail, Factory"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-sm font-semibold text-blue-900">Contact Person</label>
//                     <input
//                       value={contactPerson}
//                       onChange={(e) => setContactPerson(e.target.value)}
//                       className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//                       placeholder="Contact person name"
//                     />
//                   </div>
//                 </div>
//               )}

//               <div className="grid gap-4 md:grid-cols-2">
//                 <div>
//                   <label className="text-sm font-semibold text-blue-900">Phone</label>
//                   <input
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//                     placeholder="+27..."
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm font-semibold text-blue-900">Email</label>
//                   <input
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//                     placeholder="you@example.com"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="text-sm font-semibold text-blue-900">Service Address (optional)</label>
//                   <input
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//                     placeholder="Where do you need the service?"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="text-sm font-semibold text-blue-900">Additional Notes (optional)</label>
//                   <textarea
//                     value={notes}
//                     onChange={(e) => setNotes(e.target.value)}
//                     rows={4}
//                     className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//                     placeholder="Tell us what you need..."
//                   />
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* STEP 3 */}
//           {step === 3 && (
//             <div className="space-y-4">
//               <div className="rounded-2xl bg-gray-50 p-5 ring-1 ring-black/5">
//                 <p className="text-sm font-semibold text-blue-900">Summary</p>
//                 <div className="mt-3 space-y-2 text-sm text-gray-700">
//                   <Row label="Customer Type" value={customerType === "company" ? "Company" : "Individual"} />
//                   <Row label="Service Needed" value={service} />

//                   {customerType === "individual" ? (
//                     <>
//                       <Row label="Name" value={`${name} ${surname}`.trim()} />
//                     </>
//                   ) : (
//                     <>
//                       <Row label="Company Name" value={companyName} />
//                       <Row label="Contact Person" value={contactPerson} />
//                       <Row label="Company Reg No" value={companyReg || "-"} />
//                       <Row label="VAT No" value={vatNumber || "-"} />
//                       <Row label="Industry" value={industry || "-"} />
//                     </>
//                   )}

//                   <Row label="Phone" value={phone} />
//                   <Row label="Email" value={email} />
//                   <Row label="Address" value={address || "-"} />
//                   <Row label="Notes" value={notes || "-"} />
//                 </div>
//               </div>

//               <p className="text-xs text-gray-500">
//                 Please confirm the details above, then submit your request.
//               </p>
//             </div>
//           )}

//           {/* Messages */}
//           {errorMsg && (
//             <div className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
//               {errorMsg}
//             </div>
//           )}
//           {successMsg && (
//             <div className="mt-5 rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
//               {successMsg}
//             </div>
//           )}

//           {/* Footer actions */}
//           <div className="mt-6 flex items-center gap-3">
//             {step > 1 ? (
//               <button
//                 type="button"
//                 onClick={goBack}
//                 disabled={loading}
//                 className="rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-60"
//               >
//                 Back
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={onClose}
//                 disabled={loading}
//                 className="rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-60"
//               >
//                 Cancel
//               </button>
//             )}

//             {step < 3 ? (
//               <button
//                 type="button"
//                 onClick={goNext}
//                 disabled={loading}
//                 className="ml-auto inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60"
//               >
//                 Continue
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={submit}
//                 disabled={loading}
//                 className="ml-auto inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60"
//               >
//                 {loading ? (
//                   <span className="inline-flex items-center gap-2">
//                     <Spinner />
//                     Sending...
//                   </span>
//                 ) : (
//                   "Submit Request"
//                 )}
//               </button>
//             )}
//           </div>

//           <p className="mt-3 text-center text-xs text-gray-500">
//             By submitting, you agree that ExpressMaids may contact you about your request.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Spinner() {
//   return (
//     <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" />
//   );
// }

// function StepDot({ active }: { active: boolean }) {
//   return (
//     <span
//       className={[
//         "inline-block h-2.5 w-2.5 rounded-full",
//         active ? "bg-red-600" : "bg-gray-300",
//       ].join(" ")}
//     />
//   );
// }

// function Row({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex flex-col gap-0.5">
//       <span className="text-xs font-semibold text-gray-500">{label}</span>
//       <span className="text-sm text-gray-800">{value}</span>
//     </div>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";

type CustomerType = "individual" | "company";

export default function QuoteModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Step 1
  const [customerType, setCustomerType] = useState<CustomerType>("individual");
  const [service, setService] = useState("Cleaning Services");

  // Common contact
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  // Individual
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  // Company
  const [companyName, setCompanyName] = useState("");
  const [companyReg, setCompanyReg] = useState("");
  const [vatNumber, setVatNumber] = useState("");
  const [industry, setIndustry] = useState("");
  const [contactPerson, setContactPerson] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // ✅ Real-time validity checks for disabling buttons
  const isStep1Valid = Boolean(customerType) && Boolean(service);

  const isStep2Valid =
    customerType === "individual"
      ? name.trim() !== "" &&
        surname.trim() !== "" &&
        phone.trim() !== "" &&
        email.trim() !== ""
      : companyName.trim() !== "" &&
        contactPerson.trim() !== "" &&
        phone.trim() !== "" &&
        email.trim() !== "";

  // Lock body scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC closes modal
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Reset messages + step on open
  useEffect(() => {
    if (!open) return;
    setErrorMsg(null);
    setSuccessMsg(null);
    setStep(1);
  }, [open]);

  const title = useMemo(() => {
    return step === 1
      ? "Start Your Request"
      : step === 2
      ? "Your Details"
      : "Review & Submit";
  }, [step]);

  const resetMessages = () => {
    setErrorMsg(null);
    setSuccessMsg(null);
  };

  const resetForm = () => {
    setStep(1);
    setCustomerType("individual");
    setService("Cleaning Services");
    setPhone("");
    setEmail("");
    setAddress("");
    setNotes("");
    setName("");
    setSurname("");
    setCompanyName("");
    setCompanyReg("");
    setVatNumber("");
    setIndustry("");
    setContactPerson("");
    resetMessages();
  };

  // Step validations (backup)
  const validateStep1 = () => {
    if (!customerType) return "Please choose customer type.";
    if (!service) return "Please choose service needed.";
    return null;
  };

  const validateStep2 = () => {
    if (customerType === "individual") {
      if (!name.trim()) return "Name is required.";
      if (!surname.trim()) return "Surname is required.";
    } else {
      if (!companyName.trim()) return "Company name is required.";
      if (!contactPerson.trim()) return "Contact person is required.";
    }

    if (!phone.trim()) return "Phone number is required.";
    if (!email.trim()) return "Email address is required.";
    return null;
  };

  const goNext = () => {
    resetMessages();
    const err = step === 1 ? validateStep1() : validateStep2();
    if (err) return setErrorMsg(err);

    setStep((prev) => (prev === 1 ? 2 : 3));
  };

  const goBack = () => {
    resetMessages();
    setStep((prev) => (prev === 3 ? 2 : 1));
  };

  const submit = async () => {
    resetMessages();
    const err = validateStep2();
    if (err) return setErrorMsg(err);

    setLoading(true);
    try {
      const payload = {
        customerType,
        service,
        phone,
        email,
        address,
        notes,
        // individual
        name,
        surname,
        // company
        companyName,
        companyReg,
        vatNumber,
        industry,
        contactPerson,
      };

      const res = await fetch("/api/quote", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccessMsg("Quote request sent! We’ll get back to you soon.");
        resetForm();
      } else {
        setErrorMsg("Failed to send. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <button
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
        aria-label="Close quote modal"
      />

      {/* Modal */}
      <div className="relative mx-4 w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between border-b px-6 py-5">
          <div>
            <p className="text-sm font-semibold text-red-600">ExpressMaids</p>
            <h3 className="mt-1 text-xl font-extrabold text-blue-900">
              {title}
            </h3>

            {/* Step indicator */}
            <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-gray-600">
              <StepDot active={step >= 1} />
              <span className={step === 1 ? "text-blue-900" : ""}>Type</span>
              <span className="text-gray-300">/</span>
              <StepDot active={step >= 2} />
              <span className={step === 2 ? "text-blue-900" : ""}>Details</span>
              <span className="text-gray-300">/</span>
              <StepDot active={step >= 3} />
              <span className={step === 3 ? "text-blue-900" : ""}>Review</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* Body (scrollable) */}
        <div className="px-6 py-6 overflow-y-auto">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-blue-900">
                  Customer Type
                </label>
                <select
                  value={customerType}
                  onChange={(e) =>
                    setCustomerType(e.target.value as CustomerType)
                  }
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="individual">Individual</option>
                  <option value="company">Company</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-blue-900">
                  Service Needed
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option>Cleaning Services</option>
                  <option>Hygiene Services</option>
                  <option>Pest Control Services</option>
                </select>
              </div>

              <p className="text-xs text-gray-500">
                Next, we’ll collect the right details for a quick quotation.
              </p>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-5">
              {customerType === "individual" ? (
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-blue-900">
                      Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-blue-900">
                      Surname
                    </label>
                    <input
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Your surname"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label className="text-sm font-semibold text-blue-900">
                      Company Name
                    </label>
                    <input
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-blue-900">
                      Company Reg No (optional)
                    </label>
                    <input
                      value={companyReg}
                      onChange={(e) => setCompanyReg(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Registration number"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-blue-900">
                      VAT No (optional)
                    </label>
                    <input
                      value={vatNumber}
                      onChange={(e) => setVatNumber(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="VAT number"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-blue-900">
                      Industry (optional)
                    </label>
                    <input
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="e.g. Office, Retail, Factory"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-blue-900">
                      Contact Person
                    </label>
                    <input
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Contact person name"
                    />
                  </div>
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-blue-900">
                    Phone
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="+27..."
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-blue-900">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-blue-900">
                    Service Address (optional)
                  </label>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Where do you need the service?"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-blue-900">
                    Additional Notes (optional)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Tell us what you need..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="rounded-2xl bg-gray-50 p-5 ring-1 ring-black/5">
                <p className="text-sm font-semibold text-blue-900">Summary</p>
                <div className="mt-3 space-y-2 text-sm text-gray-700">
                  <Row
                    label="Customer Type"
                    value={customerType === "company" ? "Company" : "Individual"}
                  />
                  <Row label="Service Needed" value={service} />

                  {customerType === "individual" ? (
                    <>
                      <Row label="Name" value={`${name} ${surname}`.trim()} />
                    </>
                  ) : (
                    <>
                      <Row label="Company Name" value={companyName} />
                      <Row label="Contact Person" value={contactPerson} />
                      <Row
                        label="Company Reg No"
                        value={companyReg || "-"}
                      />
                      <Row label="VAT No" value={vatNumber || "-"} />
                      <Row label="Industry" value={industry || "-"} />
                    </>
                  )}

                  <Row label="Phone" value={phone} />
                  <Row label="Email" value={email} />
                  <Row label="Address" value={address || "-"} />
                  <Row label="Notes" value={notes || "-"} />
                </div>
              </div>

              <p className="text-xs text-gray-500">
                Please confirm the details above, then submit your request.
              </p>
            </div>
          )}

          {/* Messages */}
          {errorMsg && (
            <div className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {errorMsg}
            </div>
          )}
          {successMsg && (
            <div className="mt-5 rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
              {successMsg}
            </div>
          )}

          {/* Sticky Footer actions */}
          <div className="sticky bottom-0 -mx-6 mt-6 bg-white px-6 pt-4 pb-5 border-t">
            <div className="flex items-center gap-3">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={goBack}
                  disabled={loading}
                  className="rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Back
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onClose}
                  disabled={loading}
                  className="rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={goNext}
                  disabled={loading || (step === 1 ? !isStep1Valid : !isStep2Valid)}
                  className="ml-auto inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submit}
                  disabled={loading || !isStep2Valid}
                  className="ml-auto inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <Spinner />
                      Sending...
                    </span>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              )}
            </div>

            <p className="mt-3 text-center text-xs text-gray-500">
              By submitting, you agree that ExpressMaids may contact you about your request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" />
  );
}

function StepDot({ active }: { active: boolean }) {
  return (
    <span
      className={[
        "inline-block h-2.5 w-2.5 rounded-full",
        active ? "bg-red-600" : "bg-gray-300",
      ].join(" ")}
    />
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs font-semibold text-gray-500">{label}</span>
      <span className="text-sm text-gray-800">{value}</span>
    </div>
  );
}

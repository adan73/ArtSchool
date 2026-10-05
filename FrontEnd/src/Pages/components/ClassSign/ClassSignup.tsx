import { useEffect, useState } from "react";
import "./ClassSignup.css";

interface ClassSignupProps {
  name: string;
  day: string;
  time: string;
  ageGroup: string;
  totalClasses?: number;
  price: number;
  description?: string;

  capacity: number;
  registeredCount: number;
}

interface SignupData {
  className: string;
  fullName: string;
  age: number;
  phone: string;
  email: string;
  notes: string;
}

export default function ClassSignup({
  name,
  day,
  time,
  ageGroup,
  totalClasses = 12,
  price,
  description,
  capacity,
  registeredCount,
}: ClassSignupProps) {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
const [submitted, setSubmitted] = useState<boolean>(false);

const spotsLeft = Math.max(capacity - registeredCount, 0);
const isFull = spotsLeft === 0;

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const openModal = () => {
    setSubmitted(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

const handleSubmit = (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  if (isFull) {
    return;
  }
    const form = event.currentTarget;
    const formData = new FormData(form);

    const signupData: SignupData = {
      className: name,

      fullName: String(formData.get("fullName") || ""),

      age: Number(formData.get("age")),

      phone: String(formData.get("phone") || ""),

      email: String(formData.get("email") || ""),

      notes: String(formData.get("notes") || ""),
    };

    console.log("Signup:", signupData);

    setSubmitted(true);
  };

  return (
    <>
      <div className="class-signup-area">
  <span className={`class-spots ${isFull ? "full" : ""}`}>
    {isFull
      ? `${registeredCount}/${capacity} — Class full`
      : `${registeredCount}/${capacity} spots filled  `}
  </span>

  <button
    type="button"
    className="class-signup-trigger"
    onClick={openModal}
    disabled={isFull}
  >
    {isFull ? "Class Full" : "Sign Up"}

    {!isFull && <span>→</span>}
  </button>
</div>

      {isOpen && (
        <div
          className="signup-overlay"
          onMouseDown={closeModal}
        >
          <div
            className="signup-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="signup-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="signup-close"
              onClick={closeModal}
              aria-label="Close signup form"
            >
              ×
            </button>

            {!submitted ? (
              <>
                <div className="signup-header">
                  <p className="signup-eyebrow">
                    CLASS REGISTRATION
                  </p>

                  <h2 id="signup-title">{name}</h2>

                  <div className="signup-tags">
                    <span>{day}</span>

                    <span>{time}</span>

                    <span>{ageGroup}</span>
                  </div>

                  {description && (
                    <p className="signup-description">
                      {description}
                    </p>
                  )}
                </div>

                {/* COURSE DETAILS */}

                <div className="signup-class-details">
                  <div className="signup-detail">
                    <strong>{totalClasses}</strong>
                    <span>Classes</span>
                  </div>

                  <div className="signup-detail">
                    <strong>{time}</strong>
                    <span>Class time</span>
                  </div>

                  <div className="signup-detail">
                    <strong>₪{price}</strong>
                    <span>Total price</span>
                  </div>
                </div>

                {/* FORM */}

                <form
                  className="signup-form"
                  onSubmit={handleSubmit}
                >
                  <div className="signup-form-row">

                    <label>
                      <span>Full Name *</span>

                      <input
                        type="text"
                        name="fullName"
                        placeholder="Your full name"
                        required
                      />
                    </label>

                    <label>
                      <span>Age *</span>

                      <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        min={4}
                        max={100}
                        required
                      />
                    </label>

                  </div>

                  <label>
                    <span>Phone Number *</span>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="050-000-0000"
                      required
                    />
                  </label>

                  <label>
                    <span>Email *</span>

                    <input
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      required
                    />
                  </label>

                  <label>
                    <span>Anything we should know?</span>

                    <textarea
                      name="notes"
                      rows={3}
                      placeholder="Previous experience, questions, special requests..."
                    />
                  </label>

                  <button
                    type="submit"
                    className="signup-submit"
                  >
                    <span>Sign Up</span>

                    <span>₪{price}</span>
                  </button>

                  <p className="signup-note">
                    We'll contact you to confirm your place and
                    payment.
                  </p>
                </form>
              </>
            ) : (
              /* SUCCESS */

              <div className="signup-success">
                <div className="signup-success-icon">
                  ✓
                </div>

                <p className="signup-eyebrow">
                  REGISTRATION RECEIVED
                </p>

                <h2>Thank you!</h2>

                <p>
                  Your registration request for{" "}
                  <strong>{name}</strong> has been received.
                </p>

                <p>
                  We'll contact you soon to confirm your place.
                </p>

                <button
                  type="button"
                  className="signup-done"
                  onClick={closeModal}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
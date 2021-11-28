import Image from 'next/image';
import { useState } from 'react';

export default function HireMe({ showModal, handleModal }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  function handleChange(e) {
    const value = e.target.value;

    setForm({
      ...form,
      [e.target.name]: value,
    });
  }

  //   Form validation state
  const [errors, setErrors] = useState({});

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (form.name.length <= 0) {
      tempErrors['name'] = true;
      isValid = false;
    }
    if (form.email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (form.subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }
    if (form.message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
      return;
    }
    setShowSuccessMessage(true);
    setShowFailureMessage(false);
  };
  console.log(form.name, form.email, form.subject, form.message);

  return (
    <div
      className="form-modal"
      style={showModal ? { display: 'flex' } : { display: 'none' }}
    >
      <div className="card relative">
        <div className="title-container flex-vertical">
          <h3>HIRE ME</h3>
          <p>
            Be the first to know the latest challenges!
            <br />
          </p>
        </div>
        <div className="form-block w-form">
          <form
            className="validated-form"
            noValidate="novalidate"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="form-grid">
              <div className="form-wrap extra-space large">
                <label className="field-label-2">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="text-field-2 w-input"
                  maxLength="256"
                  name="name"
                  placeholder="e.g. Annie"
                  required=""
                  autoComplete="off"
                  value={form.name}
                  onChange={handleChange}
                ></input>
                {errors?.name && (
                  <p className="required">Fullname cannot be empty.</p>
                )}
              </div>
              <div className="form-wrap extra-space large">
                <label className="field-label-2">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  className="text-field-2 w-input"
                  maxLength="256"
                  name="email"
                  placeholder="e.g email@email.com"
                  required=""
                  autoComplete="off"
                  value={form.email}
                  onChange={handleChange}
                ></input>
                {errors?.email && (
                  <p className="required">Email cannot be empty.</p>
                )}
              </div>
              <div className="form-wrap extra-space large">
                <label htmlFor="Plan-4" className="field-label-2">
                  Purpose for contact/Subject?
                  <span className="required">*</span>
                </label>
                <select
                  required=""
                  name="subject"
                  className="text-field-2 w-select"
                  value={form.subject}
                  onChange={handleChange}
                >
                  <option value="Custom Beat Production">
                    Custom Beat Production
                  </option>
                  <option value="Mixing and Mastering">
                    Mixing and Mastering
                  </option>
                  <option value="Songwriting">Songwriting</option>
                  <option value="Other">Other</option>
                </select>
                {errors?.subject && (
                  <p className="required">Subject cannot be empty.</p>
                )}
              </div>
              <div className="form-wrap extra-space large">
                <label htmlFor="Plan-4" className="field-label-2">
                  Message
                  <span className="required">*</span>
                </label>
                <textarea
                  className="text-field-2 w-select"
                  name="message"
                  placeholder="Type your message..."
                  rows="5"
                  maxLength="5000"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
                {errors?.message && (
                  <p className="required">Message cannot be empty.</p>
                )}
              </div>
            </div>
            <input
              type="submit"
              value="Let's Start a brighter future"
              className="submit-btn"
            ></input>

            <div className="text-left">
              {showSuccessMessage && (
                <p className="text-green-500 font-semibold text-sm my-2">
                  Thankyou! Your Message has been delivered.
                </p>
              )}
              {showFailureMessage && (
                <p className="required">
                  Oops! Something went wrong, please try again.
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="close-button-action" onClick={handleModal}>
          <Image
            src="/static/img/close.svg"
            alt="close"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
}

import styled from "styled-components";

const Form = () => {
  return (
    <div>
      <div className="form-rows">
        <label htmlFor="name" className="label">
          name *
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value="value"
          placeholder="name"
          className="input"
        />
      </div>
      <div className="form-rows">
        <label htmlFor="lastname" className="label">
          last name
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value="value"
          placeholder="name"
          className="input"
        />
      </div>
      <div className="form-rows">
        <label htmlFor="email" className="label">
          email address *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value="value"
          placeholder="name"
          className="input"
        />
      </div>
      <div className="form-rows">
        <label htmlFor="message" className="label">
          message *
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="name"
          className="input"
        />
      </div>
    </div>
  );
};
export default Form;

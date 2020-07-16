<template>
  <div class="kontakt-form-container">
    <form
      id="fs-frm"
      name="simple-contact-form"
      accept-charset="utf-8"
      action="https://formspree.io/chazgagne@gmail.com"
      method="post"
    >
      <h2 id="kontaktformular">Kontaktformular</h2>
      <fieldset id="fs-frm-inputs">
        <label for="full-name">Full Name</label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
          required=""
        />
        <label for="email-address">Email Address</label>
        <input
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="email@domain.com"
          required=""
        />
        <label for="phone-number">Phone Number</label>
        <input
          type="phone"
          name="_replyto"
          id="phone-number"
          placeholder="(0XX) XXXX-XXXX"
          required=""
        />
        <label for="message">Message</label>
        <textarea
          rows="5"
          name="message"
          id="message"
          placeholder="Write your message here"
          required=""
        ></textarea>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
      </fieldset>
      <input id="submit" type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.kontakt-form-container {
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
  padding: auto;
  min-height: 575px;
  width: 670px;
  border-radius: 4px;
  background-color: var(--component-background);
  align-content: center;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.kontakt-form-container:hover {
  overflow: auto;
}

.kontakt-container h2 {
  padding: 0;
  font-weight: 700;
  font-size: 1.5rem;
}

form {
  font-size: 16px;
  margin: 0 auto;
  max-height: 400px;
  width: 100%;
}

fieldset {
  border: none;
  margin: 0;
}

label,
input,
textarea {
  outline: none;
  margin: 0 auto 0.5rem auto;
  padding: 0.5rem;
  width: 85%;
  display: block;
}

#submit {
  width: 40%;
}

#submit {
  min-width: 25ch;
  background: var(--primary-color);
  margin-bottom: 1rem;
  border: 0.5px solid var(--dark-text);
  border-radius: 1rem;
  transition: all 200ms ease-out;
}

#submit:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>

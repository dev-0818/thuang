<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <div class="section-title fade-in">
        <h2>Let's Create Something Beautiful Together</h2>
        <p>Ready to transform your space? Get in touch to discuss your project and schedule a consultation.</p>
      </div>
      <div class="contact-content">
        <div class="contact-form fade-in">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input type="text" v-model="form.name" placeholder="Your Name" required />
            </div>
            <div class="form-group">
              <input type="email" v-model="form.email" placeholder="Your Email" required />
            </div>
            <div class="form-group">
              <input type="tel" v-model="form.phone" placeholder="Your Phone" />
            </div>
            <div class="form-group">
              <select v-model="form.service" required>
                <option value="">Select a Service</option>
                <option value="residential">Residential Design</option>
                <option value="commercial">Commercial Design</option>
                <option value="consultation">Design Consultation</option>
                <option value="renovation">Renovation Planning</option>
              </select>
            </div>
            <div class="form-group">
              <textarea v-model="form.message" placeholder="Tell me about your project..." rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send To Whatsapp</button>
          </form>
        </div>
        <div class="contact-info fade-in">
          <div class="info-item">
            <h3>Get In Touch</h3>
            <p>Ready to start your design journey? I'd love to hear about your project.</p>
          </div>
          <div class="info-item">
            <h4>Phone</h4>
            <p>+62 853 5982 0664</p>
          </div>
          <div class="info-item">
            <h4>Email</h4>
            <p>christella@thuang.com</p>
          </div>
          <div class="info-item">
            <h4>Studio</h4>
            <p>Medan City, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
//import emailjs from 'emailjs-com';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
});

// const submitForm = () => {
//   console.log('Form submitted:', form.value);
//   alert('Thank you for your message! I will get back to you soon.');

//   form.value = {
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: '',
//   };
// };

// const submitForm = () => {
//   emailjs
//     .send(
//       'service_i57a59t',     // <-- replace with actual service ID
//       'template_lcmm08u',    // <-- replace with actual template ID
//       {
//         name: form.value.name,
//         email: form.value.email,
//         phone: form.value.phone,
//         service: form.value.service,
//         message: form.value.message,
//       },
//       'WozBJLDi_Kh-_lTrb' // <-- your public key
//     )
//     .then(() => {
//       alert('Thank you! Your message has been sent.');
//       form.value = {
//         name: '',
//         email: '',
//         phone: '',
//         service: '',
//         message: '',
//       };
//     })
//     .catch((error) => {
//       console.error('EmailJS error:', error);
//       alert('Oops! Something went wrong.');
//     });
// };

const submitForm = () => {
  const message = `Hello, my name is ${form.value.name}.
Email: ${form.value.email}
Phone: ${form.value.phone}
Service: ${form.value.service}
Message: ${form.value.message}`;

  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = '6289512964872'; // <-- Your WhatsApp number in international format

  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};
</script>

<style scoped>
/* Paste the styles for the .contact-section, .contact-content, etc. here */
.contact-section {
  background: var(--primary-color);
  color: var(--white);
}

.contact-section .section-title h2,
.contact-section .section-title p {
  color: var(--white);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
}

.contact-form {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.15);
}

.form-group select option {
  color: #fff; /* All options will have black text */
  background: #ae8c68; /* Ensure a white background for readability */
  
}

.contact-info h3 {
  color: var(--white);
  margin-bottom: 2rem;
}

.info-item {
  margin-bottom: 2rem;
}

.info-item h4 {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.info-item p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
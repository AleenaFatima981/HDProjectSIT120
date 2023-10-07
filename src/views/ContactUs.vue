<template>
  <section class="contact-page">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow p-4 contact-form">
            <h2 class="mb-4 text-center">Contact Me Form</h2>

            <!-- Form Inputs -->
            <div class="mb-3">
              <label for="name" class="form-label">Name:</label>
              <input v-model="name" id="name" class="form-control input-field neu-input" />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email:</label>
              <input v-model="email" id="email" class="form-control input-field neu-input" type="email" />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password:</label>
              <input v-model="password" id="password" class="form-control input-field neu-input" type="password" />
            </div>
            <div class="mb-4">
              <label for="address" class="form-label">Address:</label>
              <textarea v-model="address" id="address" class="form-control input-field neu-input" rows="4"></textarea>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input v-model="termsAgreed" class="hidden-checkbox" type="checkbox" id="termsAgreed" />
                <label class="custom-checkbox" for="termsAgreed"></label>
                <label class="form-check-label ml-4" for="termsAgreed">I agree to the terms of service</label>
              </div>
            </div>
            <div class="text-center mt-4">
              <button @click="register" :disabled="!isValid" class="btn btn-primary submit-button neu-btn">Register</button>
            </div>

            <!-- Bar Chart -->
            <div class="bar-chart mt-5">
              <div class="bar" :style="{ height: nameLength + 'px' }">Name Length score: {{ nameLength }}</div>
              <div class="bar" :style="{ height: emailLength + 'px' }">Email Length score: {{ emailLength }}</div>
              <div class="bar" :style="{ height: passwordLength + 'px' }">Password Length: {{ passwordLength }}</div>
              <div class="bar" :style="{ height: addressLength + 'px' }">Address Length: {{ addressLength }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// You'll include the computed properties and methods from the second form:
import { computed } from 'vue';

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      address: "",
      termsAgreed: false
    };
  },
  computed: {
    isValid() {
      return this.name && this.email && this.password && this.address && this.termsAgreed;
    },
    nameLength() {
      return this.name.length * 10;
    },
    emailLength() {
      return this.email.length * 10;
    },
    passwordLength() {
      return this.password.length * 10;
    },
    addressLength() {
      return this.address.length * 10;
    }
  },
  methods: {
    register() {
      if (this.isValid) {
        this.$emit("user.register", {
          name: this.name,
          email: this.email,
          password: this.password,
          address: this.address
        });
      }
    }
  }
};
</script>

<style scoped>
/* Combined Styles */

.contact-page, .contact-bg {
  background: url('https://www.clearwallpaper.com/wp-content/uploads/2021/04/bakery-wallpaper-001-1536x864.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  padding: 0 15px; /* Added from responsive styles for smaller screens */
}

.card, .contact-form {
  background-color: #faf5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: -5px -5px 10px #fff, 5px 5px 10px #babecc, 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
  animation: fadeInUp 0.5s ease;
  color: #000; /* This ensures the text color is black */
}

h2, label, .form-check-label {
  color: #000; /* Sets the color of h2, label, and checkbox label to black */
}

.neu-input, .neu-textarea, .input-field {
  background-color: #ececec;
  border: none;
  padding: 8px 12px;
  border-radius: 10px;
  box-shadow: inset -4px -4px 10px #a3a3a3, inset 4px 4px 10px #ffffff;
  width: 95%; /* 95% was chosen to keep consistency */
  outline: none;
  transition: all 0.3s ease-in-out;
}

.input-field:focus {
  box-shadow: inset -2px -2px 5px #a3a3a3, inset 2px 2px 5px #ffffff;
}

.btn-primary, .neu-btn {
  background-color: #3498db;
  border: none;
  padding: 10px 25px;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: -4px -4px 10px #a3a3a3, 4px 4px 10px #ffffff;
  transition: all 0.3s ease-in-out;
  width: 100%;
}

.btn-primary:hover, .neu-btn:hover {
  background-color: #2980b9;
  box-shadow: -2px -2px 5px #a3a3a3, 2px 2px 5px #ffffff;
}

.btn-primary:disabled, .neu-btn:disabled {
  background-color: #d1d1d1;
  cursor: not-allowed;
}

.form-check-input {
  width: 20px;
  height: 20px;
  display: none; /* This was added as the second template hides the native checkbox */
}

.custom-checkbox {
  width: 24px;
  height: 24px;
  background-color: #ececec;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  box-shadow: -4px -4px 10px #a3a3a3, 4px 4px 10px #ffffff;
  display: inline-block;
  margin-right: 10px; /* Added for spacing */
}

.custom-checkbox:after {
  content: '';
  position: absolute;
  top: 6px;
  left: 6px;
  width: 12px;
  height: 12px;
  background-color: #ffffff;
  border-radius: 3px;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.2s;
}

.hidden-checkbox:checked + .custom-checkbox {
  background-color: #9a1065;
  box-shadow: none;
}

.hidden-checkbox:checked + .custom-checkbox:after {
  opacity: 1;
  transform: scale(1);
}

.bar-chart {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.bar {
  width: 50px;
  background-color: #c51e72;
  color: white;
  text-align: center;
  transition: height 0.2s;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Styles */
@media (max-width: 768px) {
  .container {
    padding: 0 15px; 
  }

  .contact-form {
    padding: 20px;
  }

  .bar-chart {
    flex-direction: column;
    align-items: center;
  }

  .bar {
    margin-bottom: 10px;
  }
}
</style>


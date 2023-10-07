
<template>
  <section class="home-page">
    <div class="profile-circle">
      <img src="https://th.bing.com/th/id/OIP.kvKHlMN7XZ3BHQq3s4WZbwAAAA?pid=ImgDet&rs=1" alt="Your Name">
    </div>
    <div class="home-content">
      <h1>Welcome to BAKE IT!</h1>
    </div>
    <!-- Transition for AI Customer Service -->
    <transition name="fade">
      <h2 v-if="show"> AI Customer Service </h2>
    </transition>
    
    <!-- Display Chat based on chatView value -->
    <div class="chatbox" v-if="chatView === 'show'">
      <div v-for="message in messages">
        <strong v-if="message.sender==='user'">You: </strong>
        <strong v-if="message.sender==='ai'">AI: </strong>
        {{ message.content }}
      </div>
      <div>
        <input v-model="userMessage" type="text" placeholder="Ask BakeIT bot..." @keyup.enter="sendMessage">
        <button @click="sendMessage">Send</button>
      </div>
    </div>

    <!-- Toggle Chat View Options -->
    <div class="chat-toggle-options">
      <label>
        <input type="radio" v-model="chatView" value="show"> Show Chat
      </label>
      <label>
        <input type="radio" v-model="chatView" value="hide"> Hide Chat
      </label>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userMessage: '',
      messages: [],
      chatView: 'show',
      show: true,  
      myTrack: new Audio('assets/notifications.mp3')
    };
  },
  methods: {
    sendMessage() {
      if (!this.userMessage) return;
      this.messages.push({ sender: 'user', content: this.userMessage });
      this.messages.push({ sender: 'ai', content: this.getAIResponse(this.userMessage) });
      this.userMessage = '';
      this.show = false; 
      this.myTrack.play();
    },
    getAIResponse(question) {
  const predefinedAnswers = {
    "hello": "Hello! How can I assist you today? Here are some topics I can help with: menu items, delivery times, special offers, payment options, order status, and more.",
    "menu items": "We offer a variety of bakery items and desserts, including cakes, pastries, cookies, and more. Would you like to see our full menu?",
    "delivery times": "For most areas, we deliver within 2-4 hours of your order. However, for special items, it might take a little longer.",
    "special offers": "We have a 'Buy 1 Get 1 Free' offer on cupcakes today! Also, new customers enjoy a 15% discount on their first order.",
    "payment options": "We accept Visa, Mastercard, PayPal, and Cash on Delivery.",
    "order status": "To check the status of your order, please provide your order number.",
    "vegan options": "Yes, we have a selection of vegan desserts. Would you like to explore them?",
    "allergies": "If you have any allergies, please let us know while placing your order, and we'll do our best to accommodate.",
    "custom cakes": "Absolutely! We specialize in custom cakes. Share your ideas, and we'll bake your dream cake!",
    "return policy": "Given the perishable nature of our products, we accept returns only if the item delivered is damaged or incorrect. Please contact us within 24 hours of delivery."
  };
  for (let key in predefinedAnswers) {
    if (question.toLowerCase().includes(key)) {
      return predefinedAnswers[key];
      
      myTrack.play();
    }
  }
  return "I'm sorry, I couldn't quite understand that. For more specific queries, please visit our 'Contact Us' page or email us directly.";
}

  }
};
</script>

<style scoped>
  .v-enter-from,
.v-leave-to {
  opacity: 0;
}
@media (max-width: 768px) {
  .home-content h1 {
    font-size: 2em;  /* Slightly smaller heading for mobile devices */
  }

  .profile-circle {
    width: 150px;  /* Slightly smaller image circle for mobile devices */
    height: 150px;
  }

  .chatbox {
    max-width: 300px;  /* Narrower chatbox for mobile devices */
  }
}
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(https://th.bing.com/th/id/R.861f80486f7aa0f6dbb569b9a39bec24?rik=tSRMQ%2fmSgNH9Og&riu=http%3a%2f%2f4.bp.blogspot.com%2f-wWuTowwVP80%2fUQ-EOuk90WI%2fAAAAAAAAGxM%2fPtWJoPiL00I%2fs1600%2fwallpaper21.jpg&ehk=N4%2bQ0c1UHFq8SO1ijGt17%2f4ymFIWL6ViZfSR2m9UMsw%3d&risl=&pid=ImgRaw&r=0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
}

.profile-circle {
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  border: 5px solid #a94949;
  box-shadow: 0 0 15px #a94949;
}

.profile-circle img {
  width: 100%;
  height: 100%;
}

.home-content {
  text-align: center;
  margin-top: 20px;
}

.home-content h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px #a94949;
}




.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

  /* You can style the chat toggle options if needed */
  .chat-toggle-options {
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>






















































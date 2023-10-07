<template>
    <div class="chatbox">
      <div v-for="message in messages">
        <strong v-if="message.sender==='user'">You: </strong>
        <strong v-if="message.sender==='ai'">AI: </strong>
        {{ message.content }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      messages: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
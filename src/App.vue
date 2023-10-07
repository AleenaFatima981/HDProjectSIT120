<script setup>


import { RouterLink, RouterView } from "vue-router";

import FooterComponent from './components/FooterComponent.vue';








</script>

 



<template>

  <div class="nav-container">

    <input type="checkbox" id="menu-toggle" class="menu-toggle" />

    <label for="menu-toggle" class="dropdown-btn">Menu</label>

    <div class="links-container">

      <RouterLink class="nav-link" to="/">Home</RouterLink>
      
      <RouterLink class="nav-link" to="/about">About</RouterLink>

      <RouterLink class="nav-link" to="/ContactUs">ContactUs</RouterLink>

      <RouterLink class="nav-link" to="/blog">Blogs</RouterLink>


      
    </div>

  </div>

 

  <div class="page-container">

    <div class="content-wrapper">

      <!-- Your main content goes here -->

      <RouterView />

    </div>

    <footer class="amazing-footer">

      <!-- Your footer content as provided -->

 

      <FooterComponent />

    </footer>

  </div>

</template>

 

<style scoped>
body {
  height: 100%;
  width: 100%; 
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
}

.page-container {
  display: flex;
  flex-direction: column;
  flex: 1; /* This ensures the container expands to fill available space */
}


.page-container {

  display: flex;

  flex-direction: column;

  min-height: 100vh; /* This ensures the container takes at least the full height of the viewport */

}

 

.content-wrapper {

  flex: 1; /* This makes the content take up all available space, pushing the footer to the bottom */

}

 

.nav-container {

  display: flex;

  justify-content: center;

  background-color: #840559;

  padding: 10px 0;

  position: relative;

  flex-wrap: wrap;

}

 

.nav-link {

  text-decoration: none;

  color: #ecf0f1;

  padding: 10px 20px;

  margin: 0 10px;

  font-size: 1.1em;

  transition: background-color 0.3s, color 0.3s;

  border-radius: 4px;

}

 

.nav-link:hover {

  background-color: #471441;

  color: #bdc3c7;

}

 

.router-link-active {

  color: #0b0403;

  background:linear-gradient(120deg, #c51e72, #c2e9fb);

  border-radius: 4px;

}

 

/* Mobile styles */

.menu-toggle {

  display: none; /* hide the checkbox */

}

 

.dropdown-btn {

  display: none;

  background-color: #dda6a6;

  color: #ecf0f1;

  padding: 10px 20px;

  border: none;

  cursor: pointer;

  border-radius: 4px;

}

 

.links-container {

  display: flex;

}

 

/* Media query for small screens */

@media (max-width: 768px) {

  .dropdown-btn {

    display: block;

  }

 

  .links-container {

    display: none;

    flex-direction: column;

    position: absolute;

    top: 100%;

    left: 0;

    right: 0;

    background-color: linear-gradient(120deg, #c51e72, #c2e9fb);

  }

 

  .menu-toggle:checked + .dropdown-btn + .links-container {

    display: flex;

  }

}

</style>
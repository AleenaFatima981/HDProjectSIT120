<template>

    <footer class="amazing-footer">

      <div class="footer-content">

        <div class="footer-section">

          <h4>About Us</h4>

          <p>
            We are a team of passionate bakers dedicated to
            creating the best desserts.
          </p>
          <div class="gradient-animation"></div>

        </div>

        
        <div class="footer-section">

          <h4>Contact Info</h4>

          <p><i class="fas fa-map-marker-alt"></i> 1 Street, Canbeera</p>

          <p><i class="fas fa-phone"></i> +61 234 567 890</p>

          <p><i class="fas fa-envelope"></i> aleenaf281@gmail.com</p>

        </div>

      </div>

      <div class="footer-bottom">

        <p>&copy; 2023 Bake It. All rights reserved.</p>

      </div>

    </footer>

</template>


<script setup>

</script>


<style scoped>
.gradient-animation {
  position: absolute;
  top: -10%;
  left: -100%;
  width: 200%;
  height: 10%;
  z-index: 1;
  background: linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05), rgba(255,255,255,0.2));
  animation: gradientRotate 30s infinite linear;
}

@keyframes gradientRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.amazing-footer {
  background-color: #840559;
  color: #ecf0f1;
  padding: 40px 0;
  font-family: "Arial", sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-section {
  flex: 1;
  margin: 0 10px;  
}

.footer-section h4 {
  border-bottom: 2px solid #e74c3c;
  padding-bottom: 10px;
  margin-bottom: 15px;  
}

.footer-section p,
.footer-section li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #e74c3c;
}

.footer-bottom {
  text-align: center;
  margin-top: 30px;  
  border-top: 1px solid #34495e;
  padding-top: 15px;  
}

.fas {
  margin-right: 10px;
}

</style>

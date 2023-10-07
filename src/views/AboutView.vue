<template>
  <section class="bakery-page">
    <div class="bakery-items">

      <div class="bakery-item" v-for="item in items" :key="item.name">
        <img :src="item.image" :alt="item.name" class="bakery-image">
        <h2>{{ item.name }}</h2>
        <button @click="addToCart(item.name)" class="order-btn">Order</button>
      </div>
      
    </div>
    
    <div class="cart">
    <div class="cart-icon"></div>
    <span>{{ cart.length }}</span>
  </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const items = [
  { name: 'Oreo Cake - 50$ ★★★★★', image: 'https://thecakebox.com.mt/wp-content/uploads/2021/06/oreo_cake-r.png' },
  { name: 'Red Velvet Cupcake- 5$★★★', image: 'https://cupcakesandmorelincoln.com/wp-content/uploads/2018/10/go-big-red-velvet-1.png' },
  { name: 'Cookies- 3$ ★★★', image: 'https://th.bing.com/th/id/R.d95486c3841656bcac70bd8d20b655fa?rik=KKMbV21SIqpgUA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f07%2fCookie-PNG-File.png&ehk=1jhu6Gm4tKu8bPBDzopzbeGwh5eJamkll1GvfPTPsLM%3d&risl=&pid=ImgRaw&r=0' },
  { name: 'Buns- 2$ ★★' , image: 'https://th.bing.com/th/id/R.41a1d6c03f7c28fcecc655999d961897?rik=ZqLWhPu%2bruexJw&pid=ImgRaw&r=0' },
  { name: 'Croissants- 3.5$ ★★', image: 'https://th.bing.com/th/id/R.28806725ca81c7f3258064291123c259?rik=EnzGQx63T4vVuw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fbun%2fbun_PNG13766.png&ehk=iEfwT9x0wC8c9IIjuDHKTX2z9mJZqWBe8XNVpkapmiw%3d&risl=1&pid=ImgRaw&r=0' }
];

const cart = ref([]);

const addToCart = (itemName) => {
  cart.value.push(itemName);
  alert('Your item is added to cart');
};

</script>

<style scoped>

.bakery-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 40px 0;
  background: linear-gradient(120deg, #c51e72, #c2e9fb);
}

.bakery-item {
  margin: 20px;
  text-align: center;
}

.bakery-image {
  max-width: 200px;
  max-height: 200px;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  object-fit: cover;
}

.bakery-image:hover {
  transform: scale(1.25);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.order-btn {
  display: inline-block;
  background-color: #e74c3c;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.order-btn:hover {
  background-color: #c0392b;
}

.cart {
  position: fixed;
  bottom: 10px;
  right: 60px;
  display: flex;
  align-items: center;
}

.cart-icon {
  width: 60px;  /* Adjusted width */
  height: 40px; /* Adjusted height */
  background-image: url('https://cdn.iconscout.com/icon/free/png-512/shopping-cart-442-1151214.png');
  background-size: contain; /* Ensure the image fits the div */
  background-repeat: no-repeat; /* Prevent repeating */
  background-position: center; /* Center the background image */
  border-radius: 50%;
  margin-right: 10px;
}

</style>


















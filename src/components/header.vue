<script setup>

</script>

<template>
 <header>
   <nav>
     <ul>
       <li><RouterLink to="/menu">Главная</RouterLink></li>
       <li><RouterLink to="/products">Товары</RouterLink></li>
       <li><RouterLink to="/about">О компании</RouterLink></li>
       <li><RouterLink to="/">Главная</RouterLink></li>
     </ul>
   </nav>
 </header>
</template>

<style scoped>
nav{
  background: aqua;
}
ul{
  list-style-type: none;
  display: flex;
}
a{
  display: inline-block;
  padding: 20px 40px;
  color: aliceblue;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  background: aquamarine;
  color: teal;
}
</style>
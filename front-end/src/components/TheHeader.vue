<template>
  <header>
    <img src="../assets/logo.png" class="header-logo" />
    <h1>ProjectRAS</h1>
  </header>
</template>
<style lang='scss'>
header {
  height: 20rem;
  display: flex;
  align-items: center;
  position: relative;
}
.header-logo {
  transform: translateY(-5rem);
  position: absolute;
  height: 25%;
  width: 25rem;
  padding-top: 1rem;
  object-fit: none;
  background-color: white;
  box-shadow: black 4px 3px 8px;
  border-radius: 20px;
}
</style>
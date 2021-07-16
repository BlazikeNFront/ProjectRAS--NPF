<template>
  <header>
    <img src="../assets/logo.png" alt="app logo" class="header-logo" />
    <h1 class="main-header__h1">ProjectRAS</h1>
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
  position: absolute;
  top: 3rem;
  left: -3rem;
  height: 25%;
  width: 25rem;
  padding-top: 1rem;
  object-fit: none;
  background-color: white;
  box-shadow: black 4px 3px 8px;
  border-radius: 20px;
  transform: scale(0.7);
}
.main-header__h1 {
  margin-top: 13rem;
  width: 100%;
  font-size: 5rem;
  text-align: center;
}
@media (min-width: 375px) {
  .main-header__h1 {
    font-size: 4rem;
  }
}
@media (min-width: 500px) {
  .header-logo {
    left: 0rem;
    transform: none;
  }
}
</style>
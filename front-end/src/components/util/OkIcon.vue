<template>
  <div class="protocolBox__checkmarkIconBox">
    <span class="protocolBox__checkmarkIcon"></span>
  </div>
</template>
<style lang="scss">
.protocolBox__checkmarkIconBox {
  background-color: green;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.protocolBox__checkmarkIcon {
  position: relative;

  &:before {
    content: "";
    width: 1rem;
    height: 0.5rem;
    background-color: white;
    position: absolute;
    transform: translate(-1.1rem, 2.1rem) rotate(45deg);
    border-radius: 10px 0px 0px 10px;
  }
  &:after {
    content: "";
    width: 2rem;
    height: 0.5rem;
    background-color: white;
    position: absolute;
    transform: translate(-0.8rem, 1.8rem) rotate(-45deg);
    border-radius: 0px 10px 10px 0;
  }
}
</style>
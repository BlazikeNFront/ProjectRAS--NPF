<template>
  <div class="protocolBox__dangerIconBox">
    <span class="protocolBox__dangerIcon"></span>
  </div>
</template>
<style lang="scss">
.protocolBox__dangerIconBox {
  background-color: red;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.protocolBox__dangerIcon {
  position: relative;

  &:before {
    content: "";
    width: 0.7rem;
    height: 2rem;
    background-color: white;
    position: absolute;
    top: 0.5rem;
    transform: translate(-50%);
    border-radius: 5px;
  }
  &:after {
    content: "";
    width: 0.7rem;
    height: 0.7rem;
    background-color: white;
    position: absolute;
    top: 2.7rem;
    transform: translate(-50%);
    border-radius: 50%;
  }
}
</style>
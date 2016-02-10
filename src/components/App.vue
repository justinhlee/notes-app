<template>
  <!-- header -->
  <div class="header">
    <div class="container">
      <center><span class="header-icon">¶</span></center>
    </div>
  </div>

  <!-- main view -->
  <router-view></router-view>
</template>

<style>
  .header {
    border-bottom: 3px solid #fea;
    background-color: #fffbec;
    padding-bottom: 5px;
    padding-top: 5px;
  }

  .header-icon {
    font-family: 'Inconsolata', sans-serif;
    letter-spacing: 1px;
    color: #fc0;
  }
</style>
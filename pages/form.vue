<template>
  <div class="form-container">
    <iframe
      src="https://app.youform.com/forms/p2pfyfcl"
      loading="lazy"
      width="100%"
      height="100%"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      class="iframe"
    ></iframe>
  </div>
</template>

<script setup>
useHead({
  title: "My Form",
  meta: [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
    },
  ],
});
</script>

<style>
.form-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-top: 4rem;
}

.iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>

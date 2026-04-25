<template>
  <div class="min-h-screen bg-void">
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
      />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Book a Call — Remy Automates",
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
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
  padding-top: 4rem;
  background-color: #050508;
}

.iframe {
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
  height: calc(100% - 4rem);
  border: 0;
}

@media (max-width: 768px) {
  .form-container {
    padding-top: 3.5rem;
  }
  .iframe {
    top: 3.5rem;
    height: calc(100% - 3.5rem);
  }
}
</style>

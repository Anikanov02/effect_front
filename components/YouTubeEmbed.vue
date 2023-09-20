<template>
  <youtube :video-id="videoId"></youtube>
</template>
  
  <script>
  export default {
    props: {
      videoId: {
        type: String,
        required: true,
      },
    },
  };
  </script>
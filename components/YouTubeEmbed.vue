<template>
    <div>
      <youtube :video-id="videoId"></youtube>
    </div>
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
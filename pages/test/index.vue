<template>
    <div>
      <img :src="img_url" alt="">
      <p>{{ title }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "Hello, Vue!",
        img_url: "",
        title: ""
      };
    },
    mounted(){
        const vidurl = 'https://www.youtube.com/watch?v=ZvUMvV_YZKg';

        fetch(`https://noembed.com/embed?dataType=json&url=${vidurl}`)
        .then(res => res.json())
        .then(data => {
            this.img_url = data.thumbnail_url
            this.title = data.title
        })
    },
    methods: {
      changeMessage() {
        this.message = "New Message!";
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  
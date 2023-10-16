<template>
  <div>
    <img :src="img_url" alt="">
    <p>{{ title }}</p>
  </div>
</template>
  
<script>
import lodash from 'lodash';

export default {
  data() {
    return {
      message: "Hello, Vue!",
      img_url: "",
      title: "",
      videos: []
    };
  },
  mounted() {
    const channelUrl = 'https://www.youtube.com/@VertDiderScience';

    this.fetchYoutubeData(channelUrl);

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
    },

    async fetchYoutubeData(url) {
      await this.$axios
        .get(url)
        .then(( response ) => {
          console.log("got response")
          const html = response.data
          this.readData(html)
        })
    },

    async readData(html) {
        console.log(html)
        const json = this.extractJson(html);
        console.log("parsed json " + json)
        const jsonObject = JSON.parse(json);
        console.log("parsed json")
        const videos = lodash.pick(jsonObject, "videoRenderer");
        console.log(`got ${count} videos`, videos.length)
        this.videos = videos.map((video) => {
          console.log("parsing video")
          const thumbnails = lodash.pick(video, "thumbnails").flat();
          const url = thumbnails[thumbnails.length - 1].url;
          console.log("pic url : " + url)
          const title = lodash.pick(video.title, "text")[0];
          console.log("title : " + title)
          const relativeUrl = video.navigationEndpoint.commandMetadata.webCommandMetadata.url;
          console.log("video url : " + relativeUrl)
          return {
            previewUrl: url,
            title: title,
            relativeUrl: 'https://www.youtube.com' + relativeUrl
          }
        })
    },

    async extractJson(html) {
      const tempElement = document.createElement('div');
      tempElement.innerHTML = html;
      const scriptElements = Array.from(tempElement.querySelectorAll('script'));
      const json = scriptElements.map((scriptElement) => scriptElement.textContent)
        .filter((text) => text.includes('var ytInitialData'))
        .map((text) => {
          const firstIndex = str.indexOf("{");
          const lastIndex = str.lastIndexOf("}");
          var json
          if (firstIndex !== -1 && lastIndex !== -1) {
            json = str.substring(firstIndex, lastIndex + 1);
            return json;
          } else {
            return "{}"
          }
        });
    }
  }
};
</script>
  
<style scoped>
/* Add your component-specific styles here */
</style>
  
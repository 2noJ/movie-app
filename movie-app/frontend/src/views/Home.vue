<template>
  <div class="home">
<tool-bar></tool-bar>

<main class="index">
<section class="inner_content new_index">

<div id="media_v4" class="media discover">
        <div class="column_wrapper">
          <div class="content_wrapper wrap">
            <div class="title">
              <h2>Welcome.</h2>
              <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
            </div>

            <div class="search">
              <form id="inner_search_form" action="/search?language=ko" method="get" accept-charset="utf-8">
                
                  <input type="hidden" name="language" value="ko">
                
                <label>
                  <input dir="auto" id="inner_search_v4" name="query" type="text" tabindex="1" autocorrect="off" autofill="off" autocomplete="off" spellcheck="false" placeholder="영화, TV 프로그램, 인물 검색..." value="">
                </label>
                <input type="submit" value="Search">
              </form>
            </div>

          </div>
        </div>
      </div>
</section>

<section class="inner_content">
<div class="column_wrapper">
  <div class="column">
<div class="column_header">What's Popular  <button>영화</button><button>TV</button></div>
<div class="popular_scroll"><div class="popular_scroll_content scrollbar_set">

<div v-for="(popular, index) in populars" :key="index">
 
  <div> <img class="poster_img" loading="lazy" :src='srcURL + popular.poster_path'></div>
  <div>{{popular.vote_average*10+'%'}} </div>
  <div>{{popular.title}}</div>
  <div>{{popular.release_date}}</div>
</div>
</div>
  </div>
</div></div>
</section>
<section>
  <div style="height: 300px">123</div>
</section>

</main>


</div>
</template>

<script>
import ToolBar from '../components/ToolBar.vue'
export default {
  name: 'Home',data(){
    return{
      srcURL: "https://www.themoviedb.org/t/p/w220_and_h330_face/",

    }
  },
  components: {
    ToolBar
    },
    created(){
      this.$store.dispatch('GET_POPULAR');
      this.$store.dispatch('GET_TREND');
  
    },
    computed:{
      populars(){
    return this.$store.state.populars
      },
      testVal(){
      return this.$store.state.trend
    }
  ,
  
}
  
}
</script>

<style>
main{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    background-color: #fff;
    margin-top: 64px;
}
  section.inner_content{
     
        display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  section.new_index {
    background-image: linear-gradient(to right, rgba(var(--tmdbDarkBlue), 0.8) 0%, rgba(var(--tmdbDarkBlue), 0) 100%), url('https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/iDbIEpCM9nhoayUDTwqFL1iVwzb.jpg');
    min-height: 300px;
    /* height: calc(100vh / 2.5); */
    max-height: 360px;
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
  }
  
  div.media {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
}
div.column_wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
}
  div.media.discover div.content_wrapper {
    flex-wrap: wrap;
  }
  div.column_wrapper div.content_wrapper {
   
    width: 100%;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 30px;
    padding-bottom: 30px;
}
div.media.discover div.content_wrapper>div.title {
    width: 100%;
    margin-bottom: 20px;
}
div.media.discover div.content_wrapper>div.title h2 {
    font-size: 3em;
    font-weight: 700;
    line-height: 1;
}
section.new_index h3 {
    font-size: 2em;
    font-weight: 600;
    margin: 0;
}
section.new_index div.search {
    width: 100%;
}
section.new_index form {
    margin-top: 30px;
    position: relative;
    top: 0;
    left: 0;
}
section.new_index form input[type=text] {
    width: 100%;
    height: 46px;
    line-height: 46px;
    font-size: 1.1em;
    color: rgba(0,0,0,0.5);
    border: none;
    border-radius: 30px;
    /* padding: 10px 20px; */
}
section.new_index form input[type=submit] {
    display: inline-flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 48px;
    padding: 10px 26px;
    border: none;
    background: linear-gradient(to right, rgba(var(--tmdbLightGreen), 1) 0%, rgba(var(--tmdbLightBlue), 1) 100%);
    border-radius: 30px;
    position: absolute;
    top: 0;
    right: -5px;
    color: #fff;
}


.popular_scroll{
      position: relative;
    top: 0;
    left: 0;
      width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
}
.popular_scroll_content{
  width: 100%;
    /* max-width: var(--maxPrimaryPageWidth); */
    min-height: 355px;
    overflow-x: scroll;
    overflow-y: hidden;
    transition: height .5s linear;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    padding-top: 20px;
    padding-bottom: 20px;
}
  .scrollbar_set::-webkit-scrollbar {
    width: 10px;
  }
  .scrollbar_set::-webkit-scrollbar-thumb {
    background-color: rgb(219,219,219);
    border-radius: 10px;
    background-clip: padding-box;
    border: 4px solid transparent;
    
  }
  .scrollbar_set::-webkit-scrollbar-track {
    background-color: white;
    /* border-radius: 10px; */
    /* box-shadow: inset 0px 0px 5px white; */
  }
  .poster_img{
    border-radius: 20px;
    margin : 20px;
  }
  div.column_wrapper div.column {
    width: 100%;
}
  .section.inner_content div.column_header {
  padding-left: 40px;
    padding-right: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
}
</style>

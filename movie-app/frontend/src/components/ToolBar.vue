<template>
  <header class="toolbar-wrap">
    <div class="content">
        <div class="sub_media">
            <div class="nav_wrapper">
                <a class="logo" href="/">
                <img src="../assets/logo.svg" alt="The Movie Database (TMDB)" width="154" height="20">
            </a>
            <ul class="dropdown_menu">
                <li class="header_dropdown_li">
                    <a class="pointer">영화</a>
                    <div class="header_dropdown_div">
                    <ul class="dropdown_items">
                        <li class="pointer">인기</li>
                        <li class="pointer">현재상영중</li>
                        <li class="pointer">개봉예정</li>
                        <li class="pointer">높은평점</li>
                    </ul>
                    </div>
                </li>
                <li class="header_dropdown_li">
                    <a class="pointer">TV프로그램</a>
                    <div class="header_dropdown_div">
                    <ul class="dropdown_items">
                        <li class="pointer">인기</li>
                        <li class="pointer">오늘 방영</li>
                        <li class="pointer">TV방영중</li>
                        <li class="pointer">높은평점</li>
                    </ul>
                    </div>
                </li><li class="header_dropdown_li">
                    <a class="pointer">인물</a>
                    <div class="header_dropdown_div">
                    <ul class="dropdown_items">
                        <li class="pointer">인기 인물</li>
     
                    </ul>
                    </div>
                </li><li class="header_dropdown_li">
                    <a class="pointer">More</a>
                    <div class="header_dropdown_div">
                    <ul class="dropdown_items">
                        <li class="pointer">토론랭킹</li>
                        <li class="pointer">기여랭킹</li>
                        <li class="pointer">지원</li>
                        <li class="pointer">API</li>
                    </ul>
                    </div>
                </li>
            </ul>
            </div>
            <div class="flex">
                <ul class="primary">
                    <li class="search_buttons pointer"><i class="fas fa-search"></i></li>
                </ul>
            </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.toolbar-wrap{
    background-color: #032541;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 64px;
    width: 100%;
    z-index: 10;
    transition: top 0.2s linear;
}
header div.content {
    width: 100%;
    display: flex;
    justify-content: center;
}
header div.sub_media{
   display: flex;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    max-width: var(--maxPrimaryPageWidth);
    width: 100%;
    padding: 0 40px;
}
header div.nav_wrapper{
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    overflow: visible;
}
header div.nav_wrapper ul.dropdown_menu{
    display: flex; 
    padding: 0;
    align-items: center;
    height: 40px;
    margin: 0;
  
}
header a {
    color: #fff;
    font-weight: 600;
}
a.logo{
    display: block;
    margin-right: 16px;
    width: 154px;
    height: 20px;
}
a.logo img{
    display: block;
    width: 100%;
    margin : auto
}
header
ul.dropdown_menu li.header_dropdown_li {
    color: white;
    list-style: none;
    font-weight: bold;

    margin-right: 13px;
}
.header_dropdown_div {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1
}
.header_dropdown_li{
    position: relative;
    display: inline-block;
}
.header_dropdown_li:hover .header_dropdown_div{
    display: block;
}
.dropdown_items li{
    color: black;
    display: block;
     list-style: none;
     
}
ul.dropdown_items{
    padding: 0;
    font-weight: normal;
    
}
ul.dropdown_items li{
    margin: 10px 0;
    
}

.pointer{
    cursor: pointer;
}
header div.flex {
    display: flex;
    justify-content: flex-end;
    flex-wrap: nowrap;
}
ul.primary{
list-style: none;
}
ul.primary li.search_buttons{
    color:skyblue;
    font-size: 22px;
}
</style>
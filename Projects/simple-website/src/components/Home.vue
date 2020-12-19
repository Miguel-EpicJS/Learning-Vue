<template>
  <div>
    <!-- Menu here -->

    <div class="container">
      <div class="title-group">
        <h1 class="title">Lorem, ipsum dolor.</h1>
        <p class="title-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br> Quam maiores dolore excepturi quod molestiae quos?</p>
      </div>
    </div>
    <div class="container">
      <div class="work">
        <div class="left-work">
          <img class="img-work" src="https://source.unsplash.com/1280x720/?work">
        </div>
        <div class="right-work">
          <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, iure quae quas veritatis maxime perferendis accusantium ipsum dolores voluptatum autem!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style>
  .title-group{
    line-height: 1.5;
    margin-left: 30px;
  }
  .title-group .title{
    font-size: 4.5rem;
  }
  .title-group .title-desc{
    margin-left: 50px;
    font-size: 2rem;
  }
  .title-group .title-desc::first-letter{
    margin-left: 20px;
    font-size: 4.5rem;
    color: #D9CF1E;
    font-weight: 900;
  }
  .work{
    display: flex;
    align-items: center;
  }
  .work .left-work, .work .right-work{
    flex-basis: 50%;
    margin: 0 50px;
  }
  .work .left-work img{
    width: 100%;
    height: auto;
    border-radius: 100%;
  }
  .work .right-work{
    font-size: 1.5rem;
  }
</style>

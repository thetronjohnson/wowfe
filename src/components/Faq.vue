<template>
    <div class="main faq">
      <h1 class="title">FAQ</h1>
      <div class="content">
        <h2 class="subtitle">How do I measure rain?</h2>
        <div class="main-text">
          <h3>Reading your rain gauge</h3>
          <p>The rain gauge is composed of three parts:
            a funnel, a measuring tube, and a 4-inch diameter overflow tube,
            and a mounting bracket. The funnel directs the precipitation into
            the measuring tube and magnifies it by a factor of 10. This allows
            observers to report rainfall to the nearest 0.01" (one hundredth of an inch).
            The measuring tube, when full, will hold "one inch" of rainfall.
            When it rains more than one inch, the excess water collects in the overflow tube.</p>
          <p>Reading the rain gauge is a very easy thing to do, but mistakes can occur.
            Here are several situations that you may encounter when r
            eading your rain gauge and how you should deal with them. </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Faq',
}
</script>
<style scoped>
.faq{
  margin-left: 25vw;
  margin-right: 25vw;
}
.subtitle{
  font-weight: bold;
  text-align: left;
}
p {
  text-align: justify;
}
</style>
<template>
  <footer class="site-footer">
    <div class="footer-about">
      <h6>About</h6>
      <p class="footer-something">
        Something here
      </p>
    </div>
    <hr />
    <p class="footer-copy">
      Copyright &copy; 2020
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
.site-footer {
  position: relative;
  background: rgba(0, 0, 0, 0.9);
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}

.footer-about {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}

.footer-something {
  color: #fff;
  font-size: 10px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}

/* add blank line to divide footer with the bottom */
.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}

.footer-copy {
  color: rgb(211, 44, 44);
  font-size: 12px;
  letter-spacing: 2px;
  margin-top: 5px;
}

@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text {
    text-align: center;
  }
}
</style>

<template>
  <!--Form Back Drop-->
  <div class="form-back-drop" @click="toggleSidebar()"></div>

  <!-- Hidden Sidebar -->
  <section class="hidden-bar">
    <div class="inner-box text-center">
      <div class="cross-icon" @click="toggleSidebar()">
        <span class="fa fa-times"></span>
      </div>
      <div class="title">
        <h4>Get Appointment</h4>
      </div>

      <!--Appointment Form-->
      <div class="appointment-form ">
        <a class="whatsapp-btn" href="https://wa.me/60132555051?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20services." target="_blank">
          <i class="fab fa-whatsapp"></i> WhatsApp Us
        </a>
      </div>

      <!--Social Icons-->
      <div class="social-style-one pt-75 rpt-45 rel z-1">
        <a href="https://www.facebook.com/tcdigitaltech" class="social-icon"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/tcdigitaltech" class="social-icon"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </section>
  <!--End Hidden Sidebar -->
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    toggleSidebar() {
      document.querySelector("body").classList.remove("side-content-visible");
    },
  },
};
</script>

<style scoped>
.whatsapp-btn {
  display: inline-block;
  padding: 15px 25px;
  font-size: 18px;
  color: #fff;
  background-color: #25d366;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  margin-top: 20px;
}
.whatsapp-btn i {
  margin-right: 10px;
}

.social-style-one .social-icon {
  display: inline-block;
  margin: 0 10px;
  font-size: 30px; /* Increase this value to make the icons larger */
  color: #555;
  transition: color 0.3s;
}

.social-style-one .social-icon:hover {
  color: #000;
}
</style>
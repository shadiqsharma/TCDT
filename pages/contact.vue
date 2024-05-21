<template>
  <NuxtLayout name="ygency" :header="1" :footer="1" :singlePage="true">
    <PageBanner :pageName="'Contact'" />
    <!-- Contact Form Area start -->
    <section class="contact-page-area py-130 rpy-100 rel z-1">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-6">
            <div class="our-location-part rmb-55 wow fadeInUp delay-0-2s">
              <div class="row">
                <div class="col-xl-10">
                  <div class="section-title mb-60">
                    <span class="sub-title mb-15">Contact Us</span>
                    <h2>Ready to Work Your Next Projects</h2>
                  </div>
                </div>
              </div>
              <div class="row gap-80 pb-30">
                <div class="col-sm-6">
                  <div class="our-location-address mb-40">
                    <h5>Langkawi</h5>
                    <p>TC Garden Resort, Lot 39, Kg Padang Ragut, Jalan Ulu Melaka, Mukim Ayer Hangat, 07000, Langkawi</p>
                    <a class="mailto" ref="emailLangkawi"></a><br />
                    <a class="callto" href="tel:+60132555051"><i class="fas fa-phone"></i> +60 (13) 2555051</a><br />

                  </div>
                </div>
                <div class="col-sm-6">
                  <!-- Other location or additional content can go here -->
                </div>
              </div>
              <h4>Follow Us</h4>
              <div class="social-style-two pt-15">
                <a href="https://www.facebook.com/tcdigitaltech"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/tcdigitaltech"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-lg-6">
            <div class="contact-page-form form-style-one wow fadeInUp delay-0-2s">
              <div class="section-title mb-35">
                <span class="sub-title mb-15">Get Free Quote</span>
                <h3>Drop Us a Message on Whatsapp and we will get back to you soonest we can.</h3>
              </div>
              <a class="whatsapp-btn" href="https://wa.me/60132555051?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20services." target="_blank">
                <i class="fab fa-whatsapp"></i> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Form Area end -->

    <!-- Location Map Area Start -->
    <div class="contact-page-map mb-120 rpb-90 wow fadeInUp delay-0-2s">
      <div class="container-fluid">
        <div class="our-location">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15859.518228640625!2d99.80133579999999!3d6.40951255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304c7be50d963753%3A0x4d0bf62837574726!2sTC%20Garden%20Resort!5e0!3m2!1sen!2smy!4v1716287864403!5m2!1sen!2smy"
              style="border: 0; width: 100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    <!-- Location Map Area End -->
  </NuxtLayout>
</template>

<script>
export default {
  name: "contact",
  mounted() {
    this.decodeEmail();
  },
  methods: {
    decodeEmail() {
      function decode(encodedString) {
        return atob(encodedString);
      }

      const langkawiEmail = 'dGVhbUB0Y2RpZ2l0YWwudGVjaAo='; // Base64 encoded 'team@tcdigital.tech'
      const emailElement = this.$refs.emailLangkawi;

      emailElement.href = 'mailto:' + decode(langkawiEmail);
      emailElement.innerText = decode(langkawiEmail);
    }
  }
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
</style>

<template>
  <footer
    class="main-footer rel z-1"
    style="background-image: url(assets/images/footer/footer-bg-shape.png)"
  >
    <div class="container container-1290">
      <div class="footer-top pt-80 pb-60">
        <div class="row align-items-center">
          <div class="col-lg-4">
            <div class="footer-logo mb-20 wow fadeInRight delay-0-2s">
              <NuxtLink href="/"
                ><img src="/assets/images/logos/TCDT1.png" alt="Logo"
              /></NuxtLink>
            </div>
          </div>
          <div class="col-lg-8 text-lg-end">
            <div class="social-style-four mb-20 wow fadeInLeft delay-0-2s">
              <a href="https://www.facebook.com/tcdigitaltech"
                ><i class="fab fa-facebook-f"></i> <span>Facebook</span></a
              >
              <a href="https://www.instagram.com/tcdigitaltech"
                ><i class="fab fa-instagram"></i> <span>Instagram</span></a
              >
            <!--              Close temporary Until we got the accounts-->
<!--              <a href="#"
                ><i class="fab fa-dribbble"></i> <span>Dribbble</span></a
              >
              <a href="#"
                ><i class="fab fa-behance"></i> <span>Behance</span></a
              >-->
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="footer-left-content pt-80">
            <div class="lets-work mb-50 wow fadeInUp delay-0-2s">
              <img
                src="/assets/images/footer/lets-work.png"
                alt="Let's Work Man"
              />
              <span>Let’s Work Together</span>
            </div>
            <div class="footer-contact-info wow fadeInUp delay-0-3s">
              <a class="theme-btn style-three"
                >team@tcdigital.tech<i class="far fa-arrow-right"></i
              ></a>
              <a
                class="theme-btn style-three phone-number"
                >+6013 2555051<i class="far fa-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="footer-right-content">
            <h4 class="footer-title wow fadeInUp delay-0-2s">Quick Links</h4>
            <div class="footer-widget widget_nav_menu">
              <ul class="list-style-two wow fadeInUp delay-0-3s">
                <li><NuxtLink href="about">Home</NuxtLink></li>
                <li><NuxtLink href="services">Popular Services</NuxtLink></li>
                <li><NuxtLink href="team">Team Member</NuxtLink></li>
                <li><NuxtLink href="blog">Latest News</NuxtLink></li>
                <li><NuxtLink href="contact">Contact Us?</NuxtLink></li>
              </ul>
              <ul class="list-style-two wow fadeInUp delay-0-4s">
                <li><NuxtLink href="/">UI/UX Design</NuxtLink></li>
                <li><NuxtLink href="index2">Development</NuxtLink></li>
                <li><NuxtLink href="index3">Marketing</NuxtLink></li>
                <li><NuxtLink href="contact">Need a Career</NuxtLink></li>
                <li><NuxtLink href="faqs">Faqs ?</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="row align-items-center">
          <div class="col-xl-8 col-lg-6">
            <div
              class="footer-bottom-menu pt-40 pb-35 rpb-0 wow fadeInRight delay-0-2s"
            >

            </div>
          </div>
          <div class="col-xl-4 col-lg-6">
            <div
              class="copyright-text text-lg-end pt-40 pb-35 rpt-10 wow fadeInLeft delay-0-2s"
            >
              <p>
                Copyright @{{ new Date().getFullYear() }},
                <NuxtLink href="/">TC Digital Tech Sdn Bhd (202401010740)</NuxtLink> All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer1",
};
</script>

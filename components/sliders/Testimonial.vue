<template>
  <section class="testimonials-three-area pt-95 rpt-70">
    <div class="container container-1260">
      <div class="row gap-120 align-items-center">
        <div class="col-lg-6">
          <div class="testimonial-one-right-part rmb-75">
            <div class="testimonials-three-active wow fadeInUp delay-0-2s">
              <Swiper
                :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
                :slides-per-view="1"
                :loop="true"
                :autoplay="{
                  delay: 8000,
                  disableOnInteraction: true,
                }"
                :navigation="{
                  nextEl: '.testimonial-three-next',
                  prevEl: '.testimonial-three-prev',
                }"
                :pagination="{
                  el: '.testimonial-three-dots',
                }"
              >
                <SwiperSlide class="testimonial-item style-three">
                  <div class="ratting style-two">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <div class="author-speech">
                    <p>
                      TC Digital Tech is super! They helped me tell everyone about my business on Facebook. Now, more people like my page!
                    </p>
                  </div>
                  <div class="middle-quote">
                    <div class="icon">
                      <i class="flaticon-right-quote"></i>
                    </div>
                  </div>
                  <div class="testimonial-footer">
                    <div class="testimonial-author">
                      <div class="author-info">
                        <h4>Siti Aiyshah</h4>
                        <span class="designation">Business Owner</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="testimonial-item style-three">
                  <div class="ratting style-two">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="author-speech">
                    <p>
                      Arif from TC Digital Tech is great person to work with. He listen and follow all our requirements for our video.
                      Great experience working with their team. Great job guys!
                    </p>
                  </div>
                  <div class="middle-quote">
                    <div class="icon">
                      <i class="flaticon-right-quote"></i>
                    </div>
                  </div>
                  <div class="testimonial-footer">
                    <div class="testimonial-author">
                      <div class="author-info">
                        <h4>Mr. Ridzuan Zakaria</h4>
                        <span class="designation">Resort Owner</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="testimonial-item style-three">
                  <div class="ratting style-two">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <div class="author-speech">
                    <p>
                      Thanks TC Digital Tech! They fixed my website and made it look so cool. Now, I get lots of likes on Instagram too!
                    </p>
                  </div>
                  <div class="middle-quote">
                    <div class="icon">
                      <i class="flaticon-right-quote"></i>
                    </div>
                  </div>
                  <div class="testimonial-footer">
                    <div class="testimonial-author">
                      <div class="author-info">
                        <h4>Tracy Loh</h4>
                        <span class="designation">Business Owner</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
            <div
              class="testimonial-controls style-three mt-65 rmt-40 wow fadeInUp delay-0-3s"
            >
              <button class="testimonial-three-prev slick-arrow">
                <i class="far fa-long-arrow-left"></i>
              </button>
              <div class="testimonial-three-dots slick-dots"></div>
              <button class="testimonial-three-next slick-arrow">
                <i class="far fa-long-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="testimonials-three-image wow fadeInRight delay-0-2s">
            <img
              src="https://res.cloudinary.com/dgsljij3o/image/upload/v1716285852/making-connections-that-count-towards-his-success-shot-two-young-designers-shaking-hands-together-office_kqit7n.jpg"
              alt="Testimonials"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonial",
};
</script>

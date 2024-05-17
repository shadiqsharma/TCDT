<template>
  <header class="main-header menu-absolute">
    <!--Header-Upper-->
    <div class="header-upper">
      <div class="container container-1620 clearfix">
        <div class="header-inner rpy-10 rel d-flex align-items-center">
          <div class="logo-outer">
            <div class="logo">
              <NuxtLink href="/"
                ><img
                  src="/assets/images/logos/TCDT1.png"
                  alt="Logo"
                  title="Logo"
                  style="width:200px; height:80px"
              /></NuxtLink>
            </div>
          </div>

          <div class="nav-outer ms-lg-auto clearfix">
            <!-- Main Menu -->
            <nav class="main-menu navbar-expand-lg">
              <div class="navbar-header py-10">
                <div class="mobile-logo">
                  <NuxtLink href="/">
                    <img
                      src="/assets/images/logos/TCDT1.png"
                      alt="Logo"
                      title="Logo"
                      style="width:200px; height:80px"
                    />
                  </NuxtLink>
                </div>

                <!-- Toggle Button -->
                <button
                  type="button"
                  class="navbar-toggle"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>

              <div class="navbar-collapse collapse clearfix">
                <ul
                  class="navigation onepage clearfix"
                  v-if="singlePage == true"
                >
                  <li><a v-scroll-to="'#hero'">Home</a></li>
                  <li><a v-scroll-to="'#about'">about</a></li>
                  <li><a v-scroll-to="'#services'">services</a></li>
                  <li><a v-scroll-to="'#projects'">project</a></li>
                  <li><a v-scroll-to="'#team'">team</a></li>
                  <li><a v-scroll-to="'#pricing'">pricing</a></li>
                </ul>
                <Nav v-else />
              </div>
            </nav>
            <!-- Main Menu End-->
          </div>

          <!-- Nav Search -->
          <Search />

          <!-- Menu Button -->
          <div class="menu-btns">
            <!-- menu sidbar -->
            <div class="menu-sidebar">
              <button @click="toggleSidebar()">
                <img src="/assets/images/icons/toggler.svg" alt="Toggler" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End Header Upper-->
  </header>
  <HeadersSidebar />
</template>

<script>
import Nav from "./Nav.vue";
import Search from "./Search.vue";

export default {
  name: "Header1",
  components: { Nav, Search },
  props: {
    singlePage: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleSidebar() {
      document.querySelector("body").classList.add("side-content-visible");
    },
  },
};
</script>

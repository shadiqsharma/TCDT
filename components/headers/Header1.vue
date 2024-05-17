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
                  style="width:160px; height:60px"
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
                        style="width:160px; height:50px"
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
                  <li><a v-scroll-to="'#hero'" @click="closeMenu">Home</a></li>
                  <li><a v-scroll-to="'#about'" @click="closeMenu">About</a></li>
                  <li><a v-scroll-to="'#services'" @click="closeMenu">Services</a></li>
                  <li><a v-scroll-to="'#projects'" @click="closeMenu">Project</a></li>
                  <li><a v-scroll-to="'#team'" @click="closeMenu">Team</a></li>
                  <li><a v-scroll-to="'#pricing'" @click="closeMenu">Pricing</a></li>
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
    closeMenu() {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    },
  },
};
</script>

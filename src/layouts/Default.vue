<template>
  <div class="layout container">
    <header class="relative py-10 header">
      <div class="flex items-center justify-between">
        <g-link
          to="/"
          class="flex-shrink-0"
        >
          <h1 class="text-xl font-bold">Autotests.cloud</h1>
        </g-link>

        <nav class="font-bold font-lg">
          <g-link
            to="/"
            active-class="is-active"
            class="mr-3"
          >
            Home page
          </g-link>

          <g-link
            to="/"
            active-class="is-active"
            class="mr-3"
          >
          Telegram
          </g-link>

          <g-link
            to="/"
            active-class="is-active"
          >
            GitHub
          </g-link>
        </nav>
      </div>
    </header>

    <slot />

    <footer class="p-10 mt-10 md:mt-28 md:p">
      <p class="text-center">
        © 2015-{{ currentYear }} Autotests Cloud.
      </p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription,
  }
}
</static-query>

<script>

export default {
  metaInfo() {
    return this.$seo({
      description: this.$static.metadata.siteDescription,
      openGraph: {
        description: this.$static.metadata.siteDescription,
        image: {
          url: '/', // @todo add og image
        },
      },
    });
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
body {
  padding: 0;
}
</style>

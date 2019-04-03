<template>
  <Layout>
    <section class="flex flex-grow">
      <BTabs
        v-model="activeTab"
        position="is-small-mobile is-toggle is-centered"
        expanded
        class="block flex flex-col flex-grow"
      >
        <div v-for="tab in tabs" :key="tab.id">
          <BTabItem :label="tab.name">
            <AccountProfile v-if="activeTab === 0" />
            <AccountPreferences v-if="activeTab === 1" />
            <AccountCompanies v-if="activeTab === 2" />
          </BTabItem>
        </div>
      </BTabs>
    </section>
  </Layout>
</template>
<script>
import Layout from '@layouts/Main'
import appConfig from '@src/app.config'
import AccountProfile from '@components/accountProfile'
import AccountPreferences from '@components/accountPreferences'
import AccountCompanies from '@components/accountCompanies'
export default {
  components: { Layout, AccountProfile, AccountPreferences, AccountCompanies },
  data() {
    return {
      activeTab: 0,
      currentTabComponent: '',
      tabs: [
        { name: 'Perfil', component: 'accountProfile', id: 0 },
        {
          name: 'Preferencias',
          component: 'accountPrefereces',
          id: 1,
        },
        { name: 'Compañias', component: 'accountCompanies', id: 2 },
      ],
    }
  },

  page: {
    title: 'Mi Cuenta',
    meta: [{ name: 'description', content: `Log in to ${appConfig.title}` }],
  },
}
</script>

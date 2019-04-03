<script>
import appConfig from '@src/app.config'
// import Layout from '@layouts/Main'
import Layout from '@layouts/WithBottomNav'
import GxInputText from '@components/core/GxInputText'
import GxInputTextDark from '@components/core/GxInputTextDark'
import GxInputTextarea from '@components/core/GxInputTextarea'
import GxDropdown from '@components/core/GxDropdown'
import GxFab from '@components/core/GxFab'
import GxChip from '@components/core/GxChip'
import GxTabs from '@components/core/GxTabs'
import GxSwitch from '@components/core/GxSwitch'
import GxInputWhite from '@components/core/GxInputWhite'
import GxInputDark from '@components/core/GxInputDark'
// import BaseInputTextarea from '@components/base/base-input-textarea'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    GxInputText,
    GxInputTextDark,
    GxInputTextarea,
    GxDropdown,
    GxFab,
    GxChip,
    GxTabs,
    GxSwitch,
    GxInputWhite,
    GxInputDark,
  },
  data() {
    return {
      switchActive: false,
      name: 'alpha',
      multiselect: '',
      multiselectOptions: ['Física', 'Moral', 'Otra'],
      whiteInvalid: 'BAD',
      whiteValid: 'GOOD',
      darkInvalid: 'BAD',
      darkValid: 'GOOD',
    }
  },
}
</script>

<template>
  <Layout>
    <div class="flex flex-col flex-grow items-center w-screen py-4 px-4">
      <div
        class="field flex items-center justify-center items-center w-full h-24  mb-6 bg-secondary-500 p-4"
      >
        <GxInputDark
          v-model="darkInvalid"
          :valid="false"
          input-id="invalidDark"
          label="Invalid input"
        />
      </div>
      <div
        class="field flex items-center justify-center items-center w-full mb-6 bg-secondary-500 p-4"
      >
        <GxInputDark
          v-model="darkValid"
          :valid="true"
          input-id="validDark"
          label="Invalid input"
        />
      </div>
      <div
        class="field flex items-center justify-center items-center w-full mb-6"
      >
        <GxInputWhite
          v-model="whiteInvalid"
          :valid="false"
          label="Invalid input"
          input-id="invalid-input"
        />
      </div>
      <div
        class="field flex items-center justify-center items-center w-full mb-6"
      >
        <GxInputWhite
          v-model="whiteValid"
          :valid="true"
          input-id="valid-input"
          label="Valid input"
        />
      </div>
      <div class="flex flex-col justify-between w-full mb-6">
        <GxSwitch v-model="switchActive" />
      </div>
      <div class="flex flex-col justify-between w-full mb-6">
        <GxTabs
          :tabs="[
            { name: 'Tab1', icon: 'cloud_upload' },
            { name: 'Tab2', icon: 'explore' },
            { name: 'Tab3', icon: 'face' },
          ]"
          default="Tab1"
        />
      </div>
      <div class="flex flex-col justify-between w-full mb-6">
        <p>Chips have no ripple yet</p>
        <div class="flex">
          <div class="sm:w-1/3">
            <GxChip class="mb-3" icon="cloud_upload">Enabled</GxChip>
            <GxChip icon="cloud_upload" :disabled="true">Disabled</GxChip>
          </div>
          <div class="sm:w-1/3">
            <GxChip class="mb-3">Enabled</GxChip>
            <GxChip :disabled="true">Disabled</GxChip>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-between w-full mb-6">
        <p>Fabs have no ripple yet</p>
        <GxFab />
      </div>
      <div class="flex justify-between w-full mb-6">
        <h1 class="has-text-centered text-primary">P</h1>
        <h2 class="has-text-centered text-primary-800">P</h2>
        <h3 class="has-text-centered text-primary-700">P</h3>
        <h3 class="has-text-centered text-primary-600">P</h3>
        <h3 class="has-text-centered text-primary-600">P</h3>
        <h3 class="has-text-centered text-primary-500">P</h3>
        <h3 class="has-text-centered text-primary-400">P</h3>
        <h3 class="has-text-centered text-primary-300">P</h3>
        <h3 class="has-text-centered text-primary-200">P</h3>
        <h3 class="has-text-centered text-primary-100">P</h3>
        <h3 class="has-text-centered text-primary-50">P</h3>
      </div>
      <div class="flex justify-between w-full mb-6">
        <h1 class="has-text-centered text-secondary">S</h1>
        <h2 class="has-text-centered text-secondary-800">S</h2>
        <h3 class="has-text-centered text-secondary-700">S</h3>
        <h3 class="has-text-centered text-secondary-600">S</h3>
        <h3 class="has-text-centered text-secondary-600">S</h3>
        <h3 class="has-text-centered text-secondary-500">S</h3>
        <h3 class="has-text-centered text-secondary-400">S</h3>
        <h3 class="has-text-centered text-secondary-300">S</h3>
        <h3 class="has-text-centered text-secondary-200">S</h3>
        <h3 class="has-text-centered text-secondary-100">S</h3>
        <h3 class="has-text-centered text-secondary-50">S</h3>
      </div>
      <div class="field flex flex-col items-center justify-center w-full mb-6">
        <h2>Still missing icon next to placeholder.</h2>
        <GxDropdown
          v-model="multiselect"
          :options="multiselectOptions"
        ></GxDropdown>
      </div>
      <div class="field flex items-center justify-center w-full mb-6">
        <div
          class="group hover:bg-blue-500 p-4 cursor-pointer bg-white rounded w-full shadow-lg select-none overflow-hidden mx-auto"
          ><p
            class="font-semibold text-lg mb-1 text-gray-900 group-hover:text-white"
            >Cards</p
          >
          <p class="text-gray-700 group-hover:text-white mb-2"
            >Resumen de ventas</p
          ></div
        >
      </div>
      <div class="field flex items-center justify-center w-full mb-6">
        <form class="w-full"
          ><div
            class="flex items-center border-b-2 border-gray-400 focus-within:border-primary-500 py-2"
            ><input
              type="text"
              placeholder="Sucursal"
              aria-label="Full name"
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
            <button
              type="button"
              class="focus:shadow-outline focus:outline-none flex-shrink-0 bg-primary-500 hover:bg-primary-700 border-primary-500 hover:border-primary-700 text-sm border-4 text-white py-1 px-2 rounded"
            >
              Enviar
            </button></div
          ></form
        >
      </div>
      <!-- <div class="field flex items-center justify-center w-full mb-6">
        <BField label="Select" class="w-full">
          <BSelect placeholder="Elige una opción" expanded>
            <option v-for="option in data" :key="option.id" :value="option.id">
              {{ option.user.first_name }}
            </option>
          </BSelect>
        </BField>
      </div>
      <div class="field flex items-center justify-center w-full mb-6">
        <BField label="Select 2" class="w-full">
          <BSelect
            size="is-large"
            placeholder="Elige una opción"
            icon="user-circle"
            expanded
          >
            <optgroup label="Black Sails">
              <option value="flint">Flint</option>
              <option value="silver">Silver</option>
              <option value="vane">Vane</option>
              <option value="billy">Billy</option>
              <option value="jack">Jack</option>
            </optgroup>

            <optgroup label="Breaking Bad">
              <option value="heisenberg">Heisenberg</option>
              <option value="jesse">Jesse</option>
              <option value="saul">Saul</option>
              <option value="mike">Mike</option>
            </optgroup>

            <optgroup label="Game of Thrones">
              <option value="tyrion-lannister">Tyrion Lannister</option>
              <option value="jamie-lannister">Jamie Lannister</option>
              <option value="daenerys-targaryen">Daenerys Targaryen</option>
              <option value="jon-snow">Jon Snow</option>
            </optgroup>
          </BSelect>
        </BField>
      </div> -->
      <div>
        <GxInputTextDark
          id="someinput4"
          v-model="name"
          label="label"
          class="w-full mr-3"
        />
        <a class="button rounded-full has-background-primary has-text-white">
          <span class="icon is-small">
            <i class="fas fa-arrow-right"></i>
          </span>
        </a>
      </div>
      <div class="field flex flex-col items-center justify-center w-full mb-6">
        <GxInputText
          id="anotherinput"
          v-model="name"
          label="label 1"
          class="w-full"
        />
      </div>
      <div class="field flex flex-col items-center justify-center w-full mb-6">
        <GxInputTextDark
          id="someinput"
          v-model="name"
          label="label 2"
          class="w-full"
        />
        <GxInputTextarea class="w-full" />
      </div>
      <!-- <div class="field flex items-center justify-center w-full mb-6">
        <BField class="gx-field w-full" label="name">
          <BInput
            placeholder="Large"
            size="is-large"
            icon-pack="far"
            icon="user-circle"
          >
          </BInput>
        </BField>
      </div> -->
      <div class="field flex items-center justify-center w-full mb-6">
        <div class="field w-full">
          <label class="label" for="someinput3"
            >la label
            <BTooltip label="Tooltip top">
              <BIcon icon="question-circle" size="is-small"> </BIcon>
            </BTooltip>
          </label>
          <BInput name="someinput3" maxlength="200" type="textarea"></BInput>
        </div>
      </div>
      <div class="field flex items-center justify-center w-full mb-6">
        <BField class="w-full" label="administradores">
          <BInput maxlength="200" type="textarea"></BInput>
        </BField>
      </div>
      <div class="field flex justify-between w-full mb-6">
        <span>Some switch</span>
        <BSwitch></BSwitch>
      </div>
    </div>
  </Layout>
</template>

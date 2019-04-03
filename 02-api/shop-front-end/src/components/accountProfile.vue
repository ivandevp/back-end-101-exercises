<template>
  <div class="columns">
    <div class="column">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
      </div>
    </div>
    <div class="column">
      <ul class="menu-list is-hoverable">
        <li class="card">
          <div class="card-header">
            <div class="card-header-icon"
              ><BIcon pack="fas" icon="user"></BIcon
            ></div>
            <div class="card-header-title">{{ user.name }}</div>
          </div>
        </li>
        <li class="card">
          <div class="card-header">
            <div class="card-header-icon"
              ><BIcon pack="fas" icon="at"></BIcon
            ></div>
            <div class="card-header-title">{{ user.email }}</div>
          </div>
        </li>
        <li class="card">
          <div class="card-header">
            <div class="card-header-icon"
              ><BIcon pack="fas" icon="key"></BIcon
            ></div>
            <BInput
              :value="user.password"
              type="password"
              maxlength="16"
              class="card-header-title"
              disabled
            ></BInput>
          </div>
        </li>
        <li class="card">
          <div class="card-header">
            <div class="card-header-icon"
              ><BIcon pack="fas" icon="mobile"></BIcon
            ></div>
            <div class="card-header-title">{{ user.mobile }}</div>
          </div>
        </li>
        <li class="card">
          <div class="card-header">
            <div class="card-header-icon"
              ><BIcon pack="fas" icon="briefcase"></BIcon
            ></div>
            <div class="card-header-title">{{ user.jobPosition }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'John Doe',
        email: 'john.doe@mail.com',
        phone: '555555555555',
        password: 'password',
        mobile: '888888888',
        jobPosition: 'CEO',
      },
    }
  },
}
</script>

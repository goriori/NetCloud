<template>
  <div class="container">
    <div class="one__group flex row">
      <div class="lineAchive q-pa-md q-gutter-md">
        <q-card class="status__user text-red col-5">
          <q-card-section> Painter </q-card-section>
        </q-card>
      </div>
      <div class="avatar">
        <q-avatar size="190px">
          <img
            src="src/assets/images/avatar/avatar.png"
            class="avatar_user"
          />
        </q-avatar>
      </div>
    </div>
    <div class="username q-pa-md q-gutter-md">
      <q-card class="nickname text-white col-2">
        <q-card-section> GorizontOriginal </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserAvatar",
};
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid white;
  position: relative;
  max-width: 540px;
}

.lineAchive {
  width: 320px;
  height: 64px;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.status__user {
    font-size: 20px;
  max-width: 320px;
  max-height: 64px;
  justify-content: center;
  border: 1px solid #40abdf;
  background-color: rgba(255, 255, 255, 0);
  left: 55px;
  top: 60px;
  border-radius: 100px;
}
.avatar_user {
  border: 2px solid #40abdf;
}

.username {
  justify-content: center;
  align-content: center;
  text-align: center;
  max-width: 300px;
  margin-left: 15rem;
}

.nickname {
    font-size: 20px;
  justify-content: center;
  border: 1px solid #40abdf;
  background-color: #40abdf;
  border-radius: 100px;
}
</style>
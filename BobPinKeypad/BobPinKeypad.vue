<template>
  <div id="pin-keypad" class="pinKeypad">
    <ul>
      <!--<img v-for="item in pins" :src="item.resource" alt="" class="">-->
      <input type="password" class="input" maxlength="1" onselectstart="return false;">
      <input type="password" class="input" maxlength="1">
      <input type="password" class="input" maxlength="1">
      <input type="password" class="input" maxlength="1">
      <input type="password" class="input" maxlength="1">
      <input type="password" class="input" maxlength="1">

      <div>自定义的组件</div>
    </ul>
  </div>
</template>

<script>
  //import { PinKeypad } from 'awp-device'
  export default {
    name:"bob-pinKeypad",
    data() {
      return {

        // pins: [
        //   {
        //     resource: require('./pswA.png')
        //   },
        //   {
        //     resource: require('./pswA.png')
        //   },
        //   {
        //     resource: require('./pswA.png')
        //   },
        //   {
        //     resource: require('./pswA.png')
        //   },
        //   {
        //     resource: require('./pswA.png')
        //   },
        //   {
        //     resource: require('./pswA.png')
        //   }
        // ],
        psw: '',
        inputLenth: 0


      }
    },
    methods: {

    },
    mounted() {
      var is = document.getElementsByTagName('input');
      for (var i = 0; i < is.length; i++) {

        // alert(is[i].getAttribute('name'))

      }
    }

  }

</script>

<style scoped>
  .pinKeypad {
    margin: 0 auto;
  }
  
  img + img {
    margin-left: 30px;
  }
  
  input + input {
    margin-left: 30px;
  }
  
  .input {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    font-size: 80px;
    border: 3px solid #d8d8d8;
    outline: none;
    text-align: center;
    -webkit-user-select:none;
  }
</style>
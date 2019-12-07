<template>
  <div id="app">
    <h1>Fialka: A Decentralized End-User Accountability FrameworkBased on Privacy Preserving Smart Contract</h1>
    <center><v-icon type="copy"></v-icon> PPSC</center>
    <br/>
    <hr/>
    <br/>
    <v-row>

    <sender name="Sender" :g1= "g1" :g2= "g2" :z= "z" :u1= "u1" :u2="u2" :kappa="kappa" :flag_s="flag_s" @updateCT="updateCT" :rpk_loading="rpk_loading" @switchAll="switchAll" />
    <receiver name="Receiver" @updatePK="updatePK" :C1= "C1" :C2= "C2" :D1= "D1" :D2= "D2" :E= "E" :C= "C" :flag_r="flag_r" :cry_loading="cry_loading" @switchS="switchS" @switchAll="switchAll" />

    </v-row>
    
  </div>
</template>

<script>

import sender from './components/sender.vue'
import receiver from './components/receiver.vue'

export default {
  name: 'app',
  components: {
    sender,
    receiver,
  },
  data () {
    return {
      kappa: '',
      g1: '',
      g2: '',
      z: '',
      u1: '',
      u2: '',
      C1: '',
      C2: '',
      D1: '',
      D2: '',
      E: '',
      C: '',
      flag_s: true,
      flag_r: false,
      rpk_loading: true,
      cry_loading: true,
    }
  },
  methods: {
    updatePK(pk) {
      this.g1 = pk.g1;      
      this.g2 = pk.g2;
      this.z = pk.z;
      this.u1 = pk.u1;
      this.u2 = pk.u2;
      this.kappa = pk.L;
      this.rpk_loading = false;
    },
    updateCT(ct) {
      this.C1 = ct.C1;
      this.C2 = ct.C2;
      this.D1 = ct.D1;
      this.D2 = ct.D2;
      this.E = ct.E;
      this.C = ct.C;
      this.cry_loading = false;
    },
    switchAll(){
      this.flag_s = !this.flag_s;
      this.flag_r = !this.flag_r;
    },
  }
}

</script>

<style>

#app {

  background: #f7f7f7;
  background-image: 
  linear-gradient(white 2px,transparent 0),
  linear-gradient(90deg,white 2px,transparent 0), 
  linear-gradient(hsla(0,0%,100%,.3) 1px,transparent 0), 
  linear-gradient(90deg,hsla(0,0%,100%,.3) 1px,transparent 0);
  background-size: 75px 75px,75px 75px,15px 15px ,15px 15px;

  /*background: #f7f7f7;*/
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 20px;
}
.block_message {
  margin-bottom: 30px;
  overflow: hidden;
}
</style>

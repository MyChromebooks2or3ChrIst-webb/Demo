<template>

  <v-col class="receiver" :xs="24" :sm="24" :md="24" :lg="12">
    <h1>{{ name }}</h1>
    <br/>

    <v-row style="text-align: left;" class="block_message">
      <v-col span="3"></v-col>

      <v-col span="17" style="background:#fff;border:1px solid #e9e9e9;border-radius: 10px;padding:5px 0px 5px 12px;">
        <v-steps :current="flag - 1">
            <v-step title="Setup" description="Init parameters" ></v-step>
            <v-step title="Connect" description="Connect to blockchain" ></v-step>
            <v-step title="Update" description="Fetch a tag" ></v-step>
            <v-step title="Decryption" description="Decrypt the cryptext" ></v-step>
        </v-steps>
      </v-col>

      <v-col span="1"></v-col>

      <v-col span="3">
        <v-button type="primary" @click="next" :disabled="flag_r" style="postion:relative; top:15px;left:-30px;" :loading="b_loading">
          next
        </v-button>
      </v-col>
    </v-row>

    <v-row style="text-align: left;" class="block_message">
      <v-col span="3"></v-col>
      <v-col span="17">
        <v-card title="Public Key" class="block_message" :loading="key_loading">
          g1 = <u> {{ g1 }} </u> <br>
          g2 = <u> {{ g2 }} </u> <br>
          z =  <u> {{ z }} </u> <br>
          u1 = <u> {{ u1 }} </u> <br>
          u2 = <u> {{ u2 }} </u> <br>
        </v-card>

        <v-card title="Private Key" class="block_message" :loading="key_loading">
          x1 = <u> {{ x1 }} </u><br>
          x2 = <u> {{ x2 }} </u> <br>
          y1 = <u> {{ y1 }} </u> <br>
          y2 = <u> {{ y2 }} </u> <br>
        </v-card>

        <v-card title="Cryptext" class="block_message" :loading="cry_loading">
          C1: <u> {{ C1 }} </u> <br>
          C2: <u> {{ C2 }} </u> <br>
          D1: <u> {{ D1 }} </u> <br>
          D2: <u> {{ D2 }} </u> <br>
          E: <u> {{ E }} </u> <br>
          C: <u> {{ C }} </u> <br>
        </v-card>        

        <v-card title="Blockchain Information" class="block_message" :loading="block_loading">
          
          <v-tag class="li-item" v-for="statu in status" :color="statu.C" v-bind:key="statu.C">
            {{ statu.T }}
          </v-tag>
          <br/><br/>

          <!-- Address is at <u> {{ address }} </u> <br> -->
          <!-- Tag = <u> {{ tag }} </u> <br/> -->
        </v-card>

        <v-card title="Decryption Result" class="block_message" :loading="dec_loading">
          Message = <u> {{ message }} </u> <br>
        </v-card>
      </v-col>      
    </v-row>

    <v-modal title="Choose a group type"
             :visible="visible_init"
             okText="Confirm"
             cancelText="Cancel"
             @ok="handleOk_init"
             @cancel="handleCancel"
             :confirm-loading="asyncConfirmLoading">
        <div class="block_message">
          <v-radio v-model="kappa" label="SS512">SS512</v-radio>
          <v-radio v-model="kappa" label="SS1024" >SS1024</v-radio>
        </div>
    </v-modal>

    <v-modal title="Please input the address"
             okText="Confirm"
             cancelText="Cancel"
             :visible="visible_addre"
             @ok="handleOk_addre"
             @cancel="handleCancel"
             :confirm-loading="asyncConfirmLoading">
        <div class="block_message">
          <v-input v-model="address" type="textarea" placeholder="Please enter the address"></v-input>
        </div>
    </v-modal>
  </v-col>
</template>

<script>

import oasis from '@oasislabs/client';

export default {
  name: 'receiver',
  props: {
    name: String,
    C1: {
      type: String,
      default: ''
    },
    C2: {
      type: String,
      default: ''
    },
    D1: {
      type: String,
      default: ''
    },
    D2: {
      type: String,
      default: ''
    },
    E: {
      type: String,
      default: ''
    },
    C: {
      type: String,
      default: ''
    },
    flag_r: {
      type: Boolean,
      default: true
    },
    cry_loading: {
      type: Boolean,
      default: true
    },
  },
  data () {
    return {
      b_loading: false,
      key_loading: true,
      dec_loading: true,
      block_loading: true,
      asyncConfirmLoading: false,
      flag: 0,
      visible_init: false,
      visible_addre: false,
      flag_init: false,
      flag_connect: false,
      flag_load: false,
      flag_dec: false,
      kappa: "SS512",
      g1: null,
      g2: null,
      z: null,
      u1: null,
      u2: null,
      x1: null,
      x2: null,
      y1: null,
      y2: null,
      tag: null,
      message: null,
      address: null,      
      local_gateway: 'ws://aowatchsea.xyz:8546',
      public_gateway: 'https://gateway.devnet.oasiscloud.io',
      public_credential: '',
      gateway_util: '',
      status: [],
    }
  },
  methods: {
    async openNotification(title,trHash, gasUesd, pos) {
      this.$notification.config({
        placement: pos,
      });
      this.$notification.open({
        message: title,
        description: 'transaction_hash: ' + trHash + ' gas used: ' + gasUesd,
        selfKey:'noClose'
      });
    },
    handleCancel(){
      this.visible_init = false;
      this.visible_addre = false;
      this.b_loading = false;
      this.asyncConfirmLoading = false;
    },
    async handleOk_init() {
      this.b_loading = true;
      this.asyncConfirmLoading = true;
      this.flag_r = true;
      this.$emit('switchAll');
      this.$http.post('/setup', {'L': this.kappa}).then((res) => {
        let jdict = JSON.parse(res.body);
        this.g1 = jdict.g1;
        this.g2 = jdict.g2;
        this.z = jdict.z;
        this.u1 = jdict.u1;
        this.u2 = jdict.u2;
        this.x1 = jdict.x1;
        this.x2 = jdict.x2;
        this.y1 = jdict.y1;
        this.y2 = jdict.y2;
        this.$emit('updatePK', {
          'g1': this.g1,
          'g2': this.g2,
          'z': this.z,
          'u1': this.u1,
          'u2': this.u2,
          'L': this.kappa,
          'C': this.C
        });
        // this.flag_r = true;
        this.visible_init = false;
        this.asyncConfirmLoading = false;
        this.flag++;
        this.key_loading = false;
        this.b_loading = false;
      }, (err) => {
        window.console.log(err);
      });
    },
    handleCancel_init() {
      this.visible_init = false;
    },
    async next(){
      switch(this.flag) {
        case 0:
          this.visible_init = true;
          break;
        case 1:
          this.handleConnect();
          break;
        case 2:
          this.handleFetch();
          break;
        case 3:
          this.handleDec();
          break;
        default:
          alert('You opened the Stein Gate!');
      }
    },
    async handleConnect() {
      this.b_loading = true;
      let start = new Date().getTime();
      const wallet = new oasis.Wallet('0x7ec6102f6a2786c03b3daf6ac4772491f33925902326a0d2d83521b964a87402');
      const gateway = new oasis.gateways.Web3Gateway(this.local_gateway, wallet);
      let end = new Date().getTime();
      window.console.log(`Receiver connects to block chain: ${end - start} ms`)
      this.gateway_util = gateway;
      oasis.setGateway(gateway);
      this.status.push({
        'C': 'red',
        'T': 'Connected'
      });
      this.flag++;
      this.block_loading = false;
      this.b_loading = false;
    },
    async handleFetch() {
      this.b_loading = true;
      this.visible_addre = true;

    },
    async handleOk_addre() {
      if( this.address == null ){
        this.$message['error']("Please check the address");
      }else{
        this.asyncConfirmLoading = true;
        let start = new Date().getTime();
        const blackBox = await oasis.Service.at(new oasis.Address(this.address));
        const tag = await blackBox.fetch();
        let end = new Date().getTime();
        window.console.log(`Update: ${end - start} ms`);
        let secret = await blackBox.testhash();
        secret = secret.join('');
        // const testStr = '';
        // secret.forEach((item, index, arr) => {
        //   testStr += 
        //   arr[index] = item.toString(16);
        // });
        window.console.log(secret);
        this.status.push({
        'C': 'pink',
        'T': 'Loaded at ' + this.address
        });

        let start2 = new Date().getTime();
        let info = await this.gateway_util.eth.getBlockByNumber('latest', true);
        this.openNotification('Deploy Information', info.transactions[0].hash, info.gasUsed, 'topRight');
        let end2 = new Date().getTime();
        window.console.log(`Inspection: ${end2 - start2} ms`);

        this.tag = tag;
        this.visible_addre = false;
        this.asyncConfirmLoading = false;
        this.flag++;
        this.status.push({
        'C': 'green',
        'T': 'tag is ' + this.tag
        });
        this.b_loading = false;
      }
    },
    async handleDec() {
      this.b_loading = true;
      this.$http.post('/dec', {
        'x1': this.x1,
        'x2': this.x2,
        'y1': this.y1,
        'y2': this.y2,
        'tag': this.tag,
        'C1': this.C1,
        'C2': this.C2,
        'D1': this.D1,
        'D2': this.D2,
        'E': this.E,
        'L': this.kappa,
        'C': this.C
      })
      .then((res) => {
        let jdict = JSON.parse(res.body);
        this.message = jdict.M;
        this.flag_r = true;
        this.flag ++;
        this.dec_loading = false;
        this.b_loading = false;
      }, (err) => {
        window.console.log(err);
      });
    },
  }
}
</script>
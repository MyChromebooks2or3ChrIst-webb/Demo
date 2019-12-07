<template>
  <v-col class="sender" :xs="24" :sm="24" :md="24" :lg="12">
    <h1>{{ name }}</h1>
    <br/>
    <v-row style="text-align: left;" class="block_message">
      <v-col span="3"></v-col>
      <v-col span="17" style="background:#fff;border:1px solid #e9e9e9;border-radius: 10px;padding:5px 0px 5px 12px;">
        <v-steps :current="flag - 1">
            <v-step title="Encryption" description="Encrypt your message" ></v-step>
            <v-step title="Connect" description="Connect to blockchain" ></v-step>
            <v-step title="Deploy" description="Deploy smart contract" ></v-step>
            <v-step title="Registration" description="Store a value" ></v-step>
        </v-steps>
      </v-col>

      <v-col span="1"></v-col>

      <v-col span="3">
        <v-button type="primary" @click="next" :disabled="flag_s" style="postion:relative; top:15px;left:-30px;" :loading="b_loading">
          next <v-icon type="right"></v-icon>
        </v-button>
      </v-col>
    </v-row>
    
    <v-row style="text-align: left;" class="block_message">
      <v-col span="3"></v-col>
      <v-col span="17">
        <v-card title="Receiver's PK" class="block_message" :loading="rpk_loading">
          g1 = <u> {{ g1 }} </u> <br>
          g2 = <u> {{ g2 }} </u> <br>
          z = <u> {{ z }} </u> <br>
          u1 = <u> {{ u1 }} </u> <br>
          u2 = <u> {{ u2 }} </u> <br>
        </v-card>

        <v-card title="Encrypt Parameter" class="block_message" :loading="enc_loading">
          Message = <u> {{ message }} </u> <br>
          Tag = <u> {{ tag }} </u> <br>
        </v-card>

        <v-card title="Blockchain Information" class="block_message" :loading="block_loading">
          <v-tag v-for="statu in status" :color="statu.C" v-bind:key="statu.C">
            {{ statu.T }}
          </v-tag>
          
        </v-card>

        <v-card title="Cryptext" class="block_message" :loading="ret_loading">
          C1: <u> {{ C1 }} </u> <br>
          C2: <u> {{ C2 }} </u> <br>
          D1: <u> {{ D1 }} </u> <br>
          D2: <u> {{ D2 }} </u> <br>
          E: <u> {{ E }} </u> <br>
          C: <u> {{ C }} </u> <br>
        </v-card>
      </v-col>
    </v-row>

    <v-modal title="Enter your message"
             :visible="visible_enc"
             @ok="handleOk_enc"
             @cancel="handleCancel"
             :confirm-loading="asyncConfirmLoading">
        <div class="block_message">
          <v-input v-model="message" type="textarea" placeholder="Please enter the message"></v-input>
        </div>
    </v-modal>

  </v-col>
</template>
<script>

import oasis from '@oasislabs/client';

export default {
  name: 'sender',
  props: {
    name: String,
    g1: {
      type: String,
      default: ''
    },
    g2: {
      type: String,
      default: ''
    },
    z: {
      type: String,
      default: ''
    },
    u1: {
      type: String,
      default: ''
    },
    u2: {
      type: String,
      default: ''
    },
    kappa: {
      type: String,
      default: ''
    },
    flag_s: {
      type: Boolean,
      default: true
    },
    rpk_loading: {
      type: Boolean,
      default: true
    },
  },
  data () {
    return {
      flag: 0,
      // flag_b: true,
      b_loading: false,
      enc_loading: true,
      block_loading: true,
      ret_loading: true,
      visible_enc: false,
      message: null,
      tag: null,
      address: null,
      C1: null,
      C2: null,
      D1: null,
      D2: null,
      E: null,
      C: null,
      // local_gateway: 'ws://localhost:8546',
      local_gateway: 'ws://fialka.top:8546',
      public_gateway: 'https://gateway.devnet.oasiscloud.io',
      gateway_util: '',
      public_credential: '',
      bytecode: 'simstore.wasm',
      blackBox: null,
      status: [
        
      ]
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
    async next(){
      switch(this.flag){
        case 0:
          this.b_loading = true;
          this.visible_enc = true;
          break;
        case 1:
          this.handleConnect();
          break;
        case 2:
          this.handleDeploy();
          break;
        case 3:
          this.handleStore();
          break;
        case 4:
          alert('You opened the Stein Gate!');
          break;
        default:
          alert('You made a big mistake!');
      }
    },
    async handleConnect() {
      this.b_loading = true;
      const wallet = new oasis.Wallet('0xb5144c6bda090723de712e52b92b4c758d78348ddce9aa80ca8ef51125bfb308');
      const gateway = new oasis.gateways.Web3Gateway(this.local_gateway, wallet);

      this.gateway_util = gateway;

      // let gas_cost = await gateway.eth.gasPrice();
      // window.console.log(gas_cost);
      // window.console.log(await this.gateway_util.eth.getBlockTransactionCountByNumber());

      oasis.setGateway(gateway);
      this.status.push({
        'C': 'red',
        'T': 'Connected'
      });
      this.flag++;
      this.block_loading = false;
      this.b_loading = false;
    },
    async handleDeploy() {
      this.b_loading = true;
      const bytecode = await fetch(this.bytecode).then((response) => response.body)
      .then((stream) => new Response(stream)).then(async (res) => {
        const serviceBinary = await res.arrayBuffer();
        return new Uint8Array(serviceBinary);
      });

      const blackBox = await oasis.deploy('hello world~', {
        bytecode,
        header: { confidential: false },
        gasLimit: '0xf42400'
      });
      this.blackBox = blackBox;
      this.address = blackBox.address.hex;
      // let gas_cost = await gateway.eth.gasPrice();
      // 
      
      // const blocknum = await this.gateway_util.eth.blockNumber();
      // window.console.log(blocknum);
      let info = await this.gateway_util.eth.getBlockByNumber('latest', true);
      this.openNotification('Deploy Information', info.transactions[0].hash, info.gasUsed, 'topLeft');
      // window.console.log();

      this.status.push({
        'C': 'pink',
        'T': 'Deployed at ' + this.address
      });
      this.flag++;      
      this.b_loading = false;
    },
    async handleStore() {
      this.b_loading = true;
      this.blackBox.store(this.tag);
      // this.$emit('activeR');
      this.$emit('switchAll');
      this.flag++;
      this.ret_loading = false;
      this.b_loading = false;
      // window.console.log(await this.gateway_util.eth.gasPrice());
      let info = await this.gateway_util.eth.getBlockByNumber('latest', true);
      window.console.log(info);
      this.openNotification('Registration Information', info.transactions[0].hash, info.gasUsed, 'topLeft');
    },
    handleCancel() {
      this.b_loading = false;
      this.visible_enc = false;
    },
    async handleOk_enc(){
      if(this.message == null){
        this.$message['error']("Please check your message");
      }else{
         this.asyncConfirmLoading = true;
         this.$http.post('/enc', {
           'g1': this.g1,
           'g2': this.g2,
           'z': this.z,
           'u1': this.u1,
           'u2': this.u2,
           'L': this.kappa,
           'M': this.message,
        })
         .then((res) => {
           let jdict = JSON.parse(res.body);
           this.C1 = jdict.C1;
           this.C2 = jdict.C2;
           this.D1 = jdict.D1;
           this.D2 = jdict.D2;
           this.E = jdict.E;
           // this.message = jdict.msg;
           this.C = jdict.C;
           this.tag = jdict.tag;
           this.$emit("updateCT", {
             'C1': this.C1,
             'C2': this.C2,
             'D1': this.D1,
             'D2': this.D2,
             'E': this.E,
             'C': this.C,
           });
           this.flag++;
           this.visible_enc = false;
           this.asyncConfirmLoading = false;
           this.enc_loading = false;
           this.b_loading = false;
         }, (err) => {
           window.console.log(err);
         });
      }
    },
  }
}
</script>


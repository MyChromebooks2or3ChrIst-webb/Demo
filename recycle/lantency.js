const process = require('process');
const thrift = require('thrift');
const rpcSetup = require('./gen-nodejs/setup.js');
const rpcTypes = require('./gen-nodejs/module_types.js');

const options = {
  transport: thrift.TBUfferedTransport,
  protocol: thrift.TJSONProtocol,
  headers: {"Connection": "close"},
  https: false
};

let recoder = {
  'Keygen Time': [],
  'Enc Time': [],
  'Dec Time': []
};

// csv
//    .writeToPath("test.csv", [
//        ["a", "b"],
//        ["a1", "b1"],
//        ["a2", "b2"]
//    ], {headers: true})
//    .on("finish", function(){
//        console.log("done!");
//    });

let connection = thrift.createHttpConnection('10.20.36.141', 2333, options);
let client = thrift.createHttpClient(rpcSetup, connection);
connection.on('error', (err) => {
  console.log(err);
});

function std_time(end, start){
  // return a value in ms
  return ((end[0] * 1e9 + end[1]) - (start[0] * 1e9 + start[1])) / 1e6
}

async function test_all (){
  let pk = {};
  let sk = {};
  let ct = {};
  let recoder = [];

  const s1 = process.hrtime();
  let chunk1 = new rpcTypes.InitParame({
    'L': 'SS1024'
  });
  client.init(chunk1, (err, ret) => {
    pk['g1'] = ret.g1;
    pk['g2'] = ret.g2;
    pk['z'] = ret.z;
    pk['u1'] = ret.u1;
    pk['u2'] = ret.u2;
    sk['x1'] = ret.x1;
    sk['x2'] = ret.x2;
    sk['y1'] = ret.y1;
    sk['y2'] = ret.y2;
    const e1 = process.hrtime();
    // console.log(std_time(e1, s1));
    recoder.push(std_time(e1, s1));
    let chunk2 = new rpcTypes.Enc({
      'g1': pk.g1,
      'g2': pk.g2,
      'z': pk.z,
      'u1': pk.u1,
      'u2': pk.u2,
      'L': 'SS1024',
      'M': 'message',
    });

    const s2 = process.hrtime();
    client.execEnc(chunk2,(err, ret) => {
      ct['C1'] = ret.C1;
      ct['C2'] = ret.C2;
      ct['D1'] = ret.D1;
      ct['D2'] = ret.D2;
      ct['E'] = ret.E;
      ct['C'] = ret.C;
      ct['tag'] = ret.tag;

      const e2 = process.hrtime();
      // console.log(std_time(e2, s2));
      recoder.push(std_time(e2, s2));

      let chunk3 = new rpcTypes.Dec({
        'x1': sk.x1,
        'x2': sk.x2,
        'y1': sk.y1,
        'y2': sk.y2,
        'tag': ct.tag,
        'C1': ct.C1,
        'C2': ct.C2,
        'D1': ct.D1,
        'D2': ct.D2,
        'E': ct.E,
        'L': 'SS1024',
        'C': ct.C
      });

      const s3 = process.hrtime();
      client.execDec(chunk3, (err, ret) => {
        let M = ret.M;
        const e3 = process.hrtime();
        // console.log(std_time(e3, s3));
        recoder.push(std_time(e3, s3));
        console.log(recoder.join(','));
      });
    });
  }); 
}

test_all()
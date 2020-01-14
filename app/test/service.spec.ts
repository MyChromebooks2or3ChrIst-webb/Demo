import oasis from '@oasislabs/client';

jest.setTimeout(20000);

describe('Simstore', () => {
  let service;

  beforeAll(async () => {
    service = await oasis.workspace.Simstore.deploy('9527',{
      header: { confidential: false },
      gasLimit: '0xebced9',
    });
    // console.log(service);
  });

  it('TEST # Deployed', async () => {
    let service2 = await oasis.workspace.Simstore.deploy('9527',{
      header: { confidential: false },
      gasLimit: '0xebced9',
    });
    // expect(service).toBeTruthy();
  });

  it('TEST # Regist', async () => {
    // let ret = await service.regist('Secret #1', 'Policy #1');
    let ret = expect(await service.regist('secret', 'p#1'));
    // console.log(ret);
  });

  it('TEST # Update', async () => {
    expect(await service.update('233333', 'p#1'));
  });

  it('TEST # Inspect', async () => {
    let ret = await service.inspect('p#2');
  });

  // it('TEST #4', async () => {
  //   let ret = await service.testhash();
  //   console.log(ret);
  // });

  afterAll(() => {
    oasis.disconnect();
  });
});
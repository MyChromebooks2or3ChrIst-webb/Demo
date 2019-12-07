import oasis from '@oasislabs/client';

jest.setTimeout(20000);

describe('Simstore', () => {
  let service;

  beforeAll(async () => {
    service = await oasis.workspace.Simstore.deploy('Policy #1',{
      header: { confidential: false },
      gasLimit: '0xebced9',
    });
  });

  it('TEST # Deployed', async () => {
    let service2 = await oasis.workspace.Simstore.deploy('Policy #1',{
      header: { confidential: false },
      gasLimit: '0xebced9',
    });
    // expect(service).toBeTruthy();
  });

  it('TEST # Regist', async () => {
    // let ret = await service.regist('Secret #1', 'Policy #1');
    expect(await service.regist('s', 'p#1'));
    // console.log(ret);
  });

  it('TEST # Update', async () => {
    expect(await service.update('233333', 'Policy #1'));
  });

  it('TEST # Inspect', async () => {
    let ret = await service.inspect('0xb8b3666d8fea887d97ab54f571b8e5020c5c8b58', 'p#1');    
  });

  // it('TEST #4', async () => {
  //   let ret = await service.testhash();
  //   console.log(ret);
  // });

  afterAll(() => {
    oasis.disconnect();
  });
});
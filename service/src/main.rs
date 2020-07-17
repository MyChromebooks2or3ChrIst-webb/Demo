#![feature(test)]

extern crate test;

// use test::Bencher;
use oasis_std::{Address, Context};
use sha2::{Sha256, Digest};
use map_vec::{Map,Set};

extern crate time;
use time::PreciseTime;

#[derive(oasis_std::Service)]
struct Simstore{
    secret: String,
    admin: Address,
    // policy: String,
    // hint: Map<Address, String>
    hint: Map<String, Set<Address>>
}

type Result<T> = std::result::Result<T, String>;

impl Simstore {
    pub fn new(ctx: &Context, secret: String) -> Self {
        Self{
            // secret: String::new(),
            secret: secret.to_string(),
            admin: ctx.sender(),
            // policy: policy.to_string(),
            hint: Map::new()
        }
    }

    pub fn regist(&mut self, ctx: &Context, secret: String, policy: String) -> Result<(String)> {
        // Only creator can change the secret
        // 
        // if self.admin != ctx.sender() {
        //     return Err("You will be punished!".to_string())
        // }
        self.secret = secret;
        let mut temp = Set::new();
        temp.insert(self.admin);
        self.hint.insert(policy, temp);
        return Ok("Success".to_string());

        // if self.policy != policy {            
        //     self.hint.insert(policy, temp);
        //     return Ok("Keep Traditional".to_string());
        // }
        // self.hint.insert(self.policy.clone(), temp);
        // return Ok("New One".to_string());
    }

    pub fn update(&mut self, ctx: &Context, v: String, policy: String) -> Result<Vec<u8>> {
        if let Some(x) = self.hint.get_mut(&policy) {
            x.insert(ctx.sender());
            // self.hint.get(&policy).insert(ctx.sender());
            let mut hasher = Sha256::new();
            let s3 = v + &self.secret;
            hasher.input(s3);
            let result = hasher.result();
            // result[..].to_vec();
            // return &self.secret;
            return Ok(result[..].to_vec());
        }
        return Err("Not Mattched".to_string());
    }

    pub fn inspect(&mut self, ctx: &Context, p: String) -> bool {
        if let Some(x) = self.hint.get_mut(&p) {
            if x.contains(&ctx.sender()) {
                return true;
            }
            return false;
        }
        return false;
    }
}

fn main() {
    oasis_std::service!(Simstore);
}

#[cfg(test)]
mod tests {
    extern crate oasis_test;
    use super::*;

    #[test]
    fn test() {

        for _x in 0..1000 {
            let s1 = PreciseTime::now();
            
            let sender = oasis_test::create_account(1);
            let ctx = Context::default().with_sender(sender);
            let mut client = Simstore::new(&ctx, "9527".to_string());
            
            let s2 = PreciseTime::now();

            let _ret1 = client.regist(&ctx, "s".to_string(), "policy".to_string());

            let s3 = PreciseTime::now();

            let _ret2 = client.update(&ctx, "v".to_string(), "policy".to_string());

            let s4 = PreciseTime::now();

            let _ret3 = client.inspect(&ctx, "policy".to_string());

            let end = PreciseTime::now();

            println!("Contract Gen: {}, Registration: {}, Update: {}, Inspection: {}", s1.to(s2), s2.to(s3), s3.to(s4), s4.to(end));

        }
        
        // println!("{}", client.regist(&ctx, "secret".to_string(), "policy #2".to_string() ) );
        // println!("{}", client.fetch(&ctx));
        // println!("{:?}", client.store(&ctx, "123".to_string()));
        // println!("{}", client.fetch(&ctx));
        // client.testhash(&ctx);
    }
    // #[bench]
    // fn bench_init(b: &mut Bencher) {
    //     b.iter(|| test());
    // }
}
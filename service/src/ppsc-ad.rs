#![feature(test)]

// extern crate test;
// use test::Bencher;
// 
use oasis_std::{Address, Context};
use map_vec::{Map,Set};

extern crate time;
use time::PreciseTime;

#[derive(oasis_std::Service)]
struct Auditor{
    admin: Address
}

type Result<T> = std::result::Result<T, String>;

impl Auditor {
  pub fn new(ctx: &Context) -> Self {
      Self{
          admin: ctx.sender()
      }
  }

  pub fn inspect(&mut self, _ctx: &Context, tx: Address, p: String, hint: Map<String, Set<Address>>) -> bool {
      if let Some(x) = &hint.get_mut(&p) {
          if x.contains(&tx) {
              return true;
          }
          return false;
      }
      return false;
  }
}

fn main() {
    oasis_std::service!(Auditor);
}

#[cfg(test)]
mod tests {
    extern crate oasis_test;
    use super::*;

    #[test]

    fn test() {
        for _x in 0..1000 {
          let start = PreciseTime::now();

          let sender = oasis_test::create_account(1);
          let ctx = Context::default().with_sender(sender);
          let mut client = Auditor::new(&ctx, "policy".to_string());

          let end = PreciseTime::now();
          println!("Inspect: {}", start.to(end));
        }
    }
}
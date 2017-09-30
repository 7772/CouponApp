import md5 from 'md5';

class Coupon {
  constructor(name, number, photoSource) {
    this.name = name;
    this.number = number;
    this.photoSource = photoSource;
    this.id = md5(name + number + photoSource);
  }

  setFromObject(ob) {
    this.name = ob.name;
    this.number = ob.number;
    this.photoSource = ob.photoSource;
    this.id = ob.id;
  }

  static fromObject(ob) {
    let c = new Coupon(ob.name, ob.number, ob.photoSource);
    c.setFromObject(ob);
    return c;
  }
}

export default Coupon;

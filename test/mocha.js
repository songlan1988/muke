const assert=require('assert');
const {add,mul,cover}=require('../src/math');

describe('#math',()=>{
    describe('add',()=>{
        it('should return 5 when 2+3',()=>{
            assert(add(2,3),5);
        });
    });
    describe('add',()=>{
        //只执行这个 it.only
        //只跳过这个 it.skip
        it.skip('should return -1 when 2-3',()=>{
            assert(add(2,-3),-1);
        });
    });
    describe('mul',()=>{
        it('should return 6 when 2*3',()=>{
            assert(mul(2,3),6);
        });
    });
    // describe('cover',()=>{
    //     it('should return 1 when cover(2,1)',()=>{
    //         assert(cover(2,1),1);
    //     });
    //     it('should return 3 when cover(1,2)',()=>{
    //         assert(cover(1,2),3);
    //     });
    //     it('should return 4 when cover(2,2)',()=>{
    //         assert(cover(2,2),4);
    //     });
    // })
})
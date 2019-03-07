import LottieSchema from '../src/index'
// import * as data1 from '../data/组合元件/形状动画合成.json'
// tslint:disable-next-line:no-console
const log = obj => console.log(JSON.stringify(obj))

it('改变size', () => {
  const lottieSchema = new LottieSchema({
    w: 300,
    h: 300,
  })
  // lottieSchema.setSize({
  //   width: '233',
  //   height: '322',
  // })
  // expect(lottieSchema.getSize()).toEqual({
  //   width: '233',
  //   height: '322',
  // })
  log(lottieSchema.getSize())
})

it('changeBgImage', () => {
  const lottieSchema = new LottieSchema({
    w: 300,
    h: 300,
  })
  lottieSchema.addBgImage({
    url: 'https://gw.alipayobjects.com/zos/antfincdn/I9Bu85KAaq/750x300.png',
    width: 750,
    height: 300,
  })
  // lottieSchema.addBgImage({
  //   url: 'https://gw.alipayobjects.com/zos/antfincdn/I9Bu85KAaq/750x300.png',
  //   width: 800,
  //   height: 400,
  // })
  // lottieSchema.changeBg({
  //   type: 'bgColor',
  //   data: {
  //     color: '#0ae'
  //   }
  // })
  lottieSchema.changeBgImage({
    scale: 233,
    position: {
      x: 100,
      y: 150,
    },
  })
  log(lottieSchema.getObj())
})

it('addPrecomp', () => {
  const lottieSchema = new LottieSchema()
  lottieSchema.addBgImage({
    url: 'https://gw.alipayobjects.com/zos/antfincdn/I9Bu85KAaq/750x300.png',
    width: 750,
    height: 300,
  })
  lottieSchema.addPrecomp({
    v: '5.4.4',
    fr: 25,
    ip: 0,
    op: 750,
    w: 1024,
    h: 350,
    nm: '形状动画合成',
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: '形状图层 1',
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11,
          },
          r: {
            a: 0,
            k: 0,
            ix: 10,
          },
          p: {
            a: 1,
            k: [
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 0,
                s: [512, 175, 0],
                e: [1128, 175, 0],
                to: [102.667, 0, 0],
                ti: [-4.833, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 27,
                s: [1128, 175, 0],
                e: [541, 175, 0],
                to: [4.833, 0, 0],
                ti: [0.167, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 53,
                s: [541, 175, 0],
                e: [1127, 175, 0],
                to: [-0.167, 0, 0],
                ti: [7.517, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 84,
                s: [1127, 175, 0],
                e: [495.9, 175, 0],
                to: [-7.517, 0, 0],
                ti: [-0.167, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 111,
                s: [495.9, 175, 0],
                e: [1128, 175, 0],
                to: [0.167, 0, 0],
                ti: [-7.517, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 141,
                s: [1128, 175, 0],
                e: [541, 175, 0],
                to: [7.517, 0, 0],
                ti: [0.167, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 167,
                s: [541, 175, 0],
                e: [1127, 175, 0],
                to: [-0.167, 0, 0],
                ti: [7.517, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 198,
                s: [1127, 175, 0],
                e: [495.9, 175, 0],
                to: [-7.517, 0, 0],
                ti: [-0.167, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 225,
                s: [495.9, 175, 0],
                e: [1128, 175, 0],
                to: [0.167, 0, 0],
                ti: [-7.517, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 256,
                s: [1128, 175, 0],
                e: [541, 175, 0],
                to: [7.517, 0, 0],
                ti: [0.167, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 283,
                s: [541, 175, 0],
                e: [1127, 175, 0],
                to: [-0.167, 0, 0],
                ti: [7.517, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 314,
                s: [1127, 175, 0],
                e: [495.9, 175, 0],
                to: [-7.517, 0, 0],
                ti: [-0.167, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 341,
                s: [495.9, 175, 0],
                e: [1128, 175, 0],
                to: [0.167, 0, 0],
                ti: [-7.517, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 358,
                s: [1128, 175, 0],
                e: [541, 175, 0],
                to: [7.517, 0, 0],
                ti: [0.167, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 384,
                s: [541, 175, 0],
                e: [1127, 175, 0],
                to: [-0.167, 0, 0],
                ti: [7.517, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 415,
                s: [1127, 175, 0],
                e: [495.9, 175, 0],
                to: [-7.517, 0, 0],
                ti: [-0.167, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 442,
                s: [495.9, 175, 0],
                e: [1128, 175, 0],
                to: [0.167, 0, 0],
                ti: [-7.517, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 472,
                s: [1128, 175, 0],
                e: [541, 175, 0],
                to: [7.517, 0, 0],
                ti: [0.167, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 498,
                s: [541, 175, 0],
                e: [1127, 175, 0],
                to: [-0.167, 0, 0],
                ti: [7.517, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 529,
                s: [1127, 175, 0],
                e: [495.9, 175, 0],
                to: [-7.517, 0, 0],
                ti: [-0.167, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 556,
                s: [495.9, 175, 0],
                e: [1128, 175, 0],
                to: [0.167, 0, 0],
                ti: [-7.517, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 587,
                s: [1128, 175, 0],
                e: [541, 175, 0],
                to: [7.517, 0, 0],
                ti: [0.167, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 614,
                s: [541, 175, 0],
                e: [1127, 175, 0],
                to: [-0.167, 0, 0],
                ti: [7.517, 0, 0],
              },
              {
                i: {
                  x: 0.833,
                  y: 0.833,
                },
                o: {
                  x: 0.167,
                  y: 0.167,
                },
                t: 645,
                s: [1127, 175, 0],
                e: [495.9, 175, 0],
                to: [-7.517, 0, 0],
                ti: [105.183, 0, 0],
              },
              {
                t: 672,
              },
            ],
            ix: 2,
          },
          a: {
            a: 0,
            k: [0, 0, 0],
            ix: 1,
          },
          s: {
            a: 0,
            k: [50, 50, 50],
            ix: 6,
          },
        },
        ao: 0,
        shapes: [
          {
            ty: 'gr',
            it: [
              {
                ty: 'rc',
                d: 1,
                s: {
                  a: 0,
                  k: [222.297, 151.234],
                  ix: 2,
                },
                p: {
                  a: 0,
                  k: [0, 0],
                  ix: 3,
                },
                r: {
                  a: 0,
                  k: 0,
                  ix: 4,
                },
                nm: '矩形路径 1',
                mn: 'ADBE Vector Shape - Rect',
                hd: false,
              },
              {
                ty: 'fl',
                c: {
                  a: 0,
                  k: [1, 0, 0, 1],
                  ix: 4,
                },
                o: {
                  a: 0,
                  k: 100,
                  ix: 5,
                },
                r: 1,
                bm: 0,
                nm: '填充 1',
                mn: 'ADBE Vector Graphic - Fill',
                hd: false,
              },
              {
                ty: 'tr',
                p: {
                  a: 0,
                  k: [-322.852, -1.383],
                  ix: 2,
                },
                a: {
                  a: 0,
                  k: [0, 0],
                  ix: 1,
                },
                s: {
                  a: 0,
                  k: [100, 100],
                  ix: 3,
                },
                r: {
                  a: 0,
                  k: 0,
                  ix: 6,
                },
                o: {
                  a: 0,
                  k: 100,
                  ix: 7,
                },
                sk: {
                  a: 0,
                  k: 0,
                  ix: 4,
                },
                sa: {
                  a: 0,
                  k: 0,
                  ix: 5,
                },
                nm: '变换',
              },
            ],
            nm: '矩形 1',
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: 'ADBE Vector Group',
            hd: false,
          },
        ],
        ip: 0,
        op: 750,
        st: 0,
        bm: 0,
      },
    ],
    markers: [],
  })
  log(lottieSchema.getObj())
})

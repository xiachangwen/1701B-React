import React from 'react';
import logo from './logo.svg';
import './jd/style.css';

import Header from './jd/header'
import Scrtions from './jd/scrtions'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        header : {
          title:"京东JD.COM官网 多快好省 只为品质生活",
          img:'https://ecmb.bdimg.com/tam-ogel/00d635f3f29a58c7b92f6e8d67992432_121_121.jpg',
          tit:'京东JD.COM-专业综合网上购物商城，销售超数万品牌，4020万种商品，囊括、母婴、美妆、个护、食品、旅游等13大品类。京东PLUS会员，免费体验30天！京东秉承客户为先， 100％正品行货保障，提供全国联保，机打发票，专业配送，售后服务！'
        },
        conter : [
          {
            title:"家用电器",
            img:"https://ecmb.bdimg.com/tam-ogel/5f91de733b73e8d5a44142f491043a87_254_96.jpg",
            titl:"全球年中购物节-家电嗨购	抢618元神券",
            link:['空调618年中大促','冰洗疯抢618','潮流小电集中营','大屏电视会场']
          },
          {
            title:"手机通讯",
            img:"https://ecmb.bdimg.com/tam-ogel/de8b577d9d03ae1207527971e30b1b6f_254_96.jpg",
            titl:"京东手机618 5折手机天天抢 大牌手机5折秒 领券立减618元",
            link:['RedmiK20旗舰手机','vivo Z5x现货发售','realme X超级新品','荣耀20新品上市']
          },
          {
            title:"电脑数码",
            img:"https://ecmb.bdimg.com/tam-ogel/56ec0f7c439828f236de3a34d5ceefaf_254_96.jpg",
            titl:"智能酷玩 你喜欢的在这里	抢888-666神券",
            link:['玩所未玩','电脑数码拼购专享','科学享瘦清凉一夏','全场白条6期免息']
          },
          {
            title:"食品百货",
            img:"https://ecmb.bdimg.com/tam-ogel/d979cd6ae510e0583786a402370bd0af_254_96.jpg",
            titl:"618食品饮料年中狂欢 满199减100",
            link:['母婴满减288减120','家清纸品168减100','美酒致父爱','超市618主会场']
          },{
            title:"生活服务",
            img:"https://ecmb.bdimg.com/tam-ogel/5226ee7e8a85f5a278a0ab28234361cd_254_96.jpg",
            titl:"健康好物领券499减100元！速抢~",
            link:['车品满199减100','机票满100减61.8','年中购房钜惠','鲜花绿植1元秒']
          },{
            title:"海囤全球",
            img:"https://ecmb.bdimg.com/tam-ogel/76e113a3a877fa1050b85415680ebdb2_254_96.jpg",
            titl:"海囤全球，京东旗下全球直购平台",
            link:['进口母婴299-100','全球美妆活的漂亮','数码家电 499减50','全球保健爆款直降']
          }
        ]
      }
  }

  render(){
    let {header, conter} = this.state
    // console.log(conter)
    return (
      <div className="App">
       <Header header={header} />
       <Scrtions conter={conter} />
      </div>
    )
  }
}

export default App;

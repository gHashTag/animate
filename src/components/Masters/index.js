import React, { PureComponent } from 'react'
import { Button, Dimensions, Image, View, ProgressBar, Text } from 'react-native' // eslint-disable-line
import Parallax from 'react-springy-parallax'
import Master from './Master'

//const win = Dimensions.get('window')

const data = [
  {
    id: 0,
    title: "Дмитрий Федеров",
    subTitle: "System 432",
    info: "Авторская гимнастика позволяющая на минимальном пространстве за 20 минут ежедневных упражнений запустить в себе энергию, мягко проработать проблемные зоны спины, растянуться и шаг за шагом благодаря гармонизирующим вибрациям в диапазоне 432 hz научиться отключаться от техногенного воздействия города.",
    img: "http://игралила.рф/cityretreat/image/1.png",
  },
  {
    id: 1,
    title: "Ольга Семичева",
    subTitle: "Аштанга-Виньяса",
    info: "По образованию я дизайнер интерьера, также долгое время работала фотографом. С йогой познакомилась 15 лет назад,и всё это время она она интересовала меня больше, чем моя профессиональная деятельность. \n Я практиковала: йогу Айенгара, йогу 23, Аштанга-Виньяса йогу (и преподавала её же изначально, с 2011 года), Ха-Тха и Кундалини-йогу.",
    img: "http://игралила.рф/cityretreat/image/2.png",
  }
]


export default class Masters extends PureComponent {
  scroll = to => this.refs.parallax.scrollTo(to)

  renderMasters = () => {
    console.log('ref', this.refs.parallax)
    return data.map(master => <Master 
      onPress={() => this.scroll(master.id+1)}
      master={master} 
      key={master.id}/>)
  }

  render() {
    return (
      <Parallax 
        ref="parallax"
        pages={3} horizontal scrolling={false}>
        {this.renderMasters(this.refs.parallax)}
      </Parallax>
    )
  }
}
        //<Page offset={1} title={data[1].title} subTitle={data[1].subTitle} onClick={() => this.scroll(2)} />
        //<Page offset={2} title="Morbi quis" onClick={() => this.scroll(0)} />

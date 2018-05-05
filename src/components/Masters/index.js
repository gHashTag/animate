import React from 'react'
import { Helmet } from 'react-helmet'
import Masters from './Masters'

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Мастера·Mansion Wellness</title>
      <link rel="canonical" href="http://cityretreat.ru/master/felikspak" />
      <meta name="keywords" content="йога, сити ретрит, spa, wellness, спа, велнес"/>
      <meta name="description" content="Особняк в центре Москвы, где вы можете насладиться здоровым образом жизни, расслабиться и восстановить силы. Уникальный формат Центра – сочетание современных высокотехнологичных систем лечения с древними традициями оздоровительных практик. Обучение методикам омоложения, принципам осознанного отношения к здоровью, питанию, избавлению от зависимостей."/>
    </Helmet>
    <Masters /> 
  </div>
)

import React, { PureComponent } from 'react'
import { TouchableHighlight, Linking, Dimensions, Image, View, Text } from 'react-native' // eslint-disable-line

class PriceCard extends PureComponent {
  render() {
    const { h1, h2, h3 } = styles
    const { title, status, price, info1, info2, info3, info4 } = this.props.cardinfo
    const { backgroundColor, borderColor, h1color, h2color, h3color } = this.props.colorcard
    return (
      <View 
        style={{ 
          backgroundColor,
          margin: 1,
          borderColor,
          borderWidth: 2,
          borderRadius: 20,
          height: 396 * 0.95,
          width: 250 * 0.95,
          shadowColor: '#9B9B9B',
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8
        }}
      >
        <Text style={[h2, { marginTop: 50, color: h2color }]}>{title}</Text>
        <Text style={[h2, { color: h2color }]}>{status}</Text>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
          <Text style={[h1, { color: h1color }]}>{'\u20bd'} </Text>
          <Text 
            style={[h1, { color: h1color }]}
          >
            {price}
          </Text>
        </View>
        <Text style={[h3, { marginTop: 20, color: h3color }]}>{info1}</Text>
        <Text style={[h3, { color: h3color }]}>{info2}</Text>
        <Text style={[h3, { color: h3color }]}>{info3}</Text>
        <Text style={[h3, { color: h3color }]}>{info4}</Text>
      </View>
    )
  }
}

const styles = {
  h1: {
    fontFamily: 'Museo500', 
    fontSize: 35 
  },
  h2: {
    fontFamily: 'Museo500', 
    fontSize: 20, 
    marginTop: 0, 
    alignSelf: 'center' 
  },
  h3: {
    fontFamily: 'CirceLight', 
    fontSize: 16, 
    marginTop: 0, 
    width: 200, 
    textAlign: 'center', 
    alignSelf: 'center' 
  }
}

export { PriceCard }

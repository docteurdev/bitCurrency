import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

// import {ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation} from '@rainbow-me/animated-charts';

// export const {width: SIZE} = Dimensions.get('window');

const Chart = ({name, symbol, priceChangePercentage7d, currentPrice, logoUrl, sparkline}) => {
  return (
  // <ChartPathProvider data={{ points: sparkline, smoothingStrategy: 'bezier' }}>
    <View style= {styles.titleWrapper} >
      <View style= {styles.upperTitle} >

        <View style= {styles.upperLeftTitle} >
            <View>
                <Image
                source={{uri: logoUrl}}
                style= {styles.upperLeftTitleImage}
                />
                <Text style={styles.title}> ${currentPrice.toLocaleString('en-US',{currency: "USD"})} </Text>
             </View>
                <Text style= {styles.name}> {name}  {symbol} </Text>
        </View>



        <View style= {styles.lowerTitle} >
             <Text style= {styles.subTitle}> 7d </Text>
            <Text style= {styles.title}> {priceChangePercentage7d.toFixed(2)} % </Text>
        </View>
      </View>
     
     {/* <ChartPath height={SIZE / 2} stroke="yellow" width={SIZE} />
      <ChartDot style={{ backgroundColor: 'blue' }} /> */}
    </View>
    // </ChartPathProvider>

  )
}


const styles = StyleSheet.create({
    upperLeftTitleImage:{
        width: 30,
        height: 30,
        marginLeft: 10
    },
    // name:{
    //   marginLeft: -10
 
    // },

    upperLeftTitle:{
      flexDirection: "row",

    },

    upperTitle:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },

    subTitle:{

    },
    lowerTitle:{
    //      flexDirection: "row",
    //   justifyContent: "space-between",
      alignItems: "center"
    },
    boldTitle:{

    },
    title:{
      marginLeft: 10,
      fontSize: 18,
      fontWeight: "bold"
    },

})
export default Chart
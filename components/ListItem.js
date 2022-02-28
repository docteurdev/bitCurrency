import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

function ListItem({name, symbol, priceChangePercentage7d, currentPrice, logoUrl}) {

    const priceChanggeColor = priceChangePercentage7d > 0 ? "#34c759": "#ff3b30"
    return (
        <TouchableOpacity>
            <View style={styles.itemWrapper} >
                {/* left side */}
                <View style={styles.leftWrapper} >
                    <Image 
                     style={styles.image}
                    source={{uri: logoUrl}}/>
                  <View style={styles.titlesWrapper}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subTitle}> {symbol.toUpperCase()} </Text>
                  </View>
                
                </View>
                {/* right side */}
                <View style={styles.rightWrapper} >
                    <Text style={styles.title}> ${currentPrice.toLocaleString('en-US',{currency: "USD"})} </Text>
                    <Text style={[styles.subTitle, {color: ListItem}]}> {priceChangePercentage7d.toFixed(2)} % </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    itemWrapper:{
        marginVertical: 20,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },

    leftWrapper:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightWrapper:{
        alignItems:'flex-end'
    },

    titlesWrapper:{
     marginLeft: 10
    },

    image:{
        width: 40,
        height: 40
    },

    title:{
        fontSize: 14
    },
    subTitle:{
        fontSize: 12,
        color: "gray",
        marginTop: 4

    }
})

export default ListItem
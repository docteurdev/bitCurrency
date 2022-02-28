import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { SAMPLE_DATA } from './assets/data/sampleData';
import ListItem from './components/ListItem';

 const ListHeader = () =>(
   <>
     <View style={styles.largTitleWrapper}>
        <Text style={styles.largTitle}>Markets</Text>
      </View>
      <View style={styles.divider}/>
   </>
 )

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     
      <View>

         <FlatList
         data ={SAMPLE_DATA}
         renderItem = {({item}) =>
        
         <ListItem  
         name = {item.name}
         symbol ={item.symbol}
         currentPrice = {item.current_price}
         priceChangePercentage7d = {item.price_change_percentage_7d_in_currency}
         logoUrl = {item.image}
          />
        }
        keyExtractor ={(item) => item.id}
        ListHeaderComponent ={<ListHeader/>}
        showsVerticalScrollIndicator ={false}
         />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  largTitleWrapper:{
    marginTop: 40,
    paddingHorizontal: 16
  },

  largTitle:{
    fontWeight: "bold",
    fontSize: 20
  },
  divider:{
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#a9abb1",
    marginHorizontal: 6,
    marginTop: 10
  }
});

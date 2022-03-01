import { FlatList, StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { SAMPLE_DATA } from './assets/data/sampleData';
import ListItem from './components/ListItem';

import {BottomSheetModal,BottomSheetModalProvider,} from '@gorhom/bottom-sheet';
import { useRef, useMemo, useCallback, useState } from 'react';

import Chart from "./components/Chart"
 const ListHeader = () =>(

   <>
     <View style={styles.largTitleWrapper}>
        <Text style={styles.largTitle}>Markets</Text>
      </View>
      <View style={styles.divider}/>
   </>
 )

export default function App() {

  const [selectedCoinData, setSelectedCoinData]= useState(null)
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  const openModal = (item) =>{
    setSelectedCoinData(item)
    bottomSheetModalRef.current.present()
  }


   
  return (
    <BottomSheetModalProvider>
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
         showBtnSheet ={() => openModal(item)}
          />
        }
        keyExtractor ={(item) => item.id}
        ListHeaderComponent ={<ListHeader/>}
        showsVerticalScrollIndicator ={false}
         />
      </View>
    </SafeAreaView>

    <BottomSheetModal
     ref={bottomSheetModalRef}
     index={0}
     snapPoints={snapPoints}
     style={styles.bottomSheetWrapper}
        >
        {selectedCoinData ? (
                 <Chart
         name = {selectedCoinData.name}
         symbol ={selectedCoinData.symbol}
         currentPrice = {selectedCoinData.current_price}
         priceChangePercentage7d = {selectedCoinData.price_change_percentage_7d_in_currency}
         logoUrl = {selectedCoinData.image}
        sparkline = {selectedCoinData.sparkline_in_7d.price}
        />
        ): null
        }

    </BottomSheetModal>
    </BottomSheetModalProvider>
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
  },

  bottomSheetWrapper:{
    backgroundColor: "#000",
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: -4
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
    }
});

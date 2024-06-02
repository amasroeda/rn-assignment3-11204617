
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CardItem from './CardItem';
import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo2.png'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.jpg'
import photo5 from '../assets/photo5.jpg'
import photo6 from '../assets/photo6.jpg'
import photo7 from '../assets/photo7.jpg'
import photo8 from '../assets/photo8.jpg'
const data = [
  { id: '1', title: 'Team Work', description: '11 Tasks', imagelink: photo1 },
  { id: '2', title: 'Podcasting', description: '10 Tasks', imagelink: photo2 },
  { id: '3', title: 'Gourmet Cooking', description: '9 Tasks', imagelink: photo3 },
  { id: '4', title: 'Music', description: '8 Tasks', imagelink: photo4 },
  { id: '5', title: 'Programming', description: '7 Tasks', imagelink: photo5 },
  { id: '6', title: 'Singing', description: '4 Tasks', imagelink: photo6  },
  { id: '7', title: 'Meditating', description: '8 Tasks', imagelink: photo7 },
  { id: '8', title: 'Planning', description: '5 Tasks', imagelink: photo8 },
];

const HorizontalCardList = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => <CardItem title={item.title} description={item.description} imagelink={item.imagelink}/>}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
  },
});

export default HorizontalCardList;
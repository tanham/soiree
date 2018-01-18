import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import Header from '../components/Header';
import DatesList from '../components/DatesList';
import CustomButton from '../components/CustomButton';
import CardSection from '../components/Card';

class Home extends Component {
  render() {
    return (
      <ScrollView>

        <Text style={{textAlign: 'center'}}>
        Featued Lists</Text>


        <View style={{flexDirection: 'row', }}>
          <CardSection>
            <TouchableOpacity style={{width: 160, height: 160 }} onPress={() =>console.log("it's happening")}>
              <Text style={{textAlign: 'center', // <-- the magic
                            fontWeight: 'bold',
                            fontSize: 32,
                            marginTop: 100,
                            }}>
              Eats
              </Text>
            </TouchableOpacity>
          </CardSection>

          <CardSection>
            <TouchableOpacity style={{width: 160, height: 160 }} onPress={() =>console.log("it's happening")}>
              <Text style={{textAlign: 'center', // <-- the magic
                            fontWeight: 'bold',
                            fontSize: 32,
                            marginTop: 100,}}>
              Active
              </Text>
            </TouchableOpacity>
          </CardSection>
        </View>

        <View style={{flexDirection: 'row'}}>
        <CardSection>
        <TouchableOpacity style={{width: 160, height: 160 }} onPress={() =>console.log("it's happening")}>
          <Text style={{textAlign: 'center', // <-- the magic
                        fontWeight: 'bold',
                        fontSize: 32,
                        marginTop: 100,}}>
          Live
          </Text>
        </TouchableOpacity>
        </CardSection>


        <CardSection>
        <TouchableOpacity style={{width: 160, height: 160 }} onPress={() =>console.log("it's happening")}>
          <Text style={{textAlign: 'center', // <-- the magic
                        fontWeight: 'bold',
                        fontSize: 32,
                        marginTop: 100,}}>
          Random
          </Text>
        </TouchableOpacity>
        </CardSection>
        </View>

      </ScrollView>

    );
  }
}

export default Home;

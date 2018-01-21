import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import Header from '../components/Header';
import DatesList from '../components/DatesList';
import CustomButton from '../components/CustomButton';
import CardSection from '../components/Card';
import DateDetail from '../components/DateDetail';

class Home extends Component {
  render() {

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.homeLayoutStyle}>

      <CustomButton
        onPress={() => navigate('DateSearch', { name: 'Date Search'})}
        >
        Create Your Own Experience!
      </CustomButton>

      <View style={styles.buttonLayoutStlye}>
      <View style={{flexDirection: 'row', }}>
      <CustomButton style={{width: 160, height: 160 }}>
      <Text
        onPress={() => navigate('CuratedResults', { name: 'Dates'})}
        style={{textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 32,
                    marginTop: 100,
                    }}>
      Eats
      </Text>
      </CustomButton>

      <CustomButton style={{width: 160, height: 160 }}>
      <Text
        onPress={() => navigate('CuratedResults', { name: 'Dates'})}
        style={{textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 32,
                    marginTop: 100,
                    }}>
      Active
      </Text>
      </CustomButton>
      </View>

      <View style={{flexDirection: 'row', }}>
      <CustomButton style={{width: 160, height: 160 }}>
      <Text
      onPress={() => navigate('CuratedResults', { name: 'Dates'})}
      style={{textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 32,
                    marginTop: 100,
                    }}>
      Live
      </Text>
      </CustomButton>

      <CustomButton style={{width: 160, height: 160 }}>
      <Text
      onPress={() => navigate('CuratedResults', { name: 'Dates'})}
      style={{textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 32,
                    marginTop: 100,
                    }}>
      Random
      </Text>
      </CustomButton>
      </View>

      </View>

      </View>

    );
  }
}

const styles = {
  homeLayoutStyle: {
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonLayoutStlye: {
      marginTop: 10,
  }
};

export default Home;

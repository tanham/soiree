import React from 'react';
import { View,
          ScrollView,
          Text,
          Button,
          Platform,
          StyleSheet,
          TextInput,
          Image } from 'react-native';
import { FormLabel,
        FormInput,
        FormValidationMessage,
        SearchBar,
        Icon } from 'react-native-elements';
import { Constants,
          Location,
          Permissions } from 'expo';
import { GOOGLE_API_KEY } from 'react-native-dotenv';
import '../global';
import axios from 'axios';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import CustomButton from '../components/CustomButton';

const DateDetail = (props) => {
  const { navigate } = props.navigation;

  return (
    <Card>
      <CardSection>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{props.date.name}</Text>
          <Text style={{color: '#fff'}}>{props.date.vicinity}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{ uri : 'http://clipartix.com/wp-content/uploads/2016/04/Hearts-heart-clipart.png'}}
        />
      </CardSection>
      <CardSection>


        <View style={styles.anotherCustomButtonStyle}>
          <Button
          onPress={() => navigate('DateScreen', { name: 'Date'}, placeid=props.date.place_id) }
          title='Click Me'
          color="#fff"
          name={props.date.name}
          />
        </View>

      </CardSection>

    </Card>
  );
};

export default class DateSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      errorMessage: null,
      dates: []
    };
    this.makeApiRequest = this.makeApiRequest.bind(this);
    this.renderDates = this.renderDates.bind(this);
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    console.log(`lat: ${location.coords.latitude},lng: ${location.coords.longitude}`);
  };

  makeApiRequest(props) {
    let url = `${placesSearchBaseURL}${this.state.location.coords.latitude},${this.state.location.coords.longitude}&radius=2000&key=${GOOGLE_API_KEY}&types=restaurant`;
    // will automatically be executed when component is about to be rendered
    axios.get(url)
    // updates dates piece of state
    .then(response => this.setState({ dates: response.data.results }));
    // .then(response => console.log(response));
    // console.log('pressed the button');
  };

  renderDates() {
    let renderedDates = this.state.dates.map(date =>
      <DateDetail
        key={date.id}
        date={date}
        navigation={this.props.navigation} />
    );
    return renderedDates;
  }

  usingLocation() {
    const message = "Using your location";
    return message;
  };

  handleClick() {
    console.log('clicked');
  };
  render() {
    return (
      <ScrollView style={{backgroundColor: '#fff6e2', flex: 1}}>
        <Text style={styles.titleTextStyle}>
          Create My Own Experience
        </Text>

        <View style={styles.buttonContainerStyle}>
          <Button
          onPress={this.usingLocation}
          title='Use Device Location'
          color="#fff"
          />
        </View>

        <View style={{flexDirection: 'row', alignSelf:'center', marginLeft: 5, marginRight: 5 }}>
          <View style={{backgroundColor: '#030202'}}>
            <Button
            onPress={this.handleClick}
            title='$'
            color="#fff"
            />
          </View>
          <View style={{backgroundColor: '#030202', marginLeft: 5, marginRight: 5}}>
            <Button
            onPress={this.handleClick}
            title='$$'
            color="#fff"
            />
          </View>
          <View style={{backgroundColor: '#030202', marginLeft: 5, marginRight: 5}}>
            <Button
            onPress={this.handleClick}
            title='$$$'
            color="#fff"
            />
          </View>
          <View style={{backgroundColor: '#030202', marginLeft: 5, marginRight: 5}}>
            <Button
            onPress={this.handleClick}
            title='$$$$'
            color="#fff"
            />
          </View>
        </View>

        <View style={{
          width: 200,
          marginTop: 10,
          marginBottom: 10,
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: '#ca412b',
          borderColor: '#ca412b',
          borderWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          alignSelf: 'center',
          borderRadius: 5
        }}>
          <Button
          onPress={this.makeApiRequest}
          title='Search'
          color="#fff"
          />
        </View>


        {this.renderDates()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 36,
    textAlign: 'center',
  },
  titleTextStyle: {
    paddingTop: 10,
    paddingBottom: 15,
    textAlign: 'center',
    fontSize: 28,
    color: '#030202'
  },
  buttonContainerStyle: {
    width: 200,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ca412b',
    borderColor: '#ca412b',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    alignSelf: 'center'
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTextStyle: {
    fontSize: 20,
    color: '#fff'
  },
  anotherCustomButtonStyle: {
    backgroundColor: '#B2DBBF',
    borderColor: '#B2DBBF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

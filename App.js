/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import moment from 'moment-timezone';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  console.log("I'm a console statement!");
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              {Welcome()}
              <MyFirstApp />
              <Text />
              <Text>My modules this semester:</Text>
              <SemModule days="Monday" moduleCode="C348" />
              <SemModule days="Tuesday" moduleCode="C273" />
              <SemModule days="Friday" moduleCode="C308" />
              <Text />
              <Text>Recommended Eats @ RP</Text>
              <Eats
                name="Sweet Tooth Waffles"
                location="W6 Level 1, E-canteen"
              />
              <Eats name="Crowded Bowl" location="W4/W6 Lawn Canteen" />
              <Eats
                name="Western Cuisine @ Koufu"
                location="E1 Level 1, Koufu"
              />
              <Eats name="Ayam Penyet" location="W4/W6 Lawn Canteen" />
              <Text>World Clock</Text>
              {WorldClock()}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

//exercise 01
const Welcome = () => {
  return <Text>Welcome to C308 Web Frameworks!</Text>;
};

//exercise 02
class MyFirstApp extends React.Component {
  render() {
    return <Text>My first React Native app</Text>;
  }
}

//exercise 03
const SemModule = (props) => {
  return (
    <View>
      <Text>
        {props.days} - {props.moduleCode}
      </Text>
    </View>
  );
};

//exercise 04
class Eats extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Text>{this.props.location}</Text>
        <Text />
      </View>
    );
  }
}

//exercise 05
console.log('Listing semester modules and recommended eats');

// mini project
class Clock extends React.Component {
  render() {
    var tCapture = moment.tz(this.props.city).format('HH:mm Z');
    return (
      <Text>
        {this.props.city} - {tCapture}
      </Text>
    );
  }
}

const WorldClock = () => {
  return (
    <View>
      <Clock city="Asia/Singapore" />
      <Clock city="Europe/London" />
      <Clock city="America/New_York" />
      <Clock city="Europe/Oslo" />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

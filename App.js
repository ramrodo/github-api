import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  state = {
    isLoading: false,
    user: {},
  };

  componentDidMount() {
    this.fetchData('ramrodo');
  }

  fetchData(user = 'ramrodo') {
    fetch(
      `https://api.github.com/users/${user}`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          user: json,
        });
      });
  }

  render() {
    const { isLoading, user } = this.state  ;

    console.log('user', user);
    

    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text>Fetching The Data from GitHub</Text>
        ) : (
          <View>
            <Image
              style={styles.image}
              source={{ uri: user.avatar_url }}
            />
            <Text>{user.name}</Text>
            <Text>{user.login}</Text>
            <Text>{user.location}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

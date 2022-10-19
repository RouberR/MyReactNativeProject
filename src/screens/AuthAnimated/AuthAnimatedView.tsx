import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import Svg, {Image} from 'react-native-svg';
const AuthAnimatedView = () => {
  const {height, width} = Dimensions.get('window');
  return (
    <View style={styles.mainContainer}>
      <View style={StyleSheet.absoluteFill}>
        <Svg height={height / 2} width={width}>
          <Image
            href={require('../../assets/Dart-Weider.jpeg')}
            height={height}
            width={width}
            preserveAspectRatio="xMidYMid slice"
          />
        </Svg>
        <View style={styles.buttonCloseContainer}>
          <Text style={styles.textClose}>X</Text>
        </View>
      </View>

      {/* <View>
        <View style={styles.button}>
          <Text style={styles.text}>LOG IN</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text}>REGISTER</Text>
        </View>
      </View> */}

      <View style={styles.inputRegisterContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.input}
          placeholder="Full name"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    height: 50,
    backgroundColor: 'purple',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    opacity: 0.8,
  },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderColor: 'blue',
    borderRadius: 30,
    paddingLeft: 10,
  },
  text: {color: 'white', fontSize: 18, fontWeight: '600', letterSpacing: 0.5},
  inputRegisterContainer: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  buttonCloseContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    width: 40,
    height: 40,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 6.3,
    shadowOpacity: 0.4,
    elevation: 3,
    backgroundColor: 'white',
  },
  textClose: {
    color: 'black',
  },
});
export default AuthAnimatedView;

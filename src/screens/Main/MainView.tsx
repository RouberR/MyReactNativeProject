import {
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const MainView = (props: any) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={props.handleNavigate}>
        <View style={styles.button}>
          <Text style={styles.text}>1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  button: {
    width: 100,
    height: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {},
});

export default MainView;

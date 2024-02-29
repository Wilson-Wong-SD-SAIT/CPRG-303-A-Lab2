import { StyleSheet, Image} from 'react-native';

const Header = () => {
  return (
    <Image
    style={styles.header}
    source={require('../res/Header.png')}
  />
  );
};

const styles = StyleSheet.create({
    header: {
      flex: 1,
      width: '100%',
      marginVertical: 8,
    },
  });

export default Header;
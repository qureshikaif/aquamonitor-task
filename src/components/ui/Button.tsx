import {Text, Pressable} from 'react-native';

const Button = () => {
  return (
    <Pressable
      className="bg-[#0188DD] text-white text-center rounded-md p-4 my-4 flex items-center justify-center"
      onPress={() => console.log('Login button pressed')}>
      <Text className="font-semibold text-lg text-white">Log in</Text>
    </Pressable>
  );
};

export default Button;

import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";

var defaultRight: String = `${wp(5)}px;`;
var fontSizeDefault: String = `${wp(4)}px`;

export const FormContainer = styled.ScrollView`
  height: ${hp(100)}px;
  padding: 0 ${wp(6)}px 0 ${wp(6)}px;
`;

export const InputsContainer = styled.View`
  display: flex;
  background-color: white;
  height: ${hp(13)}px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: "#b2b2b2",
})`
  font-size: ${wp(4)}px;
  background-color: #f9f9f9;
  height: ${hp(6)}px;
  border-radius: 10px;
  padding: ${hp(0.5)}px ${wp(5)}px;
  color: #b2b2b2;
`;

export const PickerInput = styled(DateTimePicker)`
  width: ${wp(90)}px;
`;

export const DropDownDateContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${wp(4)}px;
  background-color: #f9f9f9;
  height: ${hp(6)}px;
  border-radius: 10px;
  padding: ${hp(0.5)}px ${wp(5)}px;
  color: #c5c5c5;
`;

export const IconAnt = styled(AntDesign)`
  font-size: ${(props) => (props.fontSize ? props.fontSize : fontSizeDefault)};
  color: ${(props) => (props.color ? props.color : "#adadad")};
  position: absolute;
  right: ${(props) => (props.right ? props.right : defaultRight)};
`;

export const IconLine = styled(SimpleLineIcons)`
  font-size: ${wp(4)}px;
  color: #adadad;
  position: absolute;
  right: ${wp(5)}px;
`;

export const PickerPlaceHolder = styled.Text`
  font-size: ${wp(4)}px;
  color: #b2b2b2;
`;

export const SelectTimeContainer = styled.View`
  display: flex
  flex-direction: row;
  height: ${hp(15)}px
  align-items: center;
  justify-content: space-between
`;

export const DropDownHourContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${wp(4)}px;
  background-color: #f9f9f9;
  height: ${hp(6)}px;
  border-radius: 10px;
  padding: ${hp(0.5)}px ${wp(5)}px;
  color: #c5c5c5;
  width: ${wp(41)}px;
`;

export const ButtonTouchable = styled.TouchableOpacity`
  height: ${hp(7)}px;
  position: absolute;
  bottom: ${hp(5)}px;
  align-self: center;
  background-color: #5dbd76;
  width: ${wp(90)}px;
  padding: ${hp(1)}px ${hp(5)}px ${hp(1)}px ${hp(5)}px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonContainer = styled.View`
  height: ${hp(15)}px;
`;

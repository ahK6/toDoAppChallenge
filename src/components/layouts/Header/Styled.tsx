import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, AntDesign } from "@expo/vector-icons";

var defaultWidthIconContainer = `${wp(30)}px;`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${hp(10)}px ${hp(3)}px ${hp(4)}px ${hp(3)}px;
`;

export const HeaderText = styled.Text`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  font-size: ${wp(7)}px;
  font-weight: bold;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
`;

export const IconsHeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => (props.width ? props.width : defaultWidthIconContainer)};
`;

export const IconAnt = styled(AntDesign)`
  font-size: ${wp(6)}px;
  color: ${(props) => (props.color ? props.color : "#adadad")};
`;

export const IconIon = styled(Ionicons)`
  font-size: ${wp(6)}px;
  color: #adadad;
`;

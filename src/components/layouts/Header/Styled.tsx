import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { withProps } from "../../../helpers/withPropsStyle";

var defaultWidthIconContainer = `${wp(30)}px;`;
var defaultTopWithContainer = `${wp(0)}px;`;
interface IStyled {
  marginLeft: String;
  width: String;
  color: String;
}

export const HeaderContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${hp(10)}px ${hp(3)}px ${hp(4)}px ${hp(3)}px;
  border-bottom-width: 0.7px;
  border-bottom-color: #d3d3d3;
`;

export const HeaderText = withProps<IStyled>()(styled.Text)`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  font-size: ${wp(7)}px;
  font-weight: bold;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
`;

export const IconsHeaderContainer = withProps<IStyled>()(styled.View)`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => (props.width ? props.width : defaultWidthIconContainer)};
`;

export const IconAnt = withProps<IStyled>()(styled(AntDesign))`
  font-size: ${wp(6)}px;
  color: ${(props) => (props.color ? props.color : "#adadad")};
`;

export const IconIon = styled(Ionicons)`
  font-size: ${wp(6)}px;
  color: #adadad;
`;

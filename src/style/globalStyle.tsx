import styled from "styled-components/native";

var defaultFontSize: String = `${wp(5)}px;`;

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Container = styled.View`
  background-color: white;
  flex: 1;
`;

export const TextComponent = styled.Text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : defaultFontSize)}
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "100")};
  color: ${(props) => (props.color ? props.color : "black")}
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)}
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")}

`;

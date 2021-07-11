import styled from "styled-components/native";
import { withProps } from "../helpers/withPropsStyle";

interface IStyled {
  fontSize: String;
  fontWeight: String;
  color: String;
  marginTop: String;
  marginBottom: String;
  marginRight: String;
  marginLeft: String;
  paddingTop: String;
  paddingBottom: String;
  paddingRight: String;
  paddingLeft: String;
  textAlign: String;
}

var defaultFontSize: String = `${wp(5)}px;`;

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Container = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;

export const TextComponent = withProps<IStyled>()(styled.Text)`
  font-size: ${(props) => (props.fontSize ? props.fontSize : defaultFontSize)}
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "100")};
  color: ${(props) => (props.color ? props.color : "black")}
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)}
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")}

`;

export const FormContainer = withProps<IStyled>()(styled.ScrollView)`
  height: ${hp(100)}px;
  padding-left: ${wp(8)}px;
  padding-right: ${wp(8)}px;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : 0)}
  padding-bottom: ${(props) => (props.paddingBottom ? props.paddingBottom : 0)}
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)}
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")}
`;

export const ActivityContainer = withProps<IStyled>()(styled.View)`
margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}
margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}
margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)}
margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}
text-align: ${(props) => (props.textAlign ? props.textAlign : "left")}
`;

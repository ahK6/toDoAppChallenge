import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { withProps } from "../../helpers/withPropsStyle";

interface IStyled {
  headerColor: String;
}

export const ModalContainer = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 20;
  border-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const HeaderModal = withProps<IStyled>()(styled.View)`
  background-color: ${(props) =>
    props.headerColor ? props.headerColor : "red"};
  width: ${wp(100)}px;
  height: ${hp(8)}px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

export const MessageContainerModal = styled.View`
  height: ${hp(15)}px;
  margin-top: ${hp(5)}px;
`;

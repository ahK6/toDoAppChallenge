import styled from "styled-components/native";
import { withProps } from "../../helpers/withPropsStyle";

//import { withProps } from "themed-components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface IStyled {
  backGroundColor: String;
}

export const TaskContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckBox = withProps<IStyled>()(styled.View).attrs((props) => ({
  backgroundColor: props.backgroundColor ? props.backgroundColor : "black",
  borderColor: props.borderColor ? props.borderColor : "black",
}))`
  width: ${hp(3)};
  height: ${hp(3)};

  margin-vertical: ${hp(2)};
  border-width: 2px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

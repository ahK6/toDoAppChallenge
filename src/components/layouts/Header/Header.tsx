import React, { useContext, createRef } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  HeaderContainer,
  HeaderText,
  IconsHeaderContainer,
  IconAnt,
  IconIon,
} from "./Styled";
import { HVisibleContext } from "../../../context/VisibleHeader";
import { TouchableOpacity } from "react-native";
import { goBack } from "../../../navigation/RootNavigation";

const Header: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useContext(HVisibleContext);

  return (
    <HeaderContainer>
      {headerVisible == "main" ? (
        <>
          <HeaderText>Board</HeaderText>
          <IconsHeaderContainer>
            <IconAnt name="search1" />
            <IconIon name="notifications-outline" />
            <IconIon name="menu" />
          </IconsHeaderContainer>
        </>
      ) : (
        <TouchableOpacity
          onPress={() => {
            goBack();
            setHeaderVisible("main");
          }}
        >
          <IconsHeaderContainer width={`${wp(45)}`}>
            <IconAnt name="left" color="black" />
            <HeaderText marginLeft={`${wp(0)}px`}>Add a task</HeaderText>
          </IconsHeaderContainer>
        </TouchableOpacity>
      )}
    </HeaderContainer>
  );
};

export default Header;

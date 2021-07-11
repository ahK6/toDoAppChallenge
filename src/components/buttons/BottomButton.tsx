import React, { useContext } from "react";

import { HVisibleContext } from "../../context/VisibleHeader";
import { navigate } from "../../navigation/RootNavigation";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ButtonContainer, ButtonTouchable } from "../../screens/task/Styled";
import { TextComponent } from "../../style/globalStyle";

const BottomButton: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useContext(HVisibleContext);

  return (
    <>
      {headerVisible == "main" ? (
        <ButtonContainer>
          <ButtonTouchable
            activeOpacity={0.7}
            onPress={() => {
              setHeaderVisible("secundary");
              navigate("Task");
            }}
          >
            <TextComponent fontWeight="bold" color="white">
              Add a Task
            </TextComponent>
          </ButtonTouchable>
        </ButtonContainer>
      ) : null}
    </>
  );
};

export default BottomButton;

import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Modal from "react-native-modal";
import { ModalContainer, HeaderModal, MessageContainerModal } from "./styled";
import { TextComponent } from "../../style/globalStyle";
import { IconAnt } from "../../screens/task/Styled";
import { ButtonTouchable } from "../../screens/task/Styled";
import { TouchableOpacity } from "react-native";

const AlertModal = ({
  visible = false,
  type = "error",
  changeVisibility = () => {},
}) => {
  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.8}
      animationIn="slideInLeft"
      animationOut="zoomOutUp"
      animationInTiming={300}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
    >
      <ModalContainer>
        <HeaderModal headerColor={type == "success" ? "#5dbd76" : "red"}>
          <TextComponent fontWeight="bold" color="white" fontSize={wp(5)}>
            {type == "error"
              ? "Error"
              : type == "success"
              ? "Success"
              : "Invalid or empty fields"}
          </TextComponent>

          <IconAnt
            onPress={changeVisibility}
            name="closecircle"
            right={`${wp(10)}px`}
            fontSize={`${wp(8)}px`}
            color="white"
          />
        </HeaderModal>
        <MessageContainerModal>
          <TextComponent
            color="black"
            fontSize={wp(5)}
            textAlign="center"
            marginRight={`${wp(3)}px`}
            marginLeft={`${wp(3)}px`}
          >
            {type == "error"
              ? "An error has occurred while creating new task, please try again."
              : type == "success"
              ? "Task has been added successfully."
              : "All fields are required, please complete them and try again"}
          </TextComponent>
        </MessageContainerModal>
      </ModalContainer>
    </Modal>
  );
};

export default AlertModal;

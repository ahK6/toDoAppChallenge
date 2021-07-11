import React, { useContext, useEffect, useState } from "react";
import { Text, ActivityIndicator } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";

import { HVisibleContext } from "../../../context/VisibleHeader";
import { navigate } from "../../../navigation/RootNavigation";
import {
  ActivityContainer,
  Container,
  TextComponent,
} from "../../../style/globalStyle";
import {
  ButtonContainer,
  ButtonTouchable,
  InputsContainer,
} from "../../task/Styled";
import { FormContainer } from "../../../style/globalStyle";
import Task from "../../../components/tasks/Task";

const AllTab: React.FC = () => {
  const taskInfoSelector = useSelector((store) => store.Tasks.task_list);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    setFetched(true);
  }, [taskInfoSelector]);

  const [headerVisible, setHeaderVisible] = useContext(HVisibleContext);

  return (
    <>
      <Container>
        <FormContainer paddingTop={`${hp(2)}px`}>
          {fetched ? (
            taskInfoSelector.length > 0 ? (
              taskInfoSelector?.map((value, index) => <Task value={value} />)
            ) : (
              <ActivityContainer marginTop={`${hp(10)}px`}>
                <TextComponent
                  fontWeight="bold"
                  color="black"
                  textAlign="center"
                >
                  You have not created any task yet!
                </TextComponent>
              </ActivityContainer>
            )
          ) : (
            <ActivityContainer marginTop={`${hp(10)}px`}>
              <ActivityIndicator color="black" size={hp(7)} />
            </ActivityContainer>
          )}
        </FormContainer>
      </Container>
    </>
  );
};

export default AllTab;

import React, { useContext, useState, useEffect } from "react";
import {
  Text,
  Button,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

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
import { WToast } from "react-native-smart-tip";
import Task from "../../../components/tasks/Task";

import { FormContainer } from "../../../style/globalStyle";

const UncompletedTab: React.FC = () => {
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
              taskInfoSelector
                ?.filter((filter) => {
                  return !filter.completed;
                })
                .map((value, index) => <Task value={value} />)
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

export default UncompletedTab;

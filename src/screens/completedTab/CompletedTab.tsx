import React, { useContext } from "react";
import { Text, Button, View, TouchableOpacity } from "react-native";

import Task from "../../components/tasks/Task";
import { HVisibleContext } from "../../context/VisibleHeader";
import { navigate } from "../../navigation/RootNavigation";
import { useDispatch, useSelector } from "react-redux";
import { Container, TextComponent } from "../../style/globalStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ButtonContainer,
  ButtonTouchable,
  FormContainer,
  InputsContainer,
} from "../task/Styled";
import { FontAwesome } from "@expo/vector-icons";
import { updateTask } from "../../store/actions/TaskActions";

const CompletedTab: React.FC<authScreenProp> = () => {
  const dispatch = useDispatch();

  const taskInfoSelector = useSelector((store) => store.Tasks.task_list);

  console.log(taskInfoSelector);

  const [headerVisible, setHeaderVisible] = useContext(HVisibleContext);

  return (
    <>
      <Container>
        <FormContainer>
          {taskInfoSelector.length > 0 ? (
            taskInfoSelector
              ?.slice(0)
              .reverse()
              .filter((filter) => {
                return filter.completed;
              })
              .map((value, index) => (
                <TouchableOpacity
                  onPress={() => {
                    dispatch(
                      updateTask({ completed: !value?.completed, id: value.id })
                    ).catch(function (error) {
                      console.log(error);
                    });
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{
                        width: hp(3),
                        height: hp(3),
                        backgroundColor: value?.completed
                          ? value?.color
                          : "white",
                        marginVertical: hp(2),
                        borderWidth: 2,
                        borderRadius: 5,
                        borderColor: value?.color,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {value?.completed ? (
                        <View>
                          <FontAwesome
                            name="check"
                            size={wp(3)}
                            color="white"
                          />
                        </View>
                      ) : null}
                    </View>
                    <Text style={{ marginLeft: wp(5) }}>{value.title} </Text>
                  </View>
                </TouchableOpacity>
              ))
          ) : (
            <Text>nada que mostrar</Text>
          )}
        </FormContainer>
        <ButtonContainer>
          <ButtonTouchable
            activeOpacity={0.7}
            onPress={() => {
              setHeaderVisible("secundary");
              navigate("Task");
            }}
          >
            <TextComponent fontWeight="bold" color="white">
              Create a Task
            </TextComponent>
          </ButtonTouchable>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default CompletedTab;

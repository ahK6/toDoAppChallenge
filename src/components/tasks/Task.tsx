import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { WToast } from "react-native-smart-tip";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TaskContainer, CheckBox } from "../tasks/Styled";
import { FontAwesome } from "@expo/vector-icons";
import { updateTask } from "../../store/actions/TaskActions";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  value: any;
}

const Task: React.FC<Props> = ({ value }) => {
  const dispatch = useDispatch();

  const showToast = (isCompleted) => {
    const toastOpts = {
      data: isCompleted
        ? "Moved to uncompleted tasks"
        : "Moved to completed tasks",

      duration: WToast.duration.SHORT, //1.SHORT 2.LONG
      position: WToast.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
      backgroundColor: "white",
      textColor: "black",
    };

    WToast.show(toastOpts);
  };

  return (
    <TouchableOpacity
      key={value.id}
      onPress={() => {
        dispatch(
          updateTask({ completed: !value?.completed, id: value.id })
        ).catch(function (error) {
          console.log(error);
        });

        showToast(value.completed);
      }}
    >
      <TaskContainer>
        <CheckBox
          backgroundColor={`${value?.completed ? value?.color : "white"}`}
          borderColor={`${value?.color}`}
        >
          {value?.completed ? (
            <View>
              <FontAwesome name="check" size={wp(3)} color="white" />
            </View>
          ) : null}
        </CheckBox>
        <Text style={{ marginLeft: wp(5) }}>{value.title} </Text>
      </TaskContainer>
    </TouchableOpacity>
  );
};

export default Task;

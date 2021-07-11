import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Button } from "react-native";
import { Container, TextComponent } from "../../style/globalStyle";
import {
  FormContainer,
  TextInput,
  InputsContainer,
  PickerInput,
  DropDownDateContainer,
  DropDownHourContainer,
  IconLine,
  PickerPlaceHolder,
  SelectTimeContainer,
  ButtonTouchable,
  ButtonContainer,
} from "./Styled";
import moment from "moment";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DateTimePicker from "../../components/Pickers/DateTimePicker";

import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/actions/TaskActions";
import AlertModal from "../../components/Modals/AlertModal";

export interface TaskInfo {
  id: String | null;
  title: String | null;
  deadLine: Date;
  startTime: Date | null;
  endTime: Date | null;
  remind: String | null;
  repeat: String | null;
  completed: Boolean;
  color: String;
}

const NewTask: React.FC = () => {
  const dispatch = useDispatch();
  const taskInfoSelector = useSelector((store) => store.Tasks);

  const randomId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  const randomColor = () => {
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  };

  const [taskInfo, setTaskInfo] = useState<TaskInfo>({
    id: randomId(),
    title: null,
    deadLine: new Date(),
    startTime: null,
    endTime: null,
    remind: "5 minutes early",
    repeat: "Daily",
    completed: false,
    color: randomColor(),
  });
  const [pickerDateTimeProps, setPickerDateTimeProps] = useState<any>({
    visible: false,
    mode: "",
    optionChanging: "",
  });

  const [showModalAlert, setShowModalAlert] = useState({
    visible: false,
    type: "",
  });
  console.log(taskInfoSelector);

  const onPickerDateTimeChange = (event: Event, selectedDateOrTime: Date) => {
    setPickerDateTimeProps({
      visible: false,
      mode: "",
      optionChanging: "",
    });

    if (pickerDateTimeProps.optionChanging == "deadLine") {
      setTaskInfo({ ...taskInfo, deadLine: selectedDateOrTime });
    } else if (pickerDateTimeProps.optionChanging == "startTime") {
      setTaskInfo({ ...taskInfo, startTime: selectedDateOrTime });
      console.log("que passa: " + selectedDateOrTime);
    } else if (pickerDateTimeProps.optionChanging == "endTime") {
      setTaskInfo({ ...taskInfo, endTime: selectedDateOrTime });
    }
  };

  const onTextChange = (value: String) => {
    setTaskInfo({ ...taskInfo, title: value });
  };

  useEffect(() => {
    console.log("DEAD LINEEE: " + taskInfo.deadLine);
  }, [taskInfo.deadLine]);

  useEffect(() => {
    console.log("Dstartr " + taskInfo.startTime);
  }, [taskInfo.startTime]);

  return (
    <Container>
      <AlertModal
        visible={showModalAlert.visible}
        type={showModalAlert.type}
        changeVisibility={() => {
          setShowModalAlert({ ...showModalAlert, visible: false });
        }}
      />
      <FormContainer>
        <InputsContainer>
          <TextComponent marginBottom={`${hp(1)}px`} fontWeight="bold">
            Title
          </TextComponent>
          <TextInput
            placeholder="Type here..."
            onChangeText={onTextChange}
            value={taskInfo.title}
          />
        </InputsContainer>
        <InputsContainer>
          <TextComponent marginBottom={`${hp(1)}px`} fontWeight="bold">
            Deadline
          </TextComponent>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              setPickerDateTimeProps({
                visible: true,
                mode: "date",
                optionChanging: "deadLine",
              })
            }
          >
            <DropDownDateContainer>
              <PickerPlaceHolder>
                {moment(taskInfo?.deadLine).format("YYYY-MM-DD")}
              </PickerPlaceHolder>
              <IconLine name="arrow-down" />
            </DropDownDateContainer>
          </TouchableOpacity>
        </InputsContainer>

        <SelectTimeContainer>
          <InputsContainer>
            <TextComponent marginBottom={`${hp(1)}px`} fontWeight="bold">
              Start time
            </TextComponent>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                setPickerDateTimeProps({
                  visible: true,
                  mode: "time",
                  optionChanging: "startTime",
                })
              }
            >
              <DropDownHourContainer>
                <PickerPlaceHolder>
                  {taskInfo.startTime
                    ? moment(taskInfo.startTime).format("H:mm a")
                    : "Pick..."}
                </PickerPlaceHolder>
                <IconLine name="arrow-down" />
              </DropDownHourContainer>
            </TouchableOpacity>
          </InputsContainer>

          <InputsContainer>
            <TextComponent marginBottom={`${hp(1)}px`} fontWeight="bold">
              End time
            </TextComponent>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                setPickerDateTimeProps({
                  visible: true,
                  mode: "time",
                  optionChanging: "endTime",
                })
              }
            >
              <DropDownHourContainer>
                <PickerPlaceHolder>
                  {taskInfo.endTime
                    ? moment(taskInfo.endTime).format("H:mm a")
                    : "Pick..."}
                </PickerPlaceHolder>
                <IconLine name="arrow-down" />
              </DropDownHourContainer>
            </TouchableOpacity>
          </InputsContainer>
        </SelectTimeContainer>

        <InputsContainer>
          <TextComponent marginBottom={`${hp(1)}px`} fontWeight="bold">
            Remind
          </TextComponent>

          <DropDownDateContainer>
            <Picker
              style={{
                height: hp(6),
                width: wp(50),
                backgroundColor: "blue",
                color: "#b2b2b2",
              }}
              selectedValue={taskInfo.remind}
              onValueChange={(value) => {
                setTaskInfo({ ...taskInfo, remind: value });
              }}
              prompt="Select a option"
            >
              <Picker.Item label="5 minutes early" value="5 minutes early" />
              <Picker.Item label="10 minutes early" value="10 minutes early" />
              <Picker.Item label="15 minutes early" value="15 minutes early" />
              <Picker.Item label="20 minutes early" value="20 minutes early" />
            </Picker>
            <IconLine name="arrow-down" />
          </DropDownDateContainer>
        </InputsContainer>
        <InputsContainer>
          <TextComponent marginBottom={`${hp(1)}px`} fontWeight="bold">
            Repeat
          </TextComponent>
          <DropDownDateContainer>
            <Picker
              style={{
                height: hp(6),
                width: wp(50),
                backgroundColor: "blue",
                color: "#b2b2b2",
              }}
              selectedValue={taskInfo.repeat}
              onValueChange={(value) => {
                setTaskInfo({ ...taskInfo, repeat: value });
              }}
              prompt="Select a option"
            >
              <Picker.Item label="Daily" value="Daily" />
              <Picker.Item label="Weekly" value="Weekly" />
              <Picker.Item label="Monthly" value="Monthly" />
            </Picker>
            <IconLine name="arrow-down" />
          </DropDownDateContainer>
        </InputsContainer>
      </FormContainer>

      <ButtonContainer>
        <ButtonTouchable
          activeOpacity={0.7}
          onPress={() => {
            console.log(taskInfo);
            if (
              typeof taskInfo?.title === "string" &&
              taskInfo?.title !== "" &&
              taskInfo.deadLine?.getUTCDay &&
              taskInfo?.deadLine !== null &&
              taskInfo?.startTime?.getUTCDay &&
              taskInfo?.startTime !== null &&
              taskInfo?.endTime?.getUTCDay &&
              taskInfo?.endTime !== null &&
              typeof taskInfo?.remind === "string" &&
              taskInfo?.remind !== "" &&
              typeof taskInfo?.repeat === "string" &&
              taskInfo?.repeat !== ""
            ) {
              dispatch(addTask(taskInfo)).catch(function (error) {
                return setShowModalAlert({
                  visible: true,
                  type: "error",
                });
              });
              setShowModalAlert({
                visible: true,
                type: "success",
              });

              setTaskInfo({
                id: randomId(),
                title: null,
                deadLine: new Date(),
                startTime: null,
                endTime: null,
                remind: "5 minutes early",
                repeat: "Daily",
                completed: false,
                color: randomColor(),
              });
            } else {
              setShowModalAlert({
                visible: true,
                type: "other",
              });
            }
          }}
        >
          <TextComponent fontWeight="bold" color="white">
            Create a Task
          </TextComponent>
        </ButtonTouchable>
      </ButtonContainer>
      <DateTimePicker
        visible={pickerDateTimeProps.visible}
        mode={pickerDateTimeProps.mode}
        onChange={onPickerDateTimeChange}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#16233b",
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#16233b",
    fontSize: wp("6%"),
    marginTop: hp("1%"),
  },
  input: {
    width: wp("90%"),
    marginVertical: hp("1%"),
    fontSize: wp("4%"),
    height: hp("6%"),
  },
  button: {
    backgroundColor: "#FC8931",
    width: wp("90%"),
    height: hp("7%"),
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  text: {
    fontSize: wp("4%"),
    fontWeight: "bold",
    color: "#16233b",
  },
  content: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: "bold",
  },
});

export default NewTask;

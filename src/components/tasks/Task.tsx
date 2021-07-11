import React from "react"
import {Text} from "react-native";
import CheckBox from '@react-native-community/checkbox';

import { TaskContainer, CheckboxLabel } from "../tasks/Styled";



interface Props {
    id: number;
    title: string;
    deadLine: Date;
    startTime: Date;
    remind: Number;
    repeat: String;
    onChange: (value: Number) => void;
}

const Task: React.FC<Props> = ({id, title, deadLine, startTime, remind, repeat}) =>{


    return (
        <TaskContainer>
        <CheckBox
          value={true}
          onValueChange={(value) => {console.log(value)}}
        />
        <CheckboxLabel>
            {title}
        </CheckboxLabel>
        </TaskContainer>
    )
}

export default Task;
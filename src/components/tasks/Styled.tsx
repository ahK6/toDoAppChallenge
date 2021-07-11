import styled from "styled-components/native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export const TaskContainer = styled.View`
    display: flex;
    flex-direction: row;
`

export const Check = styled.View`
    display: flex;
    flex-direction: row;
`
export const CheckboxLabel = styled.Text`
    font-size: ${wp(6)}px
`
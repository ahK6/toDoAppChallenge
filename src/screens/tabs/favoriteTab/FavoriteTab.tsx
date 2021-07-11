import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  ActivityContainer,
  Container,
  TextComponent,
} from "../../../style/globalStyle";
import { FormContainer } from "../../../style/globalStyle";

const CompletedTab: React.FC = () => {
  return (
    <>
      <Container>
        <FormContainer paddingTop={`${hp(2)}px`}>
          <ActivityContainer marginTop={`${hp(5)}px`}>
            <ActivityIndicator color="black" size={hp(7)} />
          </ActivityContainer>
        </FormContainer>
      </Container>
    </>
  );
};

export default CompletedTab;

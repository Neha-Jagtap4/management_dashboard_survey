import React from "react";
import { View, Heading } from "@aws-amplify/ui-react";


const Tables = () => {
  return (
    <>
      <div>
        <h2>Tables</h2>
      </div>

      <View
        backgroundColor="var(--amplify-colors-white)"
        borderRadius="6px"
        maxWidth="100%"
        padding="1rem"
        minHeight="80vh"
      >
        <Heading color="#333"> Basic Table </Heading>
        <br></br>
       
      </View>
    </>
  );
};

export default Tables;

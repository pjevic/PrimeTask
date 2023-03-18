import React from "react";

import {
  MainContainer,
  Header,
  Heading,
  Buttons,
  Id,
  Body,
  Section,
  SectionData,
  SectionAction,
  DataHeading,
  ActionHeading,
} from "./Style";

const Table = ({ heading, id, ...otherProps }) => {
  return (
    <MainContainer>
      <Header>
        <Buttons></Buttons>
        <Heading>{heading}</Heading>
        <Id>{id && id}</Id>
      </Header>

      <Body>
        <Section>
          <SectionData>
            <DataHeading>No.</DataHeading>
            <DataHeading>first name</DataHeading>
            <DataHeading>last name</DataHeading>
          </SectionData>

          <SectionAction>
            <ActionHeading>e</ActionHeading>
            <ActionHeading>c</ActionHeading>
            <ActionHeading>t</ActionHeading>
            <ActionHeading>+</ActionHeading>
            <ActionHeading>i</ActionHeading>
          </SectionAction>
        </Section>
        <Section>info</Section>
      </Body>
    </MainContainer>
  );
};

export default Table;

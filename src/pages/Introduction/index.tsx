import { Container, Header, Subheader, Paragraph } from './styles';

const Introduction = () => {
  return (
    <Container>
      <Header>EPOS - European Plate Observing System</Header>
      <Paragraph>
        EPOS, the European Plate Observing System, is a multidisciplinary, distributed research infrastructure that facilitates the integrated use of data, data products, and facilities from the solid Earth science community in Europe.
      </Paragraph>
      <Paragraph>
        EPOS brings together Earth scientists, national research infrastructures, ICT (Information & Communication Technology) experts, decision-makers, and the public to develop new concepts and tools for accurate, durable, and sustainable answers to societal questions concerning geo-hazards and those geodynamic phenomena (including geo-resources) relevant to the environment and human welfare.
      </Paragraph>
      <Subheader>EPOS Vision</Subheader>
      <Paragraph>
        To ensure sustainable and universal use and re-use of multidisciplinary solid Earth science data and products fostering state-of-the-art research and innovation.
      </Paragraph>
      <Subheader>EPOS Mission</Subheader>
      <Paragraph>
        To establish and underpin a sustainable and long-term access to solid Earth science data and services integrating diverse European Research Infrastructures under a common federated framework.
      </Paragraph>
    </Container>
  );
};

export default Introduction;

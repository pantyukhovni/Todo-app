import Container from '@material-ui/core/Container';

const MainContainer = (props) => {
  return <Container maxWidth="md">{props.children}</Container>;
};
export default MainContainer;

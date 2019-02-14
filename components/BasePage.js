import { Container } from 'reactstrap';

const BasePage = props => {
  const { className } = props;

  return (
    <div className={`base-page ${className}`}>
      <Container>{props.children}</Container>
    </div>
  );
};

BasePage.defaultProp = {
  className: ''
};

export default BasePage;
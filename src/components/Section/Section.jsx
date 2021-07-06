import PropTypes from 'prop-types';

import {Wrapper, Title} from './Section.styled.js';

function Section({ title, children }) {
  return (
    <Wrapper>
      <Title>{title}</Title> {children}
    </Wrapper>
  );
}

Section.propTypes={
  title: PropTypes.string,
}

export default Section;


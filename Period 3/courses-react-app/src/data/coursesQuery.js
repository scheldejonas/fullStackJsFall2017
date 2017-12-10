import { gql, graphql } from 'react-apollo';
import Courses from './../components/Courses';

const coursesQuery = gql`
  query course($id: String) {
    course(id: $id) {
      title
      source
      img_src
      id      
    }
  }
`;

export default graphql(coursesQuery, {
    options: props => ({
        variables: {
            id: props.courseId
        }
    })
})(Courses);
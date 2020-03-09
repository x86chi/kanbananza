import { connect } from 'react-redux';
import Card from '../components/Card';

const mapStateToProps = (state, ownProps) => ({
  card: state.cards.entities[ownProps.cardId]
});

export default connect(mapStateToProps)(Card);

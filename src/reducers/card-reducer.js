import { cards as defaultCards } from '../normalized-state';
import { CREATE_CARD } from '../actions/card-actions';

const cardsReducer = (cards = defaultCards, action) => {
  if (action.type === CREATE_CARD) {
    const { card, cardId } = action.payload;
    return {
      entities: { ...cards.entities, [cardId]: card },
      ids: [...cards.ids, cardId]
    };
  }
  return cards;
};

export default cardsReducer;

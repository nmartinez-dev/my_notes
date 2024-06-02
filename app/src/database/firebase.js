import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get, set } from 'firebase/database';
import { firebaseConfig } from './config';
import { success, exception } from './response';
import { messages } from '../messages/messages';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const getCards = async () => {
  try {
    const snapshot = await get(child(ref(db), 'cards/'));

    if (snapshot.exists()) {
      console.log(snapshot.val());
      return success(snapshot.val());
    } else {
      return success([]);
    }
  } catch (error) {
    return exception(messages.error.default);
  }
};

export const saveCard = async (id, label, content) => {
  try {
    set(ref(db, `cards/${id}`), {
      label: label,
      content: content,
    });

    return success({});
  } catch (error) {
    return exception(messages.error.default);
  }
};

export const deleteCard = async (id) => {
  try {
    set(ref(db, `cards/${id}`), null);
    return success({});
  } catch (error) {
    return exception(messages.error.default);
  }
};

import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserEdit } from './views/UserEdit';

const root2 = document.getElementById('root2');

if (root2) {
  const user = User.buildUser({ name: 'Mahmoud', age: 23 });
  const userEdit = new UserEdit(root2, user);
  user.on('change', () => {
    console.log(user);
  });
  userEdit.render();
  user.save();
}

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);
const root = document.getElementById('root');

users.on('change', () => {
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();

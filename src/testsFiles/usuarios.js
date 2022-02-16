import axios from 'axios';

class Users {
  static async getUser() {
    return axios.get('https://jsonplaceholder.typicode.com/users/1');
  }
}

export default Users;

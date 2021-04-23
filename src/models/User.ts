export interface UserModel {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  website?: string;
}

class User {
  data: UserModel;

  constructor(data: UserModel) {
    this.data = data;
  }
}

export default User;

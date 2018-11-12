export interface User {
  email: string;
  password: string;
  create_date: Date;
  user_name?: string;
  user_status?: string;
  user_class?: string;
  del_yn?: string;
  update_date?: Date;
  etc?: string;
}

export interface SignAuth {
  email: string;
  password: string;
  user_name?: string;
  signup_email?: string;
  signup_pw?: string;
  signup_pw_1?: string;
  introduce?: string;
  sign_fail_cnt?: number;
  pw_conform?: number;
}

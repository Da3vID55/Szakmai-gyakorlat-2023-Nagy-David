import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

type FormData = {
  //az adatokhoz készítünk egy típust
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState<FormData[]>([]);

  const schema: ZodType<FormData> = z
    .object({
      //definiáljuk zoddal ugyanazt a típust, és megszorításokat adunk hozzá
      username: z.string().min(2).max(32),
      email: z.string().email(),
      password: z.string().min(8).max(64),
      confirmPassword: z.string().min(8).max(64),
    })
    .refine((data) => data.password === data.confirmPassword, {
      //itt ellenőrizzük, hogy a két jelszó egyezik
      message: "",
      path: ["password"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  }); //összekapcsoljuk a zod-ot a react-hook-formmal

  const submitData = (data: FormData) => {
    //a handleSubmit függvénynek meg kell adni egy függvényt, amit meghív, ha a teszteken átment a megadott adat.
    setUsers([...users, data]);
    console.log(data);
    console.log(users);
  };

  return (
    <>
      <h1>Super cool website B-)</h1>
      <form onSubmit={handleSubmit(submitData)}>
        <div className="container-sm text-center">
          <div className="row">
            <label>Username</label>
          </div>
          <div>
            <input type="text" {...register("username")}></input>
          </div>
          {errors.username && <span>{errors.username.message}</span>}
        </div>
        <div className="container-sm text-center">
          <div className="row">
            <label>Password</label>
          </div>
          <div>
            <input type="password" {...register("password")}></input>
          </div>
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="container-sm text-center">
          <div className="row">
            <label>Confirm Password</label>
          </div>
          <div>
            <input type="password" {...register("confirmPassword")}></input>
          </div>
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
        </div>
        <div className="container-sm text-center">
          <div className="row">
            <label>Email</label>
          </div>
          <div>
            <input type="email" {...register("email")}></input>
          </div>
          {errors.email && <span>{errors.email.message}</span>}
          <div>
            <input type="submit" value="Register"></input>
          </div>
        </div>
      </form>
      <h2>Registered Users:</h2>
      {users.map((user) => (
        <p>{user.username}</p>
      ))}
    </>
  );
}

export default App;

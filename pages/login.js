import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Login = () => {

    const router = useRouter();

    const login = async (e) => {
        console.log(111)
        // 원래 실행되는 이벤트를 취소함.
        e.preventDefault();

        // Form 안에서 이메일 패스워드를 가져온다.
        const email = e.target.email.value;
        const password = e.target.password.value;
        const response = await signIn("email-password-credential", {
            email,
            password,
            redirect : false
        })
        
        if(response.error){
            alert(response.error);
            return;
        } 
        router.push('/');

    }

    // onSubmit에 login함수를 등록함.
    // 로그인 버튼을 클릭하면 login함수가 실행된다.
    return (
        <div className="w-full max-w-xs mx-auto mt-40">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={login}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="test@test.com" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        로그인
                    </button>
                </div>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={11}
                    label="Age"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </FormControl>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
    )
}

export default Login;
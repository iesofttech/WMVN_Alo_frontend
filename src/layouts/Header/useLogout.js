import { useContext } from "react";
// import { useQueryClient } from 'react-query';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, setUserBalance, setUserInfo } from "../../../Redux/Slice/UserSlice";
import { setLanguage } from "../../../Redux/Slice/LanguageSlice";

const useLogout = () => {
    //   const queryClient = useQueryClient();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("currency_id");
        dispatch(setUser(null));
        dispatch(setUserBalance());
        dispatch(setUserInfo());
        dispatch(setLanguage(null));
        navigate("/login");
    };

    return logout;
};

export default useLogout;

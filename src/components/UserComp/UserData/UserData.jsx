import { Logout } from "../Logout/Logout";
import { UserDataItem } from "./UserDataItem/UserDataItem";

export const UserData = () => {
    return (
        <div>
            <h1>User data</h1>
            <UserDataItem />
            <Logout />
        </div>
    );
}
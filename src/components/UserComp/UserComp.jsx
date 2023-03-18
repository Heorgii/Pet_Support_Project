import { PetData } from "./PetsData/PetsData";
import { UserData } from "./UserData/UserData";

export const UserComp = () => {
    return (
        <div>
            <h1>User comp</h1>
            <UserData />
            <PetData />
        </div>
    );
}
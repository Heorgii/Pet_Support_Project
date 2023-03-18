import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

export const SharedLayout = () => {
    return (
        <div>
            <Header />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>
    );
}
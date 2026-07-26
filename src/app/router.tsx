import { createBrowserRouter } from "react-router-dom";
import BlockLayout from "@/components/layouts/block-layout";

import DocsPage from "@/app/pages/docs-page";
import InstallationPage from "@/app/pages/installation-page";

export const router = createBrowserRouter([
    {
        path: "/",
    },
    {
        path: "docs",
        element: <BlockLayout />,
        children: [
            { index: true, element: <DocsPage /> },
            { path: "installation", element: <InstallationPage /> },
        ]
    }
]);